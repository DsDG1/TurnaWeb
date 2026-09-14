import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const siteBase = process.env.SITE_BASE?.replace(/^\/+|\/+$/g, '')
const docsBase = process.env.DOCS_BASE || (siteBase ? `/${siteBase}/docs/` : '/docs/')
const docsPort = Number(process.env.DOCS_DEV_PORT || 5174)

// First prose paragraph becomes the page description (meta/og) when the page
// does not set one explicitly in frontmatter.
function inferDescription(relativePath: string): string | undefined {
  try {
    const src = fs
      .readFileSync(path.join(srcDir, relativePath), 'utf8')
      .replace(/^---[\s\S]*?---\r?\n/, '')
    let inFence = false
    for (const line of src.split('\n')) {
      const t = line.trim()
      if (/^(`{3,}|~{3,})/.test(t)) { inFence = !inFence; continue }
      if (inFence) continue
      // skip headings, quotes, lists, tables, images, containers, html, ascii diagrams
      if (!t || /^[#>|!\-`*|:<┌┐└┘│├┤─═╔╗╚╝║]/.test(t)) continue
      const text = t
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`]/g, '')
      if (text.length >= 20) return text.length > 120 ? `${text.slice(0, 120)}…` : text
    }
  } catch {
    /* missing file — leave description unset */
  }
  return undefined
}

export default defineConfig({
  title: 'Turna',
  titleTemplate: ':title — Turna 文档',
  description: 'Turna 是一款本地优先、离线可用的开源语言学习应用，当前专注土耳其语。',
  lang: 'zh-CN',
  // SITE_BASE keeps both sites connected on Pages-style deployments;
  // DOCS_BASE remains an escape hatch for a custom documentation path.
  base: docsBase,
  outDir: '../dist/docs',
  cleanUrls: true,
  // Links escaping the docs site to the main site (`../../<page>.html`) are
  // intentional — the docs are deployed under the site's /docs/ path. Dev-server
  // localhost links inside docs prose are equally intentional. (The array form
  // does not special-case 'localhostLinks', so match the host explicitly.)
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
    /^(\.\/)?\.\.\//,
  ],

  appearance: true,
  lastUpdated: true,

  vite: {
    clearScreen: false,
    logLevel: process.env.TURNA_COMBINED_DEV ? 'warn' : 'info',
    server: { host: '127.0.0.1', port: docsPort, strictPort: true },
    build: { emptyOutDir: false },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${docsBase}turna-mark.svg` }],
    ['meta', { name: 'theme-color', content: '#e8efec', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0d1d1c', media: '(prefers-color-scheme: dark)' }],
    ['meta', { name: 'description', content: 'Turna 是一款本地优先、离线可用的开源语言学习应用，当前专注土耳其语。' }],
    ['meta', { property: 'og:title', content: 'Turna 文档' }],
    ['meta', { property: 'og:description', content: '本地优先、离线可用的开源语言学习应用，当前专注土耳其语。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: `${docsBase}turna-mark.svg` }],
  ],

  markdown: {
    image: { lazyLoading: true },
  },

  transformPageData(pageData) {
    const fm = pageData.frontmatter
    if (fm.description || fm.layout === 'home') return
    const desc = inferDescription(pageData.relativePath)
    if (desc) {
      fm.description = desc
      pageData.description = desc
    }
  },

  // The SSR head only emits siteData.description when the page leaves it unset;
  // transformHead is the reliable channel for per-page meta.
  transformHead({ pageData }) {
    const desc = pageData.frontmatter?.description
    if (!desc) return []
    return [
      ['meta', { name: 'description', content: desc }],
      ['meta', { property: 'og:description', content: desc }],
    ]
  },

  themeConfig: {
    logo: { src: '/turna-mark.svg', alt: 'Turna' },
    siteTitle: 'Turna',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    nav: [
      { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: '课程创作', link: '/authoring/teacher-guide', activeMatch: '/authoring/' },
      { text: '开发参考', link: '/developer/architecture', activeMatch: '/developer/' },
      { text: '产品主页', link: '/../index.html' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '什么是 Turna？', link: '/guide/what-is-turna' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装应用', link: '/guide/install-app' },
            { text: '核心能力一览', link: '/guide/features' },
          ],
        },
        {
          text: '学习系统',
          items: [
            { text: '标准学习流程', link: '/guide/learning-workflow' },
            { text: '课程结构', link: '/guide/curriculum' },
            { text: '交互题型', link: '/guide/interaction-types' },
            { text: '课型说明', link: '/guide/lesson-types' },
            { text: '复习系统', link: '/guide/review-system' },
            { text: 'FSRS 复习', link: '/guide/fsrs' },
            { text: '记忆状态与评分', link: '/guide/memory-state' },
            { text: '错题与弱项', link: '/guide/mistakes-and-weak-items' },
          ],
        },
        {
          text: '外部能力',
          items: [
            { text: 'Anki 集成', link: '/guide/anki' },
            { text: '导入 Anki 牌组', link: '/guide/anki-import' },
            { text: '卡片渲染与网络隔离', link: '/guide/anki-rendering' },
            { text: '导入课程包', link: '/guide/course-pack' },
            { text: 'AI 伴学', link: '/guide/ai' },
            { text: '配置 AI', link: '/guide/ai-configuration' },
            { text: 'AI 工作流', link: '/guide/ai-workflows' },
            { text: '音频、TTS 与朗读', link: '/guide/audio-and-tts' },
          ],
        },
        {
          text: '运行与维护',
          items: [
            { text: '设置系统', link: '/guide/settings' },
            { text: '可访问性', link: '/guide/accessibility' },
            { text: '本地数据与隐私', link: '/guide/data-and-privacy' },
            { text: '故障排查', link: '/guide/troubleshooting' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
      '/authoring/': [
        {
          text: '课程创作',
          items: [
            { text: '教师指南', link: '/authoring/teacher-guide' },
            { text: 'AI 课程生成', link: '/authoring/ai-course-generation' },
            { text: 'AI 控制模式', link: '/authoring/ai-control-modes' },
            { text: '课程编辑器', link: '/guide/editor' },
            { text: '课程目录约定', link: '/authoring/course-layout' },
            { text: '资源文件', link: '/authoring/resource-files' },
            { text: 'Lesson JSON 结构', link: '/authoring/lesson-schema' },
            { text: '校验与 Lint', link: '/authoring/validation' },
            { text: '教材导入', link: '/authoring/textbook-import' },
            { text: '外部课程包（.turnapack）', link: '/authoring/course-pack' },
            { text: '音频资产', link: '/authoring/audio-assets' },
            { text: '发布检查表', link: '/authoring/release-checklist' },
          ],
        },
      ],
      '/developer/': [
        {
          text: '开发参考',
          items: [
            { text: '架构总览', link: '/developer/architecture' },
            { text: '本地数据模型', link: '/developer/local-data' },
            { text: 'Android 构建', link: '/developer/android-build' },
            { text: 'Web 与文档站构建', link: '/developer/web-docs-build' },
            { text: '测试与质量门禁', link: '/developer/testing' },
            { text: '文档维护规范', link: '/guide/writing-docs' },
            { text: '术语表', link: '/developer/glossary' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DsDG1/turna' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333H18.16v7.28c0 2.585-1.794 4.204-4.39 4.204-2.552 0-4.345-1.619-4.345-4.204V5.333h2.204v7.36c0 1.384.887 2.19 2.14 2.19 1.28 0 2.106-.832 2.106-2.19v-7.36z"/></svg>',
        },
        link: 'https://gitee.com/dhwdwf3/turna-web',
      },
    ],

    footer: {
      message: '基于 MIT 协议发布，基于上游 rshrc/Varnamala 构建。',
      copyright: 'Copyright © 2024-present Varnamalaplus',
    },

    outline: {
      level: [2, 3],
      label: '本页大纲',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新',
    },

    editLink: {
      pattern: 'https://gitee.com/dhwdwf3/turna-web/edit/master/docs/:path',
      text: '在 Gitee 上编辑此页',
    },
  },
})
