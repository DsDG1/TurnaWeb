# 测试与质量门禁

测试按数据合同、纯逻辑、应用状态、UI、构建和人工验收分层。单一测试命令不能证明全部路径成立。

## 客户端基线

::: code-group

```bash [Windows]
make gen                                                   # 仅在改动注解后
flutter analyze
flutter test --exclude-tags golden
python -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python tool/gui/run_gui_tests.py ci                          # GUI 快速档
make ci
```

```bash [Linux / macOS]
make gen                                                   # 仅在改动注解后
flutter analyze
flutter test --exclude-tags golden
python3 -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python3 tool/gui/run_gui_tests.py ci                          # GUI 快速档
make ci
```

:::

`flutter test --exclude-tags golden` 才是**本地绿线**。排除 golden 是因为存在已登记的本机失配（`course_tree` 相关），直接跑全量 `flutter test` 会因这些已知失配出红。已知失配清单以应用仓库 `test/BASELINE.md` 为准，该文件前插式、只增不删。

`make ci` 等价于 `format-check analyze test test-python lint-gui guard-gui test-gui build-release-smoke` 共 8 个目标，不要用只跑其中几项的命令替代。

GUI 测试走分档运行器 `run_gui_tests.py`：`ci` 是快速档，`full` 才是 CI 跑的全量档（等价于 `make test-gui`）。

Python 测试走 unittest（非 pytest）。测试基线见应用仓库 `test/BASELINE.md`。不要用"命令执行但未收集测试"替代通过。

## 课程门禁

```bash
python tool/course_cli.py --course-dir assets/courses/turkish validate
python tool/course_cli.py --course-dir assets/courses/turkish lint
python tool/export_content_inventory.py
```

Dart validator 测试与 Python CLI 同时存在，用于防止规则分叉。

## Web 与 docs

```bash
npx tsc -b --pretty false
npm test
npm run build
```

当前 React 测试覆盖页面入口、导航合同和主要链接。VitePress 构建用于发现 Markdown、Vue 主题和资源打包错误。

## 测试层级

| 层级 | 目标 |
| --- | --- |
| Pure logic | FSRS、语言检测、解析、去重、ID 规则 |
| Repository / DAO | 事务、迁移、查询和状态恢复 |
| Provider | 队列、并发、取消、状态通知 |
| Widget | 可访问名称、交互和页面状态 |
| Contract | 路由、课程 schema、平台门控 |
| Integration | 导入、reseed、正式复习、构建产物 |
| Manual | 音频、真实设备、复杂 WebView、教师试做 |

## 高风险回归

- Official Anki owner 被错误降级。
- 评分事务部分写入。
- 课程 ID 修改导致进度孤立。
- 安全模式改写用户永久设置。
- 缓存清理删除业务状态。
- AI 输出绕过 schema 直接写入。
- 高对比或 200% 文本缩放阻断核心操作。

## 失败处理

1. 保存完整失败命令和退出码。
2. 确认首次失败，不只记录重跑成功。
3. 缩小到最小测试或 fixture。
4. 判断是测试不稳定、环境问题还是产品回归。
5. 修复后运行最小测试和受影响完整测试组。
6. 发布前运行聚合门禁。

## 证据格式

发布或变更说明至少记录：命令、平台、结果、失败数、跳过数和已知限制。不要只写“测试通过”而无范围。

## 相关文档

- [架构总览](/developer/architecture)
- [校验与 Lint](/authoring/validation)
- [发布检查表](/authoring/release-checklist)
