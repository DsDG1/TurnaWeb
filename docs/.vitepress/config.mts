import { defineConfig } from 'vitepress'

const siteBase = process.env.SITE_BASE?.replace(/^\/+|\/+$/g, '')
const docsBase = process.env.DOCS_BASE || (siteBase ? `/${siteBase}/docs/` : '/docs/')
const docsPort = Number(process.env.DOCS_DEV_PORT || 5174)

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
  ignoreDeadLinks: true,

  appearance: true,
  lastUpdated: true,

  vite: {
    clearScreen: false,
    logLevel: process.env.TURNA_COMBINED_DEV ? 'warn' : 'info',
    server: { host: '127.0.0.1', port: docsPort, strictPort: true },
    build: { emptyOutDir: false },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#e8efec' }],
    ['meta', { name: 'description', content: 'Turna 是一款本地优先、离线可用的开源语言学习应用，当前专注土耳其语。' }],
    ['meta', { property: 'og:title', content: 'Turna 文档' }],
    ['meta', { property: 'og:description', content: '本地优先、离线可用的开源语言学习应用，当前专注土耳其语。' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

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
      { icon: 'github', link: 'https://github.com/Varnamalaplus/TurnaWeb' },
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

    editLink: {
      pattern: 'https://github.com/Varnamalaplus/TurnaWeb/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
  },
})
