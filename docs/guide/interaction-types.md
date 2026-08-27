# 交互题型

Interaction 是课程运行时的最小可执行单元。每种 Interaction 使用 `runtimeType` 选择专用渲染器。新增未注册的 `runtimeType` 会构成数据错误。

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
| Anki 保真 | `ankiHtmlCard` | 原卡 HTML | 四档评分或课程结果 |

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

- `runtimeType` 已在应用模型中存在。
- `id` 在目标作用域内唯一且稳定。
- 引用的 `wordId`、`expressionId`、`grammarPointId` 存在。
- 音频题的 `audioAsset` 可解析或具有明确 TTS 降级。
- 正确答案实际存在于 options 中。
- 空字符串、重复选项和无解题目被校验器拒绝。

## 相关文档

- [Lesson JSON 结构](/authoring/lesson-schema)
- [课型说明](/guide/lesson-types)
- [校验与 Lint](/authoring/validation)
