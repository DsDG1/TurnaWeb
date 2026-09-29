# 交互题型

Interaction 是课程运行时的最小可执行单元。渲染器分发不直接比较 `runtimeType`——freezed 生成的是私有实现类（如 `_$ShowWordImpl`），必须先经 `_handlesTypeFor()` 映射到公开接口类型再匹配。写新渲染器时在 `di/renderer_module.dart` 登记即可，无需改分发逻辑。

## 已定义类型

| 能力维度 | `runtimeType` | 输入 | 结果 |
| --- | --- | --- | --- |
| 词汇呈现 | `showWord` | 词项、释义、音频 | 展示完成 |
| 接受性词汇 | `multipleChoice` | 单个答案 | 正误 |
| 接受性词汇 | `multiSelect` | 多个答案 | 集合匹配结果 |
| 产出 | `fillBlank` | 文本 | 标准化后匹配 |
| 产出 | `translateSentence` | 翻译文本 | 规则或配置判定 |
| 句法 | `reorderSentence` | 词块顺序 | 顺序匹配 |
| 听写 | `typeTheWord` | 听到的词 | 拼写匹配 |
| 听力 | `listenAndPick` | 音频后的选择 | 正误 |
| 听力 | `listenOnly` | 音频 | 播放完成 |
| 阅读 | `readingMcq` | 篇章后的选择 | 正误 |
| 阅读 | `readingTrueFalse` | 真 / 假 | 正误 |
| 阅读 | `readingShortAnswer` | 简答 | 配置判定 |
| Anki 翻卡 | `ankiCard` | 原卡正面 / 背面文本 | 翻面 + 课程结果 |
| Anki 保真 | `ankiHtmlCard` | 原卡 HTML | 见下方说明 |

共 14 种（`lib/domain/course/interaction.dart` 的 sealed union，`tool/gui/src/backend/schema_constants.py` 保持一致）。

两个 Anki 题型的区别：

- **`ankiCard`**：导入卡片的普通翻卡形态（正面 → 点按 → 背面），用于课时体与 Official 复习投影的纯文本卡。
- **`ankiHtmlCard`**：携带 `frontHtml` / `backHtml` / `allowJs` / `mediaBasePath` 的保真卡。Official 复习路径用 WebView 按原模板渲染；**课时体与错题回放里该类型的渲染器已退役**（`AnkiHtmlCardRetiredRenderer`），显示为「确认后继续」占位卡 —— 新课程不要再产出 `ankiHtmlCard` 课时项。

## 设计规则

### 先呈现，后检索

新词首次出现时先使用 `showWord` 或具有明确上下文的输入。不得在没有任何输入的情况下把陌生项目直接作为高强度产出题。

### 每题只验证一个主要目标

题干可以包含上下文，但评分目标必须明确。例如听力题验证语音识别时，不同时要求复杂拼写和语法变形，除非课时目标明确要求组合能力。

### 干扰项必须可解释

选择题干扰项应来自真实易混项、相近形式或当前课程范围。随机无关词会提高表面难度，但不提供有效诊断。

### 标识符保持稳定

Interaction `id` 用于定位、错误记录和测试。发布后不得因排序调整自动重编号。

## 评分映射

普通课程题通常使用二元结果：

```text
pass -> Good
fail -> Again
```

显式量表可以映射为四档评分。Anki 正式复习直接使用 Again、Hard、Good、Easy。显示文本可以本地化，调度枚举不可重新定义。

## 内容检查

前四项由工具强制，`course_cli.py` 会报错：

- `id` 在目标作用域内唯一且稳定。
- 引用的 `wordId`、`expressionId`、`grammarPointId` 存在。
- 音频题的 `audioAsset` 只出现在听力课中。
- `stages` 与 `questions` 不同时声明。

以下几项**工具不校验**，需人工把关：

- `runtimeType` 是否已注册——未知类型不会报错，只会在运行时降级为占位 `showWord`。
- 选择题答案下标 `correctIndex` / `correctIndices` 是否落在 `options` 范围内。
- 空字符串、重复选项与无解题目。
- 音频能否真正播放（`audioAsset` 缺失只产生 warning，且其路径解析与磁盘布局不一致）。

## 相关文档

- [Lesson JSON 结构](/authoring/lesson-schema)
- [课型说明](/guide/lesson-types)
- [校验与 Lint](/authoring/validation)
