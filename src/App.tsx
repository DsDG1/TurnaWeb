import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  FeatureIcon,
  GlowCard,
  SiteFooter,
  SiteHeader,
  useCompactHeader,
  useEscapeKey,
  useLockBodyScroll,
  usePointerSurface,
  useRevealOnScroll,
  useSiteTheme,
  type NavItem,
} from './shared'

export type PreviewKey = 'course' | 'review' | 'ai'

const navigation: readonly NavItem[] = [
  { id: 'features', label: '功能', href: '#features' },
  { id: 'preview', label: '预览', href: '#preview' },
  { id: 'audience', label: '适合谁', href: '#audience' },
  { id: 'curriculum', label: '课程', href: './curriculum.html' },
  { id: 'anki', label: 'Anki', href: './anki.html' },
]

type HomepageFeature = {
  icon: string
  index: string
  title: string
  description: string
  link?: string
  linkLabel?: string
}

const features: HomepageFeature[] = [
  {
    icon: 'offline',
    index: '01',
    title: '完全离线可用',
    description: '课程与学习记录保存在设备本地，没有网络也能照常学习。',
  },
  {
    icon: 'memory',
    index: '02',
    title: '在遗忘前及时复习',
    description: 'FSRS 根据记忆状态安排复习时间，优先巩固快要忘记的内容。',
    link: './fsrs.html',
    linkLabel: '了解 FSRS 算法',
  },
  {
    icon: 'anki',
    index: '03',
    title: '带上已有的 Anki 牌组',
    description: '导入已有的学习资料，在统一的课程与复习中继续使用。',
    link: './anki.html',
    linkLabel: '了解 Anki 集成',
  },
  {
    icon: 'ai',
    index: '04',
    title: '理解学习进度的 AI 助手',
    description: '结合当前课程、错题与偏好提供讲解；不开启也不影响核心学习功能。',
  },
]

const audiences = [
  {
    number: '一',
    title: '想每天学一点的人',
    description: '适合通勤、睡前等碎片时间。课程短小完整，打开就能继续。',
  },
  {
    number: '二',
    title: '已经在用 Anki 的人',
    description: '保留已有积累，同时获得课程树、错题回顾与更连贯的语言学习路径。',
  },
  {
    number: '三',
    title: '在意安静与隐私的人',
    description: '无需账号，没有广告、排行榜或付费压力。学习数据默认只属于你。',
  },
] as const

function CourseScreen() {
  return (
    <div className="phone-screen course-screen" data-testid="course-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="screen-header">
        <div><small>今天继续</small><h3>土耳其语 · A1</h3></div>
        <span className="streak">7 天</span>
      </div>
      <div className="progress-card">
        <div className="progress-copy"><span>晨间问候</span><strong>72%</strong></div>
        <div className="progress-track"><i /></div>
        <p>再完成 2 个小节</p>
      </div>
      <div className="lesson-path">
        <div className="lesson-node done"><span>✓</span><p>Merhaba</p></div>
        <div className="lesson-line" />
        <div className="lesson-node current"><span>01</span><p>Günaydın</p></div>
        <div className="lesson-line muted" />
        <div className="lesson-node"><span>02</span><p>Nasılsın?</p></div>
      </div>
      <div className="phone-bottom-nav"><b>学习</b><span>复习</span><span>我的</span></div>
    </div>
  )
}

function ReviewScreen() {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="phone-screen review-screen" data-testid="review-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="review-top"><button type="button" aria-label="返回">‹</button><span>今日复习</span><small>12 / 20</small></div>
      <div className="review-progress"><i /></div>
      <div className={`word-card${revealed ? ' revealed' : ''}`}>
        <small>土耳其语 · 问候</small>
        <strong>Günaydın</strong>
        <span className="pronunciation">/gy-naɯ-dɯn/</span>
        {revealed ? <p>早上好</p> : <span className="answer-hint">先想一想答案</span>}
      </div>
      <button className="reveal-button" type="button" onClick={() => setRevealed((value) => !value)}>
        {revealed ? '收起释义' : '查看释义'}
      </button>
      <div className={`rating-row${revealed ? ' visible' : ''}`} aria-hidden={!revealed}>
        <span>重来</span><span>困难</span><span>良好</span><span>简单</span>
      </div>
      <p className="fsrs-note">FSRS 会根据回答调整复习间隔</p>
    </div>
  )
}

function AiScreen() {
  return (
    <div className="phone-screen ai-screen" data-testid="ai-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="ai-heading"><span className="ai-orb">✦</span><div><small>Turna AI</small><h3>一起理清这个句子</h3></div></div>
      <div className="chat user-message">“Ben öğrenciyim” 为什么要用 -yim？</div>
      <div className="chat ai-message">
        <span className="tiny-spark">✦</span>
        <p><b>öğrenci</b> 是“学生”，<b>-yim</b> 表示“我是”。</p>
        <div className="example-line"><span>Ben öğrenciyim.</span><small>我是学生。</small></div>
        <p>元音结尾后加入连接音 <b>y</b>，读起来会更自然。</p>
      </div>
      <div className="suggestion-row"><span>再举个例子</span><span>加入复习</span></div>
      <div className="chat-input"><span>继续提问…</span><b>↑</b></div>
    </div>
  )
}

function PhonePreview({ preview }: { preview: PreviewKey }) {
  const ref = usePointerSurface<HTMLDivElement>('tilt')
  return (
    <div ref={ref} className="phone-perspective">
      <div className="phone-glow" />
      <div className="phone-shell">
        <div className="phone-speaker" />
        {preview === 'course' && <CourseScreen />}
        {preview === 'review' && <ReviewScreen />}
        {preview === 'ai' && <AiScreen />}
        <div className="phone-home" />
      </div>
    </div>
  )
}

function App() {
  const [theme, toggleTheme] = useSiteTheme()
  const [preview, setPreview] = useState<PreviewKey>('course')
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [sourceNotice, setSourceNotice] = useState(false)
  const noticeTimer = useRef<number>(0)
  const heroRef = usePointerSurface<HTMLElement>('glow', 6)
  const compactHeader = useCompactHeader(heroRef)

  useRevealOnScroll()
  useEscapeKey(() => setMenuOpen(false))
  useLockBodyScroll(menuOpen)

  useEffect(() => () => window.clearTimeout(noticeTimer.current), [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const showSourceNotice = () => {
    setSourceNotice(true)
    window.clearTimeout(noticeTimer.current)
    noticeTimer.current = window.setTimeout(() => setSourceNotice(false), 2500)
  }

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <a className="skip-link" href="#features">跳到主要内容</a>
      <SiteHeader
        items={navigation}
        brandHref="#top"
        compact={compactHeader}
        theme={theme}
        activeId={activeSection}
        menuOpen={menuOpen}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <section id="top" ref={heroRef} className="hero" data-testid="hero" aria-labelledby="hero-title">
        <div className="hero-background" />
        <div className="hero-overlay" />
        <div className="hero-frame">
          <div className="hero-light" />
          <div className="hero-copy">
            <h1 id="hero-title">
              关掉干扰，<br />
              <span>学会</span>一门语言。
            </h1>
            <i className="hero-dash" aria-hidden="true" />
          </div>
          <a className="scroll-cue" href="#features">
            <span>向下滚动</span>
            <i aria-hidden="true">↓</i>
          </a>
        </div>
      </section>

      <main>
        <section id="features" className="content-section features-section" aria-labelledby="features-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">核心功能</p>
            <h2 id="features-title">专注于语言学习本身。</h2>
            <p>当前支持土耳其语，后续会加入更多语言。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={feature.title} data-reveal style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                <GlowCard className="feature-card">
                  <div className="feature-topline"><span className="feature-icon"><FeatureIcon name={feature.icon} /></span><small>{feature.index}</small></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.link && (
                    <a className="feature-link" href={feature.link}>
                      <span>{feature.linkLabel ?? '了解更多'}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </GlowCard>
              </div>
            ))}
          </div>
          <div className="quiet-promise" data-reveal>
            <span aria-hidden="true">○</span>
            <p><strong>无干扰学习。</strong>数据本地存储，无需账号，没有广告、排行榜或付费压力。</p>
          </div>
        </section>

        <section id="preview" className="content-section preview-section" aria-labelledby="preview-title">
          <div className="preview-copy" data-reveal>
            <p className="eyebrow">应用界面预览</p>
            <h2 id="preview-title">从学习，<br />到真正记住。</h2>
            <p className="preview-description">短课程建立语感，FSRS 安排复习计划，AI 随时解答疑问。</p>
            <div className="preview-tabs" role="tablist" aria-label="应用预览场景">
              {([
                ['course', '课程'],
                ['review', '复习'],
                ['ai', 'AI 伴学'],
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
            <div className="preview-note">
              <span>{preview === 'course' ? '01' : preview === 'review' ? '02' : '03'}</span>
              <p>{preview === 'course' ? '课程路径清晰，每次专注一个小节。' : preview === 'review' ? '不做机械重复，优先复习快忘的内容。' : '讲解会参考当前课程与错题，也可以完全关闭。'}</p>
            </div>
          </div>
          <div className="preview-stage" data-reveal>
            <div className="mascot-halo" />
            <picture>
              <source srcSet="./assets/turna-waving.webp" type="image/webp" />
              <img
                className="turna-mascot"
                src="./assets/turna-waving.png"
                width="1024"
                height="1024"
                loading="lazy"
                decoding="async"
                alt="挥手的 Turna 鸟吉祥物"
              />
            </picture>
            <PhonePreview preview={preview} />
          </div>
        </section>

        <section id="audience" className="content-section audience-section" aria-labelledby="audience-title">
          <div className="section-heading audience-heading" data-reveal>
            <p className="eyebrow">适合谁</p>
            <h2 id="audience-title">适合这些学习者。</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article key={audience.title} className="audience-card" data-reveal style={{ '--delay': `${index * 80}ms` } as CSSProperties}>
                <span>{audience.number}</span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section open-source-section" aria-labelledby="open-source-title">
          <GlowCard className="open-source-card">
            <div className="source-copy" data-reveal>
              <p className="eyebrow">持续开发中的开源项目</p>
              <h2 id="open-source-title">开源项目，<br />欢迎参与。</h2>
              <p>Turna 仍在持续开发，欢迎阅读代码、运行体验或参与贡献。</p>
              <button className="source-button" type="button" onClick={showSourceNotice}>
                <span>查看 Gitee 源码</span><span aria-hidden="true">↗</span>
              </button>
              {sourceNotice && (
                <p className="source-notice" role="status">Gitee 仓库近期上线</p>
              )}
            </div>
            <div className="tech-stack" data-reveal aria-label="主要技术">
              {['Flutter', 'SQLite', 'FSRS', 'Anki', 'Local-first'].map((item, index) => (
                <span key={item} style={{ '--index': index } as CSSProperties}>{item}</span>
              ))}
            </div>
          </GlowCard>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
