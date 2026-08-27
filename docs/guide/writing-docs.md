# 如何丰富文档

文档要变多，靠的是**固定目录 + 改写已有材料 + 按读者分层**，不是把应用仓库里的 Markdown 整盘搬过来。

Turna 已经有两处现成的内容源：

| 来源 | 适合变成什么 | 不该原样公开的 |
| --- | --- | --- |
| 本仓库专题页（`anki.html`、`fsrs.html`、`ai.html`、`editor.html`、`curriculum.html`） | 功能说明、概念入门 | 纯视觉演示代码 |
| 应用仓库 `Varnamalaplus/docs/` | 教师指南、课程约定、架构摘要 | ADR、迁移计划、审计报告、施工 playbook |

应用仓库里目前大约有 70+ 篇 Markdown。其中大部分是一次性工程文档（`official-anki-migration/`、`*-plan.md`、`decisions/`）。这些对贡献者有用，对产品文档站点有害：会过期、难检索、读起来像工单。

## 先定读者，再开目录

每一页只服务一类人：

1. **学习者 / 访客**：Turna 是什么、怎么跑起来、FSRS / Anki / AI 能做什么。
2. **老师 / 课程作者**：怎么用编辑器改一课、JSON 目录怎么摆。
3. **开发者**：架构从哪读、文档怎么加，而不是把 `project-guide.md` 整篇贴进来。

对应到本站目录：

```text
docs/
  index.md                 # 文档门户
  guide/                   # 学习者与访客
    what-is-turna.md
    getting-started.md
    features.md
    fsrs.md
    anki.md
    …
  authoring/               # 老师与课程作者
    teacher-guide.md
    course-layout.md
```

新页面先问：它属于哪一类？然后只改对应 sidebar，不要另起一个平行站点。

## 从已有材料改写，不要从零写

推荐顺序：

1. **专题页 → `guide/`**  
   产品主页上的 Anki / FSRS / AI / 编辑器 / 课程页已经写过面向用户的句子。文档页用同样的事实，补上步骤、限制和链接，不要再写一套营销文案。
2. **`project-guide.md` → 拆章节**  
   应用仓库的项目指南是单一事实来源。按「复习 / Anki / AI / 编辑器 / 课程格式」各抽一章，改写成 1 屏能读完的文档页。不要整篇镜像。
3. **`docs/authoring/` → `authoring/`**  
   教师指南、课型模板、课程目录约定已经是给人看的，几乎可以直接搬，只需改掉指向源码的相对路径。
4. **内容清单 → 课程页附录**  
   `content_inventory_current.md` 适合摘要（Section 数、词汇数），不适合把 148 行词表贴进 VitePress。

改写时保留：概念、步骤、限制、指向代码或专题页的链接。删掉：日期快照、测试计数、内部 ticket 号、已经做完的迁移阶段。

## 一页一条任务

- 标题用读者会搜的词：「如何导入 Anki 牌组」，不要用「P5D remainder」。
- 开头三行说清楚「这页解决什么」。
- 步骤用编号列表；概念用短表。
- 文末只留 1–2 个「下一步」，把人送到下一层，而不是链到十个相关页。
- 过期的计划文档不要改写成指南，直接不收录。

## 加一篇新文档的步骤

1. 在 `docs/guide/` 或 `docs/authoring/` 新建 Markdown。
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 里加一条。
3. 从相关旧页链过来（`features.md`、文档首页、或专题 HTML）。
4. 本地检查：

```bash
npm run dev
```

从终端给出的主站地址点击「文档」，确认主站往返、侧栏、搜索和站内链接都通。只调试文档时可运行 `npm run docs:dev`，并打开 <http://localhost:5174/docs/>。

5. `npm run build` 会把文档打进 `dist/docs/`，产品主页顶部的「文档」指向这里。

## 刻意不收录的内容

- `docs/decisions/00xx-*.md`：ADR 留在应用仓库。
- `docs/official-anki-migration/`：施工过程，不是产品说明。
- 各类 `*-plan.md` / `*-audit.md` / `*-result-report.md`：做完即过期。
- 截图夹、fixture、CI 产物。

如果贡献者需要这些，在开发者页用一句话链到应用仓库路径即可。

## 让「量大」可检索

页面变多之后，发现比写作更重要：

- 打开 VitePress 本地搜索（本站已启用），标题和正文都能搜到。
- 同一件事只在一页讲透，其它页只链过去，避免三份互相打架的 FSRS 说明。
- 侧栏分组保持浅：开始 / 功能 / 课程 / 创作。超过两层读者就不会点。

## 和代码同步

文档不是第二个事实来源。行为变了，先改应用仓库的 `project-guide.md` 或 `authoring/`，再改本站对应页。本站负责「读得快」，应用仓库负责「写得全」。
