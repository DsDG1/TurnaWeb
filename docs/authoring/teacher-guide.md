# 教师指南

> 面向不写代码的教师。目标：在本机完成一节 intro 课的产出、保存、教师试做与提交。不需要 Python / 命令行背景。

完整逐步说明（含验收标准）在应用仓库 `docs/authoring/teacher-guide.md`。本文档聚焦 GUI 工具栏与课程树的对应关系。

![Turna GUI 主界面（实际运行截图，加载 `assets/courses/turkish`）](/images/authoring/_real/01-main-window.png)

![教师产出一节 intro 课的六步流程与回退路径](/images/authoring/teacher-workflow.svg)

![教师模式试做：真实 Welcome 课的 multipleChoice 题型渲染](/images/authoring/_real/06-teacher-mode.png)

![课程树右键菜单（实际运行截图：新增 / 删除 / AI 编辑 / AI 修正 / 预设）](/images/authoring/_real/16-context-menu.png)

## 0. 准备

1. 从技术对接人处获得 `turna-gui`（或对应平台的可执行文件），双击运行。无需安装 Python。
2. 取得课程目录副本（推荐本地副本，不要直接改团队共享目录）。例如 `我的课程/turkish/`。
3. 启动后通过工具栏 **「课程仓库 → 打开课程目录」** 选定该目录。
4. 状态栏显示 `已加载：<路径>` 即就绪。

::: tip 团队协作
使用 **「资源库 → Git 资源库」** 接入远程仓库；不直接在共享目录写盘，避免覆盖别人未提交的修改。
:::

## 1. GUI 总览

```text
+----------------------------------------------------------------------------+
| [课程仓库] [保存] [课程工坊] [总览] [资源库] [发布] [生成听力音频]        |
| [教师模式] [设置]                                                          |
+----------------------------+-----------------------------------------------+
| 课程树 (Section/Unit/      | 详情面板（选中节点后）                       |
|  Lesson)                   |  - 元数据表单                                |
|                            |  - 课时编辑器 / 蓝图 / 题型表单              |
+----------------------------+-----------------------------------------------+
| 状态栏：就绪 | AI 校验防护激活中 | AI 生成内容仅供参考…  |  当前路径：…  |
+----------------------------------------------------------------------------+
```

工具栏顺序、按钮文字、状态栏常驻提示均随上下文变化（见下节「教师模式 UI 变化」）。

## 2. 产出一节 intro 课

### 2.1 新建

1. 在目标 Unit 上右键 → **新建 Lesson**。
2. 弹出模板选择，选 **intro（认识新词）**（如需 listening/reading/mastery 可走「功能课向导」三步产出）。
3. 程序自动生成 id（`l-<8 位随机 hex>`），教师只填：
   - `name`：用户可见名称
   - `description`：本课的可验证目标（一句话即可）
   - `prerequisiteLessonIds`：同 Unit 内必须先完成的课
4. 点击「创建」。模板写入缺省的 canonical `content`：
   - `subLessons[0].stages[0]`：展示新词（`showWord`）
   - `subLessons[0].stages[1]`：选择释义（`multipleChoice`）
   - `subLessons[0].stages[2]`：填空巩固（`fillBlank`）

> 若使用 **「课程仓库 → 新建课程目录…」** 一次性写出含样例内容的完整课程骨架，请参考 [课程目录约定 - 新建议程目录](/authoring/course-layout#新建议程目录)。

### 2.2 填词

- 词汇**必须**来自 `vocab.json`。**禁止**在 Lesson 内复制另一份词表。
- 题型表单的「词项」下拉关联到 `vocab.json.words[]`，按 ID 绑定。
- 干扰项从同范围同词性的真实易混项中选取，**不要**填入随机无关词。
- 释义以学习者母语写就；非空、不含占位文本。

### 2.3 保存

1. 点击工具栏 **「保存」**（或 `Ctrl+S`）。
2. 触发 `validate` + `lint`：
   - 通过：磁盘写盘，状态栏显示 `已保存`。
   - 失败：状态栏显示 `校验失败，已回滚`；问题节点在课程树显示红角标；详情面板列出具体错误与 JSON Pointer 定位。
3. 修复后重新保存，**不**手动编辑 JSON。

> 仓库加载失败时弹「加载失败」对话框，下方 **AI 分析** 按钮调 LLM 给出可能根因与建议（详见 [校验与 Lint - AI 加载错误分析器](/authoring/validation#ai-加载错误分析器)）。该分析不替代结构性修复。

### 2.4 教师试做

1. 点击工具栏 **「教师模式」**。
2. 在桌面端模拟学员完整操作一遍：
   - 选词 / 填空 / 听音按钮
   - 故意答错，验证反馈与错题归类
   - 触发「下一课」与「复习」入口
3. 至少一次完整通过该 Lesson。**不通过即视为未完成**。

详细试做对话框见下文「LessonPreviewDialog 流程」。

### 2.5 资源库联检

打开工具栏 **「资源库」**，在该 Lesson 引用的每个词汇/表达/语法点上做一次跳转，确认：

- 引用 ID 存在。
- `translation` 与释义一致。
- 无悬挂引用。

## 3. 课程树常用操作

| 操作 | 触发 | 备注 |
| --- | --- | --- |
| 新建 | 右键 → 新建 | 弹出模板选择；可走 FunctionalLessonWizard |
| 复制 | `Ctrl+D` | 复制当前节点及其下级 |
| 重命名 | `F2` | 仅改 `name`，ID 不变 |
| 上移 / 下移 | `Ctrl+↑` / `Ctrl+↓` | 仅排序，不影响依赖 |
| 删除 | `Delete` | 二次确认；引用数 > 0 时阻断 |
| 套用预设 | 多选 Lesson → 右键 → 批量套用预设… | 替换为预设的题型组合（单课无此入口） |
| AI 编辑此节点 | 右键 → AI 编辑此 Section/Unit/Lesson | 弹窗针对当前节点改写 |
| AI 修正此节点 | 右键 → AI 修正 | 把当前节点的 validate 错误回灌给 LLM |
| 批量操作 | `Ctrl` / `Shift` 多选后右键 | 复制 / 移动 / 套用预设 / 删除 |
| 撤销 / 重做 | `Ctrl+Z` / `Ctrl+Y` | 由 `QUndoStack` 驱动；上限在「设置 → 编辑器」配置 |
| 定位节点 | 总览点击 Lesson | 总览与课程树双向跳转 |

## 3.1 课程树右键菜单完整动作

`tool/gui/src/widgets/course_tree.py::_build_context_menu` 提供按节点类型分组的菜单：

| 节点 | 动作 |
| --- | --- |
| Section | 新建 Unit / 删除 Section / AI 编辑此 Section / AI 修正此 Section |
| Unit | 新建 Lesson / **功能课向导…** / 删除 Unit / AI 编辑此 Unit / AI 修正此 Unit |
| Lesson | 复制 Lesson（`Ctrl+D`）/ 删除 Lesson / AI 编辑此 Lesson / AI 修正此 Lesson |
| 选中多 Lesson | 批量复制（N）/ 批量移动到…/ 批量套用预设…/ 批量删除（N） |

### 3.2 AI 动作完整清单

课程树右键可触发的 8 个 AI 入口：

| 入口 | 触发位置 | 行为 |
| --- | --- | --- |
| AI 编辑此 Section | Section 右键 | 自由指令 + 4 类预设；走 `MergeAiSectionCommand` |
| AI 编辑此 Unit | Unit 右键 | 自由指令 + 4 类预设；走 `AiEditUnitCommand` |
| AI 编辑此 Lesson | Lesson 右键 | 自由指令 + 4 类预设；走 `AiEditLessonCommand` |
| AI 修正此 Section | Section 右键 | 自动注入 Section 内 validate errors |
| AI 修正此 Unit | Unit 右键 | 同上，Unit 范围 |
| AI 修正此 Lesson | Lesson 右键 | 同上，Lesson 范围 |
| 局部重生成 | Unit / Lesson 右键（工坊内） | 上下文收集 + 冲突解决；走 `MergeAiSectionCommand` |
| 试做 AI 改题 | 教师模式 → 题目 AI 按钮 | 单 Interaction 重生成；走 `AiEditLessonCommand` |

校验面板与发布对话框另有 3 个 AI 入口（见 [校验与 Lint - AI 能力](/authoring/validation#ai-能力) 与 [发布检查表 - AI 能力](/authoring/release-checklist#ai-能力)）。

所有删除动作在引用数 > 0 时弹二次确认；引用计数来自 `CourseAdapter` 全课程扫描。AI 节点编辑的具体语义见 [Lesson JSON 结构 - AI 节点编辑对话框](/authoring/lesson-schema#ai-节点编辑对话框)。

## 4. 课程工坊（可选）

当产出方式以教材抽取或空白 AI 生成为主时：

1. 工具栏 **「课程工坊」** 打开非模态窗口。
2. **课本项目库**（首次启动时显示）列出现有项目，可 **从教材新建** 或 **空白 AI 项目**。详见 [教材导入 - 课本项目库](/authoring/textbook-import#课本项目库textbooklibrarydialog)。
3. 三栏画布：
   - 左栏：拖入教材或勾选入池的知识点
   - 中栏：主题 / CEFR / 模板 / `Ctrl+Enter` 生成
   - 右栏：结构大纲、试做、diff、AI 修复、导入
4. 草稿生成后**必须**逐课试做并人工校对。
5. 导入成功后回到主窗口 **保存**。详见 [教材导入](/authoring/textbook-import)。

## 5. 资源库使用

打开工具栏 **「资源库」** 进入三标签页：

- **vocab**：词汇
- **expressions**：固定表达
- **grammar_points**：语法点

操作：

- 顶部搜索栏跨表过滤（大小写不敏感）。
- 双击行内任意列原地编辑。
- 多选行后批量删除。
- 导出 CSV → 翻译/校对外部编辑 → 导入 CSV（覆盖 / 合并 / 报错中断）。
- 「资源包」导出 / 导入整个 `vocab.json + expressions.json + grammar_points.json`。
- 删除前系统自动扫描引用；引用数 > 0 阻断。

## 6. 提交给发布

1. 工具栏 **「发布」** 触发 `PublishDialog`。详见 [发布检查表 - 8. 发布执行](/authoring/release-checklist#8-发布执行)。
2. 专家模式显示 id-set diff、版本号变更复选框、音频 manifest totals；教师模式走 `humanize_problem` 翻译。
3. 全绿后导出 Markdown 发布报告。
4. 把报告与变更 commit 一起提交。

## 7. 常见约束

| 约束 | 原因 | 处置 |
| --- | --- | --- |
| 每 Section ≤ 60 Unit | 移动端首屏渲染 | 拆分 Section |
| 每 Unit ≤ 40 Lesson | 复习调度计算量 | 拆分 Unit |
| 先修只在同 Unit 内 | 跨层依赖在更高层声明 | 调整所属 Unit |
| 听力课必须有音频 | manifest 校验 | 先做 intro / practice，再补听力 |
| 词汇必须来自 vocab.json | 引用闭环 | 在资源库补建 |

## 8. 故障与求助

| 现象 | 处置 |
| --- | --- |
| 保存按钮灰 | 存在 validate error；打开校验面板修复 |
| 课程树节点红角标 | 点击红角标查看具体错误 |
| 资源引用红色警示 | 资源已被删除或拼写错误；用资源库补建或替换 |
| 音频播放异常 | 见 [音频资产](/authoring/audio-assets) QA 清单 |
| 工坊抽取失败 | 走 OCR 流程或换预设重试 |

## 9. 不做的事

- 不直接编辑磁盘 JSON 绕过校验。
- 不在 Lesson 内复制整份词表。
- 不修改已发布 ID。
- 不在 Lesson 内使用扁平 `questions`（新内容）。
- 不在共享目录直接写盘。
- 不删除有引用的资源。
- 不在保存失败时强行覆盖。

## A. 教师模式 UI 变化

工具栏 **「教师模式」** 是一个 `QCheckAction`（`app.py::_on_mode_toggled`）。切换后以下元素变化：

::: details 逐项对照
| 元素 | 关闭 | 开启 |
| --- | --- | --- |
| 工具栏按钮文字 | 教师模式 | 教师模式：开 |
| 窗口标题 | Turna 课程编辑器 | Turna 课程编辑器 · 教师模式 |
| 详情面板渲染 | `DetailPanel` 直接渲染 | 走 `teacher_view_model` 隐藏高级字段 |
| `runtimeType` 标签 | 英文枚举（`multipleChoice`） | 中文标签（选择题） |
| AI 按钮 | 全部显示 | 默认隐藏；按权限分级显示 |
| 状态栏常驻提示 | `AI 校验防护激活中` | 替换为 `教师模式：试做中` |

`teacher_view_model.TeacherViewModel`（`tool/gui/src/backend/teacher_view_model.py`）按节点类型给出视图投影：教师模式下，题目的答案字段（`correctIndex` / `correctIndices` / `answer` 等）不被渲染到 UI；学员提交答案后才显示对错。
:::

## B. LessonPreviewDialog 流程

`tool/gui/src/teacher/preview_window.py:252` 实现的 `LessonPreviewDialog` 提供 Lesson 级试做视图。入口：

- 教师模式 → 课程树右键 → **试做此 Lesson**。
- 教师模式 → 详情面板右上角 **试做** 按钮。
- 教师模式 → 总览点击 Lesson 卡片 → 弹窗预览。

::: details 预览区域与题型支持
| 区域 | 内容 |
| --- | --- |
| 顶部 | Lesson 名称 / `template` 中文标签 / 总进度 `3/12` |
| 中部 | 当前 Interaction 渲染（按 `runtimeType` 调对应 widget） |
| 底部 | 上一题 / 下一题 / 重新开始 / 显示答案（仅教师模式） |
| 右上角 | 退出试做 → 关闭对话框返回主窗口 |

支持 `runtimeType` 渲染：`showWord` / `multipleChoice` / `multiSelect` / `fillBlank` / `translateSentence` / `reorderSentence` / `typeTheWord` / `listenAndPick` / `listenOnly` / `readingMcq` / `readingTrueFalse` / `readingShortAnswer` / `ankiCard` / `ankiHtmlCard`（共 14 种；Anki 两种在桌面是降级预览 —— `ankiCard` 显示为普通翻卡，`ankiHtmlCard` 显示剥标签文本 + 「App 渲染为准」标记）。试做结束不写盘；纯运行时模拟。
:::

## C. 状态栏与全局通知

`QStatusBar` 固定 28px 高，分三段：

::: details 三段对照
| 段 | 内容 | 来源 |
| --- | --- | --- |
| 左 | 当前操作状态（如「已加载: assets/courses/turkish」、「校验失败，已回滚」） | 业务调用 `statusBar().showMessage(msg, timeout)` |
| 中 | AI 校验防护 / 撤销 / 复制粘贴 等临时提示 | `_on_status` 回调 |
| 右 | 永久挂载的免责声明「AI 生成内容仅供参考，请作者自行审核其准确性与适用性。」 | `app.py::_build_status_bar` |
:::

`telemetry` 事件贯穿所有写盘动作；`操作日志` 标签页（设置第 8 个 tab）可回看最近 200 条操作。

## AI 协作模式

教师在 GUI 中可以 8 处主动调用 AI，也可以选择不调用。本节给出**何时用 / 何时不用 / 何时绝对不下放**的边界。

### 何时用 AI

| 场景 | 入口 | 体感 |
| --- | --- | --- |
| 教材抽取后批量生成草稿 | 工坊 → 从教材新建 → 抽章 → Grounded 生成 | 减少手工拼装 Lesson 的时间 |
| 空白项目冷启动 | 工坊 → 空白 AI 项目 → 主题/等级 → 快速/精修 | 无需从零手写 canonical content |
| 课程树右键局部润色 | 树右键 → AI 编辑此 Lesson/Unit | 4 类预设指令或自由指令 |
| 试做时改题 | 教师模式 → 题目 → AI 按钮 | 局部重生成 + diff 预览 |
| 校验清零 | 校验面板多选 → AI 自动修正 | 不必逐条点修 |
| 加载失败诊断 | 加载失败弹窗 → AI 分析 | 拟人化解释堆栈 |
| 工坊任务失败 | 失败弹窗 → 拟人化分析 | 给可能根因 + 修复建议 |
| 总览看低分节 | 总览 → Section 卡片 → AI 修复 | 按六维质量分定向 |

### 何时不用 AI

| 场景 | 原因 |
| --- | --- |
| 发布前的最终人工审定 | 校验与 lint 是结构性，AI 不替代作者审校 |
| 听力音频的人工录音决定 | 录音由作者或母语者完成；TTS 不可替代 |
| 关键先修依赖的拓扑设计 | 跨 Lesson 解锁与 FSRS 调度由作者设计；AI 改写拓扑易破坏复习曲线 |
| 资源 ID 的最终命名 | ID 是引用锚点；AI 命名易冲突 |
| 真实图片 / 视频的选用 | AI 不可访问真实媒体库；选用决策由作者完成 |

### 教师不下放 AI 的边界

硬规则，违反任一条的 AI 输出必须由作者裁决，不得静默应用：

1. 不让 AI 改既有节点的 `id`（包括 `l-` / `u-` / `s-` / `w-` / `e-` / `g-` 前缀的）。
2. 不让 AI 删既有 `vocab` / `expression` / `grammar_point`。
3. 不让 AI 自动覆盖既有 Section（必须人工选合并 / 跳过 / 覆盖 / 作为新 Section）。
4. 不让 AI 在共享目录自动写盘（仅在 `course_dir` 内允许）。
5. 不让 AI 在没有作者 review 的情况下进入发布。
6. 不让 AI 跳过 `validate` 与 `lint`。
7. 不让 AI 替换为未注册的 `runtimeType`。
8. 不让 AI 跨越语言对边界（如 `tr` 课程引用 `en` 课程的 `vocab`）。

GUI 在上述边界处会拒绝 AI 写入并提示冲突；详见 [AI 课程生成 - 创作者不下放的边界](/authoring/ai-course-generation#8-创作者不下放的边界)。

### 3.3 模式与不下放的对应

AI 的「下不下放」由 4 档体验模式控制。`observer` 模式下任何 AI 写动作均被拒绝；`copilot` 默认安全；`active` 启用 ambient / soft / defer 套装；`immersive` 允许白名单静默执行（出站操作仍拒绝），`Ctrl+Shift+D` 随时降档回 `copilot`。完整决策矩阵见 [AI 控制模式 - 决策矩阵](/authoring/ai-control-modes#7-决策矩阵模式--能力)。

## 下一步

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
- [发布检查表](/authoring/release-checklist)
- [课型说明](/guide/lesson-types)
