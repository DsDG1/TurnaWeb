# 常见问题

## Turna 是否需要账号

不需要。核心课程、复习和学习状态在本地运行。

## 没有网络能否学习

可以。已安装课程和本地复习不依赖网络。外部 AI、远程卡片资源和主动更新需要网络。

## Web 产品主页是否就是学习应用

不是。TurnaWeb 提供产品页和技术文档。学习客户端是 Flutter 应用。

## 为什么有两套 FSRS

课程项目由 Dart FSRS 调度。Official Anki 卡由 Official Anki scheduler 调度。两者算法概念相近，但状态所有者不同。

## 能否把 Official Anki 卡静默改用 Turna FSRS

不能。Official runtime 不可用时应明确关闭相关功能，避免分叉复习历史。

## 支持哪些 Anki 文件

Android 生产导入合同以 `.apkg` 为主。`.colpkg` 当前不作为正式导入路径。

## 能否导入 LibreLingo 课程

可以，但不直接读 YAML。先用离线工具把 LibreLingo 课程转成 `.turnapack`（见[外部课程包](/authoring/course-pack)），再到「课程管理 → 导入课程包」安装（见[导入课程包](/guide/course-pack)）。

## 为什么复杂 Anki 卡片没有网络

卡片网络是**始终阻断**的，无法通过设置放开。HTML 模板可能包含未知脚本和远程请求，复习器的导航委托只放行 `file:` / `data:` / `about:`，其余一律拦截。注意这与 JavaScript 权限无关——JavaScript 可以单独关闭，但不存在「允许卡片联网」的开关。

## AI 是否必需

不是。未配置 AI 时，课程、FSRS、Anki 正式复习和本地课程片段答疑仍可工作。

## API key 保存在哪里

原生平台使用可用的安全存储。缺少安全存储能力的平台只在当前会话保留，并显示限制。

## SQLite 是课程真理源吗

不是。课程 JSON 是真理源，SQLite 是应用启动后生成的缓存。学习进度和复习状态则是用户本地状态。

## 修改 JSON 后为什么应用没有变化

检查 `index.json` 的内容版本。语义变化需要增加版本以触发重新导入。

## 可以直接修改数据库来编辑课程吗

不可以。编辑器、CLI 和人工修改都应写课程 JSON，再通过校验与版本导入。

## 清缓存会删除学习进度吗

正常的缓存清理只删除可再生成的数据，主要是 AI 响应缓存（内存级，退出即失效）与运行时图片缓存。早期版本存在 Anki 预渲染 HTML 缓存，该表已在 schema v22 删除、整条路径放弃，因此清缓存不会再动它。清除应用数据、数据库或牌组是不同操作。

## docs 页面如何复制

每篇正文顶部有“复制全文”。按钮复制当前页面的 Markdown 原文，包括标题、表格、代码块和链接，不包含站点导航。

## 如何构建文档子目录

```bash
SITE_BASE=/turna-web/ npm run build
```

文档资源会生成到 `/turna-web/docs/` 对应路径。

## 相关文档

- [快速开始](/guide/getting-started)
- [故障排查](/guide/troubleshooting)
- [术语表](/developer/glossary)
