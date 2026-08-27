# 安装应用

本文描述 Turna 客户端的安装边界。Web 产品主页与 VitePress 文档站不是学习客户端，不保存课程进度，也不执行复习调度。

## 平台状态

| 平台 | 状态 | 能力边界 |
| --- | --- | --- |
| Android | 主力平台 | 支持课程、SQLite、TTS、Official Anki Core 与正式发布产物 |
| iOS | 保留支持 | 支持基础课程与 WebView；Official Anki Core 不作同等承诺 |
| Web | 有限支持 | 不提供原生 WebView 保真；本地数据库与原生插件能力受浏览器限制 |
| HarmonyOS / OHOS | 已停止 | 不再生成产品构建，不再增加适配 |

## 从源码运行

环境要求：官方 Flutter SDK `>=3.2.3 <4.0.0`。Android 构建使用 JDK 17。

```bash
git clone git@gitee.com:dhwdwf3/Varnamalaplus.git
cd Varnamalaplus
flutter pub get
flutter run
```

生成文件已经提交到仓库。普通克隆不执行 `build_runner`。仅当 Freezed、JsonSerializable、AutoRoute 或 Injectable 注解发生变化时重新生成：

```bash
flutter pub run build_runner build --delete-conflicting-outputs
```

## Android 构建

调试 APK：

```bash
flutter build apk --debug
```

发布包使用 arm64。Official Anki native 库当前按 arm64-v8a 打包；不要发布宣称支持其它 ABI、但未包含对应 native 库的产物。

```bash
flutter build apk --release --split-per-abi --target-platform android-arm64
```

## 安装后状态

首次启动执行以下操作：

1. 读取 bundle 内的课程索引。
2. 检查课程内容版本。
3. 将 JSON 派生为本地 SQLite 缓存。
4. 完成数据库准备后进入课程界面。

课程 JSON 是内容真理源。SQLite 是运行缓存。清除应用数据会移除本地进度、设置与派生缓存；重新安装前应先完成需要的数据导出。

## 验证

- 首页可进入课程树。
- 无网络时可打开已安装课程。
- 系统 TTS 可用时，土耳其语词项能够朗读。
- Android Official Anki runtime 不可用时，相关入口应明确失败，不应静默切换到另一套调度器。

## 相关文档

- [本地数据与隐私](/guide/data-and-privacy)
- [Android 构建](/developer/android-build)
- [故障排查](/guide/troubleshooting)
