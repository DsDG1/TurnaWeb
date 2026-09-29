# AI 控制模式（创作者视角）

> `tool/gui` 的 AI 介入度由**一个四档体验模式** + **一组能力开关** + **每日配额熔断**组合决定。本文是这套控制面的索引与安全档位手册。
>
> 唯一真源：`tool/gui/src/backend/experience/policy.py` 的 `resolve_policy()`；切换与降档助手在 `tool/gui/src/application/presence_mode.py`。

## 1. 四档体验模式

```text
┌──────────── Immersive ────────────┐
│  presence_level = 3               │  全权自动应用 / runtime_opaque（子开关可关）
│  含 Active 捆绑；出站操作仍拒绝     │  切入时弹风险确认；Ctrl+Shift+D 一键降档
├───────────────────────────────────┤
├────────────── Active ─────────────┤
│  presence_level = 2               │  active bundle 自动开：
│                                   │  Soft / Ambient / Defer / 战役
├───────────────────────────────────┤
├────────────── Copilot ────────────┤
│  presence_level = 1（默认）        │  AI 写动作逐项确认
├───────────────────────────────────┤
├───────────── Observer ────────────┤
│  presence_level = 0               │  零 AI 写 / 零侧效应；
│                                   │  危险 / Soft / 意图 / Goal 强制 False
└───────────────────────────────────┘
```

| 模式 | presence_level | 含义 |
| --- | ---: | --- |
| `observer` | 0 | 只诊断不动手；AI 仅给建议，任何写动作 deny |
| `copilot` | 1 | 副驾驶（默认）；AI 写动作都需作者确认 |
| `active` | 2 | 主动；自动捆绑 Soft 自动修 / 伴随建议 / Defer / 战役队列 |
| `immersive` | 3 | 沉浸；白名单技能可跳过确认静默改课（仍入 Undo） |

切换入口：

| 入口 | 行为 |
| --- | --- |
| 状态栏「模式」chip | 弹出下拉，自由切换四档 |
| 设置 → 体验 OS | 模式选择 + Immersive 子开关 + 能力开关 + 日配额 |
| `Ctrl+Shift+D` | 任何模式一键降档回 `copilot`（同时使 auto-apply token 失效） |
| 切入 `immersive` | 弹「切换到 Immersive 全权自治？」风险确认（`IMMERSIVE_WARN_TEXT`） |

::: info 迁移说明
旧版存在过的 `sovereign` 档已移除：持久化里残留的非法值会在加载时降级为 `copilot`。
:::

## 2. PolicyDecision 字段

`resolve_policy(settings)` 返回一个 `PolicyDecision`，派发点统一读它而不读原始设置：

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `mode` | str | 归一化后的模式 |
| `presence_level` | int | 0–3 |
| `allow_dangerous` | bool | 危险技能（删 id / 跨节改写 / Hard import）；需 `experience_allow_dangerous_skills`，observer 强制 False；immersive 全权时自动 True |
| `allow_soft` | bool | Soft Autopilot（卫生规则自动修）；开关或 active bundle 触发 |
| `allow_ambient_live` | bool | Ambient 实时提示；开关或 active bundle |
| `allow_defer_resurface` | bool | Defer 重浮；开关或 active bundle |
| `allow_campaign_auto` | bool | 战役队列自动浮现；active bundle 恒 True |
| `allow_full_auto_apply` | bool | 仅 `immersive` + `experience_immersive_full_auto`（默认开） |
| `runtime_opaque` | bool | 仅 `immersive` + `experience_immersive_opaque`（默认开） |
| `allow_autonomous_write` | bool | = `allow_full_auto_apply`；observer 恒 False |
| `scope_cross_section` | bool | 跨节改写；= `allow_dangerous` |
| `allow_llm_intent` | bool | ⌘K LLM 意图分类；需开关 + 非 observer + 配额内 |
| `allow_goal` | bool | Goal 规划器入口；需开关 + 非 observer + 配额内 |
| `allow_ai_skill` | bool | 整体 AI 技能开关；配额超限时 False |
| `budget_exceeded` / `budget_limit` / `budget_used` | bool / int / int | M-08 日配额状态；`budget_limit=0` 表示关闭熔断 |

派发规则（`can_dispatch`）：

- `app.*` 内建动作（保存 / undo / why / pin / help）永远放行。
- observer 下，任何 `needs_confirm=True` 的非 `app.*` 动作 deny —— 零 AI 写。
- 危险动作需 `allow_dangerous`；但 immersive 全权时直接放行，由 `auto_apply` 决定是静默执行还是回落确认。
- `goal.*` 需 `allow_goal`（或 `allow_autonomous_write`）。
- 配额超限时，仅拦 `needs_confirm=True` 且非 `soft.*` / `app.*` 的 AI 写技能；手编、保存、Soft 不受影响。
- `is_denied_immersive()` 绝对禁区集合（出站 publish / git.push 等）在任何模式都拒绝。

## 3. 能力开关（设置 → 体验 OS）

| 设置 | 默认 | 说明 |
| --- | --- | --- |
| `experience_allow_dangerous_skills` | False | 允许危险技能（删 id / 跨节改写 / Hard import） |
| `experience_goal_enabled` | False | 启用 Goal 目标规划（多步沙箱草稿；合并仍需确认） |
| `experience_llm_intent` | False | ⌘K 自然语言意图分类（调 chat 小模型；关则仅斜杠命令 + 本地规则） |
| `experience_immersive_full_auto` | True | Immersive 档下允许跳过确认自动应用（仍可 Ctrl+Z） |
| `experience_immersive_opaque` | True | Immersive 档下运行时不透明（状态栏仅提示计数）；审计日志始终记录 |
| `experience_daily_ai_budget` | 0 | 今日 AI 请求配额；0 = 不限，超限只拦 AI 写技能 |

## 4. 其他独立控制面

### 4.1 AI 生成模式

| 取值 | 实现 | 适用 |
| --- | --- | --- |
| `fast`（默认） | `backend/ai_generator.generate_with_validate_loop` 一次出 Section 草稿 | 草稿探索 |
| `refine` | `backend/ai_phased` 大纲→分课→校验→质量→修复→解释 | 发布候选 |

只有 `fast` 与 `refine` 两个合法取值。`phased` 不是模式名——它是 `refine` 路径的实现模块 `ai_phased`。填入其它值会被静默回落为 `fast`，不会报错。

入口：工坊 **生成模式** 下拉（`fast` 默认）；QSettings `ai/pipeline_default_mode`。

### 4.2 JSON Schema 严格度

| 取值 | 行为 |
| --- | --- |
| `auto`（默认） | 首次 `json_schema` 试错遇 400 时调 `mark_json_schema_unsupported()`，后续切 `json_object` |
| `on` | 强制 `json_schema`；不接受 400 回退 |
| `off` | 强制 `json_object`；从不试 `json_schema` |

### 4.3 AI 对话模式

生成器对话框（`src/dialogs/ai/generator_*.py`，已拆分为 chat/flows/panels/preview/view-state/wizard/worker-hub 多个模块）的 `mode_combo`：

| 取值 | 行为 |
| --- | --- |
| `normal` | 直接生成，diff 预览，确认 |
| `wish`（许愿模式） | 自由对话 + 模板 + 附件；许愿式触发 |

### 4.4 抽取模式

| 取值 | 触发 | 行为 |
| --- | --- | --- |
| `standard` | 首次抽取 | 抽词汇 + 表达 + 语法点；失败时自动级联 |
| `vocab_only` | 自动级联 / 人工选择 | 仅抽词汇 |

级联开关：`textbook/auto_cascade`（默认开）。

### 4.5 AI 助手粒度

`backend/experience/` 下的 AI 助手按节点粒度运行：`lesson`（整课重写 / 重生成）或 `item`（单 Interaction 改写）。

### 4.6 导入目标模式

工坊草稿导入主窗口课程树时的目标选择：`into_section`（新 Section）/ `into_unit`（追加到已有 Unit）/ `merge_existing_section`（合并）/ `replace_section`（整体替换，高风险需 dangerous）。

### 4.7 模型路由

| 取值 | 用途 |
| --- | --- |
| `model`（主模型） | 默认；未分流时所有调用走它 |
| `model_chat` | 对话 / 解释；空时回退 `model` |
| `model_json` | JSON 生成 / 修复；空时回退 `model` |

入口：设置 → AI 配置。字段见 [AI 课程生成 - 字段表](/authoring/ai-course-generation)。

## 5. M-08 每日 AI 配额

```python
budget_limit    = settings.experience_daily_ai_budget  # 0 = 关闭
budget_used     = usage_today["requests"]              # telemetry 累计
budget_exceeded = budget_limit > 0 and budget_used >= budget_limit
allow_ai_skill  = not budget_exceeded
```

- 配额**不**影响手编、保存、`app.*`、`soft.*` 动作。
- 配额**仅**拦截 `needs_confirm=True` 且非 `soft.*` / `app.*` 的 AI 写动作。
- 配额超限时状态栏显示「今日 AI 配额已用尽（X/Y）」。
- 配额与模式正交：observer 下配额依然计数，但不触发任何写。

## 6. Soft Autopilot 与 ambient

`backend/experience/soft_autopilot.py` 实现纯规则修复（无 LLM）：

| 规则 ID | 行为 |
| --- | --- |
| `hygiene.trim_whitespace` | 词条 term / translation / pronunciation 首尾空白 |
| `hygiene.collapse_repeated_spaces` | 内部 ≥2 空白折叠为 1 |
| `hygiene.strip_surround_quotes` | 配对的引号 / 括号包裹剥离 |
| `hygiene.drop_empty_tags` | 删除空 / 非字符串 tag |
| `hygiene.strip_zero_width` | 移除 U+200B / U+FEFF / U+200C / U+200D |

红线（**永久不下放**）：不做 Hard import、不改 id、不做 section merge、不调 LLM。

ambient live 提示默认关；`active` 档自动开启。

## 7. 决策矩阵：模式 × 能力

| 能力 | observer | copilot | active | immersive |
| --- | --- | --- | --- | --- |
| AI 写动作（`needs_confirm=True`） | ❌ | ✅ 逐项确认 | ✅ 逐项确认 | ⚠️ 可全自动 |
| `soft.*`（卫生规则） | ❌ | ⚠️ 默认关；开则生效 | ✅ | ✅ |
| `app.*`（保存 / undo / why / pin / help） | ✅ | ✅ | ✅ | ✅ |
| ⌘K LLM 意图 | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 |
| Goal 规划 | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关（全权时放行） |
| Ambient 提示 | ❌ | ❌ | ✅ | ✅ |
| Defer 重浮 | ❌ | ❌ | ✅ | ✅ |
| 战役自动 | ❌ | ❌ | ✅ | ✅ |
| 跨节改写 | ❌ | ⚠️ 需 `allow_dangerous` | ⚠️ 需 `allow_dangerous` | ✅ 全权时自动 |
| Hard import | ❌ | ❌ | ❌ | ✅ 全权时自动 |
| 出站 publish / git.push 等禁区 | ❌ | ❌ | ❌ | ❌ 恒拒绝 |

`❌` 硬阻 / `⚠️` 默认关需显式开 / `✅` 模式允许。

## 8. 创作者不下放的边界

无论模式如何，下列边界**永久生效**：

1. **不删既有 id**：AI 不得删除任何已发布的 id（课时 `s1-l1`、单元 `s1-u1`、节 `section1`、资源 `w-`/`e-`/`g-` 前缀等）。
2. **不跨语言引用**：`tr` 课程不得引用其他语言课程的资源。
3. **不绕过 validate**：所有 AI 写动作后必须 `CourseAdapter.save()` → `validate` → 失败回滚。
4. **不持久化 API Key**：API Key 仅会话内存；关闭即销毁。
5. **不入出站 publish / git.push**：`is_denied_immersive` 禁区在任何模式都拒绝。
6. **不静默替换已注册 runtimeType**：替换为未注册类型时 validate 阻断。
7. **不删既有 vocab / expression / grammar_point**：删除必须人工裁决。

## 9. 与 GUI 主窗口的衔接

| 入口 | 行为 |
| --- | --- |
| 状态栏「模式」chip | 显示当前模式；点击下拉切换（切 Immersive 弹确认） |
| 设置 → 体验 OS | 模式 + Immersive 子开关 + 能力开关 + 日配额完整面板 |
| `Ctrl+Shift+D` | 一键降档回 `copilot`，并使未完成的 auto-apply token 失效 |

状态栏常驻字段：模式 chip、AI 校验防护、今日 / 累计 token 与配额剩余、任务中模式警示。

## 10. 相关文档

- [AI 课程生成](/authoring/ai-course-generation) — 能力类 / 主路径 / 决策矩阵
- [教师指南 - AI 协作模式](/authoring/teacher-guide#ai-协作模式) — 教师视角的何时用 / 何时不用
- 应用仓库 `tool/gui/src/backend/experience/policy.py` — 四档与 PolicyDecision 唯一真源
- 应用仓库 `tool/gui/src/application/presence_mode.py` — Immersive 进入确认与一键降档
