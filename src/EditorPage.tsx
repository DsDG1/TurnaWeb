import { useState, type CSSProperties } from 'react'
import {
  EditorialHero,
  GlowCard,
  SiteFooter,
  SiteHeader,
  useCompactHeader,
  useEscapeKey,
  useLockBodyScroll,
  usePointerSurface,
  useRevealOnScroll,
  useSiteTheme,
  siteNavigation,
} from './shared'

const navigation = siteNavigation()

const editorFeatures = [
  {
    icon: 'tree',
    index: '01',
    title: '三级课程树',
    description: '拖拽、复制、套用预设，对应 App 里的课程结构。',
  },
  {
    icon: 'blueprint',
    index: '02',
    title: '课时蓝图',
    description: 'intro / practice / listening / reading 等模板用表单和流程图编。',
  },
  {
    icon: 'workshop',
    index: '03',
    title: '课程工坊',
    description: '从教材抽知识点，或空白生成一节课，导入前先预览 diff。',
  },
  {
    icon: 'teacher',
    index: '04',
    title: '教师试做',
    description: '在桌面上点一遍学员会做到的题。',
  },
] as const

const flowSteps = [
  {
    number: '01',
    title: '打开本地课程目录',
    description: '选择 turkish 这类课程文件夹。编辑器在本机打开，不经过账号。',
  },
  {
    number: '02',
    title: '在树里改一课',
    description: '左侧是 Section / Unit / Lesson。右侧改名称、先修、题型和题目。',
  },
  {
    number: '03',
    title: '保存并校验',
    description: '保存时走同一套课程校验。失败会回滚，避免写出坏 JSON。',
  },
  {
    number: '04',
    title: '教师模式试做',
    description: '用学员会看到的题型点一遍，再发布。',
  },
] as const

const toolbarItems = [
  '课程仓库',
  '保存',
  '|',
  '课程工坊',
  '总览',
  '资源库',
  '发布',
  '生成听力音频',
  '|',
  '教师模式',
  '|',
  '设置',
] as const

const treeRows = [
  { id: 's1', kind: 'section', label: 'Section 1', type: 'section', depth: 0 },
  { id: 's1-u1', kind: 'unit', label: 'Greetings', type: 'unit', depth: 1 },
  { id: 's1-l1', kind: 'lesson', label: 'Welcome', type: 'lesson (leg…)', depth: 2 },
  { id: 's1-l2', kind: 'lesson', label: 'Merhaba', type: 'lesson (intro)', depth: 2 },
  { id: 's1-l3', kind: 'lesson', label: 'Greetings practice', type: 'lesson (pra…)', depth: 2 },
  { id: 's1-l4', kind: 'lesson', label: 'Listening: greetings', type: 'lesson (list…)', depth: 2 },
  { id: 's1-l5', kind: 'lesson', label: 'Reading: a short hello', type: 'lesson (rea…)', depth: 2 },
  { id: 's1-l6', kind: 'lesson', label: 'Review: greetings', type: 'lesson (revi…)', depth: 2 },
  { id: 's2', kind: 'section', label: 'Section 2', type: 'section', depth: 0 },
  { id: 's2-u1', kind: 'unit', label: 'Sayılar', type: 'unit', depth: 1 },
  { id: 's2-l1', kind: 'lesson', label: 'Welcome', type: 'lesson (leg…)', depth: 2 },
  { id: 's2-l2', kind: 'lesson', label: 'Birden beşe', type: 'lesson (intro)', depth: 2 },
] as const

function EditorFeatureIcon({ name }: { name: string }) {
  if (name === 'tree') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 12h16v8H12zM20 24h16v8H20zM20 36h16v8H20z" />
        <path d="M20 16v24" />
      </svg>
    )
  }
  if (name === 'blueprint') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="12" width="14" height="10" rx="2" />
        <rect x="26" y="12" width="14" height="10" rx="2" />
        <rect x="17" y="28" width="14" height="10" rx="2" />
        <path d="M15 22v4h18v-4" />
      </svg>
    )
  }
  if (name === 'workshop') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="10" width="32" height="28" rx="4" />
        <path d="M8 18h32M16 26h16M16 32h10" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="16" r="6" />
      <path d="M12 38c2-8 6-12 12-12s10 4 12 12" />
    </svg>
  )
}

type PreviewKey = 'main' | 'listening' | 'workshop'

function EditorToolbar() {
  return (
    <div className="editor-toolbar" aria-hidden="true">
      {toolbarItems.map((item, index) => (
        item === '|'
          ? <i key={`sep-${index}`} className="editor-sep" />
          : <span key={item}>{item}</span>
      ))}
    </div>
  )
}

function EditorTree({ selectedId }: { selectedId: string }) {
  return (
    <aside className="editor-tree">
      <div className="editor-move">上下移动: <b>↑</b> <b>↓</b></div>
      <div className="editor-tree-head"><span>课程结构</span><span>类型</span></div>
      <ul>
        {treeRows.map((row) => (
          <li
            key={row.id}
            className={`${row.kind}${row.id === selectedId ? ' is-selected' : ''}`}
            style={{ '--depth': row.depth } as CSSProperties}
          >
            <span>{row.label}</span>
            <small>{row.type}</small>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function IntroDetail() {
  return (
    <section className="editor-detail">
      <p className="editor-crumb">编辑内容 › Section 1 / Greetings / Merhaba</p>
      <h3>Merhaba</h3>
      <div className="editor-split">
        <div className="editor-form">
          <p className="editor-block-title">属性</p>
          <label>ID（只读）<em>s1-l2</em></label>
          <label>名称<input readOnly value="Merhaba" /></label>
          <label>描述<textarea readOnly rows={3} value="Meet common Turkish greetings and produce them right away." /></label>
          <div className="editor-checklist">
            <span>先修</span>
            <p>✓ Welcome (s1-l1)</p>
            <p>Greetings practice (s1-l3)</p>
          </div>
        </div>
        <div className="editor-lesson">
          <div className="editor-tabs"><b>蓝图</b><span>高级编辑</span></div>
          <p className="editor-template">课型: 认识新词 (intro)</p>
          <div className="editor-columns">
            <div>
              <small>教学环节</small>
              <p className="is-active">Merhaba</p>
              <p>Nasılsın</p>
              <p>İyiyim</p>
              <button type="button">+ 教学环节</button>
            </div>
            <div>
              <small>教学步骤</small>
              <p className="is-active">Learn &amp; produce</p>
              <button type="button">+ 教学步骤</button>
            </div>
            <div className="editor-item">
              <p className="editor-prompt">[展示生词]</p>
              <div className="editor-item-actions">
                <span>展示生词</span>
                <button type="button">+ 添加题目</button>
                <button type="button">− 删除</button>
              </div>
              <label>wordId *<input readOnly value="merhaba — hello" /></label>
              <label>context<input readOnly value="merhaba — hello" /></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ListeningDetail() {
  return (
    <section className="editor-detail">
      <p className="editor-crumb">编辑内容 › Section 1 / Greetings / Listening: greetings</p>
      <h3>Listening: greetings</h3>
      <div className="editor-split listening">
        <div className="editor-form">
          <p className="editor-block-title">属性</p>
          <label>ID（只读）<em>s1-l4</em></label>
          <label>名称<input readOnly value="Listening: greetings" /></label>
          <label>描述<textarea readOnly rows={3} value="Hear greetings and short courtesy phrases (TTS-backed word audio)." /></label>
          <div className="editor-checklist">
            <span>先修</span>
            <p>Welcome (s1-l1)</p>
            <p>✓ Greetings practice (s1-l3)</p>
          </div>
        </div>
        <div className="editor-lesson">
          <div className="editor-tabs"><b>蓝图</b><span>高级编辑</span></div>
          <article className="editor-phase">
            <header>阶段 1: 听音选词</header>
            <p>已设转录文本</p>
            <div className="editor-phase-card">
              <small>[听音选词]</small>
              <p>What do you hear?</p>
              <ul>
                <li className="is-correct">merhaba</li>
                <li>teşekkürler</li>
                <li>hayır</li>
              </ul>
              <button type="button">+ 添加选项</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function EditorMainWindow({ preview }: { preview: 'main' | 'listening' }) {
  const selectedId = preview === 'main' ? 's1-l2' : 's1-l4'
  return (
    <div className="editor-window" data-testid={`${preview}-window`}>
      <EditorToolbar />
      <div className="editor-body">
        <EditorTree selectedId={selectedId} />
        {preview === 'main' ? <IntroDetail /> : <ListeningDetail />}
      </div>
      <div className="editor-status">
        <span>已加载: turkish</span>
        <span>AI 生成内容仅供参考，请作者自行审核其准确性与适用性。</span>
      </div>
    </div>
  )
}

function WorkshopWindow() {
  return (
    <div className="editor-window workshop-window" data-testid="workshop-window">
      <div className="workshop-head">
        <span>项目：</span>
        <b>未选择项目</b>
      </div>
      <div className="workshop-body">
        <h3>项目库</h3>
        <p>选择项目继续创作，或新建项目。所有进度自动保存，可随时关闭。</p>
        <table>
          <thead>
            <tr>
              <th>项目名称</th>
              <th>源文件</th>
              <th>当前步骤</th>
              <th>已导入</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>土耳其语 · 问候</td>
              <td>greetings.md</td>
              <td>审校</td>
              <td>否</td>
            </tr>
            <tr>
              <td>空白 AI 项目</td>
              <td>—</td>
              <td>设计</td>
              <td>否</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="workshop-actions">
        <button type="button">从教材新建…</button>
        <button type="button">空白 AI 项目</button>
        <span className="workshop-spacer" />
        <button type="button" className="is-ghost">关闭</button>
      </div>
    </div>
  )
}

function EditorPreview({ preview }: { preview: PreviewKey }) {
  const ref = usePointerSurface<HTMLDivElement>('tilt')
  return (
    <div ref={ref} className="editor-perspective">
      {preview === 'workshop' ? <WorkshopWindow /> : <EditorMainWindow preview={preview} />}
    </div>
  )
}

function EditorPage() {
  const [theme, toggleTheme] = useSiteTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewKey>('main')
  const heroRef = usePointerSurface<HTMLElement>('glow', 6)
  const compactHeader = useCompactHeader(heroRef)

  useRevealOnScroll()
  useEscapeKey(() => setMenuOpen(false))
  useLockBodyScroll(menuOpen)

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <a className="skip-link" href="#editor-features">跳到主要内容</a>
      <SiteHeader
        items={navigation}
        brandHref="./index.html"
        compact={compactHeader}
        theme={theme}
        activeId=""
        menuOpen={menuOpen}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <EditorialHero
        ref={heroRef}
        className="editor-hero content-hero"
        testId="editor-hero"
        titleId="editor-hero-title"
        eyebrow="课程编辑器"
        title={<>在桌面上编课，<br /><span>不进 App。</span></>}
        description="本地 PySide6 工具。打开课程文件夹，编辑 Section / Unit / Lesson，保存时自动校验。"
        primaryAction={{ label: '查看编辑流程', href: '#editor-features' }}
        scrollTarget="#editor-features"
      />

      <main>
        <section id="editor-features" className="content-section features-section" aria-labelledby="editor-features-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">编辑器能力</p>
            <h2 id="editor-features-title">老师在电脑上编，学员只在 Turna 里学。</h2>
            <p>这是仓库里的桌面程序，不进手机应用。</p>
          </div>
          <div className="feature-grid">
            {editorFeatures.map((feature, index) => (
              <div key={feature.title} data-reveal style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                <GlowCard className="feature-card">
                  <div className="feature-topline"><span className="feature-icon"><EditorFeatureIcon name={feature.icon} /></span><small>{feature.index}</small></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </GlowCard>
              </div>
            ))}
          </div>
          <div className="quiet-promise" data-reveal>
            <span aria-hidden="true">○</span>
            <p><strong>编辑器不进应用。</strong>老师在电脑上编，学员只在 Turna 里学。课程仍是本地 JSON。</p>
          </div>
        </section>

        <section id="editor-preview" className="content-section editor-flow-section" aria-labelledby="editor-preview-title">
          <div className="anki-flow-copy" data-reveal>
            <p className="eyebrow">真实界面</p>
            <h2 id="editor-preview-title">默认是深色两栏窗口。</h2>
            <div className="preview-tabs" role="tablist" aria-label="编辑器界面预览">
              {([
                ['main', '主窗口'],
                ['listening', '听力蓝图'],
                ['workshop', '课程工坊'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={preview === key}
                  className={preview === key ? 'active' : ''}
                  onClick={() => setPreview(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flow-steps">
              {flowSteps.map((step) => (
                <div key={step.number} className="flow-step">
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="editor-stage" data-reveal>
            <EditorPreview preview={preview} />
          </div>
        </section>

        <section className="content-section anki-cta-section" aria-labelledby="editor-cta-title">
          <GlowCard className="anki-cta-card">
            <div data-reveal>
              <p className="eyebrow">继续探索</p>
              <h2 id="editor-cta-title">看看学员会学到的课程。</h2>
              <p>编辑器产出的是课程 JSON。回到首页，或查看 A1–B2 的课程结构。</p>
              <div className="anki-cta-actions">
                <a className="source-button" href="./index.html">
                  <span>返回 Turna 首页</span><span aria-hidden="true">↗</span>
                </a>
                <a className="source-button is-ghost" href="./curriculum.html">
                  <span>看看课程内容</span><span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </GlowCard>
        </section>
      </main>

      <SiteFooter brandHref="./index.html" />
    </div>
  )
}

export default EditorPage
