<script setup lang="ts">
import { withBase } from 'vitepress'

const routes = [
  {
    index: '01',
    label: 'LEARNING',
    title: '学习与复习',
    copy: '确认运行要求，了解课程组织与每日复习流程，然后开始第一节课程。',
    links: [
      { text: 'Turna 是什么', href: '/guide/what-is-turna' },
      { text: '快速开始', href: '/guide/getting-started' },
      { text: '课程结构', href: '/guide/curriculum' },
    ],
  },
  {
    index: '02',
    label: 'MIGRATION',
    title: 'Anki 牌组迁移',
    copy: '检查 .apkg 导入、Official Collection 所有权、卡片渲染方式与正式调度边界。',
    links: [
      { text: '导入牌组', href: '/guide/anki-import' },
      { text: '渲染与隔离', href: '/guide/anki-rendering' },
      { text: '复习系统', href: '/guide/review-system' },
    ],
  },
  {
    index: '03',
    label: 'AUTHORING',
    title: '课程生产',
    copy: '按 Section、Unit、Lesson 三级结构组织内容，并通过编辑器完成校验与验收。',
    links: [
      { text: '教师指南', href: '/authoring/teacher-guide' },
      { text: '课型说明', href: '/guide/lesson-types' },
      { text: '目录约定', href: '/authoring/course-layout' },
    ],
  },
  {
    index: '04',
    label: 'ENGINEERING',
    title: '开发与构建',
    copy: '检查客户端分层、本地数据所有权、Android 发布、Web 构建与质量门禁。',
    links: [
      { text: '架构总览', href: '/developer/architecture' },
      { text: 'Android 构建', href: '/developer/android-build' },
      { text: '测试门禁', href: '/developer/testing' },
    ],
  },
]

const capabilities = [
  { code: 'LOCAL', title: '本地数据层', copy: '课程、牌组与学习记录默认保存在设备上；离线状态下保留完整学习与复习能力。', href: '/guide/features#离线与本地优先' },
  { code: 'FSRS', title: '记忆调度器', copy: '使用 21 参数 FSRS-6 更新记忆状态，并计算下一次复习时间。', href: '/guide/fsrs' },
  { code: 'ANKI', title: 'Anki 兼容层', copy: 'Android 生产路径导入 .apkg，由 Official Collection 持有卡片和调度状态。', href: '/guide/anki' },
  { code: 'PATH', title: '课程路径', copy: '按 CEFR A1–B2 组织内容，通过先修关系连接可独立完成的短课时。', href: '/guide/curriculum' },
  { code: 'ASSIST', title: '上下文辅助', copy: '基于当前句子、语法和错题提供分层提示；关闭 AI 不影响核心流程。', href: '/guide/ai' },
  { code: 'STUDIO', title: '课程编辑器', copy: '在桌面端编辑课程结构与内容，保存前执行校验，并通过教师模式验收。', href: '/guide/editor' },
]

const loop = [
  { n: '01', title: '选择课时', copy: '根据 CEFR 等级、完成状态与先修关系确定下一课。' },
  { n: '02', title: '输入内容', copy: '通过词汇、示例、听力与分层提示建立初始理解。' },
  { n: '03', title: '执行检索', copy: '使用选择、填空、翻译或听写验证知识提取能力。' },
  { n: '04', title: '更新状态', copy: '根据结果更新难度、稳定度与本地学习记录。' },
  { n: '05', title: '调度复习', copy: 'FSRS 计算复习时间，并将薄弱内容重新接入练习流程。' },
]

const facts = [
  ['课程范围', '土耳其语 CEFR A1–B2'],
  ['内容结构', '8 Section · 11 Unit · 54 Lesson'],
  ['学习素材', '148 词汇 · 18 表达 · 37 音频'],
  ['复习引擎', 'FSRS-6 · 21 参数'],
]
</script>

<template>
  <div class="turna-home">
    <section class="home-signal glass-panel" aria-label="文档概览">
      <div class="signal-copy">
        <span class="micro-label">DOCUMENT INDEX / REV.01</span>
        <h2>从系统运行到课程生产，<br>按任务查阅。</h2>
        <p>文档按学习者、Anki 用户、课程作者和开发者四类任务组织，提供操作步骤、行为说明与数据约束。</p>
      </div>
      <dl class="signal-stats">
        <div><dt>44</dt><dd>技术文档</dd></div>
        <div><dt>04</dt><dd>任务入口</dd></div>
        <div><dt>100%</dt><dd>离线主流程</dd></div>
      </dl>
    </section>

    <section class="home-section" aria-labelledby="route-title">
      <div class="section-kicker"><span>START HERE</span><i /></div>
      <div class="section-intro">
        <h2 id="route-title">选择任务入口</h2>
        <p>每条路径只包含完成当前任务所需的核心页面，无需顺序阅读全部文档。</p>
      </div>
      <div class="route-grid">
        <article v-for="route in routes" :key="route.title" class="route-card glass-panel">
          <header><span>{{ route.index }}</span><small>{{ route.label }}</small></header>
          <h3>{{ route.title }}</h3>
          <p>{{ route.copy }}</p>
          <nav :aria-label="`${route.title}推荐阅读`">
            <a v-for="link in route.links" :key="link.href" :href="withBase(link.href)">{{ link.text }}<span aria-hidden="true">↗</span></a>
          </nav>
        </article>
      </div>
    </section>

    <section class="home-section capability-section" aria-labelledby="capability-title">
      <div class="section-kicker"><span>SYSTEM MAP</span><i /></div>
      <div class="section-intro split-intro">
        <h2 id="capability-title">系统能力与职责边界</h2>
        <p>课程提供输入，练习执行检索，FSRS 负责调度。Anki、AI 与编辑器分别处理内容迁移、上下文辅助和课程生产。</p>
      </div>
      <div class="capability-grid glass-panel">
        <a v-for="item in capabilities" :key="item.code" :href="withBase(item.href)" class="capability-item">
          <span class="capability-code">{{ item.code }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.copy }}</p>
          <span class="text-link">查看规格 <b aria-hidden="true">→</b></span>
        </a>
      </div>
    </section>

    <section class="home-section" aria-labelledby="loop-title">
      <div class="section-kicker"><span>LEARNING LOOP</span><i /></div>
      <div class="section-intro">
        <h2 id="loop-title">课程学习与记忆调度闭环</h2>
        <p>新内容学习与旧内容复习共享同一学习状态，系统据此连续更新课程进度与调度结果。</p>
      </div>
      <ol class="loop-list">
        <li v-for="item in loop" :key="item.n">
          <span>{{ item.n }}</span>
          <div><h3>{{ item.title }}</h3><p>{{ item.copy }}</p></div>
        </li>
      </ol>
      <div class="inline-actions">
        <a class="glass-button primary" :href="withBase('/guide/fsrs')">理解 FSRS 调度</a>
        <a class="glass-button" :href="withBase('/guide/lesson-types')">查看六种课型</a>
      </div>
    </section>

    <section class="home-section data-section" aria-labelledby="data-title">
      <div class="data-copy">
        <div class="section-kicker"><span>DATA BOUNDARY</span><i /></div>
        <h2 id="data-title">核心状态默认保留在本地设备。</h2>
        <p>离线运行是默认模式。课程、牌组、复习状态和进度不依赖账号或持续网络连接。</p>
        <ul>
          <li><span>01</span>核心功能无需账号</li>
          <li><span>02</span>学习记录默认不上行</li>
          <li><span>03</span>未配置 AI 时使用本地内容</li>
          <li><span>04</span>同步与更新由用户主动触发</li>
        </ul>
        <a class="text-link standalone" :href="withBase('/guide/features#离线与本地优先')">了解本地优先原则 <b aria-hidden="true">→</b></a>
      </div>
      <div class="data-window glass-panel" aria-label="数据流向示意">
        <div class="window-bar"><span /><span /><span /><small>turna / local workspace</small></div>
        <div class="data-node device"><small>YOUR DEVICE</small><strong>学习工作区</strong><p>课程 · 牌组 · 记忆状态 · 设置</p></div>
        <div class="data-connector"><i /><span>主动选择时</span><i /></div>
        <div class="data-optional">
          <div><small>OPTIONAL</small><strong>课程更新</strong></div>
          <div><small>OPTIONAL</small><strong>AI 服务</strong></div>
        </div>
      </div>
    </section>

    <section class="home-section" aria-labelledby="snapshot-title">
      <div class="section-kicker"><span>CURRICULUM SNAPSHOT</span><i /></div>
      <div class="snapshot-grid">
        <div class="section-intro">
        <h2 id="snapshot-title">课程范围与当前数据快照</h2>
          <p>当前课程以土耳其语为主，按 CEFR 分级，通过短课时与先修关系控制学习顺序。以下数据来自当前课程清单。</p>
          <a class="glass-button primary" :href="withBase('/guide/curriculum')">打开课程结构</a>
        </div>
        <dl class="facts-panel glass-panel">
          <div v-for="fact in facts" :key="fact[0]"><dt>{{ fact[0] }}</dt><dd>{{ fact[1] }}</dd></div>
        </dl>
      </div>
    </section>

    <section class="home-section author-banner glass-panel" aria-labelledby="author-title">
      <div>
        <span class="micro-label">COURSE PRODUCTION</span>
        <h2 id="author-title">建立可校验、可验收的课程单元。</h2>
        <p>教师指南覆盖目录准备、课时创建、词汇引用、题目配置、保存校验与教师模式验收，不要求预先理解完整代码库。</p>
      </div>
      <div class="author-steps" aria-label="课程创作步骤">
        <span>结构</span><i />
        <span>内容</span><i />
        <span>校验</span><i />
        <span>试听</span>
      </div>
      <nav>
        <a class="glass-button primary" :href="withBase('/authoring/teacher-guide')">开始创作课程</a>
        <a class="glass-button" :href="withBase('/guide/editor')">认识编辑器</a>
      </nav>
    </section>

    <section class="home-section quick-links" aria-labelledby="quick-title">
      <div class="section-kicker"><span>REFERENCE</span><i /></div>
      <h2 id="quick-title">常用操作索引</h2>
      <div class="reference-grid">
        <a :href="withBase('/guide/getting-started')"><small>SETUP</small><strong>安装、启动与构建</strong><span>→</span></a>
        <a :href="withBase('/guide/anki-import')"><small>IMPORT</small><strong>导入现有 Anki 牌组</strong><span>→</span></a>
        <a :href="withBase('/guide/ai')"><small>ASSIST</small><strong>配置或关闭 AI 伴学</strong><span>→</span></a>
        <a :href="withBase('/guide/writing-docs')"><small>CONTRIBUTE</small><strong>为文档增加新页面</strong><span>→</span></a>
      </div>
    </section>
  </div>
</template>
