# Turna Web

Turna 的响应式开源产品主页。首屏复刻湿地晨雾视觉，并展示离线课程、FSRS 复习、Anki 导入与 AI 伴学能力。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

开发服务器启动后，打开终端给出的本地地址即可预览。

## 测试与构建

```bash
npm test
npm run build
npm run preview
```

构建产物位于 `dist/`。Vite 已使用相对资源路径，可以将整个 `dist/` 目录部署到 Gitee Pages、GitHub Pages 或任意静态服务器的子目录。

## 页面结构

- `index.html`
  - `#features`：离线学习、FSRS、Anki 与 AI 伴学
  - `#preview`：课程、复习与 AI 三种交互预览
  - `#audience`：适合的学习者类型
- `anki.html`：Anki 集成专题页——官方 Anki 内核、牌组课程化、从导入到复习的流程演示、FSRS 记忆调度
- `curriculum.html`：课程内容页——CEFR A1–B2 课程结构、六种课时类型、课时界面模拟与内容进度（超缓慢开发中）
- `fsrs.html`：FSRS 算法详解页——记忆三变量、幂函数遗忘曲线、21 个参数与工程内的双实现（fsrs-rs / fsrs-dart）

首页导航栏的「课程」「Anki」入口、功能卡片里的「了解 FSRS 算法」「了解 Anki 集成」链接分别指向各专题页。多页入口在 `vite.config.ts` 的 `build.rollupOptions.input` 中注册。

主题按钮会在“晨雾”和“夕光”之间切换。首次访问根据本地时间选择主题，手动选择会保存在浏览器中。触屏设备和开启“减少动态效果”的系统会自动关闭指针追踪、视差与 3D 倾斜。

## 素材来源

- 湿地晨雾背景：项目需求提供的参考素材。
- Turna 吉祥物：同级 `Varnamalaplus` 应用仓库中的现有品牌素材。
- 导航线稿鸟标：本项目内联 SVG 重绘。

Turna 当前是持续开发中的开源项目，基于上游 [rshrc/Varnamala](https://github.com/rshrc/Varnamala) 构建。
