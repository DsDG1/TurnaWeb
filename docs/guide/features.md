# 核心能力一览

先看这一页建立地图，细节进各功能页。产品主页的卡片和预览对应同一套能力。

## 离线与本地优先

- 课程与学习记录存在设备上，关掉网络也能学和复习。
- 只在你主动同步或更新时联网，默认不上传学习记录。
- 无需账号，没有广告、排行榜或付费墙。

## FSRS 智能复习

内置开源 FSRS：Anki 牌组走 `fsrs-rs`，课程词走 Dart 实现，都是 21 参数的 FSRS-6。详见 [FSRS 复习](/guide/fsrs)。

## Anki 兼容

复用官方 Anki 内核。`.apkg` 导入后投影成课程树，可以按课时推进，也可以看原卡。调度仍由官方 Scheduler 持有，不写入内置课程的错题本或 FSRS 记录。详见 [Anki 集成](/guide/anki)。

## 外部课程包

LibreLingo 等社区课程经离线工具转成 `.turnapack` 后可直接导入，学习、复习与卸载恢复与内置课程一致。详见 [导入课程包](/guide/course-pack) 与 [外部课程包格式](/authoring/course-pack)。

## AI 伴学

跟课答疑、分层提示、按错题和弱词出练习。不配模型时用本地课程片段讲解。详见 [AI 伴学](/guide/ai)。

## 课程编辑器

桌面 `tool/gui` 编辑 Section / Unit / Lesson，保存时校验 JSON。详见 [课程编辑器](/guide/editor) 与 [教师指南](/authoring/teacher-guide)。

## 开源与可定制

MIT 协议，源自 [rshrc/Varnamala](https://github.com/rshrc/Varnamala)。主题「晨雾 / 夕光」可在产品主页切换。

## 推荐阅读顺序

1. [快速开始](/guide/getting-started)
2. [课程结构](/guide/curriculum)
3. 按需要进入 FSRS / Anki / AI / 编辑器

