# 卡片渲染与网络隔离

Anki 卡片可能包含 HTML、CSS、JavaScript、媒体引用和 cloze 模板。Turna 按卡片来源选择渲染路径，脚本与网络是独立权限。

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**，本节描述的 Official 复习器尚未通过生产 bundle 完整用户流验证（Android 写侧仅真机 debug 构建，iOS 仅模拟器 E2E）。详见 [Anki 集成](/guide/anki)。
:::

## 渲染路径

复习入口由 `OfficialAnkiReviewerRouter` 按来源分发：

| 来源 | 渲染 | 说明 |
| --- | --- | --- |
| Official（正式导入） | Official 复习器 | 模板卡面经 WebView 走原模板渲染；普通卡走结构化 Flutter 卡面 |
| Legacy（历史数据） | 已退役 | 旧版渲染器随 v1 整体退役，非 Official 来源 fail-closed 显示错误 |
| Turna 练习题 | Flutter 练习 | 课程 Interaction 渲染器 |

Legacy（v1）已整体退役：Legacy 读路径、卸载链、NoteStore 载荷均已删除，course.db 内的 `anki_notetypes` / `anki_notes` / `anki_cards_meta` 三张表也已 drop。因此不要再指望存在一条仍可处理的「历史数据兼容」通路——遇到非 Official 来源会直接报错。

题型层面再分两种（见 [交互题型](/guide/interaction-types)）：

- `ankiCard` —— 纯文本翻卡（front → back），全平台 Flutter 渲染。
- `ankiHtmlCard` —— 带 `frontHtml` / `backHtml` / `css` / `mediaBasePath` / `allowJs` 的保真卡，仅 Official 复习路径用 WebView 按原模板渲染；**课时体与错题回放里该类型的渲染器已退役**（显示「旧版导入的 Anki 卡片」占位，确认后继续）。

## 平台差异

| 平台 | 行为 |
| --- | --- |
| Android | 原生复习器经 MethodChannel/JS 协议，`AnkiHtmlCardView` 用 WebView 渲染保真卡 |
| iOS | 原生 WKWebView 复习器（`ios/Runner/AnkiReviewer/`），自定义 scheme `turna-anki://anki.local` 提供渲染资产与媒体，与 Android 协议对齐 |
| 桌面 / Web | 不实例化 WebView，降级为剥离标签的纯文本视图 |

降级保留可读内容和评分入口，不显示空白卡。

> 「现场解密 / 预渲染缓存」能力已放弃：`anki_prerendered_html` 表在 schema v22 就被 drop，相关写入与文案一并删除。排查渲染问题不要再找「预渲染失败记录」。

## JavaScript

`AnkiHtmlCardView` 的 `javascriptMode` 由两个条件放开：`allowJs`（notetype 模板含 `<script>` 时置位）或 `typeAnswerEnabled`（`type:Field` 键入模板需要输入桥）。Official 模板卡当前以 `allowJs: true` 渲染。

- 键入卡的答案文本通过 `ankiTypeAnswer` 通道回传 Flutter —— **评分永不信任页面 JS**。
- JS 关闭的卡不安装任何 JS 通道（包括高度上报）。
- 设置 → 旧版与兼容性里有 `ankiForceDisableJs` 强制关 JS 的兜底开关。
- 执行 JavaScript 不等于开放网络，见下节。

## 网络隔离

WebView 的 `NavigationDelegate` 只放行 `file:` / `data:` / `about:` 等本地导航，其余一律 `prevent` —— 模板脚本无法通过页面跳转访问外部地址。相对路径的 `<img>` / `<audio>` 经 `<base href="file:///…">` 解析到该次导入的媒体目录（`mediaBasePath`）。

## 媒体

- 缺失图片显示占位，不阻塞评分。
- 原音频失败时可对卡片文本执行系统 TTS。
- `cardTextScale` 可访问性设置用于放大卡片文本。不同复习器走不同通道：Dart WebView 轨注入 `html{zoom}`，Android 原生复习器走 `WebSettings.textZoom`，iOS 原生复习器经 `setTextZoom`（钳制 100–200）注入 `WKUserScript`。100% 时不注入，保留原模板样式。

## 安全模式

安全模式是系统健康里的运行时覆盖：强制收敛异常行为，但不改写用户保存的设置，退出后恢复进入前的配置。

## 相关文档

- [导入 Anki 牌组](/guide/anki-import)
- [设置系统](/guide/settings)
- [本地数据与隐私](/guide/data-and-privacy)
