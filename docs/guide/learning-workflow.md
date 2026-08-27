# 标准学习流程

Turna 将课程学习、检索练习、错误记录和间隔复习视为一条连续状态机。界面可以变化，状态转换顺序不应变化。

## 流程

```text
选择课程
  -> 检查 Section / Unit / Lesson 先修条件
  -> 加载单节 Lesson 内容
  -> 执行 Stage 与 Interaction
  -> 写入答题结果和 Lesson 进度
  -> 更新错题、弱项与 SRS 状态
  -> 生成后续复习队列
```

## 课程选择

课程树采用 `Section -> Unit -> Lesson`。Section 对应 CEFR 范围，Unit 对应主题，Lesson 对应可在短时间内完成的学习单元。

解锁条件来自两处：

- `prerequisiteSectionIds`：Section 级依赖。
- `prerequisiteLessonIds`：Lesson 级依赖。

未满足依赖的内容不应被伪装成可执行内容。作者不得通过修改显示顺序替代依赖关系。

## Lesson 执行

客户端按 Lesson 模板读取 `subLessons`、`listeningPhases`、`readingPassage` 或 `stages`。运行时将结构展平为可遍历的 Stage 序列，再按 Interaction 类型选择渲染器。

每个 Interaction 产生结构化结果。结果至少需要区分正确、错误和可选评分，不以页面停留时间替代学习结果。

## 状态写入

一次作答可能影响以下状态：

| 状态 | 写入条件 | 后续用途 |
| --- | --- | --- |
| Lesson 进度 | 完成课时步骤 | 解锁后续内容 |
| 错题快照 | 回答错误 | 重做、错误分析、AI 上下文 |
| SRS 状态 | 可复习项目获得评分 | 计算下次到期时间 |
| 复习历史 | 调度结果落盘 | 统计、撤销、参数分析 |
| 学习统计 | 完成事件 | 本地聚合展示 |

## 中断与恢复

- 课程内容按单节加载，不要求把整个课程常驻内存。
- 已提交的评分应先持久化，再更新界面完成态。
- 在途评分期间禁止同时撤销同一项目。
- 应用异常退出后，以已落盘状态为准，不根据动画或页面位置推断完成状态。

## 结束条件

Lesson 结束不等于记忆完成。新项目进入 SRS 后，由到期时间决定后续复习。复习失败会进入当日重学阶梯；连续失败达到限制后可推迟到次日。

## 相关文档

- [课程结构](/guide/curriculum)
- [交互题型](/guide/interaction-types)
- [复习系统](/guide/review-system)
