# 课程目录约定

::: info 真理源
**磁盘上的 JSON 是真理源**。SQLite 只是 App 启动后从 JSON 派生出来的运行期缓存，编辑器、CLI、CI、客户端均按同一份目录读写。任何流程都不应以数据库为权威。
:::

![课程目录结构与规模上限契约](/images/authoring/course-directory.svg)

![Section → Unit → Lesson 三段层级与字段合同](/images/authoring/course-hierarchy.svg)

![课程结构总览（实际运行截图：8 Sections / 11 Units / 54 Lessons，词汇·表达·语法 100% 覆盖）](/images/authoring/_real/03-overview.png)

## 适用范围

本文档描述一门语言的完整课程仓库的目录形状、字段合同、规模上限与边界处理。它是编辑器保存逻辑、`course_cli` 校验逻辑与 Flutter `Seeder` 共同遵守的契约。

应用仓库主版本下另有一份同等地位的 `docs/authoring/course-layout.md`，包含 CLI 实现细节。修改字段合同须同步两端并新增测试。

## 目录结构

```text
assets/courses/<dir>/
├── index.json              # 课程索引：版本、语言、Section 列表与文件指针
├── vocab.json              # 课程级词汇
├── expressions.json        # 课程级固定表达
├── grammar_points.json     # 课程级语法点
└── sections/
    ├── section1.json       # Section A 的 Unit / Lesson 内容
    ├── section2.json
    └── ...
```

`<dir>` 是 `assets/courses/manifest.json` 里声明的**目录名**（`turkish` / `french`），与语言代码 `code`（`tr` / `fr`）不是一回事。已落地：`turkish`（正式课程，A1–B2）与 `french`（多语言并存机制的验收 fixture，**不是正式课程**，不要当课程模板照抄）。

::: tip 多课程并存
`<lang>` 路径下只承载一种语言课程；不同语种必须落各自目录，避免 cross-language 引用。
:::

## index.json 字段合同

```jsonc
{
  "version": 12,                   // 课程语义版本；任何结构/资源变更必须 +1（当前值示例）
  "language": "tr",                // BCP 47 短代码，与目录名一致
  "displayName": "Turkish",
  "sections": [
    {
      "id": "section1",
      "name": "Section 1",
      "description": "...",
      "level": "A1",               // CEFR: A1 / A2 / B1 / B2
      "prerequisiteSectionIds": [],
      "file": "sections/section1.json"
    }
  ]
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `version` | 是 | 整数。客户端在 `version` 变化时执行 reseed；同版本不重复导入 |
| `language` | 是 | 语言**代码**（如 `tr`），不是目录名；与目录名不一致是正常的（`turkish/` 目录里就是 `"language": "tr"`），validate 不检查此项 |
| `displayName` | 是 | 客户端展示用，可本地化 |
| `sections[].id` | 是 | 全课程稳定；发布后不改 |
| `sections[].file` | 是 | 相对课程根目录；必须可解析为现存文件 |
| `sections[].prerequisiteSectionIds` | 否 | 跨 Section 解锁依赖；必须为已知 ID 集合 |
| `sections[].level` | 是 | Section 目标等级；用于复习调度权重 |

::: warning ID 一旦发布即不可变
`tool/gui` 拒绝已有节点 ID 的重命名。语义变更须通过新增 + 删除完成。
:::

## Section 文件合同

```jsonc
{
  "id": "section1",
  "name": "Section 1",
  "description": "...",
  "prerequisiteSectionIds": [],
  "units": [
    {
      "id": "s1-u1",
      "name": "问候与介绍",
      "description": "...",
      "prerequisiteUnitIds": [],
      "lessons": [
        {
          "id": "s1-l1",
          "name": "Greetings / Intro",
          "type": "normal",
          "template": "intro",
          "description": "Introduce greeting forms.",
          "prerequisiteLessonIds": [],
          "content": {
            "linkedGrammarPointIds": ["g-greeting-particles"],
            /* canonical shape */
          }
        }
      ]
    }
  ]
}
```

层级固定为三段：`Section → Unit → Lesson`，不可越级或扩展。土耳其语课程的 ID 约定是 `sectionN` / `sN-uM` / `sN-lK`，法语用 `fr-section1`——都合法。ID 与文件名的真正约束只有「稳定且唯一」：Section 文件名由 `index.json` 的 `sections[].file` 显式指针决定，不是硬性命名规则。GUI 新建节点则用 `s-<hex>` / `u-<hex>` / `l-<hex>` 随机短 id。

## Canonical content 形状

新内容禁止使用扁平 `questions` 列表。每个 `template` 对应一个 canonical 容器：

| `template` | 首选字段 |
| --- | --- |
| `intro` | `content.subLessons[].stages[]` |
| `practice` | `content.subLessons[].stages[]` |
| `listening` | `content.listeningPhases[]` |
| `reading` | `content.readingPassage` + `content.stages[]` |
| `review` | `content.subLessons[]` 或 `content.stages[]` |
| `mastery` | `content.stages[]` |
| `legacy` | 仅兼容已存在的数据；新内容不得使用 |

完整字段定义见 [Lesson JSON 结构](/authoring/lesson-schema)。所有 `runtimeType` 必须已注册；`vocab.json` / `expressions.json` / `grammar_points.json` 中不存在的引用构成 error。

## 规模上限

| 限制 | 值 | 触发动作 |
| --- | ---: | --- |
| 每 Section 的 Unit | ≤ 60 | validate error，保存回滚 |
| 每 Unit 的 Lesson | ≤ 40（生产目标 ≈ 30） | 同上 |
| 每 Lesson 的 stage | 无硬上限 | 无自动检查，靠人工控制（建议 ≤ 12） |
| 每 stage 的 interaction | 无硬上限 | 无自动检查，靠人工控制（建议 ≤ 8） |
| `index.json.version` 跨次发布增量 | ≥ 1 | 工具不校验，须人工保证且不得复用 |

上限是发布契约，不是编辑器性能极限。超过上限将导致移动端首屏渲染抖动、复习调度计算量失控。

## 引用与单向数据流

```text
resources (vocab / expressions / grammar_points)
        │ stable id
        ▼
Lesson.content…items[].wordId | expressionId | grammarPointId
        │
        ▼
validate / lint (course_cli) ──► 写盘 ──► 客户端 reseed
```

引用只能从 Lesson 指向资源文件，资源不得反向引用 Lesson。同形异义项在 `pos` 或释义确实不同、且运行时需要区分时拆为多条；否则保持单一 ID。

## 校验与编辑器契约

```bash
# 应用仓库根目录
python tool/course_cli.py --course-dir assets/courses/turkish validate
python tool/course_cli.py --course-dir assets/courses/turkish lint
```

`tool/gui` 保存按钮**始终**先调用 `CourseAdapter.save()`，底层走上述 CLI。GUI 不另行定义校验规则。失败时执行以下原子回滚：

1. 阻塞最终写盘。
2. 标记问题节点（红色角标）。
3. 内存编辑状态保留，可继续修改。
4. 磁盘文件保持失败前的最后一个合法版本。
5. 允许修复后重试保存，不留半写 JSON。

## 新建议程目录

GUI 工具栏 **「课程仓库 → 新建课程目录…」** 触发 `InitCourseDialog`（`tool/gui/src/dialogs/init_course_dialog.py` 中的 `InitCourseDialog`）。该对话框在所选父目录下写出最小可运行课程骨架：

![新建课程目录对话框（实际运行截图：目标目录 / 显示名 / 语言 / Section 数 / 每单元课时数）](/images/authoring/_real/12-init-course.png)

| 表单字段 | 默认值 | 范围 | 落点 |
| --- | --- | --- | --- |
| 目标目录（父文件夹） | 上次使用的 `last_init_dir` | 任意可写目录 | 父目录路径 |
| 课程显示名 | `My Chinese-English Course` | 任意 | `index.json.displayName` |
| 目标语言代码 | `en` | BCP 47 短代码 | 目录名 `<lang>` 与 `index.json.language` |
| 源语言（提示语） | `Chinese` | 任意 | `ai_phased` 与抽取 prompt 的源语占位 |
| Section 数量 | `3` | 1–8 | `index.json.sections[]` 长度 |
| 每单元课时数 | `3` | 1–10 | 每个 Unit 的 `lessons[]` 长度 |

初始化产生的文件集：

```text
<parent>/<displayName>/
├── index.json              # version=1, language=<target>, sections[].file
├── vocab.json              # 中教英样例词表（仅首次）
├── expressions.json        # 同上
├── grammar_points.json     # 同上
└── sections/
    └── section<N>.json     # 占位 Section 文件
```

初始化产生的样例内容是**最简骨架**，仅供流程跑通。新建后必须在编辑器或工坊中替换为真实内容，不可以直接作为发布候选。`QSettings/textbook/last_init_dir` 持久化父目录选择。

## 最近仓库与启动恢复

GUI 维护最近 10 个已加载课程路径，写入 `QSettings("Turna","CourseEditor")/recent_repos` 列表（实现见 `application/settings.py::Settings.add_recent_repo`）。

| 行为 | 触发 |
| --- | --- |
| 加入最近列表 | 打开 / 新建课程成功后 prepend |
| 移除 | 「课程仓库 → 清除历史记录」一键清空 |
| 启动恢复 | 主进程启动时若 `recent_repos[0]` 存在，弹「是否打开上次使用的课程仓库？」对话框 |

启动恢复仅弹一次，用户拒绝后本次会话不再询问；下次启动仍按相同规则处理。已不存在的路径不会自动从列表移除，下一次「课程仓库 → 最近仓库」展开时会显示灰条目（由 `_populate_recent_menu` 处理）。

## 版本与重导入

| 触发条件 | `index.json.version` 变化 | 客户端动作 |
| --- | --- | --- |
| 字段语义变化 | +1 | reseed（清空进度缓存） |
| 仅修复 `lint` 提示 | +1 | reseed |
| 仅文案/翻译润色 | +1（推荐） | reseed |
| 注释/缩进 | 不变 | 不重导入 |

`version` 只能递增，不可回退或复用。回滚发布内容时使用**新**的递增版本号，不是恢复旧值。

## 多语言并存

每种语言独立目录、独立版本。跨语言互引不被支持。土耳其语默认目录为 `assets/courses/turkish/`。新增语种需：

1. 创建 `assets/courses/<lang>/`。
2. 复制最小可运行模板（含 `index.json`、`vocab.json`、`expressions.json`、`grammar_points.json`）。
3. 递增该目录自身的 `version`。
4. CI 矩阵中追加 validate/lint 任务。

## AI 能力

课程目录的创建与维护全程被 AI 流程感知。下表给出 4 个 AI 入口与目录字段的对应关系：

| AI 入口 | 影响的目录/字段 | 实现位置 |
| --- | --- | --- |
| 「新建课程目录」→ 空白 AI 项目 | 写 6 字段默认骨架（`displayName` / `language` / 源语言 / Section 数 / 每单元课时数），目标落 `source_path=None` 的空白 AI 项目 | `InitCourseDialog` → `TextbookProject.create(source_path=None)` → `tool/gui/src/dialogs/textbook_library_dialog.py` |
| 「新建课程目录」→ 教材项目 | 同上骨架 + 后续工坊教材抽取产生 vocab / expressions / grammar_points | `TextbookProject.create(source_path=<file>)` |
| 最近仓库 | 启动时按 `recent_repos[0]` 自动恢复；`ai_fixer` 等组件读取最近课程的 schema 历史 | `app.py::_maybe_open_last_repo` |
| 启动询问 | 「是否打开上次使用的课程仓库？」弹窗；记住会话选择 | `QMessageBox.question` |

`InitCourseDialog` 的 6 字段中的「目标语言」与「源语言」是后续工坊 `backend/lesson_presets.py` 的 `build_preset_lesson` 与抽取 prompt 的核心上下文。注意工具**不校验**目标语言与目录名是否一致。源语言影响 LLM 翻译方向与抽取 prompt 的语言对模板选择（参考 [AI 课程生成 - 设置与运维](/authoring/ai-course-generation#15-设置与运维)）。

新建后的课程目录默认进入空白 AI 项目流；教材项目须在工坊对话框点击「从教材新建…」并选择源文件。两种项目模式下的 AI 行为差异见 [AI 课程生成 - 决策矩阵](/authoring/ai-course-generation#31-项目模式--生成模式--预设-矩阵)。

## 与 GUI 工具栏的对应

| GUI 入口 | 影响的目录/字段 |
| --- | --- |
| 课程仓库 → 打开 | 选定根目录，递归加载 `index.json` |
| 课程仓库 → 新建 | `InitCourseDialog` 6 字段 → 写入目录骨架与默认 `version: 1` |
| 课程仓库 → 最近仓库 | `QSettings/recent_repos`，最多 10 条 |
| 课程仓库 → 清除历史记录 | 清空 `recent_repos` 列表 |
| 启动询问 | `_maybe_open_last_repo` 弹「打开最近仓库」对话框 |
| 保存 (Ctrl+S) | `CourseAdapter.save()` → 校验 → 写盘 |
| 总览 | 读 `index.json` + 所有 `sections/*.json`，聚合统计 |
| 资源库 | 直接读写 `vocab.json` / `expressions.json` / `grammar_points.json` |
| 发布 | `version` Bump + `sound-manifest` + `validate` + diff 报告导出 |

## 相关文档

- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
- [音频资产](/authoring/audio-assets)
- [发布检查表](/authoring/release-checklist)
- [教师指南](/authoring/teacher-guide)
