# Anki 集成

Turna 的 Android 生产路径内嵌 Official Anki Core（rslib FFI）。`.apkg` 导入后由 Official Collection 持有 note、card、revlog 与正式调度状态。`.colpkg` 当前不属于生产导入合同。

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
3. 检查 notetype 映射与组织预览。
4. 写入 Official Collection。
5. 建立课程投影与 source scope。
6. 通过共享复习入口启动 Official review session。

## 渲染

- 默认使用 Flutter HTML。
- 需要 JavaScript、MathJax 或现场解密时才使用移动 WebView。
- 网络与 JavaScript 分别授权，网络默认完全离线。
- 渲染失败依次降级，不能让复习停在空白卡。

## 数据在哪

牌组、媒体与复习记录保存在设备本地，不要求账号或 AnkiWeb。删除牌组、清缓存和清除应用数据是不同操作。

## 下一步

- [导入 Anki 牌组](/guide/anki-import)
- [卡片渲染与网络隔离](/guide/anki-rendering)
