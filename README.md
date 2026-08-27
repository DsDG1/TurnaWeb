# Turna Web

Turna 的响应式开源产品主页。首屏复刻湿地晨雾视觉，并展示离线课程、FSRS 复习、Anki 导入与 AI 伴学能力。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm --prefix docs install
npm run dev
```

开发服务器启动后，打开终端给出的主站地址即可预览。根命令会同时启动主站和文档站；访问主站的 `./docs/` 会通过同源代理连接到 VitePress。启动器会从 5173（主站）和 5174（文档）开始自动寻找两个不同的空闲端口，已有开发服务不会再导致二者撞端口。需要指定起始端口时，可使用 `SITE_DEV_PORT=5273 DOCS_DEV_PORT=5274 npm run dev`。

## 测试与构建

```bash
npm test
npm run build
npm run preview
```

构建产物位于 `dist/`。Vite 已使用相对资源路径，可以将整个 `dist/` 目录部署到 Gitee Pages、GitHub Pages 或任意静态服务器的子目录。`npm run build` 会把 VitePress 文档打进 `dist/docs/`。

## 文档

产品主页顶部「文档」始终指向 `./docs/`。只调试文档时也可以运行 `npm run docs:dev`，文档独立地址是 <http://localhost:5174/docs/>。页面怎么加、哪些材料可以搬、哪些不要搬，见 `docs/guide/writing-docs.md`。

若站点部署在子目录，构建整个站点时设置一次 `SITE_BASE`。例如当前 Gitee 仓库路径为 `/turna-web/` 时运行 `SITE_BASE=/turna-web/ npm run build`，文档资源会自动使用 `/turna-web/docs/`。如需单独指定文档路径，仍可使用 `DOCS_BASE=/自定义路径/docs/ npm run docs:build`。

## 页面结构

- `index.html`
  - `#features`：离线学习、FSRS、Anki 与 AI 伴学
  - `#preview`：课程、复习与 AI 三种交互预览
  - `#audience`：适合的学习者类型
- `anki.html`：Anki 集成专题页——官方 Anki 内核、牌组课程化、从导入到复习的流程演示、FSRS 记忆调度
- `curriculum.html`：课程内容页——CEFR A1–B2 课程结构、六种课时类型、课时界面模拟与内容进度（超缓慢开发中）
- `fsrs.html`：FSRS 算法详解页——记忆三变量、幂函数遗忘曲线、21 个参数与工程内的双实现（fsrs-rs / fsrs-dart）
- `ai.html`：AI 伴学专题页——跟课答疑、分层提示、按错题和弱词练习、情景对话
- `editor.html`：课程编辑器专题页——桌面 `tool/gui` 的两栏深色窗口、课时蓝图与课程工坊

首页导航栏是「功能」「课程」「文档」。Anki、FSRS、AI、编辑器走功能卡片和页脚。多页入口在 `vite.config.ts` 的 `build.rollupOptions.input` 中注册。

主题按钮会在“晨雾”和“夕光”之间切换。首次访问根据本地时间选择主题，手动选择会保存在浏览器中。触屏设备和开启“减少动态效果”的系统会自动关闭指针追踪、视差与 3D 倾斜。

## 素材来源

- 湿地晨雾背景：项目需求提供的参考素材。
- Turna 吉祥物：同级 `Varnamalaplus` 应用仓库中的现有品牌素材。
- 导航线稿鸟标：本项目内联 SVG 重绘。

Turna 当前是持续开发中的开源项目，基于上游 [rshrc/Varnamala](https://github.com/rshrc/Varnamala) 构建。
