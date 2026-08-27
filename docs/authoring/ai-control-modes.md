# AI 控制模式（创作者视角）

> **AI 不是单一形态**。`tool/gui` 暴露了至少 12 个可切换的"AI 控制模式"，从"完全不信任"到"高自治权"分档。本文是这些模式的**索引**与**安全档位手册**。
>
> 本文档聚焦「模式是什么 / 何时切换 / 创作者不下放的边界」。模块字段合同与开发者向深度报告见应用仓库 `tool/gui/docs/ai_configuration_and_features_report.md` 与 `tool/gui/docs/ai-intrusiveness-ladder-sovereign-proposal.md`。

## 0. 全图：5 模式阶梯 + 8 子模式

```text
                          ┌──────────── 最高主权 ─────────────┐
                          │           Sovereign (P4)          │  反悔抑制 / 300 s 降档冷却
                          │   presence_level = 4              │  2 步确认 + 3 s 间隔
                          └───────────────┬───────────────────┘
                                          │
                          ┌──────────── Immersive ────────────┐
                          │   presence_level = 3              │  全自动 / runtime_opaque
                          │   allow_full_auto_apply = True    │  主动确认弹窗
                          └───────────────┬───────────────────┘
                                          │
                          ┌────────────── Active ─────────────┐
                          │   presence_level = 2              │  active bundle (OR)
                          │   ambient / defer / campaign      │  Soft / 心跳
                          └───────────────┬───────────────────┘
                                          │
                          ┌────────────── Copilot ────────────┐
                          │   presence_level = 1 (默认)        │  AI 需逐项确认
                          │   C-06 LLM intent / Goal 默认关     │
                          └───────────────┬───────────────────┘
                                          │
                          ┌───────────── Observer ────────────┐
                          │   presence_level = 0              │  零 AI 写 / 零侧效应
                          │   dangerous / soft / intent /      │
                          │   goal 强制 False                  │
                          └────────────────────────────────────┘
```

`tool/gui/src/backend/experience/policy.py` 是这 5 模式的**唯一真源**；`resolve_policy(settings, *, action_id, usage_today)` 给出 13 个布尔字段的统一决策。

## 1. 5 模式阶梯（Experience OS Intrusiveness Ladder）

实现：`src/backend/experience/policy.py` + `src/application/presence_mode.py` + `src/application/experience_dispatch.py`。

### 1.1 模式枚举

| 模式 | presence_level | 含义 | 默认 |
| --- | ---: | --- | --- |
| `observer` | 0 | 完全不信任；AI 仅给建议，不动树 | 否（默认 `copilot`） |
| `copilot` | 1 | 副驾驶；AI 每个写动作都需作者确认 | **是** |
| `active` | 2 | 主动；启用 active bundle（Soft Autopilot / 心跳 / Defer / 战役） | 否 |
| `immersive` | 3 | 沉浸；允许 `allow_full_auto_apply` + `runtime_opaque` | 否 |
| `sovereign` | 4 | 主权；需 2 步确认 + 3 s 间隔，300 s 内禁止降档 | 否 |

> 5 模式顺序不可跳跃；从 `copilot` 切到 `immersive` 必须经 `active`。

### 1.2 切换入口

| 入口 | 行为 |
| --- | --- |
| 状态栏「模式」chip | 弹出下拉；选新模式时按 P1 ladder 校验 |
| 快捷键 `Ctrl+Shift+D` | 一键降档回 `copilot`（任何模式都生效） |
| 工具栏 **设置 → 体验 OS** | 显示当前模式 + 13 个子开关的展开面板 |
| 工坊任务面板 | 任务中若上下文要求 `immersive` / `sovereign`，按相同路径 |

### 1.3 切换的硬约束

| 约束 | 来自 | 表现 |
| --- | --- | --- |
| 升档至 `active` 需主动 bundle 全部为关 | policy.py:248 | 任一 active 开关为 `True` 即通过 |
| 升档至 `immersive` 弹「全权自治」警告 | `presence_mode.py:IMMERSIVE_WARN_TEXT` | 5 行说明 + 「确定切换」 |
| 升档至 `sovereign` 走 2 步确认 | `presence_mode.py:SOVEREIGN_ENTER_CONFIRM_STEPS=2` | 第 1 步 → 等 3 s → 第 2 步 |
| `sovereign` 进入后 300 s 不可降档 | `presence_mode.py:SOVEREIGN_DEMOTE_COOLDOWN_S=300` | 状态栏 chip 灰 |
| `observer` 模式不允许任何 AI 写 | `policy.py:317` | 全部写动作 deny |
| `M-08` 配额超限时所有 AI 写动作 deny | `policy.py:355` | 状态栏显示「配额用尽」 |

### 1.4 13 个布尔字段

`PolicyDecision`（`policy.py:74`）包含 13 个 boolean 决策：

| 字段 | 默认 | 含义 | 模式依赖 |
| --- | --- | --- | --- |
| `allow_dangerous` | `False` | 危险技能（删 id / 跨节改写 / Hard import） | 需 `experience_allow_dangerous_skills=True` |
| `allow_soft` | `False` | Soft Autopilot（卫生规则自动修） | 需 `experience_soft_autopilot=True` |
| `allow_autonomous_write` | `False` | E3 硬自动导入 | 仅 `immersive` / `sovereign` |
| `scope_cross_section` | `False` | 跨 Section 改写 | 需 `allow_dangerous=True` |
| `allow_llm_intent` | `False` | ⌘K 自然语言意图分类（C-06） | 需 `experience_llm_intent=True` + 非 observer |
| `allow_goal` | `False` | Goal 规划器入口（E3-A） | 需 `experience_goal_enabled=True` + 非 observer |
| `allow_ambient_live` | `False` | Ambient 实时提示 | active bundle 或显式开 |
| `allow_defer_resurface` | `False` | Defer 重浮 | active bundle 或显式开 |
| `allow_campaign_auto` | `False` | 战役自动 | active bundle 必开 |
| `allow_full_auto_apply` | `False` | 全自动应用 | 仅 `immersive` + `experience_immersive_full_auto=True` |
| `runtime_opaque` | `False` | 运行时默认不透明 | 仅 `immersive` + `experience_immersive_opaque=True` |
| `sovereign_mode_enabled` | `False` | Sovereign 模式生效 | 模式 = `sovereign` 或显式开 |
| `allow_ai_skill` | `True` | 整体 AI 写动作开关 | `M-08` 配额用尽时 `False` |

## 2. 7 类子模式

每类子模式在某个具体 UI 或 API 入口生效。

### 2.1 AI 生成模式

| 取值 | 实现 | 适用 |
| --- | --- | --- |
| `fast` | `backend/ai_generator.generate_with_validate_loop` 一次出 Section 草稿 | 草稿探索 |
| `phased` / `refine` | `backend/ai_phased` 大纲→分课→校验→质量→修复→解释 | 发布候选 |

入口：工坊 **生成模式** 下拉（`fast` 默认）；QSettings `ai/pipeline_default_mode`。

### 2.2 JSON Schema 严格度

| 取值 | 行为 |
| --- | --- |
| `auto`（默认） | 首次 `json_schema` 试错遇 400 时调 `mark_json_schema_unsupported()`，后续切 `json_object` |
| `on` | 强制 `json_schema`；不接受 400 回退 |
| `off` | 强制 `json_object`；从不试 `json_schema` |

QSettings `ai/json_schema_strict`。

### 2.3 AI 对话模式

`tool/gui/src/dialogs/ai/ai_generator_dialog.py:251` 的 `mode_combo`：

| 取值 | 入口 | 行为 |
| --- | --- | --- |
| `normal` | 工坊主面板 | 直接生成，diff 预览，确认 |
| `wish`（许愿模式） | 工坊主面板 | 自由对话 + 模板 + 附件；许愿式触发；上下文挂载到用户消息 |

`wish` 是创作者向的"自然语言先聊"模式，prompt 上下文与 `normal` 不同。

### 2.4 抽取模式

| 取值 | 触发 | 行为 |
| --- | --- | --- |
| `standard` | 首次抽取 | 抽词汇 + 表达 + 语法点；失败时自动级联 |
| `vocab_only` | 自动级联 / 人工选择 | 仅抽词汇 |

级联开关：`QSettings/textbook/auto_cascade`（默认开）。

### 2.5 AI 助手粒度模式

`backend/experience/handlers/` 下 AI 助手按节点粒度运行：

| 取值 | 含义 | telemetry `mode` |
| --- | --- | --- |
| `lesson` | 整课重写 / 重生成 | `ai.helper.start` payload `{"mode": "lesson"}` |
| `item` | 单 Interaction 改写 | `ai.helper.start` payload `{"mode": "item"}` |

入口：工坊「对话与高级」、试做 AI 改题。

### 2.6 导入目标模式

工坊草稿导入主窗口课程树时的目标选择：

| 取值 | 行为 |
| --- | --- |
| `into_section` | 作为新 Section 追加 |
| `into_unit` | 追加到已有 Unit 末尾（按合并策略） |
| `merge_existing_section` | 合并入已有 Section（按覆盖/跳过/追加新 id 决议） |
| `replace_section` | 整体替换（高风险，需 dangerous 允许） |

入口：`SectionImportService`，在工坊「结构大纲 → 导入」面板。

### 2.7 模型路由模式

| 取值 | 用途 |
| --- | --- |
| `model`（主模型） | 默认；未分流时所有调用走它 |
| `model_chat` | 对话 / 解释；空时回退 `model` |
| `model_json` | JSON 生成 / 修复；空时回退 `model` |

入口：设置 → AI 配置。详细字段见 [AI 课程生成 - 字段表](/authoring/ai-course-generation#41-模型配置)。

### 2.8 引用挂载模式

`tool/gui/src/dialogs/ai/chat_view.py::_reference_mode`：

| 取值 | 含义 |
| --- | --- |
| `inline` | 引用嵌入主消息流 |
| `standalone` | 引用以独立 card 渲染 |

实现细节不直接暴露给创作者；UI 切换器在工坊「对话与高级」面板。

## 3. M-08 每日 AI 配额

`policy.py:147` 引入的硬性熔断器：

```python
budget_limit = settings.experience_daily_ai_budget  # 默认 0 = 关闭
budget_used  = usage_today["requests"]             # telemetry 累计
budget_exceeded = budget_limit > 0 and budget_used >= budget_limit
allow_ai_skill = not budget_exceeded
```

| 字段 | 默认 | 含义 |
| --- | ---: | --- |
| `experience_daily_ai_budget` | `0` | `0` = 关闭熔断；`>0` 启用 |
| `usage_today["requests"]` | 累计 | 今日 AI 请求数；每 24h 重置 |
| `budget_remaining` | — | 剩余请求数（`None` 表示不限） |

行为：

- 配额**不**影响手编、保存、`app.*`、`soft.*` 动作。
- 配额**仅**拦截 `needs_confirm=True` 且非 `soft.*` / `app.*` 的 AI 写动作。
- 配额超限时状态栏显示「今日 AI 配额已用尽（X/Y）」。
- 配额与模式正交：observer 模式下配额依然会计数，但不触发任何写。

## 4. C-06 LLM 意图分类（⌘K）

`backend/experience/intent_llm.py`：当 `⌘K` 调色板的本地匹配为空时，**可选**调 LLM 做意图分类。

| 字段 | 默认 | 含义 |
| --- | --- | --- |
| `experience_llm_intent` | `False` | 启用 LLM 意图分类 |
| `LLM_INTENT_MIN_CONFIDENCE` | `0.55` | 置信 < 0.55 → `None`，禁止瞎猜执行 |
| 闭集 | `ACTIONS` 中已实现的 ID | LLM 输出 action_id 必须在闭集内 |

红线：

- 默认关；observer 零请求（即使开启也强制 0）。
- 置信不足返回 `None`，UI 不执行。
- 仅做意图分类，**不**做执行；执行仍走 `can_dispatch(policy)` 二次校验。

## 5. Soft Autopilot 与 ambient

`backend/experience/soft_autopilot.py` 实现纯规则修复（无 LLM）：

| 规则 ID | 行为 | 适用 |
| --- | --- | --- |
| `hygiene.trim_whitespace` | 词条 term / translation / pronunciation 首尾空白 | vocab / expression |
| `hygiene.collapse_repeated_spaces` | 内部 ≥2 空白折叠为 1 | 同上 |
| `hygiene.strip_surround_quotes` | 配对的 `" ' " " 「」 『』` 包裹剥离 | 同上 |
| `hygiene.drop_empty_tags` | 删除空 / 非字符串 tag | 同上 |
| `hygiene.strip_zero_width` | 移除 U+200B / U+FEFF / U+200C / U+200D | 同上 |

实现位置：`evaluate_soft_fixes(items) -> (fixes, ...) -> apply_soft_fixes(items, fixes)`。

红线（**永久不下放**）：

- 不做 Hard import
- 不改 id
- 不做 section merge
- 不调 LLM

ambient（`backend/experience/proactive.py` + `backend/experience/suggestions/ambient.py`）：

| 阶段 | 枚举 |
| --- | --- |
| ambient 提示 | `shown` / `accepted` / `muted` / `dismissed` / `deferred` / `resurfaced` |
| Soft | `evaluated` / `applied` / `skipped` |
| Guard | `rejected` / `released` |
| Job | `started` / `finished` / `failed` |

ambient live 提示默认关；`active` 模式自动开启。

## 6. E3 Goal 规划与沙箱

`backend/experience/goal_generate.py` + `backend/experience/goal_llm.py` + `backend/experience/sandbox.py`：

| 维度 | 说明 |
| --- | --- |
| 入口 | `goal.*` action_id；默认 deny |
| 启用条件 | `experience_goal_enabled=True` + 非 observer + 配额内 |
| 行为 | 进入 plan / sandbox；可执行但不写树；需 `run` 显式触发 |
| 与 autonomous write 的关系 | **不**等价；goal 仍需 `needs_confirm=True` |
| 全自动 | 仅 `immersive` + `experience_immersive_full_auto=True` 时 `allow_autonomous_write=True` |

E3-A 子组件：

- `goal_generate.py` — plan 生成
- `goal_llm.py` — LLM 接口
- `sandbox.py` — 沙箱执行
- `precognition.py` — 窄域预取缓存（pure；不抛）

## 7. 决策矩阵：模式 × 能力

| 能力 | observer | copilot | active | immersive | sovereign |
| --- | --- | --- | --- | --- | --- |
| AI 写动作（`needs_confirm=True`） | ❌ | ✅ 逐项确认 | ✅ 逐项确认 | ⚠️ 可全自 | ⚠️ 可全自 + 抑制反悔 |
| `soft.*`（卫生规则） | ❌ | ⚠️ 默认关；开则生效 | ✅ | ✅ | ✅ |
| `app.*`（保存 / undo / why / pin / help） | ✅ | ✅ | ✅ | ✅ | ✅ |
| ⌘K LLM 意图（C-06） | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 |
| Goal 规划 | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 |
| Ambient 提示 | ❌ | ❌ | ✅ | ✅ | ✅ |
| Defer 重浮 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 战役自动 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 跨节改写 | ❌ | ⚠️ 需 `allow_dangerous` | ⚠️ 需 `allow_dangerous` | ✅ | ✅ |
| Hard import（E3） | ❌ | ❌ | ❌ | ✅ | ✅ |
| 反悔抑制（仅 sovereign） | — | — | — | — | ✅ |
| 300 s 降档冷却 | — | — | — | — | ✅ |

`❌` 硬阻 / `⚠️` 默认关需显式开 / `✅` 模式允许。

## 8. 创作者不下放的边界

无论模式如何，下列边界**永久生效**：

1. **不删既有 id**：AI 不得删除任何 `l-` / `u-` / `s-` / `w-` / `e-` / `g-` 前缀的 id。
2. **不跨语言对引用**：`tr` 课程不得引用 `en` 课程的资源。
3. **不绕过 validate**：所有 AI 写动作后必须 `CourseAdapter.save()` → `validate` → 失败回滚。
4. **不持久化 API Key**：API Key 仅会话内存；关闭即销毁。
5. **不在共享目录自动写盘**：AI 仅在 `course_dir` 内允许。
6. **不入出站 publish / git.push**：policy B 集合在 `immersive` 仍 deny。
7. **不静默替换已注册 runtimeType**：替换为未注册类型时 validate 阻断。
8. **不删既有 vocab / expression / grammar_point**：删除必须人工裁决。

详细约束见 [AI 课程生成 - 创作者不下放的边界](/authoring/ai-course-generation#8-创作者不下放的边界)。

## 9. 与 GUI 主窗口的衔接

| 模式切换入口 | 行为 |
| --- | --- |
| 状态栏「模式」chip | 显示当前 `mode`；点击下拉切换（受 P1 ladder 与警告约束） |
| 工具栏 **设置 → 体验 OS** | 13 个 boolean 字段 + 模式选择 + 配额设置的完整面板 |
| 快捷键 `Ctrl+Shift+D` | 任何模式一键降档回 `copilot`（`sovereign` 受 300 s 冷却约束） |
| 工坊任务面板 | 任务中显示当前模式 + 警告 |

状态栏常驻字段：

- 模式 chip（observer / copilot / active / immersive / sovereign）
- AI 校验防护（沿用旧字段）
- 今日 / 累计 token 与配额剩余
- 任务中模式（immersive/sovereign 时显示 `⚠`）

## 10. 相关文档

- [AI 课程生成](/authoring/ai-course-generation) — 5 大能力类 / 5 主路径 / 决策矩阵
- [教师指南 - AI 协作模式](/authoring/teacher-guide#ai-协作模式) — 教师视角的何时用 / 何时不用
- 应用仓库 `tool/gui/src/backend/experience/policy.py` — 5 模式唯一真源
- 应用仓库 `tool/gui/src/application/presence_mode.py` — 模式切换与警告
- 应用仓库 `tool/gui/docs/ai-intrusiveness-ladder-sovereign-proposal.md` — Sovereign 设计提案
- 应用仓库 `tool/gui/docs/a3-companion-ambient-design.md` — Ambient 提示设计
