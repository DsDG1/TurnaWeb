# 快速开始

本文带你 5 分钟把 Turna Web 在本地跑起来。

## 环境要求

- Node.js **20** 或更高版本
- npm 10+（随 Node 一起安装即可）
- 任意现代浏览器（Chrome / Edge / Firefox / Safari）

## 获取代码

```bash
git clone https://github.com/Varnamalaplus/TurnaWeb.git
cd TurnaWeb
```

## 安装依赖

```bash
npm install
```

如果你只跑 Web 端，不需要安装桌面端的 Rust 工具链。

## 启动开发服务器

```bash
npm run dev
```

终端会输出 `Open the Turna site at http://127.0.0.1:<port>/`。启动器会自动避开占用端口。只打开这条主站地址；文档通过同一地址的 `/docs/` 访问。

> 触屏设备和开启了「减少动态效果」的系统会自动关闭指针追踪、视差与 3D 倾斜。

## 跑测试与生产构建

```bash
# 单元测试
npm test

# 类型检查 + 生产构建
npm run build

# 本地预览构建产物
npm run preview
```

构建产物输出到 `dist/`，Vite 已使用**相对资源路径**，可以把整个 `dist/` 部署到 Gitee Pages、GitHub Pages 或任意静态服务器的子目录。

## 页面一览

启动后默认进入产品主页。顶部只保留 **功能 / 课程 / 文档**；Anki、FSRS、AI、编辑器在页脚和功能卡片里。

| 页面 | 入口 | 内容 |
| --- | --- | --- |
| 主页 | `index.html` | 湿地晨雾首屏、功能卡片、三种交互预览 |
| 课程内容 | `curriculum.html` | CEFR A1–B2 课程结构、六种课时类型 |
| 文档 | `docs/` | 本站：指南、功能说明、课程创作 |
| Anki 集成 | `anki.html` | 官方 Anki 内核、牌组课程化、FSRS 调度 |
| FSRS 算法 | `fsrs.html` | 记忆三变量、幂函数遗忘曲线、双实现 |
| AI 伴学 | `ai.html` | 跟课答疑、分层提示、按错题与弱词练习 |
| 课程编辑器 | `editor.html` | 桌面 tool/gui 的两栏窗口、课时蓝图 |

多页入口注册在 `vite.config.ts` 的 `build.rollupOptions.input` 中。文档由 VitePress 构建到 `dist/docs/`。

## 主题

主题按钮会在「**晨雾**」和「**夕光**」之间切换：

- 首次访问根据本地时间自动选择主题。
- 手动选择后会保存在浏览器中。
- 触屏设备与「减少动态效果」系统会自动关闭部分视觉效果。

## 文档站点

```bash
cd docs
npm install
npm run docs:dev
```

只调试文档时，开发服务器默认是 <http://localhost:5174/docs/>。日常联调请在仓库根目录执行 `npm run dev`，它会同时启动主站与文档站；从主站打开 `/docs/` 即可，不需要跨端口跳转。

## 下一步

- [核心能力一览](/guide/features)
- [如何给文档加页](/guide/writing-docs)
