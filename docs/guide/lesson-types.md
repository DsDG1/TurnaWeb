# 课型说明

一节 Lesson 有「类型」和「模板」。类型决定这节课在课程树里扮演什么角色，模板决定内容怎么组织。

编写 JSON 时的合同见 [课程目录约定](/authoring/course-layout)。更细的字段示例在应用仓库 `docs/authoring/lesson-type-templates.md`。

## 六种课

| 课型 | 模板 | 做什么 |
| --- | --- | --- |
| 新知课 | `intro` | 4 个子课时依次引入词汇、表达与语法，是每个主题的起点。 |
| 练习课 | `practice` | 用更高难度复练新知课内容，巩固而不是重复。 |
| 听力课 | `listening` | 先辨音，再理解，最后整体听懂一段。 |
| 阅读课 | `reading` | 一篇短文加理解题，把词汇和语法放进语境。 |
| 复习课 | `review` | 混合复习已学内容，由课程树按先修解锁。 |
| 挑战课 | `mastery` | 单次掌握度检验，通过才能继续往后。 |

对应到 JSON 里的 `type`：`normal`（intro / practice）、`listening`、`reading`、`review`、`challenge`。

## 怎么选

- 第一次出现的词和句 → 新知课。
- 同一批材料加难再练 → 练习课。
- 需要听音或读短文 → 听力课 / 阅读课。
- Unit 或 Section 收尾 → 复习课，必要时加挑战课。

教师在编辑器里选模板后，会生成默认结构（子课、阶段），再往里填词和题目即可。

## 下一步

- [教师指南](/authoring/teacher-guide)
- [课程结构](/guide/curriculum)
