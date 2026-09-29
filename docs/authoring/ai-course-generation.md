# AI 课程生成（创作者视角）

> AI 是创作助手的默认环境语言。本文是 GUI 内所有 AI 能力的入口索引：5 大类、5 条主路径、3 张决策矩阵、字段表与 telemetry 清单。各模块的字段合同详见各专题文档；开发者向深度报告见应用仓库 `tool/gui/docs/ai_configuration_and_features_report.md`。
>
> 5 大类按创作者工作流排列：**抽取 → 生成 → 编辑 → 修复 → 发布**。每类均给 GUI 入口、字段表、失败模式与不下放边界。

## 0. 能力全景

```text
                ┌──── 课程工坊（项目库 + 三栏画布）────────────────────┐
                │                                                       │
                │  1.1 课程生成   1.4 知识抽取   1.3 节点编辑  1.2 修复 │
                │                                                       │
                └───────────────────────┬───────────────────────────────┘
                                        │ 草稿 / 修复 patch
                                        ▼
   工具栏（主窗口）─────────────────────────────────────────────
   课程仓库 / 保存 / 课程工坊 / 总览 / 资源库 / 发布 / 生成听力音频
   / 教师模式 / 设置（8 tab）
                                        │
                                        ▼
                          1.5 设置与运维（双模型 / 缓存 / 用量）
```

每条主路径都贯穿这 5 类。下文 §2 给出 A–E 路径的步骤表与 GUI 入口映射。

## 1. 5 大能力类

### 1.1 课程生成（工坊）

入口：工具栏 **课程工坊**。非模态窗口，承载项目库 + 三栏画布。

| 维度 | 能力 |
| --- | --- |
| 项目模式 | 教材项目（PDF/Word/TXT/MD/图片 → 抽取 → Grounded 编排）/ 空白 AI 项目（无教材自由生成） |
| 生成模式 | 快速（整节一次出）/ 精修（Plan → 大纲 → 分课 → 校验 → 内容质量分 → 修复 → 通俗解释 → ReadyImport） |
| 双模型 | `ai_model_chat`（对话 / 解释）+ `ai_model_json`（结构化 JSON）分流；缺省同 `ai_model` |
| Grounded 选词 | AI 优先从气泡池（≤ 200）选词；池外新词打 `new` 标签 |
| 多模板 | `[genre]` 标记切预设（`general` / `grammar` / `dialogue` / `reading`） |
| 局部重生成 | 右键 Unit / Lesson → 局部重生成；可应用前看 diff |
| 续作 | `project.json` 持久化大纲 / 草稿 / 聊天；中断后从大纲续跑 |
| Prompt 模板库 | 持久化模板 + 使用历史；语言对内置（Turkish ↔ Chinese 含元音和谐 / 敬语 / NFKC 校验） |
| 并行度 | `ai_max_parallel_lessons` 1–8（默认 1） |
| Pipeline 模式 | `ai_pipeline_default_mode` `fast`（默认）/ `refine` |

实现入口：`src/backend/ai_pipeline.py`（状态机）/ `src/backend/ai_phased.py`（快速）/ `src/backend/ai_generator.py`（基础生成）/ `src/backend/ai_pedagogy.py`（CEFR / 干扰项 prompt 块）。

### 1.2 校验与修复（主窗口）

入口：保存按钮 / 校验面板 / 加载失败弹窗 / 发布对话框。

| 能力 | 实现 | 入口 |
| --- | --- | --- |
| 六维内容质量分 | `content_quality.py` 纯函数；不阻断 | 总览 Section 染色 / 校验面板「按质量分修复」 |
| AI 修正此节点 | `ai_fixer.fix_node`；自动注入 `problems[].message` | 课程树右键 / 校验面板单条 |
| AI 批量修正 | 按节点分批 merge；每节点一条 `QUndoCommand` | 校验面板多选 → AI 自动修正 |
| AI 加载错误分析 | `AiErrorAnalyzerDialog` 把 traceback + JSON Schema 喂 LLM | 加载失败弹窗 → AI 分析 |
| 工坊任务失败分析 | 同上对话框；上下文含工坊步骤 | 工坊失败弹窗 → 拟人化分析 |

修复约束：

- 不删既有 id；任何删 id 操作回滚到修复前。
- 修复后必须再走 `validate`；任何剩余 error 阻断保存。
- AI 修复不改变质量分；质量分仅指导不阻断。

### 1.3 节点编辑（课程树右键）

入口：课程树右键 → **AI 编辑此 Section/Unit/Lesson** / **AI 修正此…**。

| 能力 | 说明 |
| --- | --- |
| 4 类预设指令 | 精简 / 改写 / 增题 / 翻译润色 |
| 自定义指令 | 自由文本 |
| 冲突解决 | `_detect_ai_edit_conflicts` 检查 id 增删 / 改写；弹三选一（保留现状 / 采用 AI 建议 / 取消） |
| 撤销 | 走 `QUndoStack`（`AiEditLessonCommand` / `AiEditUnitCommand` / `MergeAiSectionCommand`） |
| 强制人工确认 | 节点编辑不自动写盘；必须主窗口 `Ctrl+S` |

Telemetry：`ai.edit.open` / `ai.edit.ready` / `ai.edit.applied` / `ai.edit.cancelled` / `ai.edit.merge.cancelled` / `ai.edit.error` / `ai.wizard.generate` / `ai.helper.start`。

### 1.4 知识抽取（教材侧）

入口：工坊左栏 · 教材与章节。

| 能力 | 说明 |
| --- | --- |
| 4 抽取预设 | `general` / `grammar` / `dialogue` / `reading`（`backend/lesson_presets.py` 之外的 `textbook_presets.py`） |
| 滑窗抽取 | 超长章按 `window_chars`（默认 8000）+ `overlap_chars`（500）切窗；按规范化 key 去重 |
| 状态灯 | 绿 / 黄 / 红 / 灰；带具体问题（空翻译 / 覆盖率低 / 语言混入） |
| 失败级联 | `standard` 失败 → 自动降级 `vocab_only` 重试一次；`QSettings/textbook/auto_cascade` 可关 |
| 按质量重抽 | 把本章质量问题回灌 AI，输出完整修正版替换 |
| OCR | 可选外部依赖（Tesseract / ocrmypdf），GUI 不内置 |
| 语言对模板 | 优先级：内存 register > 持久化覆盖 > 内置语言对包 > 内置默认（`backend/knowledge_prompt.py`） |
| 抽词对齐 | `pos` 闭集 / 翻译归一化 NFKC / 跨表去重（`vocab` ↔ `expressions`） |

### 1.5 设置与运维

入口：工具栏 **设置** → 8 个 tab。

![设置 → AI 配置（实际运行截图：供应商预设 / Base URL / Key / 双模型）](/images/authoring/_real/11-settings-ai.png)

| Tab | 关键 AI 能力 |
| --- | --- |
| 外观 | 浅色 / 深色 + 字体 80–150% 缩放（间接影响 LLM 长上下文渲染） |
| AI 配置 | 供应商预设（`deepseek` / `openai` / `moonshot` / `ollama` / `custom`）；API Key **仅会话内存**；连接测试；JSON Schema 严格度（`auto` / `on` / `off`）；响应缓存 LRU(128) SHA-256 键；reasoning；timeout 5–600 s；temperature 0–2；重试 0–5；`max_parallel_lessons` 1–8；`pipeline_default_mode`（`fast` / `refine`） |
| AI 用量 | 今日 / 累计 token；按模型价格估算成本（`backend/ai_presets.py` 本地计价表） |
| 提取 Prompt | 语言对抽取规则块的持久化覆盖 |
| 编辑器 | 撤销上限 10–500 步；关闭时未保存策略 |
| 体验 OS | 体验模式四档（observer / copilot / active / immersive）+ Immersive 子开关 + 能力开关 + 日配额 |
| Git 库 | 克隆根 / 二进制路径 / 默认语言 / LAN 端口 / 绑定 / token / SSH 私钥 |
| 操作日志 | 最近 200 条操作 / 错误回看 |

AI 基础参数（`Settings.ai_*` 字段）：

| 字段 | 默认 | 范围 | 含义 |
| --- | --- | --- | --- |
| `ai_provider` | `custom` | 5 个枚举 | 一键填 Base URL + 默认模型 |
| `ai_base_url` | （空） | URL 字符串 | HTTP endpoint；持久化 |
| `ai_model` | （空） | 模型标识 | 主模型；持久化 |
| `ai_model_chat` | （空） | 模型标识 | 对话 / 解释；空 = 用 `ai_model` |
| `ai_model_json` | （空） | 模型标识 | JSON 生成 / 修复；空 = 用 `ai_model` |
| `ai_api_key` | （空） | string | **仅内存**；应用退出即销毁 |
| `ai_timeout` | `120.0` s | [5, 600] | 请求超时 |
| `ai_temperature` | `0.7` | [0.0, 2.0] | 采样随机度 |
| `ai_retry_max` | `1` | [0, 5] | 自动重试轮数 |
| `ai_cache_enabled` | `False` | bool | 进程内 LRU(128)，键 SHA-256(model, messages, response_format)，不存 API Key |
| `ai_fill_needs_review` | `False` | bool | 二趟补全 `[待补]` / `needs-review` |
| `ai_max_parallel_lessons` | `1` | [1, 8] | 精修流水线并行度 |
| `ai_pipeline_default_mode` | `fast` | `fast` / `refine` | 精修模式默认 |
| `ai_json_schema_strict` | `auto` | `auto` / `on` / `off` | `auto` 首次 400 自动回退 `json_object`；`on` 强制 `json_schema`；`off` 强制 `json_object` |

实现位置：`src/application/settings.py`（`Settings.ai_*` 字段 + QSettings 键映射）+ `src/backend/ai_presets.py`（5 供应商预设与本地计价表）。

## 2. 5 条主路径

README §"创作者五条主路径（AI 感知增强）" 给出的标准工作流。每条都对应具体 GUI 入口与预期体感。

| 路径 | 步骤 | GUI 入口 | 体感 |
| --- | --- | --- | --- |
| **A 空白→一节课** | 1. 工坊空白项目 2. 主题/等级 3. 快速或精修生成 4. 结构大纲看**生成摘要 + 质量维** 5. 导入 | 工坊 → 空白 AI 项目 | 不用翻 JSON 也能决定导不导入 |
| **B 教材→课** | 1. 从教材新建 2. 抽章（状态灯可见滑窗/降级）3. 勾选入池 4. Grounded 生成 5. 导入 | 工坊 → 从教材新建 | 抽取失败有自动降级；可「按质量重抽」 |
| **C 改一处** | 1. 教师模式题目「AI」/ 树右键 AI 编辑 / Review 局部重生成 2. 预设指令 3. 确认 + Ctrl+Z | 课程树右键 / 试做 AI 按钮 | 改题可确认 + Ctrl+Z |
| **D 校验清零** | 1. 校验面板多选问题 2.「AI 自动修正」按节点分批 merge 3. validate | 校验面板 | 不必逐条点修 |
| **E 导入后改进** | 1. 总览看 section 质量分 2. 回工坊 / 教师定向修 3. 低分课着色提示 | 总览 → 跳转 | 低分课有着色提示 |

实现位置：工坊对话框 `src/dialogs/workshop_window.py` + 草稿服务 `src/backend/experience/` 下的平铺模块。

## 3. 决策矩阵

### 3.1 项目模式 × 生成模式 × 预设 矩阵

| 项目模式 | 抽取预设 | 生成模式 | 适用 |
| --- | --- | --- | --- |
| 教材项目 | `general` | 快速 | 草稿探索 |
| 教材项目 | `grammar` / `dialogue` / `reading` | 精修 | 发布候选 |
| 空白 AI 项目 | （无抽取） | 快速 | 自由探索 |
| 空白 AI 项目 | （无抽取） | 精修 | 高质量初始草稿 |

精修模式状态机（`backend/ai_pipeline.py`）：

```text
Plan ──► 大纲 ──► 分课生成 ──► 校验 ──► 内容质量分
                                         │
                                         ▼
                            修复（先规则修复，LLM 仅处理剩余 error）
                                         │
                                         ▼
                                  通俗解释 ──► ReadyImport
                  （取消时大纲 / 草稿随 project.json 自动保存）
```

右栏 checklist 实时显示每步状态（pending / running / done / skipped / failed）。**流水线只到草稿为止**；导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。

### 3.2 AI 修正 vs 人工修正 矩阵

| 场景 | 推荐方式 | 备注 |
| --- | --- | --- |
| validate error ≤ 3（单节点） | AI 修正此节点 | 单 patch，可撤销 |
| validate error 4–10（多节点） | AI 批量修正 | 按节点分批；每批走 `QUndoCommand` |
| validate error > 10（跨节） | 拆 Section / 重新生成 | AI 批量修正的批数过多易丢失上下文 |
| lint warning 连续 3 节同源 | 回到工坊按质量重抽 | lint 是结构性偏差，AI 单点修治标 |
| 资源悬挂（`unresolved reference`） | 资源库手工替换 | AI 不知道该资源的语义边界 |
| 跨 ID 改写 | **禁止 AI 自动改** | 必须人工；ID 是引用锚点 |

### 3.3 失败模式 × 降级路径 矩阵

| 失败模式 | 检测 | 降级路径 |
| --- | --- | --- |
| 网络失败 | LLM API 超时 / 5xx | 重试 `ai_retry_max` 轮 → 失败则提示「稍后重试」 |
| JSON Schema 400 | `auto` 模式 | 标记 `_json_schema_supported=False` → 切 `json_object` |
| 配额耗尽 | 402 / 429 | 提示续费；不自动重试 |
| 抽取失败（standard） | 状态灯红 | 自动降级 `vocab_only` 重试一次（默认开） |
| 抽取失败（vocab_only） | 仍红 | 标红 + 拟人化分析按钮 |
| LLM 返回包含已删 id | `_detect_ai_edit_conflicts` | 弹三选一冲突解决；不得自动应用 |
| LLM 产出不合 validate | 修复阶段 | 先规则修复，LLM 仅处理剩余 error |
| TTS 生成失败 | MiniMax API 4xx / 网络失败 | 无自动 fallback；失败项记 telemetry，人工处置 |

## 4. 字段表

### 4.1 模型配置

见 §1.5 表格。补充：

- **供应商预设**（`backend/ai_presets.py`）：

  ::: details 五个预设对照
  | 预设标识 | 显示名称 | 默认 Base URL | 默认模型 | 推理链支持 |
  | --- | --- | --- | --- | --- |
  | `deepseek` | DeepSeek | `https://api.deepseek.com` | `deepseek-v4-pro` | 是 |
  | `openai` | OpenAI | `https://api.openai.com/v1` | `gpt-4o` | 否 |
  | `moonshot` | Moonshot AI | `https://api.moonshot.cn/v1` | `moonshot-v1-8k` | 否 |
  | `ollama` | Ollama（本地） | `http://localhost:11434/v1` | `qwen2.5` | 否 |
  | `custom` | 自定义 | 用户填写 | 用户填写 | 用户勾选 |
  :::

- **JSON Schema 严格度**：`auto`（默认）首次 `json_schema` 试错遇 400 时调用 `mark_json_schema_unsupported()`，后续切 `json_object`；`on` 强制 `json_schema`；`off` 强制 `json_object`。
- **响应缓存**：进程内 LRU(128)；命中仍会跑 validator 防脏；`ai.cache.stats` 事件给出命中/未命中计数。

### 4.2 抽取预设

::: details 四个预设对照
| 预设 | 目标 | 提示词倾向 | 实现 |
| --- | --- | --- | --- |
| `general` | 通用教材 | 均衡抽取 | `backend/textbook_presets.py` |
| `grammar` | 语法书 | 低温度，强调规则 | 同上 |
| `dialogue` | 对话书 | 强调表达与口语 | 同上 |
| `reading` | 阅读材料 | 词汇抽取为主 | 同上 |
:::

### 4.3 内容质量六维

`backend/content_quality.py` 纯函数；不依赖 Qt。每维 0–1，越高越好；默认阈值 0.7。

::: details 六维探针对照
| 维度 | 探针 | 阈值 | 不阻断 |
| --- | --- | ---: | --- |
| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 | 是 |
| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 | 是 |
| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 | 是 |
| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 | 是 |
| 听力（listening） | `listeningPhases` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 | 是 |
| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 | 是 |
:::

## 5. Telemetry 事件表

`src/infrastructure/telemetry.py` 已实现事件（按子系统分组）：

::: details 事件全表
| 子系统 | 事件 |
| --- | --- |
| 仓库 | `repo.open` / `repo.new` / `repo.open.cancelled` / `repo.new.cancelled` / `repo.save.triggered` |
| 发布 | `repo.publish.triggered` / `repo.publish.committed` / `repo.publish.failed` |
| AI 编辑 | `ai.edit.open` / `ai.edit.ready` / `ai.edit.applied` / `ai.edit.cancelled` / `ai.edit.error` / `ai.edit.merge.cancelled` / `ai.wizard.generate` / `ai.helper.start` |
| AI 缓存 | `ai.cache.stats`（命中 / 未命中计数） |
| AI 解释 | `ai.explain.done` |
| AI 生成 | `ai.generate.start` |
| TTS | `tts.open` / `tts.generate` / `tts.generate_failed` |
| 教材抽取 | `textbook.extract.cancel` / `textbook.review.edit` |
| 体验 | `experience.chip.start` / `experience.palette` / `overview.open` / `publish.open` / `resources.open` / `settings.open` / `workshop.open` / `wizard.open` / `git_library.open` |
| 关闭 | `app.close_requested` / `app.close_saved` / `app.close_discarded` / `app.close_cancelled` |
:::

所有事件通过 `QSettings` 持久化在设置 → 操作日志 tab 可见。失败类事件走 `telemetry.record_error(exc, context=...)` 同时记录异常堆栈与上下文。

## 6. 与 GUI 主窗口的衔接

```text
工具栏入口（9 项）：
  课程仓库 / 保存 / 课程工坊 / 总览 / 资源库 / 发布 / 生成听力音频 / 教师模式 / 设置

课程树右键入口（17 动作）：
  Section  → 新建 Unit / 删除 / AI 编辑此 / AI 修正此
  Unit     → 新建 Lesson / 功能课向导… / 删除 / AI 编辑 / AI 修正
  Lesson   → 复制 (Ctrl+D) / 删除 / AI 编辑 / AI 修正
  多选     → 批量复制 / 批量移动 / 批量套用预设 / 批量删除

资源库菜单（2 项）：
  本地资源（3 标签）
  Git 资源库（3 标签：远程协作 / LAN / 团队留言板）
```

工坊画布入口的细节见 [教材导入](/authoring/textbook-import) 与 [教师指南 - 课程工坊](/authoring/teacher-guide#4-课程工坊可选)。

## 7. 失败模式与降级路径

### 7.1 网络失败

- 检测：HTTP 超时 / 5xx / DNS 失败。
- 降级：重试 `ai_retry_max` 轮（指数退避），全部失败后弹「稍后重试」并写入 telemetry。

### 7.2 Schema 失败

- 检测：`response_format=json_schema` 收到 400 / 含 "schema" 错误。
- 降级：调 `mark_json_schema_unsupported()` 标记；后续自动切 `json_object`；状态写入 `ai.json_schema.strict` 字段。

### 7.3 配额失败

- 检测：402 / 429 状态码。
- 降级：**不**自动重试；提示续费；保留草稿到 `project.json`；等待人工恢复。

### 7.4 资源悬挂

- 检测：lint 报 `unresolved reference`。
- 处置：资源库手工替换；**不**调 AI 补建（AI 不知道该资源的语义边界）。

### 7.5 工坊任务失败

- 检测：工坊任务状态机跳到 `failed`。
- 降级：弹 `AiErrorAnalyzerDialog` 拟人化分析；保留草稿；允许续作。

### 7.6 TTS 失败

- 检测：MiniMax API 4xx / 网络失败 / 子进程非零退出。
- 降级：无自动 fallback 链；失败项记 `telemetry`，明细在设置 → 操作日志查看；该 phase 保留文本，发布前补录或重试。

## 8. 创作者不下放的边界

硬规则，AI 任何场景都不得越界：

1. 不让 AI 改既有节点的 `id`。
2. 不让 AI 删既有 `vocab` / `expression` / `grammar_point`。
3. 不让 AI 自动覆盖既有 Section（必须人工选合并 / 跳过 / 覆盖 / 作为新 Section）。
4. 不让 AI 在共享目录自动写盘（仅在 `course_dir` 内允许）。
5. 不让 AI 在没有作者 review 的情况下进入发布（必须主窗口 `Ctrl+S`）。
6. 不让 AI 跳过 `validate` 与 `lint`。
7. 不让 AI 替换为未注册的 `runtimeType`。
8. 不让 AI 跨越语言对边界（如 `tr` 课程引用 `en` 课程的 `vocab`）。

违反上述任一条的 AI 输出必须由作者裁决，不得静默应用。

> AI 的「下不下放」由 4 档体验模式（observer / copilot / active / immersive）控制。`PolicyDecision` 字段、M-08 配额熔断、LLM 意图分类与 `Ctrl+Shift+D` 一键降档见 [AI 控制模式](/authoring/ai-control-modes)。

## 9. 相关文档

- [教师指南](/authoring/teacher-guide)
- [课程目录约定](/authoring/course-layout)
- [资源文件](/authoring/resource-files)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
- [音频资产](/authoring/audio-assets)
- [发布检查表](/authoring/release-checklist)
- 应用仓库 `tool/gui/docs/ai_configuration_and_features_report.md`（开发者向深度报告）
- 应用仓库 `tool/gui/docs/ai_refactor_contract.md`（AI 重构契约）
