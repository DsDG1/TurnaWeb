# Anki 集成

Turna 内嵌官方 Anki 内核（Rust 编写，经 FFI 调用）。`.apkg` 导入后由 Official Collection 持有 note、card、revlog 与正式调度状态。Android arm64 与 iOS 走同一条生产路径（iOS 为静态链接 rslib + WKWebView 复习器）。`.colpkg` 当前不属于生产导入合同。

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**。

- Android 写侧链路（导入→账本→视图→删除收敛）曾于 2026-09-02 在真机以 **debug 构建**证明成立；同夜暴露的一个课程装载缺陷已在代码层修复，但**修后未在任何 Android 设备复跑**。
- iOS 侧于 2026-09-26 完成**模拟器** E2E（真 `.apkg` 导入 + 复习器渲染），非真机。
- **生产 bundle 的完整用户流从未验证。**

因此本文档不写「迁移完成」，也不写「Android 可正常使用」。两项限制仍开放未定：引擎生命周期耦合可能使物理删除延迟到下次导入；同 GUID 冲突的来源所有权策略尚未定案。
:::

产品页演示见 [anki.html](../../anki.html)。

## 数据所有权

| 对象 | 所有者 |
| --- | --- |
| Official note / card / revlog | Official Collection |
| Official 正式评分 | Official scheduler |
| 课程树展示 | 从 Official 来源建立的投影 |
| 课程原生词汇与表达 | Turna 课程数据库与 Dart FSRS |

两类项目可显示在统一复习入口，但不混写调度状态。Official runtime 不可用时，Official 来源必须 fail closed。

## 导入阶段

1. 选择 `.apkg`。
2. 生成一次导入执行计划。
3. 检查 notetype 映射与预览。
4. 写入 Official Collection。
5. 建立课程投影与 source scope。
6. 通过共享复习入口启动 Official review session。

## 渲染

- 保真模板卡默认就经 WebView 渲染（Android / iOS），以保留原模板的 HTML、CSS 与脚本行为。
- 桌面与 Web 不实例化 WebView，降级为剥离标签的纯文本视图。
- 卡片网络被无条件阻断，无法通过设置放开；JavaScript 另有独立开关。两者权限不同，执行 JavaScript 不等于开放网络。
- 渲染失败依次降级，不能让复习停在空白卡。

## 数据在哪

牌组、媒体与复习记录保存在设备本地，不要求账号或 AnkiWeb。删除牌组、清缓存和清除应用数据是不同操作。

## 下一步

- [导入 Anki 牌组](/guide/anki-import)
- [卡片渲染与网络隔离](/guide/anki-rendering)
