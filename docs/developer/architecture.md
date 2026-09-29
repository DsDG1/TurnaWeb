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
  service/       启动、导出、远端备份（WebDAV）与生命周期服务
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

### 硬禁止

这些不是风格建议，由 `test/architecture/layering_guard_test.dart` 逐文件强制，失败即层边界已破：

| 方向 | 判定 |
| --- | --- |
| `views → data` | 禁止。必须经 application 服务或 domain 仓库接口。 |
| `application → data` | 硬禁止。DAO / Repository 一律经 `domain/repositories/` 消费。 |
| `application` / `domain` / `core` / `service` → `views` | 禁止（`di/` 装配模块豁免）。 |
| `domain → application` / `domain → data` | 禁止。需要能力就在 domain 抽接口。 |

`application → data` 仅三类豁免：Drift 句柄传递、原生 SQL 事务、`CourseDatabase` 本地句柄构造，走逐文件白名单。白名单是双向校验的，既拦未授权导入，也报「已豁免但不再导入，去删豁免项」。

领域模型不依赖 Flutter Widget。共享词汇（主题 token、状态模型、结果枚举）放 `core` 或 `domain`，不写在页面文件里。

## 命名与选型

| 主题 | 既定选型 | 不得写成 |
| --- | --- | --- |
| 状态与结果建模 | `sealed class` + pattern matching | enum + if 链 |
| 多返回值 | record `(a, b)` | 一次性 DTO / `Map<String, dynamic>` |
| 领域模型 | freezed + `part`，改动后 `make gen` | 手写 `==` / `copyWith` / `toJson` |
| 依赖注入 | injectable 注解 + get_it | 手写 `GetIt.register*` |
| 路由 | auto_route 注解 | 手写 `MaterialPageRoute` |
| 具名工具类 | `abstract final class` | 可实例化 class 承载静态方法 |

页面文件统一 `*_page.dart`，新代码不得新增 `_screen.dart`。组件目录：跨功能共享放 `lib/views/widgets/`，功能域私有放 `<feature>/components/`，新功能域统一用 `components/`。

## 状态管理

状态选型三段：UI 局部状态用 `setState`；跨 widget 共享用 `provider`（`ChangeNotifier` + `context.watch/read`）；无 UI 依赖的服务 / 仓库用 `get_it`。

Provider + ChangeNotifier 承担状态广播。复杂功能拆分为专用 provider，`GameProvider` 等 facade 只负责聚合和转发，不复制状态。

**页面里不得直接 `getIt<DataLayerType>()`**；数据访问一律走 repository 接口或 application 门面。

并发状态必须显式表示。例如复习评分使用 in-flight 集合阻止评分与撤销竞态，AI 使用取消令牌和幂等键控制在途请求。

全应用 LLM 出入口唯一是 `lib/application/ai/engine/`，页面不得直连任何 LLM SDK。

日志统一走 `core/logger.dart` 的 `logger`，禁 `print`（analyzer 强制）与 `debugPrint`（仅自觉）。空 catch 必须有一行注释说明为何安全。

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

14 种 Interaction renderer 通过 Injectable 注册（`di/renderer_module.dart`），分发走 `lib/views/lesson/components/interactions/interaction_renderer.dart` 的 `lookupRenderer()`。它先用 `_handlesTypeFor()` 把实例映射到 freezed 公开接口类型再匹配——**不能直接用 `runtimeType`**，因为 freezed 生成的是私有 `_$FooImpl`，永远不等于渲染器声明的 `handlesType`。

`ankiHtmlCard` 在课时体内的渲染器是退役占位（`AnkiHtmlCardRetiredRenderer`）；Official 复习的保真渲染走 `anki_official/` 自己的路径。新增题型需要同时修改：

1. 领域 union / 序列化。
2. renderer（并在 module 登记）。
3. DI 生成（重跑 `make gen`，无需改动分发逻辑）。
4. Python 与 Dart validator。
5. JSON 示例和测试。
6. 文档。

## AI 边界

`application/ai/engine/` 是唯一 LLM 流量出口。引擎只暴露 chat 与结构化请求；课程、提示、SRS 和教材导入分别持有领域 Prompt 和解析规则。

## Anki 边界

Android 生产 Official-first 路径位于 `application/anki_official/`。Collection 与 scheduler 拥有正式卡片状态。Legacy 路径已整体退役（v1 读路径与 course.db 内的 `anki_notetypes` / `anki_notes` / `anki_cards_meta` 三表均已删除），只剩受控迁移，不是生产自动降级。

> **状态限定**：Official Anki 当前口径是「验收 NO-GO；迁移中」。Android 写侧仅在真机以 **debug 构建**验证过，**生产 bundle 尚未验证**；iOS 仅有模拟器 E2E。不得写「迁移完成」或「Android 可正常使用」。权威状态见应用仓库 `docs/official-anki-migration/34-cutover-receipt.md`。

## 相关文档

- [本地数据模型](/developer/local-data)
- [测试与质量门禁](/developer/testing)
- [核心能力一览](/guide/features)
