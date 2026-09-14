# 术语表

| 术语 | 定义 |
| --- | --- |
| Again | 本次未成功提取；进入失败或重学路径 |
| AI Hub | AI 功能的集中入口，不是独立聊天后端 |
| Canonical shape | 新课程内容应写入的标准 JSON 结构 |
| Course scope | 标识当前课程或导入来源的数据作用域 |
| D / Difficulty | FSRS 估计的项目难度 |
| Derived cache | 可由真理源重新生成的数据 |
| due | 项目下一次可进入正式复习的时间 |
| Fidelity rendering | 保留原 Anki HTML/CSS/必要模板行为的渲染路径 |
| FSRS | Free Spaced Repetition Scheduler |
| Interaction | Lesson 中最小可执行题目或展示单元 |
| Lesson | Unit 下的单次学习单元 |
| Local-first | 核心状态默认在本地，网络是可选能力 |
| Notetype | Anki note 的字段和卡片模板定义 |
| Official owner | 由 Official Anki Collection 和 scheduler 持有状态的来源 |
| R / Retrievability | 当前时刻成功提取的估计概率 |
| reseed | 根据课程内容版本重建数据库课程投影 |
| Review event | 一次评分及其前后调度状态记录 |
| runtimeType | Interaction JSON 的变体标识 |
| S / Stability | FSRS 估计的记忆保持时间尺度 |
| Safe mode | 临时关闭实验、脚本和外部卡片网络的运行时覆盖 |
| Section | 课程最高内容层级，通常对应 CEFR 范围 |
| Sibling cards | 同一 Anki note 生成的多张 card |
| Source of truth | 对某类数据具有最终所有权的存储 |
| Stage | 按顺序包含多个 Interaction 的执行阶段 |
| Structured rendering | 将卡片或课程内容映射为原生结构化控件 |
| Unit | Section 下的主题分组 |
| Weak item | 由多次学习证据推导出的高风险项目 |

## 术语边界

- “课程缓存”不等于“学习状态”。
- “AI 缓存”不等于“AI 会话”。
- “导入成功”不等于“所有媒体完整”。
- “卡片可显示”不等于“卡片允许联网”。
- “Lesson 完成”不等于“项目已长期掌握”。
- “错误一次”不等于“弱项”。
- “目标保持率”不等于测验正确率。

## 相关文档

- [架构总览](/developer/architecture)
- [记忆状态与评分](/guide/memory-state)
- [常见问题](/guide/faq)
