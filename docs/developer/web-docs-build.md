# Web 与文档站构建

TurnaWeb 包含两个前端：React + Vite 产品主站，以及 VitePress 文档站。生产构建将两者合并到同一个 `dist/`。

## 目录

```text
TurnaWeb/
  index.html              产品主页
  *.html                  功能专题页
  src/                    React 页面
  docs/                   Markdown 与 VitePress
  dist/
    index.html
    *.html
    assets/
    docs/                 文档构建产物
```

## 安装

```bash
npm install
npm --prefix docs install
```

主站与 docs 使用独立 package-lock。更新依赖时在对应目录执行安装，不手工拼接 lockfile。

## 联合开发

```bash
npm run dev
```

启动器执行以下操作：

1. 从 5173 和 5174 开始查找两个不同的空闲端口。
2. 将主站和 VitePress 统一绑定到 `127.0.0.1`。
3. 启动主站和内部 docs 服务。
4. 将主站 `/docs` 代理到 docs 内部端口。
5. 只显示应由用户打开的主站 URL。

使用输出中的 `Open the Turna site at ...`。根路径是主站，`/docs/` 是文档。

可选起始端口：

```bash
SITE_DEV_PORT=5273 DOCS_DEV_PORT=5274 npm run dev
```

## 构建

```bash
npm run build
```

顺序为 TypeScript project build、Vite 多页面构建、VitePress 构建。VitePress `outDir` 为 `../dist/docs`，且不清空主站已生成文件。

## 子目录部署

根域部署直接构建。Pages 类子目录部署需要设置站点 base：

```bash
SITE_BASE=/turna-web/ npm run build
```

文档 base 自动成为 `/turna-web/docs/`。如有独立文档路径：

```bash
DOCS_BASE=/custom/docs/ npm run docs:build
```

## 路由合同

- 主站到文档使用相对链接 `./docs/`。
- 文档内部使用 VitePress `withBase`。
- 文档返回产品主页通过 docs base 的上一级解析。
- 不把开发内部端口写入页面链接。

## 验证

```bash
npm test
npm run build
npm run preview
```

检查根路径、所有专题 HTML、`/docs/`、文档资源、站内链接和返回主页链接。

## 相关文档

- [快速开始](/guide/getting-started)
- [文档维护规范](/guide/writing-docs)
- [测试与质量门禁](/developer/testing)
