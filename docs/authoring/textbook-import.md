# 教材导入

> 教材导入是半自动课程生产流程。模型负责抽取与生成草稿；**作者负责审校、冲突处理、验证与发布**。GUI 工坊是这一流程的唯一入口。

![课程工坊三栏画布（实际运行截图）](/images/authoring/_real/05-workshop.png)

![课本项目库：五列项目清单（实际运行截图）](/images/authoring/_real/13-textbook-library.png)

![教材导入流水线：状态灯 / 审校 / 气泡 / 轨道 / 导入策略](/images/authoring/textbook-pipeline.svg)

## 支持输入

| 类型 | 支持范围 | 备注 |
| --- | --- | --- |
| Markdown / 纯文本 | UTF-8 | 按标题切章 |
| PDF | 文本原生 PDF | 扫描件需在外部 OCR 后再导入 |
| Word | `.doc` / `.docx` | 依赖 `python-docx` |
| 图片 | 作为 vision 附件 | 取决于所配置模型的视觉能力 |

源文件**不**复制进项目目录。项目文件仅保存路径引用与抽取结果，便于作者保留单一真理源。

## OCR 与扫描件

OCR 是**可选外部依赖**。GUI 不内置。处理流程：

1. 安装 [Tesseract](https://github.com/tesseract-ocr/tesseract) 与目标语言包。
2. 扫描件 PDF：
   ```bash
   ocrmypdf input.pdf output.pdf
   ```
3. 图片：使用 `pytesseract` 或在外部工具中转写。
4. 将识别后的文本版 PDF / Markdown 重新导入工坊。

未做 OCR 的扫描件 PDF 会触发「未提取到文本」状态灯。

## 工作区与双轨项目

GUI 工坊（`tool/gui` 的非模态窗口）由「项目库」与「创意画布」组成。所有中间产物落在 `tool/gui/var/textbooks/{project_id}/project.json`，允许中断后恢复。

| 项目模式 | 建立方式 | 适用 |
| --- | --- | --- |
| **教材项目** | 项目库 → 从教材新建 → 选文件 + 语言对 | 自上而下抽取；Grounded 编排 |
| **空白 AI 项目** | 项目库 → 空白 AI 项目 → 填名称 + 语言对 | 无教材自由生成；左栏教材/知识标记为「(可选)」 |

### 课本项目库（TextbookLibraryDialog）

`tool/gui/src/dialogs/textbook_library_dialog.py:39` 实现课本项目库。GUI 工坊启动时若 `workshop/last_project_id` 指向有效项目则直接恢复画布；否则显示项目库。

五列清单：

| 列 | 数据源 | 含义 |
| --- | --- | --- |
| 项目名称 | `project.json.name` | 用户可编辑；显示与目录分离 |
| 源文件 | `project.json.source_path` | 教材项目显示源文件绝对路径；空白 AI 项目为「(无)」 |
| 当前步骤 | `project.json.current_step` | 六阶段：选择教材 / 解析课本 / 章节勾选 / 提取知识点 / 审校 / 导入 |
| 更新时间 | `project.json.updated_at` | ISO 8601；按降序排 |
| 已导入 | `project.json.imported` | 布尔；导入后置位以避免重复 import |

新建两条入口：

- **从教材新建…**：选择 `.md / .txt / .pdf / .docx / .doc / 图片`，并填写语言对（源语 → 目标语）。
- **空白 AI 项目**：仅填写项目名称与语言对；源文件留空，画布默认落在「设计」相关 tab。

双击项目行直接进入画布；选中后点 **「继续」** 等价。

### 自动保存与续作契约

`project.json` 持续记录以下状态，关闭重开不丢：

| 字段 | 写入时机 | 用途 |
| --- | --- | --- |
| `bubbles.selected` | 气泡池勾选变化 | 重开时还原勾选状态 |
| `bubbles.items[]` | 审校表逐条编辑 | 词汇 / 表达 / 语法点的 id、状态、修订字段 |
| `chat.history[]` | 对话窗口每条消息 | 上下文与可复现性 |
| `draft.outline` | AI 生成大纲 | 草稿中断后从大纲续跑 |
| `draft.sections[]` | AI 生成草稿 | 精修模式中间态 |
| `layout.tab` / `layout.splitter` | 切 tab / 拖动分隔条 | 工坊窗口布局记忆 |
| `last_project_id` | 关闭工坊 | 下次启动时直接恢复 |

`workshop/last_project_id` 写入 `QSettings`，跨会话保留。**关窗可中断任务**；重开恢复项目并按上次的 `current_step` 进入画布。

### 画布三栏

```text
┌─ 左栏 ──────────────┐  ┌─ 中栏 AI 轨道 ──────┐  ┌─ 右栏 ───────────────────────┐
│ 教材与章节           │  │ 主题 / CEFR / 模板   │  │ 结构大纲（默认）· 对话 · 导入 │
│ 知识点审校           │  │ 聚焦条 / Ctrl+Enter  │  │ 试做 · diff · AI 修复         │
│ 气泡池（≤ 200）      │  │ [ AI 核心 开始设计 ] │  │                              │
└──────────────────────┘  └──────────────────────┘  └──────────────────────────────┘
```

顶栏 checklist：`○/✓ 素材 · 知识 · 草稿 · 导入`（可点击跳转）。

## 流程

```text
1. 选文件
2. 提取文本
3. 按章节切分
4. 选预设 + 并发数
5. 抽取词汇 / 表达 / 语法点 / 对话
6. 处理红（error）/ 黄（warning）标记
7. 勾选入池
8. 生成 Section / Lesson 草稿
9. 查结构 + 覆盖率 + JSON diff
10. 选冲突策略
11. 导入内存课程项目
12. 在主窗口保存 → 运行 validate + lint
```

抽取过程支持中断与续作；勾选、知识点、聊天、草稿、tab/splitter 布局均自动保存。

## 章节抽取

### 滑窗

超出预设字数的章按段落边界切成带重叠的滑窗，逐窗抽取后按键（词 + 翻译 / 语法标题）去重合并。`id` 仍按 `ch-{slug}-` 确定性生成。预设参数：

| 参数 | 默认 | 含义 |
| --- | --- | --- |
| `window_chars` | 12000 | 单次抽取字符上限；`0` 关闭 |
| `overlap_chars` | 800 | 滑窗重叠字符数 |

### 状态灯

| 灯 | 含义 | 可执行动作 |
| --- | --- | --- |
| 绿 | 抽取通过 | 入池 / 重新抽取 |
| 黄 | 有 warning（空翻译、覆盖率偏低、语言混入） | 修复 / 重抽 |
| 红 | 抽取失败 | 重试 / 仅抽词汇 / 跳过 |
| 灰 | 未抽取 | 触发抽取 |

### 失败级联

`standard` 抽取失败时自动降级为「仅词汇（vocab_only）」重试一次（日志写明「自动降级」）。再失败才标红。开关：`QSettings/textbook/auto_cascade`，默认开。

### 按质量重抽

对红 / 黄章提供「按质量重抽」，把具体问题（空翻译、覆盖率偏低、语言混入等）回灌给 AI，输出完整修正版替换本章并重算质量分。

## 预设

| 预设 | 目标 | 默认倾向 |
| --- | --- | --- |
| `general` | 通用教材 | 均衡抽取 |
| `grammar` | 语法书 | 低温度、强调规则 |
| `dialogue` | 对话书 | 强调表达与口语 |
| `reading` | 阅读材料 | 词汇抽取为主 |

预设仅影响抽取参数与 prompt 块，**不免除审校**。

## 气泡池与 Grounded 生成

入池上限约 200。点击「将选中词加入轨道」或拖入中栏后进入气泡池。生成时 AI 优先从池中选词；池外新词带 `new` 标签，便于审校时定位。

## AI 轨道

| 控件 | 含义 |
| --- | --- |
| 主题 | Section 教学主题 |
| CEFR | 目标等级 |
| 单元数 | Section 内 Unit 数（≤ 60） |
| 课时/单元 | 每 Unit 的 Lesson 数（≤ 40） |
| 模板 | 课时 `template` 选型 |
| AI 悄悄话 | 编排意图（自然语言） |

聚焦条显示「将使用资源池：N 词 · M 表达 · K 语法」。点「AI 核心」或 `Ctrl+Enter` 触发生成。

## 生成模式

| 模式 | 流程 | 适用 |
| --- | --- | --- |
| 快速（整节） | 一次出 Section 草稿 | 草稿探索 |
| 精修（流水线） | Plan → 大纲 → 分课 → 校验 → 质量分 → 修复 → 解释 → ReadyImport | 发布候选 |

精修流水线由 `backend/ai_pipeline.py` 状态机驱动；右栏 checklist 实时显示每步状态。**流水线只到草稿为止**。导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。

修复阶段规则：先规则修复，LLM 仅处理剩余 error，**不得**删除既有 id，否则回滚。

## 对话与高级

右栏「对话与高级」支持：

- 聊天（含多模态附件）
- Prompt 模板库与历史
- `[genre]` 多模板（语法书 / 对话书 / 阅读）
- JSON 输出（默认折叠）
- AI 分析失败原因

主参数（主题 / CEFR / 模板）始终在中栏轨道，不在聊天中重复。

## 章节导入

| 策略 | 行为 | 风险 |
| --- | --- | --- |
| 合并预览（默认） | 逐项决定 | 低 |
| 跳过已存在 | 保留现有 Section | 低 |
| 覆盖已存在 | 整体替换 | 高 |
| 作为新 Section | 生成新 ID 并存 | 中 |

幂等：重复导入不制造废节点。

## 冲突处理

```text
项目内规范化 key 碰撞
        │
        ▼
   是否与现有课程 ID 冲突？
        ├─ 是 → 三选一：保留 / 覆盖 / 追加新 id
        └─ 否 → 合并为既有 ID
```

去重依据规范化 key，**不**依据字符串相似度。`new` 标签词条强制人工确认。

## 失败处理

| 现象 | 处置 |
| --- | --- |
| 未切章 | 检查 Markdown 标题层级 |
| PDF 无文本 | 走 OCR 流程 |
| 单章抽取失败 | 重试 / 仅抽词汇 / 跳过 |
| AI 抽取持续失败 | 切到 `vocab_only` 仍失败 → 跳过并标红 → 工坊拟人化分析 |
| JSON 不通过 | 回到草稿修复，不直接覆盖 |
| 价格未知 | 只显示 Token，不生成误导性成本 |

## 语言对抽取模板

`Turkish ↔ Chinese` 内置抽取规则块（强调元音和谐、敬语形式、term 禁止中文字符、翻译用简体中文）。其他语言对可在「设置 → 提取 Prompt」tab 持久化覆盖。优先级：

```text
内存 register > 持久化覆盖 > 内置语言对包 > 内置默认
```

实现见 `tool/gui/src/backend/knowledge_prompt.py` 与 `tool/gui/src/backend/ai_prompt_library.py`。

## AI 能力

教材导入是 AI 介入最深的流程。本节展开 5 个子方向。

### AI 抽取流水线

4 抽取预设 × 2 项目类型 × 5 状态灯的笛卡尔积决策矩阵：

| 项目类型 | 抽取预设 | 章节数 | 状态灯 | 后续动作 |
| --- | --- | --- | --- | --- |
| 教材项目 | `general` | ≤ 20 | 绿 | 直接入池 |
| 教材项目 | `general` | > 20 | 黄 / 红 | 按质量重抽 / 切 `vocab_only` |
| 教材项目 | `grammar` | 任意 | 绿 / 黄 | 入池，规则化抽取 |
| 教材项目 | `dialogue` | 任意 | 绿 / 黄 | 入池，强调表达与口语 |
| 教材项目 | `reading` | 任意 | 绿 / 黄 | 入池，词汇抽取为主 |
| 教材项目 | 任意 | 任意 | 红（多次） | 标红 + 跳过 + 拟人化分析 |
| 空白 AI 项目 | （无抽取） | 0 | 灰 | 跳过抽取阶段，直接进入生成 |

滑窗参数 `window_chars`（默认 12000）与 `overlap_chars`（默认 800）控制长章节切窗；`0` 关闭滑窗（按章一次性抽取）。失败级联由 `QSettings/textbook/auto_cascade` 控制，默认开。

### AI 生成模式状态机

工坊 **生成模式** 决定 AI 状态机的入口：

```text
                 ┌────────── 快速（整节）──────────┐
                 │ 一次出 Section 草稿 → 校验 → 摘要 │
                 └─────────────────────────────────┘

                 ┌──── 精修（Plan → … → ReadyImport）────┐
                 │                                       │
   Plan ─► 大纲 ─► 分课生成 ─► 校验 ─► 内容质量分 ─► 修复  │
                                       │              │   │
                                       ▼              ▼   │
                            （先规则修复，LLM 仅处理剩余 error）
                                                  │       │
                                                  ▼       ▼
                                              通俗解释 ── ReadyImport
```

精修模式各步均通过 `backend/ai_pipeline.py` 状态机驱动；右栏 checklist 实时显示每步状态（pending / running / done / skipped / failed）。修复阶段**不得**删除既有 id，否则回滚。取消后大纲 / 草稿等中间态随 `project.json` 自动保存，重开项目可从大纲续跑。**流水线只到草稿为止**，导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。

### AI 局部重生成

工坊右栏结构大纲右键 → **局部重生成 Unit / Lesson**。上下文收集：

1. 当前节点的 canonical content 与 `linkedGrammarPointIds`。
2. 上游 Unit / Section 的学习目标与已用资源。
3. 当前气泡池（≤ 200）。
4. 用户自定义指令（自然语言）。

LLM 输出经过 `_detect_ai_edit_conflicts` 检查 ID 集合一致性；冲突弹三选一（保留现状 / 采用 AI 建议 / 取消）。应用走 `MergeAiSectionCommand` 等，可 `Ctrl+Z` 撤销。

### AI 故障分析

工坊任务失败时（生成 / 抽取 / 拟导入），自动弹 `AiErrorAnalyzerDialog`（与加载失败共用同一组件）：

- 上下文：`{"action": "workshop.task", "step": "<state>", "project_id": "<id>"}`。
- LLM prompt：失败步骤的输入 / 输出 / traceback + JSON Schema 片段 + 相关 prompt 模板路径。
- 输出：可能根因列表 + 修复建议（不静默写盘）。

与「加载失败 → AI 分析」的区别：工坊场景额外提供「重试该步骤」按钮，绕开 `project.json` 的中间态重跑。

### AI 多模态附件

工坊对话与高级支持 PDF / Word / TXT / 图片拖入：

| 附件类型 | 解析路径 |
| --- | --- |
| `.pdf` | `PyPDF2` 文本抽取；扫描件需外部 OCR 后再导入 |
| `.docx` | `python-docx` 段落抽取 |
| `.txt` / `.md` | UTF-8 直读，按标题切章 |
| 图片（`.png` / `.jpg`） | 走所配模型的视觉能力；解析为自然语言描述 |

实现位置：`backend/attachment_extractor.py`。多模态附件**仅在对话窗口**生效；不直接喂给抽取阶段。

更多 AI 生成模式状态机与精修流水线细节见 [AI 课程生成](/authoring/ai-course-generation#11-课程生成工坊)。

## 性能与节流

- 气泡池增量刷新 + debounce。
- 草稿自动保存节流。
- 校验始终只走 `CourseAdapter` / `course_cli`，不绕开。

## 快捷键

| 键 | 动作 |
| --- | --- |
| `Ctrl+Enter` | 从轨道生成 |
| `Esc` | 任务进行中：确认后取消 |
| 头栏 checklist 单元 | 跳转到对应栏 |

## 与 GUI 主窗口的衔接

```text
工坊草稿 ──import──► 主窗口课程树（新增/合并/覆盖/追加）
                       │
                       ▼
                  主窗口保存 (Ctrl+S)
                       │
                       ▼
            CourseAdapter.save() → validate + lint
                       │
                       ▼
                  磁盘 JSON 写盘
```

导入成功后 GUI 可询问是否「切换教师模式并定位该章节（及首课）」。导入后**必须**在主窗口保存。

## 相关文档

- [课程编辑器](/guide/editor)
- [课程目录约定](/authoring/course-layout)
- [资源文件](/authoring/resource-files)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
- [发布检查表](/authoring/release-checklist)
