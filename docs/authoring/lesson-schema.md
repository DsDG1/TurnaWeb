# Lesson JSON 结构

> Lesson 是课程发布与运行时加载的最小可执行内容单元。本文档是字段合同的权威定义。

![Lesson canonical content 形状与 runtimeType 枚举](/images/authoring/canonical-shapes.svg)

![课时编辑面板（实际运行截图：右侧元数据 + 蓝图编辑器）](/images/authoring/_real/02-lesson-selected.png)

![功能课三步向导（实际运行截图：选类型 → 配置 → 预览）](/images/authoring/_real/09-functional-wizard.png)

新内容**必须**使用 canonical 形状。扁平 `questions` 仅在迁移历史数据时保留兼容路径（播种时归一化）。`tool/gui` 写入的 JSON 100% 遵循本文档；不接受的形状在保存时直接回滚。

## 顶层字段

```jsonc
{
  "id": "s1-l1",
  "name": "Greetings / Intro",
  "description": "Introduce greeting forms.",
  "type": "normal",                  // normal | listening | reading | review | challenge
  "template": "intro",               // intro | practice | listening | reading | review | mastery | legacy
  "prerequisiteLessonIds": [],
  "content": {
    "linkedGrammarPointIds": [],   // 在 content 内，不在 Lesson 顶层
    /* canonical */
  }
}
```

| 字段 | 类型 | 必填 | 约束 |
| --- | --- | --- | --- |
| `id` | string | 是 | 全课程稳定且唯一；发布后不可变 |
| `name` | string | 是 | 用户可见；可修改；不以 ID 命名 |
| `description` | string | 是 | 描述本课的可验证学习目标 |
| `type` | enum | 是 | 语义类别：`normal`/`listening`/`reading`/`review`/`challenge` |
| `template` | enum | 是 | 渲染骨架；省略时回落 `legacy` |
| `prerequisiteLessonIds` | string[] | 否 | 依赖必须存在且无环 |
| `content` | object | 是 | 与 `template` 匹配的 canonical 内容 |

::: warning `linkedGrammarPointIds` 的层级
它属于 `content`（`LessonContent`），**不是 Lesson 顶层字段**。写在顶层会被反序列化静默丢弃，语法 SRS 注册随之失效，且没有任何校验会报错。正确位置见上方示例。
:::

::: tip type ≠ template
`type` 是语义类别，`template` 是渲染骨架（`LessonTemplate`）。`mastery` 仅是 template；它服务于 `type=normal` 的高阶综合课。当前内置课程实际用到的组合见 [课型说明](/guide/lesson-types)。
:::

## Canonical content

### `intro` / `practice` / `review` / `mastery`

```jsonc
{
  "content": {
    "subLessons": [
      {
        "id": "sl-1",
        "name": "Recognition",
        "stages": [
          {
            "id": "st-recognition",
            "name": "词形识别",
            "items": [
              {
                "runtimeType": "showWord",
                "id": "q-hello-show",
                "wordId": "w-merhaba"
              },
              {
                "runtimeType": "multipleChoice",
                "id": "q-hello-meaning",
                "prompt": "merhaba 的意思是？",
                "options": ["你好", "谢谢", "再见"],
                "correctIndex": 0
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### `listening`

`listeningPhases` 是三段式：`wordPairing` → `dialogue` → `summary`。每个 phase 自带 `items[]`（该阶段的题），`transcript` 是逐字稿。

```jsonc
{
  "content": {
    "listeningPhases": [
      {
        "id": "lp-s1-l4-word",
        "name": "Word pairing",
        "type": "wordPairing",        // wordPairing | dialogue | summary
        "transcript": "Listen and choose the matching form.",
        "items": [
          {
            "runtimeType": "listenAndPick",
            "id": "lp-s1-l4-0",
            "audioAsset": "w-merhaba",   // 可以是 word id（走 TTS）或 sounds/ 下的资源名
            "prompt": "What do you hear?",
            "options": ["merhaba", "teşekkürler", "hayır"],
            "correctIndex": 0
          }
        ]
      },
      { "id": "lp-s1-l4-dialogue", "type": "dialogue", "items": [ /* ... */ ] },
      { "id": "lp-s1-l4-summary",  "type": "summary",  "items": [ /* listenOnly 等 */ ] }
    ],
    "stages": [ /* 可选：听力课也可带普通 stages */ ]
  }
}
```

### `reading`

```jsonc
{
  "content": {
    "readingPassage": {
      "id": "rp-1",
      "title": "伊斯坦布尔的早晨",
      "paragraphs": [
        { "id": "p-1", "text": "..." },
        { "id": "p-2", "text": "..." }
      ],
      "translation": "..."
    },
    "stages": [
      {
        "id": "st-mcq",
        "items": [
          {
            "runtimeType": "readingMcq",
            "id": "q-rmcq-1",
            "prompt": "作者主要在描述？",
            "options": ["交通", "天气", "饮食"],
            "correctIndex": 1
          }
        ]
      }
    ]
  }
}
```

## 已注册 runtimeType（14 种）

| `runtimeType` | 必填字段 | 可选字段 |
| --- | --- | --- |
| `showWord` | `wordId` | `id`, `context`, `expressionId`, `term`, `translation`, `pronunciation`, `audioAsset`, `imageAsset`, `example`, `grammarPointId` |
| `multipleChoice` | `prompt`, `options`, `correctIndex` | `id`, `imageAsset`, `audioAssets`, `grammarPointId` |
| `multiSelect` | `prompt`, `options`, `correctIndices` | `id`, `minSelections`（默认 1）, `maxSelections`, `imageAsset`, `grammarPointId` |
| `fillBlank` | `sentence`, `answer` | `id`, `hint`, `audioAssets`, `imageAssets`, `grammarPointId` |
| `translateSentence` | `source`, `expected` | `id`, `hints`, `grammarPointId` |
| `listenAndPick` | `audioAsset`, `prompt`, `options`, `correctIndex` | `id`, `grammarPointId` |
| `typeTheWord` | `audioAsset`, `prompt`, `expected` | `id`, `grammarPointId` |
| `listenOnly` | — | `id`, `audioAsset`, `transcript`, `prompt`（默认 "Listen to the summary"）, `grammarPointId` |
| `reorderSentence` | `scrambled`, `correct` | `id`, `grammarPointId` |
| `readingMcq` | `prompt`, `options`, `correctIndex` | `id`, `grammarPointId` |
| `readingTrueFalse` | `statement`, `answer`（bool） | `id`, `grammarPointId` |
| `readingShortAnswer` | `prompt`, `expectedAnswer` | `id`, `grammarPointId` |
| `ankiCard` | `front`, `back` | `id`, `audioAssets`, `imageAssets`, `hint`, `sourceNoteId` |
| `ankiHtmlCard` | `frontHtml`, `backHtml` | `id`, `css`, `mediaBasePath`, `allowJs`, `audioAssets`, `sourceNoteId`, `sourceCardId`, `wordId` |

注意：

- `ankiHtmlCard` 只在 Official 复习路径按原模板渲染；**课时体内的渲染器已退役**（显示占位卡），新课程不要产出该类型。
- 未知 `runtimeType`：validate 报错；运行时 `Interaction.fromJson` 会降级为占位 `showWord`（`wordId = "unknown-interaction:<type>"`），不让整节课加载失败。
- `runtimeType` 是闭合枚举。新增题型须先在应用模型注册并补 Flutter 渲染器、CLI 校验规则与 GUI 表单字段，缺一即拒绝发布。

## Stage 与 Interaction

| 对象 | 字段 | 约束 |
| --- | --- | --- |
| Stage | `id` | 同 Lesson 内稳定；发布后不改 |
| Stage | `name` | 用户可见 |
| Stage | `items[]` | Interaction 列表 |
| Interaction | `id` | 全 Lesson 内唯一；发布后不改；空 id 运行时回落 `legacy-$index` |
| Interaction | `runtimeType` | 必须是已注册枚举值 |
| Interaction | `options` / `correctIndex` / `correctIndices` | 选择题的正确答案以**下标**给出，必须落在 options 范围内 |
| Interaction | `wordId` / `expressionId` / `grammarPointId` | 引用资源；必须存在 |

::: warning 不得使用数组下标作发布 ID
所有 ID 必须具备稳定语义，便于定位、错误归因、测试引用与未来的迁移。当前课程约定：`sectionN` / `sN-uM` / `sN-lK`。
:::

## 先修规则

- `prerequisiteLessonIds` 引用必须存在。
- 依赖图必须无环。
- 显示顺序不构成依赖关系；解锁靠显式声明。
- 跨 Unit / Section 的解锁由更高层处理（`index.json.sections[].prerequisiteSectionIds`）。
- 删除 Lesson 时，引用其 ID 的其他 Lesson 必须同步处理（删除引用或保留目标）。

## 引用规则

```text
vocab / expressions / grammar_points
        │ stable id
        ▼
Lesson.content.items[].{wordId, expressionId, grammarPointId}
        │
        ▼
validate (course_cli) ─► 写入磁盘 ─► 客户端 reseed
```

- 题面文本可出现任意语言字符；但**资源 ID 必须来自课程级资源文件**。
- 不得用重复文本替代需要长期追踪的资源 ID。
- 不得在 Lesson 内部复制整份词表。
- 不得引用不存在的资源（validate 拒绝）。
- 不得将编辑器临时状态写入课程 JSON。

## 禁止形状

| 形状 | 后果 |
| --- | --- |
| 未注册的 `runtimeType` | validate error |
| 新 Lesson 使用扁平 `questions` | validate error |
| 同 Lesson 内 ID 重复 | validate error |
| 在 Lesson 内复制整份词表 | validate error |
| 引用不存在的资源 | validate error |
| 编辑器临时状态混入课程 JSON | validate error |
| 空 `prompt` / 空 `options` / 答案缺失 | validate error 或 lint error |

## 课时预设库

`tool/gui/src/backend/lesson_presets.py` 内置 5 个预设（`FUNCTIONAL_PRESETS`）。每个预设封装**题型梯度 + 阶段命名 + 默认干扰项分布**：

| 预设 id | 名称 | template | 题型组合 |
| --- | --- | --- | --- |
| `listening-3phase` | 听力三阶段 | `listening` | `wordPairing → dialogue → summary` 三 phase |
| `reading-3q` | 阅读理解·三类题 | `reading` | 篇章 + `readingMcq` + `readingTrueFalse` + `readingShortAnswer` |
| `mastery-mix` | 综合测验·混合题 | `mastery` | `multipleChoice` + `fillBlank` + `translateSentence` 梯度 |
| `intro-3step` | 认识新词·三步 | `intro` | `showWord → translateSentence → fillBlank` 骨架 |
| `practice-mix` | 巩固练习·混合 | `practice` | `multipleChoice` + `fillBlank` + `typeTheWord` 骨架 |

其中 `FUNCTIONAL_TEMPLATES = ("listening","reading","mastery")` 是向导视为「功能课」的入口集合。

```python
from src.backend.lesson_presets import (
    FUNCTIONAL_TEMPLATES,        # ("listening","reading","mastery")
    PRESET_BY_ID,                # dict[preset_id, LessonPreset]
    presets_for_template,        # 列出某 template 的全部预设
    build_preset_lesson,         # (preset_id, name) -> 完整 lesson dict
)
```

预设应用入口：**课程树多选 Lesson → 右键 → 批量套用预设…**。`Ctrl+D` 是 Lesson 级别的浅克隆（不应用预设，仅复制结构）；批量套用预设按预设规整整个 Lesson 的 `content`，是结构性操作，走命令栈可撤销。

## FunctionalLessonWizard（三步功能课向导）

对于首次产出 `listening` / `reading` / `mastery` 三类功能课，GUI 提供三步向导 `tool/gui/src/dialogs/functional_lesson_wizard.py`（`FunctionalLessonWizard`）：

```text
Step 1. 选类型  ── template（listening/reading/mastery）+ 名称 + 预设（或"空白骨架"）
Step 2. 配内容  ── 阶段名 / 音频位 / 阅读段落字段 / mastery 题型组合
Step 3. 预览    ── 只读 LessonBlueprint；显示最终 canonical content
```

| 步骤 | 表单字段 | 决定字段 |
| --- | --- | --- |
| 1 | template | `template` + `type` 字段联动 |
| 1 | name | `name`（可后续 F2 重命名） |
| 1 | preset id | 整段 `content` 形状 |
| 2（listening） | 阶段名 / `audioAsset` | `content.listeningPhases[]` |
| 2（reading） | 段落数 / 难度 / `linkedWordIds` | `content.readingPassage` |
| 2（mastery） | 题型组合 | `content.stages[].items[].runtimeType` |
| 3 | （只读） | 预览整段 `content` JSON 渲染 |

向导 `result_lesson()` 返回完整 Lesson dict，调用方 push `AppendLessonCommand` 插入。入口：**Unit 右键 → 功能课向导…**，或新建 Lesson 对话框勾选向导路径。

## AI 能力

AI 介入 Lesson 的两个主入口：① 课程树右键 → **AI 编辑 / AI 修正此节点**；② 工坊对话与高级 → 自由指令。两者背后均调 `backend/ai_generator.py::AiGenerator` 与 `backend/ai_fixer.py::AiFixer`。

### AI 节点编辑对话框

课程树右键 → **AI 编辑此节点** / **AI 修正此节点** 触发两类 AI 对话框，分别位于 `tool/gui/src/dialogs/ai/generator_*.py（生成器已拆分为 chat/flows/panels/preview/view-state/wizard/worker-hub 多个模块）` 与 `tool/gui/src/dialogs/ai/node_edit_dialog.py`：

| 入口 | 适用 | 关键字段 |
| --- | --- | --- |
| AI 编辑此 Lesson / Unit / Section | 自由指令 | 自定义 prompt + 4 类预设指令（精简 / 改写 / 增题 / 翻译润色） |
| AI 修正此节点 | 校验面板已选问题 | 自动把 `problems[].message` 注入上下文 |

实现要点：

- 生成前先调 `_validate_node(kind, node_json, check_existing_ids=True)` 收集当前节点的 schema 错误，与生成结果对比。
- 生成结果先做 `_detect_ai_edit_conflicts` —— 若 LLM 返回的 ID 集合与原节点不一致（删 ID / 改 ID / 顺序错位），弹「冲突解决」三选一对话框：保留现状 / 采用 AI 建议 / 取消。
- 应用走 `AiEditLessonCommand` / `AiEditUnitCommand` / `MergeAiSectionCommand`，全部可 `Ctrl+Z` 撤销。
- 节点编辑**不**自动写盘，必须在主窗口 `Ctrl+S` 后才落盘。

### AI 生成的 lesson 字段契约

LLM 生成的 Lesson 必须满足的**显式**校验（validate 强制）：

| 字段 | 校验 |
| --- | --- |
| `id` | 全课程唯一；不可与已有 id 冲突；发布后不可变 |
| `template` | 已注册枚举（`intro` / `practice` / `listening` / `reading` / `review` / `mastery` / `legacy`） |
| `content` | 与 `template` 匹配的 canonical 形状 |
| `prerequisiteLessonIds` | 引用存在；依赖图无环 |
| `wordId` / `expressionId` / `grammarPointId` | 引用存在 |
| `runtimeType` | 已注册枚举（14 种） |
| `options` / `correctIndex` | 选择题答案下标在 options 范围内 |

LLM 还需满足的**隐式**契约（lint 警告或由 AI 修正阶段强制）：

- `subLessons[].stages[].items[]` 顺序与认知梯度（识别 → 回忆 → 产出）。
- 同一 stage 内 `runtimeType` 不重复（教学多样性）。
- 干扰项与正确项词性、难度相近，无语义近邻。
- 新建 Lesson 不使用扁平 `questions`（已 deprecated）。
- 不复制整份词表到 Lesson 内（资源必须来自 `vocab.json`）。

实现位置：`backend/lesson_content.py::TEMPLATE_LABELS` + `backend/lesson_presets.py::FUNCTIONAL_PRESETS` + `backend/ai_pedagogy.py`（CEFR / 干扰项 prompt 块）。

### AI 抽取的 lesson 字段映射

教材工坊从 raw text 抽取 Lesson 时，按 `template` 走不同的字段映射规则：

| `template` | AI 抽取的输入特征 | canonical content 决定字段 |
| --- | --- | --- |
| `intro` | 含新词、释义、目标语例句 | `subLessons[0].stages[]`（识别层题型为主） |
| `practice` | 已学词的产出练习 | `subLessons[0].stages[]`（回忆层 + 产出层） |
| `listening` | 含音频引用、对话 / 独白转写 | `listeningPhases`（`wordPairing`/`dialogue`/`summary`） + 各 phase `items[]` |
| `reading` | 含段落、问题、词汇链接 | `readingPassage.paragraphs[]` + `stages[].items[readingMcq/TrueFalse/ShortAnswer]` |
| `review` | 跨节词汇回顾 | `subLessons[]` 或 `stages[]`；按节合并 |
| `mastery` | 综合产出 | `stages[]`（高认知负荷题型） |

映射规则强制：每种 `template` 的 canonical 字段必须存在，缺一即 lint warning。AI 在抽取阶段通过 `content_quality.py` 给出 6 维评分；< 0.7 的章节进入「按质量重抽」候选。

更多 AI 能力全景、主路径与决策矩阵见 [AI 课程生成](/authoring/ai-course-generation)。

## 与 GUI 编辑器的对应

| GUI 操作 | 写入字段 |
| --- | --- |
| 树右键（Unit）→ 新建 Lesson | `NewLessonDialog` 选模板 → 写入 `template` + 缺省 `content` |
| 树右键（Unit）→ 功能课向导… | 三步向导产出 listening/reading/mastery 完整 Lesson |
| 树多选 Lesson → 批量套用预设… | 替换 `content` 为预设的题型组合 |
| 树右键 → AI 编辑 / 修正此节点 | 走 `AiEditLessonCommand` 等；可撤销；不自动写盘 |
| 模板切换 | 校验目标 `content` 形状；不兼容时阻断 |
| 课时编辑器 → 元数据 | 写 `name` / `description` / `prerequisiteLessonIds` |
| 课时编辑器 → 蓝图 | `listeningPhases[]` / `readingPassage.paragraphs[]` 拖拽排序 |
| 课时编辑器 → 题型卡片 | 增删 `items[]`；改 `runtimeType` 重渲染表单 |
| 教师模式试做 | 不写盘；纯运行时模拟 |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [资源文件](/authoring/resource-files)
- [交互题型](/guide/interaction-types)
- [课型说明](/guide/lesson-types)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
