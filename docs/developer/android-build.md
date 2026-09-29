# Android 构建

Android 是当前主力发布平台。构建使用官方 Flutter SDK 与 JDK 17。OHOS fork、OHOS target 和相关补丁不属于当前构建链。

## 环境

```bash
flutter --version
java -version
flutter doctor
```

要求：

- Flutter 官方 stable，满足项目 `pubspec.yaml` SDK 范围。
- JDK 17。
- Android SDK、platform-tools、build-tools 和项目要求的 NDK。
- `android/local.properties` 中的 SDK 路径有效。

## 首次构建

```bash
flutter pub get
flutter build apk --debug
```

生成代码已提交。只有修改 Freezed、JsonSerializable、AutoRoute、Injectable 或 drift 注解/表定义时执行：

```bash
make gen
```

## 发布 ABI

Official Anki native 库当前按 arm64-v8a 交付。发布命令：

```bash
flutter build apk \
  --release \
  --split-per-abi \
  --target-platform android-arm64
```

未包含匹配 native 库时，不发布声称支持其它 ABI 的 fat APK。Official runtime 缺失时 fail closed，不回退到 Legacy scheduler。

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**。Android 写侧（导入→账本→视图→删除收敛）仅在 2026-09-02 于真机以 **debug 构建**验证过，**生产 bundle 完整用户流尚未验证**；iOS 侧只有模拟器 E2E。不得宣称「迁移完成」或「Android 可正常使用」。权威状态与证据台账见应用仓库 `docs/official-anki-migration/34-cutover-receipt.md`。
:::

## 质量命令

```bash
flutter analyze
flutter test --exclude-tags golden
make test-python
make ci
```

`make ci` 等价于 `format-check analyze test test-python lint-gui guard-gui test-gui build-release-smoke` 共 8 个目标。

`flutter test --exclude-tags golden` 才是本地绿线；排除 golden 是因为存在已登记的本机失配，已知清单以 `test/BASELINE.md` 为准。

## 常见错误

| 错误 | 原因 | 处理 |
| --- | --- | --- |
| JVM runtime 过旧 | `JAVA_HOME` 指向 Java 8/11 | 改为 JDK 17并重启终端 |
| `sdk.dir` 缺失 | Android SDK 未配置 | 用 Android Studio 初始化或写 local.properties |
| NDK / license 错误 | SDK 组件不完整 | 安装项目要求版本并接受许可 |
| native library 缺失 | ABI 与 Official 库不匹配 | 使用 arm64 发布命令 |
| 生成文件冲突 | 注解模型变更未生成 | 执行 build_runner 并检查 diff |

## 发布脚本

```bash
python tool/build_release.py --version <version>
# 或
make build-release VERSION=<version>
```

版本值由发布流程决定，不复制文档中的示例版本作为新版本。脚本会断言 `<version>` 与 `pubspec.yaml` 的 `version` 一致，不符即退出。

## 相关文档

- [安装应用](/guide/install-app)
- [测试与质量门禁](/developer/testing)
- [故障排查](/guide/troubleshooting)
