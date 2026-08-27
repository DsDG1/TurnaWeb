# 资源文件

> 词汇、固定表达与语法点**始终**在课程级独立建模。Lesson 通过稳定 ID 引用资源，**不在**课时内复制资源对象。资源独立是引用分析、跨课复用、覆盖率统计、单元级回顾与版本契约的前提。

![资源 → Lesson 的单向引用图（反向引用被拒绝）](/images/authoring/resource-graph.svg)

![资源库：词库标签页（实际运行截图，加载 `assets/courses/turkish/vocab.json`）](/images/authoring/_real/04-resource-editor.png)

## 文件清单

```text
assets/courses/<lang>/
├── vocab.json
├── expressions.json
└── grammar_points.json
```

三个文件结构相近：对象数组 + 课程级 `version`。`expressions.json` 单独维护版本号，因为表达语义变更需要触发重导入。

## vocab.json

```jsonc
{
  "version": 4,
  "items": [
    {
      "id": "w-merhaba",
      "term": "merhaba",
      "translation": "你好",
      "pos": "interjection",
      "ipa": "/meɾˈhaba/",
      "audioAsset": null,
      "example": {
        "sentence": "Merhaba, nasılsın?",
        "translation": "你好，你好吗？"
      },
      "tags": ["greeting", "A1"],
      "cefr": "A1"
    }
  ]
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `id` | 是 | 稳定且全课程唯一；发布后不可变 |
| `term` | 是 | 目标语原形；用作规范化去重 key |
| `translation` | 是 | 学习者母语释义；非空 |
| `pos` | 否 | 词性；运行时用于语法点匹配与排序 |
| `ipa` | 否 | IPA 注音；TTS 不可用时由其兜底 |
| `audioAsset` | 否 | 相对路径；缺省走运行时 TTS |
| `example` | 否 | `{ sentence, translation }` |
| `tags` | 否 | 检索/过滤标签 |
| `cefr` | 否 | 目标等级；与 Section `level` 对齐便于统计 |

## expressions.json

```jsonc
{
  "version": 2,
  "items": [
    {
      "id": "e-self-intro",
      "term": "Tanıştığımıza memnun oldum",
      "translation": "很高兴认识你",
      "register": "formal",
      "pattern": "Tanıştığımıza memnun oldum",
      "slots": [],
      "audioAsset": null,
      "cefr": "A1"
    }
  ]
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `id` | 是 | 稳定且全课程唯一 |
| `term` | 是 | 完整多词单位；不得拆为普通词 |
| `translation` | 是 | 学习者母语释义 |
| `register` | 否 | `formal` / `informal` / `neutral` / `slang` |
| `pattern` | 否 | 句法模板；可含 `{}` 占位 |
| `slots[]` | 否 | 占位说明，运行时用于填空题 |
| `audioAsset` | 否 | 整条表达的人录音频 |
| `cefr` | 否 | 目标等级 |

> **普通单词不升级为 expression**。多词单位、固定搭配、不可拆解的语块才进入 `expressions.json`。`vocab.json` 已有词项不因需例句而重复登记为 expression。

### 版本与重导入

`expressions.json` 单独维护 `version`，与 `index.json.version` 组合作为客户端重导入键。修改以下任一字段必须 +1：

- 任何 `term` / `translation` / `pattern` / `slots` 的语义变更
- 增删条目导致 ID 集合变化
- `register` / `cefr` 改变导致复习调度需重算

`version` 不可回退；不得复用已发布值。

## grammar_points.json

```jsonc
{
  "version": 1,
  "items": [
    {
      "id": "g-greeting-particles",
      "title": "问候语中的敬语形式",
      "description": "merhaba 与 selam 在语域上的差异。",
      "level": "A1",
      "examples": [
        { "sentence": "Merhaba hocam.", "translation": "老师好。" }
      ],
      "linkedVocabIds": ["w-merhaba", "w-selam"],
      "linkedExpressionIds": []
    }
  ]
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `id` | 是 | 稳定且全课程唯一 |
| `title` | 是 | 可检索标题 |
| `description` | 是 | 规则范围；明确、不重叠 |
| `level` | 是 | CEFR 等级 |
| `examples[]` | 是 | 充足但有限的例子 |
| `linkedVocabIds` | 否 | 反向引用词汇，便于联动覆盖 |
| `linkedExpressionIds` | 否 | 反向引用表达 |

> 语法点描述**规则**，**不**承担练习职能。练习题仍在 Lesson 的 `content.interactions[]` 中。

## 引用图

```text
vocab.json ───────┐
expressions.json ─┼──► Lesson.content.interactions[].{wordId, expressionId}
grammar_points.json ──► Lesson.linkedGrammarPointIds
                    │
                    └──► overview 覆盖率统计
                    └──► 总览 / 资源库跨表搜索
```

引用方向**只能**从 Lesson 指向资源。资源不引用 Lesson。

## 去重判定矩阵

| 情况 | 处理 | 操作 |
| --- | --- | --- |
| 同 `term` + 同 `translation` + 同 `pos` | 重复 | 保留既有 ID，丢弃新条目 |
| 同 `term` + 不同 `translation` | 多义 | 作者人工判定；可能拆为新 ID |
| 同 `term` + 同 `translation` + 不同 `pos` | 不同词性 | 拆为不同 ID，分别标记 `pos` |
| 同 `term` + 仅标点 / 大小写差异 | 同一条目 | 规范化合并 |
| 形近但 `term` 不一致 | 不同条目 | 保留各自 ID |
| 教材抽取碰撞已有 ID | 审校提示 | 合并 / 跳过 / 覆盖（见教材导入） |

规范化 key：`term` 小写 + 去除首尾空格 + Unicode 归一化（NFKC）。`pos` 不参与 key 决策。

> AI 抽取阶段预审 + 资源库人工裁决：抽取结束后由 `build_cross_table_dups` 自动合并同 key 冲突，跨表（vocab ↔ expressions）冲突标黄；最终删除裁决由作者在资源库查重面板完成。AI 不得静默删除。

## 安全删除

删除资源前必须执行引用扫描：

```bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
```

返回的问题列表中会标注 `unresolved reference`。GUI 的资源库编辑器在删除前自动做一次跨 Lesson 检索，列出所有引用方与所在 Unit。引用数 > 0 的删除被阻断；如需强制删除，须先在 Lesson 中替换或清除引用。

## CSV 交换

GUI 资源库提供 CSV 导出 / 导入。CSV 列与 JSON 字段一一对应；多值字段以 JSON 字符串或约定分隔符编码。导入策略：

- **覆盖**：按 `id` 匹配，原有 JSON 中没有的 ID 视为新增。
- **合并去重**：按 `id` 与规范化 key 同时去重；同 ID 但字段不同要求作者确认。
- **报错中断**：发现 ID 冲突时回滚整个导入。

CSV 模式实际上是 **upsert**：ID 已存在则覆盖该行字段，ID 不存在则按当前行的规范化 key 判定是否新建。导入完成后必须再走 `validate`，确认引用闭环未被破坏。

## 资源包（Resource Pack）

资源库顶部 **「资源包」** 按钮把 `vocab.json + expressions.json + grammar_points.json` 三份 JSON 合并为一个 `*.jsonpack` 文件，便于跨课程搬运。导入时提供两种模式：

| 模式 | 行为 | 风险 |
| --- | --- | --- |
| `merge` | 按 `id` upsert；规范化 key 命中已有项则**保留**旧 `id` | 低；保留长链引用 |
| `replace` | 全量覆盖三类资源文件 | 高；可能产生悬挂引用 |

资源包结构：

```jsonc
{
  "kind": "turna.resource_pack",
  "version": 1,
  "language": "tr",
  "exportedAt": "2026-08-26T11:55:00Z",
  "vocab":         { "version": 4, "items": [ /* ... */ ] },
  "expressions":   { "version": 2, "items": [ /* ... */ ] },
  "grammar_points":{ "version": 1, "items": [ /* ... */ ] }
}
```

`replace` 模式导入后必须先 `validate`，任何 `unresolved reference` 都需要在 Lesson 端替换或重建。`merge` 模式可与现有 `vocab.json` 共存；同 `id` 但字段差异在导入前要求二次确认。

## 跨表查重

vocab 与 expressions 之间存在**概念重叠**风险（多词表达被误登为单词，或同 `term` 命中两类资源）。资源库顶部 **「查重」** 按钮触发跨表扫描：

| 判定条件 | 处理 |
| --- | --- |
| `vocab.term` 与 `expressions.term` 子串匹配 | 标黄；提供「从 vocab 删除」/「从 expressions 删除」/「保留两者」 |
| `vocab.term` 与 `expressions.pattern` 完全相同 | 标红；强制二选一 |
| 仅翻译文本相同、`term` 不同 | 不处理（视为同义不同形） |

规范化 key 仍以 `term` 为准（`lowercase + strip + NFKC`）。`pos` 与 `cefr` 不参与查重。

## Git 资源库同步

工具栏 **「资源库 → Git 资源库」** 打开 `git_library_dialog.py` 三标签页对话框，其中 **同步资源池** 操作对本地与远程 Git 仓库的 `vocab.json / expressions.json / grammar_points.json` 做双向合并：

```text
本地 vocab.json          远端 vocab.json
        │  按 id + 规范化 key
        ▼
   diff (added / changed / removed)
        │
        ▼
   作者逐条决议：union | replace | skip
```

决议粒度 = 单条资源。`union` = 双向保留并按 ID 合并字段；`replace` = 完全采用远端；`skip` = 保留本地。**不会**自动写盘；决议汇总后由 `CourseAdapter.save()` 统一落盘并 `validate`。

## 变更步骤

1. 编辑资源文件。
2. 同步更新所有 Lesson 引用（ID 变更须先确认引用扫描为空）。
3. 运行 `validate` 与 `lint`。
4. 导出内容清单核对规模变化与孤立引用。
5. 递增 `index.json.version`；`expressions.json` 单独 +1。
6. 客户端 reseed 验证。

## AI 能力

资源文件由 AI 在三类场景中变更：① 工坊教材抽取时**生成**新条目；② 校验面板触发 `ai_fixer` 时**修复**悬挂引用；③ 资源库查重时**辅助**跨表去重决策。

### AI 抽取（生成方向）

工坊抽取阶段（`backend/knowledge_extractor.py` + `backend/knowledge_prompt.py`）按语言对 prompt 模板把教材文本映射到三类资源字段：

| 资源类型 | AI 抽取的字段对齐 | 强制约束 |
| --- | --- | --- |
| `vocab` | `term`（目标语原形）/ `translation`（母语释义）/ `pos`（词性，闭集）/ `ipa`（注音）/ `example`（例句） | `pos` 必须在闭集内；`term` 禁止混入源语言字符（语言对模板强制） |
| `expressions` | `term`（整句）/ `register`（formal/informal/neutral/slang）/ `pattern`（带 `{}` 占位）/ `slots[]` | 多词单位才进入 expressions；普通单词不升级 |
| `grammar_points` | `title` / `description`（规则范围）/ `level`（CEFR）/ `examples[]` | 描述**规则**不写练习；练习题在 Lesson |

抽取完成后 AI 立即执行三步规整：

1. **规范化 key 合并**：`term` 小写 + 去除首尾空格 + Unicode NFKC；同 key 合并。
2. **跨表查重**：vocab ↔ expressions 子串与完全匹配双规则；冲突标黄 / 标红。
3. **资源 ID 化**：按 `w-` / `e-` / `g-` 前缀生成确定性 ID；与已有 ID 冲突时走三选一（保留 / 覆盖 / 追加新 id）。

### AI 资源修复

校验面板触发 `ai_fixer.fix_node` 时：

```text
扫描 problems[].code == "E_REFERENCE"
   │  按引用类型分组
   ▼
wordId 缺失 → 调 build_unresolved_resources 在 vocab.json 补建占位条目
expressionId 缺失 → 同上
grammarPointId 缺失 → 同上
audioAsset 缺失 → 不可由 AI 补建；标红并标 lint 警告
```

补建的占位条目标记 `needs_review: true`；`ai_fill_needs_review` 开启时（默认关）走第二趟补全，调 LLM 给出真实释义与例句；未开启时由作者手工填写。占位条目在 lint 中以 warning 显示，不阻断保存。

### AI 查重判定

`vocab ↔ expressions` 跨表查重分两步：

| 步骤 | 触发方 | 行为 |
| --- | --- | --- |
| 1. 抽取阶段预审 | AI 抽取结束 | 同 key 合并；冲突标黄 |
| 2. 资源库查重按钮 | 人工触发 | 扫所有 vocab / expressions，标黄 + 提供「从 vocab 删除 / 从 expressions 删除 / 保留两者」决策 |

AI 在查重中**不**直接删除任何条目；最终裁决由作者完成。`build_cross_table_dups`（位于 `backend/knowledge_merger.py`）是纯函数，无 Qt 依赖，可单测。

### 资源池同步

工坊 Grounded 生成时，AI 优先从气泡池（≤ 200）选词；池外新词打 `new` 标签便于作者定位。`backend/grounded_stats.py` 提供纯函数 `summarize_pool` 与 `coverage_diff`，实时显示「将使用资源池：N 词 · M 表达 · K 语法」与生成后覆盖率。

更多 AI 抽取 / 修复 / 查重决策矩阵见 [AI 课程生成](/authoring/ai-course-generation#14-知识抽取教材侧)。

## 与 GUI 资源库的对应

| GUI 操作 | 字段 |
| --- | --- |
| 资源库 → vocab 标签 | 直读 / 直写 `vocab.json.items[]` |
| 资源库 → expressions 标签 | 直读 / 直写 `expressions.json.items[]` |
| 资源库 → grammar 标签 | 直读 / 直写 `grammar_points.json.items[]` |
| 跨表搜索 | 同时过滤三个标签；大小写不敏感子串 |
| 资源包导出 | 三类资源合并为 `.jsonpack`；含 `kind/version/language/exportedAt` 元数据 |
| 资源包导入 | `merge` 按 id upsert；`replace` 全量覆盖；导入后必走 `validate` |
| 跨表查重 | vocab ↔ expressions 子串与完全匹配双规则 |
| Git 资源库 → 同步资源池 | 本地与远端双向 diff；逐条决议 union/replace/skip |
| 删除前的引用检索 | 扫描所有 `sections/*.json` 的 `wordId` / `expressionId` / `linkedGrammarPointIds` |
| CSV 导入 | upsert：id 存在覆盖字段，id 不存在按规范化 key 判定 |
| 教材抽取 → 入池 | 写入对应 JSON；冲突按去重判定矩阵处理 |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
