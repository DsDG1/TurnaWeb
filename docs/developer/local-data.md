# 本地数据模型

Turna 同时包含内容真理源、派生缓存和用户状态。维护操作必须先区分三者。

## 分层

```text
bundle course JSON        authoritative content
        |
        | versioned seed
        v
drift course database     runtime projection/cache
        +
user progress / SRS       authoritative local user state
        +
Official Anki Collection  authoritative imported-card state
```

## 课程导入

应用启动先加载 `index.json` 的 Section shell。打开 Section 时加载 Unit / Lesson 元数据，打开 Lesson 时加载内容。作者仍编辑完整 JSON；分层加载只是运行策略。

内容版本变化触发 reseed。reseed 更新课程投影，不应清除独立的用户复习历史。

## 主要数据域

| 数据域 | 示例 | 维护方式 |
| --- | --- | --- |
| 课程投影 | Section、Unit、Lesson、资源 | 由 JSON reseed |
| 学习进度 | completed Lesson、统计 | 应用事务 |
| SRS | state、due、review event | 调度事务 |
| 错题 | interaction snapshot | 错误事件写入 |
| Official Anki | notes、cards、revlog、scheduler | Official Core（独立于 course.db 的库） |
| AI | 会话、消息、诊断、指标 | AI 工作流 |
| 设置 | 主题、无障碍、课程 TTS | 本地偏好 |
| 缓存 | AI 响应缓存、复习看板快照、图片缓存 | 可再生成 |

## 事务边界

一次复习评分应原子地更新当前状态和历史记录。媒体复制、外部 AI 请求或长耗时解析不能被伪装成同一个数据库事务；失败时使用明确的阶段状态和补偿策略。

## Schema 迁移

数据库 schema 只向前迁移。遇到未来 schema 版本时拒绝降级打开，防止旧客户端破坏新数据。迁移测试必须覆盖现有旧版本到当前版本的路径。

文档中的具体 schemaVersion 是时间敏感实现细节。诊断报告应读取运行版本，不硬编码文档数值作为判断依据。

## 完整性与优化

```sql
PRAGMA integrity_check;
REINDEX;
PRAGMA optimize;
```

完整性检查是只读操作。REINDEX 与 optimize 维护索引和查询计划，不删除业务数据。

## 缓存清理

允许直接再生成的典型数据：

- AI 响应缓存。
- 复习看板快照。
- 运行时图片缓存。
- 可重新导入的课程投影，但执行前必须保护用户状态。

历史遗留的 Anki 预渲染 HTML 缓存（"智能去解密"）已在 schema v22 被删除、该路径明文放弃，不在上述清单内。

不属于普通缓存：SRS、review history、Official Collection、错题、AI 会话、用户设置。

## 相关文档

- [本地数据与隐私](/guide/data-and-privacy)
- [课程目录约定](/authoring/course-layout)
- [架构总览](/developer/architecture)
