# 校验与 Lint

> 课程发布前同时执行**结构校验**与**内容 lint**。结构校验回答「能否安全加载」；lint 回答「是否符合生产约定」。两者不可互相替代。

![GUI 保存协议与回滚时序：Author / CourseAdapter / course_cli / 磁盘 JSON 四泳道](/images/authoring/save-rollback.svg)

![校验面板（实际运行截图：左侧问题列表 + 右侧 JSON Pointer 详情）](/images/authoring/_real/15-validation-report.png)

## 命令

```bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
```

GUI 与 CI 走机器可读输出：

```bash
python tool/course_cli.py validate \
  --format json \
  --course-dir assets/courses/turkish
```

### 退出码契约

| 退出码 | 含义 | 调用方决策 |
| ---: | --- | --- |
| `0` | 通过 | 继续 |
| `1` | validate error | 阻断保存 / 阻断发布 |
| `2` | lint error | 阻断发布；不阻断保存 |
| `3` | 内部错误（IO / 解析） | 阻断保存，提示修复环境 |
| `64+` | 保留 | 由 CLI 内部扩展 |

调用方根据退出码与 JSON `ok` 字段判定结果，**不**通过解析自然语言日志推断成功。

## JSON 输出 schema

```json
{
  "ok": false,
  "exitCode": 1,
  "scope": "validate",
  "courseDir": "assets/courses/turkish",
  "errorCount": 1,
  "warningCount": 0,
  "problems": [
    {
      "id": "unresolved-reference",
      "level": "error",
      "code": "E_REFERENCE",
      "path": "sections/section1.json#/units/0/lessons/2/content/subLessons/0/stages/0/items/0/wordId",
      "message": "Lesson l-u1-greetings-intro 引用了不存在的 vocab id: w-merhab",
      "suggestion": "检查 vocab.json；该 id 是否拼写错误或已被删除"
    }
  ]
}
```

| 字段 | 说明 |
| --- | --- |
| `ok` | 顶层布尔；error=0 且 warning=0 时为 true |
| `exitCode` | 与进程退出码一致 |
| `scope` | `validate` / `lint` |
| `problems[].id` | 机器可读 ID，便于聚合 |
| `problems[].level` | `error` / `warning` / `info` |
| `problems[].code` | 错误族编号（`E_*` / `W_*`） |
| `problems[].path` | JSON Pointer；GUI 用于定位红角标 |
| `problems[].suggestion` | 人类可读建议（可本地化） |

## validate 范围（error 级别）

| 类别 | 检查 |
| --- | --- |
| 解析 | 所有 JSON 可解析 |
| 索引 | `index.json` 指向存在的 Section 文件 |
| 层级 | Section / Unit / Lesson 三段合法，无空层 |
| 规模 | Unit / Lesson 数量不超过上限 |
| ID | 全局唯一；同 Lesson 内 interaction ID 不重复 |
| 先修 | 引用存在；依赖图无环 |
| 形状 | `type` / `template` / `content` 三者相容 |
| runtimeType | 已注册 |
| 资源引用 | `wordId` / `expressionId` / `grammarPointId` / `audioAsset` 全部可解析 |
| 选项 | `correctAnswer` 出现在 `options` 中或可经归一化匹配 |
| 版本 | `index.json.version` 严格递增；不复用 |
| 音频 | 听力课的 `audioAsset` 在 `assets/sounds/<lang>/` 中存在 |

## lint 范围（warning 级别）

| 类别 | 检查 |
| --- | --- |
| 命名 | 命名与 ID 模式一致；避免无意义前缀 |
| 形状 | 新内容使用 canonical；不再引入扁平 `questions` |
| 资源 | 孤立资源（无 Lesson 引用）；跨表重复条目 |
| 描述 | 空描述、占位文本、模板套话 |
| 干扰项 | 选择题选项不足、正确率失衡、随机无关词 |
| 难度 | 同 stage 内梯度断层；产出题前置识别题 |
| 听力 | 重播缺失、文本边界过短 |
| 资源卫生 | 词汇数 ≠ 实际引用数；超长章未切窗 |

### 内容质量 6 维

`tool/gui/src/backend/content_quality.py` 实现六维内容质量评分，纯函数无 Qt，可单测。每维输出 0–1 分数，越高越好：

| 维度 | 探针 | 阈值 |
| --- | --- | --- |
| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 |
| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 |
| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 |
| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 |
| 听力（listening） | `listeningPhases` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 |
| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 |

质量分**不阻断**保存与导入，仅在总览与发布对话框中显示，按 0.7 阈值给 Section 染色（红 / 黄 / 绿）。

## GUI 保存协议

编辑器（`tool/gui`）保存按钮**始终**调用 `CourseAdapter.save()`。该方法：

1. 序列化内存编辑状态为 JSON 草稿。
2. 在临时目录原子写盘。
3. 调用 `validate` 与 `lint`。
4. 任何 error 触发回滚（见下）。
5. 全部通过则替换原文件并更新 `index.json.version`（仅在「保存即发布」开启时；默认仅校验不 bump）。

### 失败回滚

```text
写入草稿
   │
   ▼
validate  ──error──► 标记问题节点 + 保留内存编辑 + 不替换原文件
   │
   ▼ (ok)
lint      ──warning──► 写入红色提示，不阻断
   │
   ▼ (ok)
替换原文件
```

回滚保证：

- 磁盘文件保持失败前的最后一个合法版本。
- 内存编辑状态完整保留，可继续修改后重试。
- 状态栏显示 `校验失败，已回滚`。
- 校验问题以红角标 + 列表形式呈现；JSON Pointer 用于定位具体节点。

### 修复后重试

错误未消除时，**禁止**手动覆盖磁盘文件绕过校验。如确认是校验器误报，先在应用仓库修复校验器与对应测试，再回到 GUI 重新保存。

## CI 集成

CI 矩阵对每门语言各跑一次：

```bash
python tool/course_cli.py validate --format json --course-dir assets/courses/<lang> \
  | python tool/check_problems.py --max-error 0
python tool/course_cli.py lint --format json --course-dir assets/courses/<lang> \
  | python tool/check_problems.py --max-warning 100
```

`check_problems.py` 解析 `problems[]` 计数并比对阈值，输出符合 SARIF / GitHub Actions 注解的格式。

## 与 Dart 端对齐

Flutter `Seeder` 在客户端重新导入时执行 Dart 版本校验。`validate` 规则**必须**与 `course_cli` 一致；否则会出现「编辑器通过、App 端报错」。修改任何合同须：

1. 同步修改 `course_cli` 校验器。
2. 同步修改 `Seeder` 校验器。
3. 两端各加测试用例。
4. 在本文件中更新对应条目。

## 发布门禁

通过 validate + lint 是**必要**条件，不是充分条件。AI 修正 / 质量分**不**改变发布门禁。完整发布门禁见 [发布检查表](/authoring/release-checklist)：

- 教师试做通过
- `index.json.version` 已递增
- 内容清单规模变化与预期一致
- 客户端 reseed 验证通过
- 音频 manifest 无悬挂引用

## 常见问题与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 保存按钮灰 | 存在 validate error | 打开校验面板逐项修复 |
| 大量 `unresolved reference` | 教材导入合并时未联动资源 | 在资源库替换或补建资源 |
| 同一 Lesson 触发多条警告 | lint 探针耦合（如干扰项 + 难度） | 一次修复后再次校验 |
| JSON Pointer 不指向现有节点 | 结构变化后校验器未更新 | 升级 CLI 至最新版本 |
| 加载失败弹窗 | 仓库目录非法 / JSON 不可解析 | 见下文「AI 加载错误分析器」 |

## AI 能力

校验与 Lint 之外的第三层 AI 介入：① 单节点 AI 修正；② 批量 AI 修正；③ 加载错误拟人化分析；④ 六维内容质量分。AI 行为**不**绕过 `validate` 与 `lint`，仅在它们之上做修复与建议。

### AI 加载错误分析器

GUI 启动时若 `CourseAdapter.load(path)` 抛异常，`_show_load_error` 弹「加载失败」对话框并附带 **AI 分析** 按钮（`tool/gui/src/dialogs/ai_error_analyzer.py`）。点击后：

1. 收集 `traceback.format_exc()` 与上下文 `{"action": "repo.open"}`。
2. 调 `AiErrorAnalyzerDialog(traceback, context, parent=win)` 渲染独立窗口。
3. 用户点「分析」后调 LLM，prompt 内含异常堆栈、JSON Schema 片段、相关源文件行号。
4. 渲染「可能根因 + 修复建议」列表，**不**自动写盘。

该分析器在仓库加载失败、CI 上传的 manifest 与磁盘不一致、第三方脚本写错 JSON 等场景下提供次级诊断通道。它**不**替代结构性修复：根因若在校验器本身，必须回到应用仓库修复 `course_cli` 与对应测试。

### AI 批量修正（多选问题 → 按节点分批 merge）

校验面板支持多选问题（`Ctrl+点击` / `Shift+点击`），底部动作栏提供 **AI 自动修正** 按钮，触发 `app.py::_on_ai_batch_fix_requested`：

```text
选中问题集合
   │  按 path 反向聚合
   ▼
节点分组（kind, id）
   │  逐节点一次修复
   ▼
   ai_fixer.fix_node(kind, id, problems_for_node) → patch
   │  diff 预览
   ▼
   作者逐节点确认 / 全部接受 / 全部取消
   │  走 Append*Command / AiEdit*Command / MergeAiSectionCommand
   ▼
   CourseAdapter.save() 统一落盘 + validate
```

约束：

- 每批只处理一个节点（Section / Unit / Lesson），不跨节点合并。
- 修复过程中**不**删除既有 id；任何删 id 操作会触发回滚至修复前。
- 修复后必须再走 `validate`；任何剩余 error 阻断保存。
- 批量动作可被 `Ctrl+Z` 全部撤销（每个节点对应一条 QUndoCommand）。

AI 批量修正**不阻断**保存。若用户选择「仅修复 1 个节点、跳过其他」，剩余 error 仍按既有协议阻断写盘。

### 六维内容质量分

`tool/gui/src/backend/content_quality.py` 实现六维评分，纯函数无 Qt，可单测。每维输出 0–1 分数，越高越好；默认阈值 0.7。

| 维度 | 探针 | 阈值 |
| --- | --- | ---: |
| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 |
| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 |
| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 |
| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 |
| 听力（listening） | `listeningPhases` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 |
| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 |

样例输出（Section 粒度均值）：

```json
{
  "s-basics": {
    "reproducibility": 0.91,
    "item_type":      0.83,
    "distractor":     0.74,
    "difficulty":     0.79,
    "listening":      0.62,
    "hygiene":        0.88,
    "mean":           0.795
  }
}
```

`mean` < 0.7 的 Section 在总览中染色为「低质节」，是「按质量重抽」与「QualityCampaignDialog」的目标来源。质量分**不**改变 validate / lint 决策；它仅指导 AI 修正 / 重抽的优先级。

### AI 修正 vs 人工修正决策矩阵

| 场景 | 推荐方式 | 备注 |
| --- | --- | --- |
| validate error ≤ 3（单节点） | AI 修正此节点 | 单 patch，可撤销 |
| validate error 4–10（多节点） | AI 批量修正 | 按节点分批；每批走 `QUndoCommand` |
| validate error > 10（跨节） | 拆 Section / 重新生成 | AI 批量修正批数过多易丢失上下文 |
| lint warning 连续 3 节同源 | 回到工坊按质量重抽 | lint 是结构性偏差，AI 单点修治标 |
| 资源悬挂（`unresolved reference`） | 资源库手工替换 | AI 不知道该资源的语义边界 |
| 跨 ID 改写 | **禁止 AI 自动改** | 必须人工；ID 是引用锚点 |

实现位置：`backend/ai_fixer.py::fix_node`（单节点）/ `app.py::_on_ai_batch_fix_requested`（批量）/ `backend/content_quality.py`（六维评分）。

更多 AI 修正 / 修复策略与失败模式见 [AI 课程生成](/authoring/ai-course-generation#12-校验与修复主窗口)。

## 与 GUI 校验面板的对应

| GUI 元素 | 数据源 |
| --- | --- |
| 课程树红角标 | `problems[].path` 反向解析到节点 |
| 校验面板左侧列表 | 按节点分组；`Ctrl+点击` 多选 |
| 校验面板右侧详情 | 选中问题的 JSON Pointer + 原文 diff + 修复建议 |
| 「AI 修正此节点」 | 走 `ai_fixer.fix_node`，单节点 |
| 「AI 批量修正」 | 走 `_on_ai_batch_fix_requested`，按节点分批 merge |
| 加载失败 → AI 分析 | 调 `AiErrorAnalyzerDialog` |
| 状态栏 `校验防护激活中` | 标志 `CourseAdapter.save()` 可用 |
| 总览「校验数」可点跳转 | 跳到本面板并定位第一条 error |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [发布检查表](/authoring/release-checklist)
- [测试与质量门禁](/developer/testing)
