# 架构总览

Turna 客户端采用 Clean Architecture 风格分层，并使用 Provider、ChangeNotifier、GetIt / Injectable 和 Auto Route。分层目标是限制数据所有权和依赖方向，不是增加形式目录。

## 目录职责

```text
lib/
  application/   状态容器、应用服务、工作流编排
  core/          FSRS、语言检测、纯函数与基础策略
  courses/       课程 loader 与 validator
  data/          drift 数据库、DAO、Repository 实现
  di/            GetIt / Injectable 注册
  domain/        不可变领域模型与 Repository 接口
  routing/       Auto Route 与启动守卫
  service/       偏好、TTS、本地服务
  views/         页面与组件
```

## 依赖方向

```text
views
  -> application
  -> domain <- data
  -> core

application -> domain / core
data -> domain
domain -> no UI dependency
```

界面不直接执行数据库迁移或课程文件写入。领域模型不依赖 Flutter Widget。

## 状态管理

Provider + ChangeNotifier 同时承担状态广播和应用服务注入。复杂功能拆分为专用 provider，`GameProvider` 等 facade 只负责聚合和转发，不复制状态。

并发状态必须显式表示。例如复习评分使用 in-flight 集合阻止评分与撤销竞态，AI 使用取消令牌和幂等键控制在途请求。

## 依赖注入

GetIt 与 Injectable 注册 renderer、service 和 repository。生成文件由 `build_runner` 产生并提交。新增注解后需要重新生成；普通业务代码修改不需要。

## 路由

全屏页面使用 Auto Route。`CourseReadyGuard` 在课程数据库未准备完成时重定向到启动页。底部主 Tab 使用 IndexedStack，不伪装为 push/pop 路由。

平台默认：

- Android：Material 路由和预测返回。
- iOS / macOS：Cupertino 路由和边缘返回。
- Web：无页面转场。

调用点不直接构造任意 `MaterialPageRoute`、`CupertinoPageRoute` 或自定义 PageRouteBuilder。

## 渲染插件

14 种 Interaction renderer 通过 Injectable 注册并按 `runtimeType` 查找（`di/renderer_module.dart`；分发走 `interaction_renderer.dart` 的 `lookupRenderer()`）。注意 `ankiHtmlCard` 在课时体内的渲染器是退役占位；Official 复习的保真渲染走 `anki_official/` 自己的路径。新增题型需要同时修改：

1. 领域 union / 序列化。
2. renderer。
3. DI 生成。
4. Python 与 Dart validator。
5. JSON 示例和测试。
6. 文档。

## AI 边界

`application/ai/engine/` 是唯一 LLM 流量出口。引擎只暴露 chat 与结构化请求；课程、提示、SRS 和教材导入分别持有领域 Prompt 和解析规则。

## Anki 边界

Android 生产 Official-first 路径位于 `application/anki_official/`。Collection 与 scheduler 拥有正式卡片状态。Legacy 路径只承担受控迁移与测试，不是生产自动降级。

## 相关文档

- [本地数据模型](/developer/local-data)
- [测试与质量门禁](/developer/testing)
- [核心能力一览](/guide/features)
