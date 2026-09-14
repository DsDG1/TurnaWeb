# 资源文件（vocab / expressions / grammar_points）

三个资源文件在 `assets/courses/<lang>/` 根下。课时里的题目不复制词义 —— ShowWord / 听力配对等只写 `wordId` / `expressionId`，运行时去资源池解析。改一处词义，全课程生效。

## 顶层结构

```jsonc
// vocab.json
{
  "version": 12,            // 当前快照值；变更后递增
  "language": "turkish",
  "words": [ ... ]          // ← 数组键是 words，不是 items
}

// expressions.json
{
  "version": 2,             // 当前快照值；变更后递增
  "language": "turkish",
  "expressions": [ ... ]    // ← expressions
}

// grammar_points.json
{
  "grammarPoints": [ ... ]  // ← grammarPoints；本文件没有 version 字段
}
```

重播种键是 `index.version + expressions.version` 的组合；改 grammar_points.json 后也要 bump `index.json.version` 才会触发重播种。

## vocab.json — `words[]`

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | ✓ | 全局唯一，建议 `w-<slug>`；发布后被进度/错题/调度引用 |
| `term` | string | ✓ | 目标语词形（土耳其语） |
| `translation` | string | ✓ | 母语释义 |
| `pronunciation` | string | — | 读音提示 / 音标 |
| `audioAsset` | string | — | 预录音频资源名；缺省时走运行时 TTS |
| `tags` | string[] | — | 分组标签（如 `greeting`、`food`） |

```json
{ "id": "w-merhaba", "term": "merhaba", "translation": "你好",
  "pronunciation": "mehr-HAH-bah", "tags": ["greeting"] }
```

## expressions.json — `expressions[]`

字段与 words 相同：`id` / `term` / `translation` / `pronunciation?` / `audioAsset?` / `tags[]`。

Expression 与 Word 的区别只在粒度：多词固定搭配、短句入 expressions，独立进 SRS。ShowWord 的 `expressionId` 解析到这里。

```json
{ "id": "e-gunaydin", "term": "günaydın", "translation": "早上好",
  "tags": ["greeting"] }
```

## grammar_points.json — `grammarPoints[]`

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | ✓ | 全局唯一，建议 `g-<slug>` |
| `title` | string | ✓ | 短标题，如「现在时 -ar 变位」 |
| `explanation` | string | — | 完整讲解，课时和语法复习页展示 |
| `exampleExpressionIds` | string[] | — | 例句 → expressions.json 的 id |
| `exampleSentenceIds` | string[] | — | 例句 id（当前复用 expression id） |
| `practiceItems` | Interaction[] | — | 语法复习页讲解卡之后的短练习，元素是完整 Interaction（见 [课时 schema](./lesson-schema)） |

```json
{
  "id": "g-present-tense",
  "title": "现在时人称变位",
  "explanation": "土耳其语现在时在词干后加…",
  "exampleExpressionIds": ["e-geliyorum"],
  "practiceItems": [
    { "runtimeType": "fillBlank", "sentence": "Ben gel___yorum", "answer": "iyo" }
  ]
}
```

## 卡片是练习还是资源

![资源 → Lesson 单向引用图](/images/authoring/resource-graph.svg)

区分方法：

- **资源**：`words[]` / `expressions[]` / `grammarPoints[]` 里的条目 —— 进词表、语法复习、SRS。
- **练习**：课时的 `content.stages[].items[]` 等里的 Interaction —— 属于那节课，答案/选项写在课时文件里。
- **引用**：课时 Interaction 只写 `wordId` / `expressionId`；词义显示从资源池解析。语法点的 `practiceItems` 是个例外 —— 练习本体写在资源文件里（它属于「语法复习」这个跨课场景）。

## 硬边界

- 引用计数唯一：每词的「出现次数」= 引用它的课程 Interaction 数，一次性聚合（`course_db_enrichment.dart`），不随学习过程更新。
- 资源文件不要写逐字稿：transcript 属听力 phase（`transcript`），例句走 `exampleExpressionIds`。
::: warning id 发布后不可改
资源 id 被 SRS 进度、错题本、Official Collection 键引用；改名等于另建条目并孤立旧进度。
:::

![资源库编辑器（实际运行截图：vocab / expressions / grammar_points 三标签 + 行内编辑）](/images/authoring/_real/04-resource-editor.png)

相关：[课程仓库布局](./course-layout) · [课时 schema](./lesson-schema) · [教师视图操作](./teacher-guide)（编辑器 资源库 tab 批量编辑）
