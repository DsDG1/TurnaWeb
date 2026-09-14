# 测试与质量门禁

测试按数据合同、纯逻辑、应用状态、UI、构建和人工验收分层。单一测试命令不能证明全部路径成立。

## 客户端基线

::: code-group

```bash [Windows]
flutter analyze
flutter test
python -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python -m unittest discover -s tool/gui/tests -p "test_*.py"  # GUI 测试
make ci
```

```bash [Linux / macOS]
flutter analyze
flutter test
python3 -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python3 -m unittest discover -s tool/gui/tests -p "test_*.py"  # GUI 测试
make ci
```

:::

Python 测试走 unittest（非 pytest）。测试基线见应用仓库 `test/BASELINE.md`。不要用"命令执行但未收集测试"替代通过。

## 课程门禁

```bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
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
