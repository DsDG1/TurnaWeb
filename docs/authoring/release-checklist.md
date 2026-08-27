# 发布检查表

> 课程发布是**可重复流程**。完成编辑不等于可以发布。每一节都是硬性门禁；任何一节未通过即阻断。

![发布管线（八阶段）+ 回滚路径 + 灰度窗口](/images/authoring/release-flow.svg)

![发布对话框 — 专家模式（实际运行截图：id-set diff、版本号变更复选框、validate 状态）](/images/authoring/_real/07-publish-expert.png)

![发布对话框 — 教师友好模式（实际运行截图：人话描述、隐藏原始字段、按钮禁用）](/images/authoring/_real/08-publish-teacher.png)

## 0. 发布前置

- [ ] 当前分支与目标基线（`main` / 发布分支）无冲突。
- [ ] 工作区已清理临时文件（`tool/gui/var/...`、`.mimosa/` 不入版本）。
- [ ] 所有改动已 commit 并 push。
- [ ] 已通知团队当次发布的 scope（Section / Unit / Lesson / 资源 / 音频）。

## 1. 变更范围

- [ ] 只修改目标 Section 与必要资源文件。
- [ ] 未格式化或重排无关大文件。
- [ ] 未修改已发布 ID。
- [ ] 新增 ID 全局唯一。
- [ ] 删除资源前已处理全部引用（见 [资源文件](/authoring/resource-files)）。
- [ ] 未引入未注册的 `runtimeType`。
- [ ] 跨文件引用闭合（`sections/*.json` ↔ `vocab.json` ↔ `expressions.json` ↔ `grammar_points.json`）。

## 2. 内容结构

- [ ] Lesson `type` 与 `template` 匹配。
- [ ] 新 Lesson 使用 canonical content shape。
- [ ] 先修依赖存在且无环。
- [ ] 每 Unit 与 Section 未超过规模上限（见 [课程目录约定](/authoring/course-layout)）。
- [ ] Interaction 使用已注册 `runtimeType`。
- [ ] 正确答案实际存在于 `options` 或经归一化匹配。
- [ ] 音频 / 资源引用可解析（manifest 全绿）。
- [ ] 干扰项来自真实易混项或同范围词汇。

## 3. 自动检查

```bash
# 1. 结构校验（必通过，退出码 0）
python tool/course_cli.py validate --course-dir assets/courses/turkish

# 2. 内容 lint（error 必须 0；warning 视团队策略）
python tool/course_cli.py lint --course-dir assets/courses/turkish

# 3. 内容清单（核对规模变化）
python tool/export_content_inventory.py

# 4. 音频 manifest
python tool/course_cli.py audio-manifest --output /tmp/manifest.csv

# 5. 客户端测试（reseed 行为）
flutter test
```

任何**非零**退出码阻断发布。`validate` 与 `lint` 的 JSON 输出须进入 CI 产物。

## 4. 教师试做

逐项走查受影响 Lesson：

- [ ] 按学员顺序完成目标 Lesson。
- [ ] 检查首次输入、产出难度、提示顺序。
- [ ] 播放全部新音频（含重播、文本边界）。
- [ ] 故意提交错误答案，检查反馈与错题归类。
- [ ] 检查 Lesson 结束与下一课解锁。
- [ ] 在至少一种小屏设备上检查长文本与可点区域。
- [ ] 检查 [可访问性](/guide/accessibility)（屏幕阅读、对比度、动效降级）。
- [ ] 触发复习调度跳转，确认 FSRS 状态正确写入。

## 5. 版本

- [ ] 课程语义变化 → `index.json.version` +1。
- [ ] 表达文件语义变化 → `expressions.json.version` 单独 +1。
- [ ] `version` 严格递增；不复用、不回退。
- [ ] 客户端首次启动实际执行 reseed（不命中 SQLite 旧版本）。
- [ ] 表达文件版本与课程版本组合重导入键已生效。

## 6. 数据验证

- [ ] 现有用户进度未因 ID 改写而孤立。
- [ ] reseed 后课程树 Sections / Units / Lessons 数量与预期一致。
- [ ] 新资源可从 Lesson 解析（引用闭环）。
- [ ] 复习状态未被课程缓存清理误删。
- [ ] 内容清单规模变化与预期一致。
- [ ] 离线首包（核心 Section）在目标设备启动 ≤ 3 s。

## 7. 提交说明

发布 PR / Tag 必须包含以下条目：

```text
## Scope
- 修改的 Section / Unit / Lesson（含 ID）
- 新增 / 删除 / 替换的资源数（vocab / expressions / grammar_points）
- 音频文件清单与授权

## Versions
- index.json.version: 6 → 7
- expressions.json.version: 1 → 2

## Validation
- validate: pass (error=0, warning=0)
- lint:     pass (error=0, warning=4)
- audio-manifest: pass (missing=0)
- flutter test: pass

## Teacher Walkthrough
- Section 1 / Unit 1 / Lesson 1: 通过
- Section 1 / Unit 2 / Lesson 3: 修复 X 题的 Y 干扰项
- 新音频 Z：人工录音 / 授权协议

## Rollback Plan
- 上一个可用 commit: <sha>
- 回滚步骤：恢复 JSON + 新递增 version
```

## 8. 发布执行

GUI 工具栏「发布」按钮触发 `PublishDialog`（`tool/gui/src/widgets/publish_dialog.py:39`）。该对话框支持两种模式：

| 模式 | 入口 | 视窗尺寸 | 适用 |
| --- | --- | --- | --- |
| `teacher_friendly=False`（专家） | 主窗口工具栏「发布」 | 640×600 | 发布工程师；查看原始字段与 diff |
| `teacher_friendly=True`（教师） | 工具栏「教师模式 → 发布」 | 520×560 | 课程教师；只看人话描述 |

### 8.1 专家模式字段

| 区域 | 内容 | 数据源 |
| --- | --- | --- |
| 本次改动 | 文件级别 summary（行数 / ID 增删） | `CourseAdapter.release_report()` |
| 版本号变更（确认后执行，可取消） | 每个 Section 文件一个 `QCheckBox` 默认勾选；取消该文件即跳过 bump | `apply_version_bump(file_paths)` 支持部分应用 |
| id-set diff | 本次与 HEAD 的 ID 增删集合（新增 N / 删除 M / 修改 K） | git diff 解析 |
| 音频 manifest totals | 引用 N / 缺失 M / 生成任务 K | `CourseAdapter.sound_manifest()` |
| validate 状态 | 错误 / 警告计数；失败时**禁用**「确认发布」按钮 | `CourseAdapter.validate()` |
| 导出报告 | 调 `QFileDialog` 选路径，导出 Markdown 发布报告 | `CourseAdapter.release_report()` |

### 8.2 教师友好模式字段

| 区域 | 内容 |
| --- | --- |
| 改了什么 | 人话改写本次新增 / 修改 / 删除的 Section / Unit / Lesson |
| 缺什么 | validate error 经 `humanize_problem` 翻译 |
| 点发布 | 单一确认按钮；版本号自动应用；id-set diff 不显示 |
| 禁用条件 | validate error > 0 → 按钮置灰 |

`teacher/error_mapper.py::humanize_problem(problem)` 把 `(schema_path, kind, code)` 元组映射成中文短句（"第 3 节课时 2 缺少 audioAsset"、"vocab id 重复"）。映射表可本地化。

### 8.3 实际执行管线

无论哪种模式，发布按钮按以下顺序执行：

```text
1. 校验（validate + lint）
2. audio-manifest 扫描
3. 自动 version bump（仅未被取消的文件）
4. 生成 diff 报告（与上一个 git tag 对比）
5. 导出 Markdown 发布报告
6. 写入 release-notes 模板
```

**AI 拟人化能力**（按质量分修复 / AI 解释 / AI 写发布说明）为 opt-in，发布按钮不自动调用；见 [AI 能力 - AI 拟人化的边界](#ai-拟人化的边界)。

非 GUI 场景下等价 CLI：

```bash
python tool/course_cli.py publish \
  --course-dir assets/courses/turkish \
  --report-out dist/publish-report.md
```

发布执行的所有步骤均通过 telemetry 记录：`repo.publish.triggered`、`repo.publish.committed`、`repo.publish.failed`（错误携带异常堆栈）。

## 9. 回滚

- 发布前保留上一个可用 JSON 快照（git tag / 分支）。
- 回滚内容时**仍需使用新的、递增的版本号**。直接恢复旧版本号并假设客户端会重新导入是错误的。
- 回滚流程：
  1. 恢复目标 Section / Unit / Lesson 的 JSON。
  2. `validate` + `lint` + `audio-manifest` 全绿。
  3. 递增 `index.json.version`（不回退）。
  4. 客户端强制 reseed。
- 紧急回滚可临时在 `index.json` 标 `disabledSections` 字段（待实现）；当前采用直接回滚到上一个 tag。

## 10. 灰度与监控

- [ ] 新内容在至少一台 Android 真机 / 一台 iOS 真机上完成冒烟。
- [ ] 关键路径（首课 / 复习 / 听力）日志无异常。
- [ ] 客户端崩溃率（按版本）维持在基线 ±0.1%。
- [ ] 反馈通道（GitHub Issues / 反馈表）开启版本过滤。
- [ ] 24h 内未收到致命问题 → 视为稳定。

## AI 能力

发布是 AI 介入的最后一关。本节展开三个 opt-in 能力，**默认全部关闭**；作者在发布对话框显式勾选才生效。

### AI 辅助发布

`PublishDialog`（`tool/gui/src/widgets/publish_dialog.py:39`）专家模式新增 **「按质量分修复」** 按钮（位于「版本号变更」分组下方）。点击后：

1. 调 `backend/content_quality.py::overview_quality(adapter)` 取所有 Section 的六维均值。
2. 按 `mean` 升序排序，取最低的 3 个 Section。
3. 依次调工坊局部重生成 API（`workshop.regenerate_section(section_id)`），传入 prompt 块：`{"regen_mode": "by_quality", "target_dim": "<最低维>"}`。
4. 修复完成后回到发布对话框；validate 再次跑。

不阻断：若任一 Section 修复失败，跳过并标黄，作者决定是否继续。

### AI 拟人化 diff 解释

专家模式 id-set diff 表格（新增 N / 删除 M / 修改 K）右侧新增 **「AI 解释」** 按钮。点击后调 LLM：

- 输入：本次 diff 集合（id → 路径 → type）+ git tag 间 commit messages。
- 输出：自然语言 1–2 段，描述「删了哪些 id、为什么删、影响哪些 Lesson、客户端 reseed 影响」。

输出渲染在发布对话框内新 tab 「AI 解释」。**不**改写磁盘 JSON；**不**影响最终发布动作。

### AI 拟人化校验报告

发布对话框「导出报告」按钮新增 **「AI 写一段发布说明」** 复选框（默认勾选；可取消）。勾选后：

- 输入：变更范围、`index.json.version` 与 `expressions.json.version` 变更、validate / lint 计数、audio-manifest 缺失数、id-set diff、AI 拟人化解释（如有）。
- 输出：1 段中文短文（≤ 200 字），结构为「本版本 / 范围 / 风险 / 客户端影响 / 回滚路径」。

输出追加到 Markdown 报告的 `## AI Release Notes` 段。

### AI 拟人化的边界

发布按钮上的 AI 拟人化能力是 **opt-in**，默认关闭：

| 能力 | 默认 | 关闭后的影响 |
| --- | --- | --- |
| 按质量分修复 | 关 | 发布对话框不显示该按钮 |
| AI 解释 | 关 | id-set diff 旁不显示「AI 解释」按钮 |
| AI 写一段发布说明 | 关 | 报告不含 `## AI Release Notes` 段 |

**绝不**自动触发：所有 AI 拟人化能力均需作者点击按钮或勾选复选框后调用；发布动作本身的「确认发布」按钮**不**走 AI。

更多拟人化与「按质量分修复」工作流见 [AI 课程生成 - 失败模式与降级路径](/authoring/ai-course-generation#7-失败模式与降级路径)。

## 与 GUI 工具栏的对应

| GUI 操作 | 触发的发布阶段 |
| --- | --- |
| 保存 (Ctrl+S) | 1（校验） |
| 总览 → 校验数 | 1（只读面板） |
| 发布（专家） | 2 + 3 + 4 + 5；显示 id-set diff 与 bump 复选框 |
| 发布（教师模式） | 2 + 3 + 4 + 5；走 `humanize_problem` 翻译 |
| 设置 → 「保存即发布」 | 2 之后自动 3 |
| 资源库 → 资源包导出 | 6（独立流程） |
| Git 资源库 → 推送 | 7（远程协作） |

## 相关文档

- [校验与 Lint](/authoring/validation)
- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [音频资产](/authoring/audio-assets)
- [教师指南](/authoring/teacher-guide)
- [测试与质量门禁](/developer/testing)
