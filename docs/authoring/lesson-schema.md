# Lesson JSON 结构

> Lesson 是课程发布与运行时加载的最小可执行内容单元。本文档是字段合同的权威定义。

![Lesson canonical content 形状与 runtimeType 枚举](/images/authoring/canonical-shapes.svg)

![课时编辑面板（实际运行截图：右侧元数据 + 蓝图编辑器）](/images/authoring/_real/02-lesson-selected.png)

![功能课三步向导（实际运行截图：选类型 → 配置 → 预览）](/images/authoring/_real/09-functional-wizard.png)

新内容**必须**使用 canonical 形状。扁平 `questions` 仅在迁移历史数据时保留兼容路径。`tool/gui` 写入的 JSON 100% 遵循本文档；不接受的形状在保存时直接回滚。

## 顶层字段

```jsonc
{
  "id": "l-u1-greetings-intro",
  "name": "Greetings / Intro",
  "description": "Introduce greeting forms.",
  "type": "normal",                  // normal | listening | reading | review | challenge
  "template": "intro",               // intro | practice | listening | reading | review | mastery | legacy
  "prerequisiteLessonIds": [],
  "linkedGrammarPointIds": [],
  "content": { /* canonical */ }
}
```

| 字段 | 类型 | 必填 | 约束 |
| --- | --- | --- | --- |
| `id` | string | 是 | 全课程稳定且唯一；发布后不可变 |
| `name` | string | 是 | 用户可见；可修改；不以 ID 命名 |
| `description` | string | 是 | 描述本课的可验证学习目标 |
| `type` | enum | 是 | 决定 `content` 形状的元约束 |
| `template` | enum | 是 | 决定渲染骨架与缺省阶段 |
| `prerequisiteLessonIds` | string[] | 否 | 同 Unit 内的依赖；必须存在且无环 |
| `linkedGrammarPointIds` | string[] | 否 | 引用 `grammar_points.json` |
| `content` | object | 是 | 与 `template` 匹配的 canonical 内容 |

> `type` 与 `template` 不等同：`type` 是语义类别（普通 / 听力 / 阅读 / 复习 / 挑战），`template` 是渲染骨架。`mastery` 仅是 template；它服务于 `type=normal` 的高阶综合课。

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
                "prompt": "merhaba",
                "translation": "你好",
                "audioAsset": null
              },
              {
                "runtimeType": "multipleChoice",
                "id": "q-hello-meaning",
                "prompt": "merhaba 的意思是？",
                "options": ["你好", "谢谢", "再见"],
                "correctAnswer": "你好"
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

```jsonc
{
  "content": {
    "listeningPhases": [
      { "id": "lp-debut",  "kind": "debut",  "audioAsset": "lessons/l-u1/debut.mp3" },
      { "id": "lp-main",   "kind": "main",   "audioAsset": "lessons/l-u1/main.mp3"  },
      { "id": "lp-fin",    "kind": "fin",    "audioAsset": "lessons/l-u1/fin.mp3"   }
    ],
    "stages": [
      {
        "id": "st-comprehension",
        "items": [
          {
            "runtimeType": "listenAndPick",
            "id": "q-listen-1",
            "audioAsset": "lessons/l-u1/main.mp3",
            "prompt": "说话者接下来要去哪里？",
            "options": ["咖啡馆", "图书馆", "公园"],
            "correctAnswer": "咖啡馆"
          }
        ]
      }
    ]
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
            "correctAnswer": "天气"
          }
        ]
      }
    ]
  }
}
```

## 已注册 runtimeType

| 维度 | `runtimeType` | 输入 | 结果 |
| --- | --- | --- | --- |
| 词汇呈现 | `showWord` | 词项、释义、音频 | 展示完成 |
| 接受性词汇 | `multipleChoice` | 单答案 | 正误 |
| 接受性词汇 | `multiSelect` | 多答案 | 集合匹配 |
| 产出 | `fillBlank` | 文本 | 标准化匹配 |
| 产出 | `translateSentence` | 翻译文本 | 规则或配置判定 |
| 句法 | `reorderSentence` | 词块顺序 | 顺序匹配 |
| 听写 | `typeTheWord` | 听到的词 | 拼写匹配 |
| 听力 | `listenAndPick` | 音频 + 选项 | 正误 |
| 听力 | `listenOnly` | 音频 | 播放完成 |
| 阅读 | `readingMcq` | 篇章 + 选项 | 正误 |
| 阅读 | `readingTrueFalse` | 真 / 假 | 正误 |
| 阅读 | `readingShortAnswer` | 简答 | 配置判定 |
| Anki 保真 | `ankiHtmlCard` | 原卡 HTML | 四档评分或课程结果 |

> `runtimeType` 是闭合枚举。新增题型须先在应用模型注册并补 Flutter 渲染器、CLI 校验规则与 GUI 表单字段，缺一即拒绝发布。

## Stage 与 Interaction

| 对象 | 字段 | 约束 |
| --- | --- | --- |
| Stage | `id` | 同 Lesson 内稳定；发布后不改 |
| Stage | `name` | 用户可见 |
| Stage | `items[]` | Interaction 列表 |
| Interaction | `id` | 全 Lesson 内唯一；发布后不改 |
| Interaction | `runtimeType` | 必须是已注册枚举值 |
| Interaction | `prompt` | 题干；非空 |
| Interaction | `correctAnswer` | 必须出现在 `options` 或以归一化文本匹配 |
| Interaction | `wordId` / `expressionId` / `grammarPointId` | 引用资源；必须存在 |

> **不得使用数组下标作发布 ID**。所有 ID 必须具备稳定语义，便于定位、错误归因、测试引用与未来的迁移。

## 先修规则

- `prerequisiteLessonIds` 引用必须存在。
- 依赖图必须无环。
- 显示顺序不构成依赖关系；解锁靠显式声明。
- 同 Unit 内的先修在运行时强制；跨 Unit / Section 的解锁由更高层处理（`index.json.sections[].prerequisiteSectionIds`）。
- 删除 Lesson 时，引用其 ID 的其他 Lesson 必须同步处理（删除引用或保留目标）。

## 引用规则

```text
vocab / expressions / grammar_points
        │ stable id
        ▼
Lesson.content.interactions[].{wordId, expressionId, grammarPointId}
        │
        ▼
validate (course_cli) ─► 写入磁盘 ─► 客户端 reseed
```

- 题面文本可出现任意语言字符；但**资源 ID 必须来自课程级资源文件**。
- 不得用重复文本替代需要长期追踪的资源 ID。
- 不得在 Lesson 内部复制整份词表。
- 不得引用不存在的音频或资源（validate 拒绝）。
- 不得将编辑器临时状态写入课程 JSON。

## 禁止形状

| 形状 | 后果 |
| --- | --- |
| 未注册的 `runtimeType` | validate error |
| 新 Lesson 使用扁平 `questions` | validate error |
| 同 Lesson 内 ID 重复 | validate error |
| 在 Lesson 内复制整份词表 | validate error |
| 引用不存在的资源 / 音频 | validate error |
| 编辑器临时状态混入课程 JSON | validate error |
| 空 `prompt` / 空 `options` / 无 `correctAnswer` | validate error 或 lint error |
| 跨 Unit / Section 的 `prerequisiteLessonIds` | lint warning（依赖应在更高层声明） |

## 课时预设库

`tool/gui/src/backend/lesson_presets.py` 内置 `FUNCTIONAL_TEMPLATES = {"listening","reading","mastery"}` 三类功能课的预设集合。每个预设封装**题型梯度 + 阶段命名 + 音频位 + 默认干扰项分布**。

```python
from src.backend.lesson_presets import (
    FUNCTIONAL_TEMPLATES,        # {"listening","reading","mastery"}
    PRESET_BY_ID,                # dict[preset_id, PresetSpec]
    presets_for_template,        # 列出某 template 的全部预设
    build_preset_lesson,         # (preset_id, name) -> 完整 lesson dict
)
```

| 模板 | 内置预设示例 | 题型组合 |
| --- | --- | --- |
| `listening` | `lp-debut-main-fin-v1` | `debut` 预听 + `main` 听音选词 + `fin` 摘要 |
| `reading` | `rp-3para-mcq-v1` | 3 段阅读 + `readingMcq` + `readingTrueFalse` + `readingShortAnswer` |
| `mastery` | `mx-mcq-fill-translate-v1` | `multipleChoice` + `fillBlank` + `translateSentence` 三段梯度 |

预设应用由 **课程树右键 → 套用预设（Presets）** 或 **批量套用预设…** 触发。`Ctrl+D` 是 Lesson 级别的浅克隆（不应用预设，仅复制结构）；批量套用预设则按预设规整整个 Lesson 的 `content`，是结构性操作，走 `AppendLessonsToUnitCommand` 进入 `QUndoStack`。

## FunctionalLessonWizard（三步功能课向导）

对于首次产出 `listening` / `reading` / `mastery` 三类功能课，GUI 提供三步向导 `tool/gui/src/dialogs/functional_lesson_wizard.py:100`：

```text
Step 1. 选类型  ── template 选 list/reading/mastery + 名称 + 预设（或"空白骨架"）
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

向导 `result_lesson()` 返回完整 Lesson dict，调用方 push `AppendLessonCommand` 插入。`append_lessons_to_unit` 命令把新 Lesson 追加到目标 Unit 末尾；选中的 Unit 由课程树右键 → 新增 Lesson 决定。

## AI 能力

AI 介入 Lesson 的两个主入口：① 课程树右键 → **AI 编辑 / AI 修正此节点**；② 工坊对话与高级 → 自由指令。两者背后均调 `backend/ai_generator.py::AiGenerator` 与 `backend/ai_fixer.py::AiFixer`。

### AI 节点编辑对话框

课程树右键 → **AI 编辑此节点** / **AI 修正此节点** 触发两类 AI 对话框，分别位于 `tool/gui/src/dialogs/ai/ai_generator_dialog.py` 与 `tool/gui/src/dialogs/ai/node_edit_dialog.py`：

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
| `template` | 已注册枚举（`intro` / `practice` / `listening` / `reading` / `review` / `mastery`） |
| `content` | 与 `template` 匹配的 canonical 形状 |
| `prerequisiteLessonIds` | 引用存在；依赖图无环 |
| `wordId` / `expressionId` / `grammarPointId` | 引用存在 |
| `audioAsset`（听力课） | 路径在 `assets/sounds/<lang>/` 中存在 |
| `runtimeType` | 已注册枚举（13 种） |
| `correctAnswer` | 出现在 `options` 中或经归一化匹配 |

LLM 还需满足的**隐式**契约（lint 警告或由 AI 修正阶段强制）：

- `subLessons[].stages[].items[]` 顺序与认知梯度（识别 → 回忆 → 产出）。
- 同一 stage 内 `runtimeType` 不重复（教学多样性）。
- 干扰项与正确项同 `pos`、同 `cefr`、无语义近邻。
- 新建 Lesson 不使用扁平 `questions`（已 deprecated）。
- 不复制整份词表到 Lesson 内（资源必须来自 `vocab.json`）。
- ID 命名遵循 `l-<unit-slug>-<lesson-slug>` 模式（lint warning，不阻断）。

实现位置：`backend/lesson_content.py::TEMPLATE_LABELS` + `backend/lesson_presets.py::FUNCTIONAL_PRESETS` + `backend/ai_pedagogy.py`（CEFR / 干扰项 prompt 块）。

### AI 抽取的 lesson 字段映射

教材工坊从 raw text 抽取 Lesson 时，按 `template` 走不同的字段映射规则：

| `template` | AI 抽取的输入特征 | canonical content 决定字段 |
| --- | --- | --- |
| `intro` | 含新词、释义、目标语例句 | `subLessons[0].stages[]`（识别层题型为主） |
| `practice` | 已学词的产出练习 | `subLessons[0].stages[]`（回忆层 + 产出层） |
| `listening` | 含音频引用、对话 / 独白转写 | `listeningPhases[3] (debut/main/fin)` + `stages[].items[listenAndPick]` |
| `reading` | 含段落、问题、词汇链接 | `readingPassage.paragraphs[]` + `stages[].items[readingMcq/TrueFalse/ShortAnswer]` |
| `review` | 跨节词汇回顾 | `subLessons[]` 或 `stages[]`；按节合并 |
| `mastery` | 综合产出 | `stages[]`（高认知负荷题型） |

映射规则强制：每种 `template` 的 canonical 字段必须存在，缺一即 lint warning。AI 在抽取阶段通过 `content_quality.py` 给出 6 维评分；< 0.7 的章节进入「按质量重抽」候选。

更多 AI 能力全景、5 条主路径与决策矩阵见 [AI 课程生成](/authoring/ai-course-generation#13-节点编辑课程树右键)。

## 与 GUI 编辑器的对应

| GUI 操作 | 写入字段 |
| --- | --- |
| 树右键 → 新增 Lesson | 弹出模板选择 → 写入 `template` + 缺省 `content` |
| 树右键 → 套用预设 | 替换 `content` 为预设的题型组合；走 `AppendLessonsToUnitCommand` |
| 树右键 → AI 编辑 / 修正此节点 | 走 `AiEditLessonCommand` 等；可撤销；不自动写盘 |
| FunctionalLessonWizard | 三步产出 listening/reading/mastery 完整 Lesson |
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
