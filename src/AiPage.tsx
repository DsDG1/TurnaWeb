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

const aiFeatures = [
  {
    icon: 'lesson',
    index: '01',
    title: '跟课答疑',
    description: '问的是正在学的句子和语法，不是通用聊天。',
  },
  {
    icon: 'hint',
    index: '02',
    title: '先提示，后揭晓',
    description: '从概念到规则再到完整讲解，避免一次把答案倒完。',
  },
  {
    icon: 'drill',
    index: '03',
    title: '按错题和弱词练',
    description: '用最近的错题、记得不稳的词生成一次短练习。',
  },
  {
    icon: 'scene',
    index: '04',
    title: '情景对话',
    description: 'A1–B1 场景里开口，结束有复盘。',
  },
] as const

function AiFeatureIcon({ name }: { name: string }) {
  if (name === 'lesson') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 14h24v22H12z" />
        <path d="M18 20h12M18 26h8" />
        <path d="M24 8c1.2 6 3.8 8.6 10 9.6-6.2 1-8.8 3.6-10 9.6-1.2-6-3.8-8.6-10-9.6C20.2 16.6 22.8 14 24 8Z" />
      </svg>
    )
  }
  if (name === 'hint') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M16 30c0-7 3.6-12 8-12s8 5 8 12" />
        <path d="M20 36h8M22 40h4" />
        <path d="M24 10v4M12 22h-3M39 22h-3M15 14l-2-2M35 14l2-2" />
      </svg>
    )
  }
  if (name === 'drill') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="10" width="28" height="28" rx="6" />
        <path d="m18 25 4 4 8-9" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 18h20v16H14z" />
      <path d="M20 18v-4h8v4" />
      <path d="M18 26h6M18 30h10" />
    </svg>
  )
}

type PreviewKey = 'tutor' | 'diagnosis' | 'dialogue'

function TutorScreen() {
  return (
    <div className="phone-screen ai-screen" data-testid="tutor-screen">
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

function DiagnosisScreen() {
  return (
    <div className="phone-screen ai-screen" data-testid="diagnosis-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="ai-heading"><span className="ai-orb">✦</span><div><small>学习诊断</small><h3>最近 7 天的弱项</h3></div></div>
      <div className="diag-list">
        <div><span>01</span><p>人称后缀 -im / -sin</p></div>
        <div><span>02</span><p>元音和谐</p></div>
        <div><span>03</span><p>问候语听辨</p></div>
      </div>
      <div className="plan-card">
        <small>10 分钟计划</small>
        <p>复习 6 个弱词，再做 4 道人称题。</p>
      </div>
      <button className="reveal-button" type="button">开始这轮</button>
    </div>
  )
}

function DialogueScreen() {
  return (
    <div className="phone-screen ai-screen" data-testid="dialogue-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="ai-heading"><span className="ai-orb">✦</span><div><small>情景对话 · A1</small><h3>咖啡馆</h3></div></div>
      <div className="chat ai-message">
        <span className="tiny-spark">✦</span>
        <p>Merhaba, ne alırdınız?</p>
        <small>你好，您要点什么？</small>
      </div>
      <div className="chat user-message">Bir çay, lütfen.</div>
      <div className="correction-note">
        <span>纠错</span>
        <p>很好。点茶也可以说 <b>Bir çay alabilir miyim?</b></p>
      </div>
      <div className="suggestion-row"><span>再试一句</span><span>结束复盘</span></div>
    </div>
  )
}

function AiPhone({ preview }: { preview: PreviewKey }) {
  const ref = usePointerSurface<HTMLDivElement>('tilt')
  return (
    <div ref={ref} className="phone-perspective">
      <div className="phone-glow" />
      <div className="phone-shell">
        <div className="phone-speaker" />
        {preview === 'tutor' && <TutorScreen />}
        {preview === 'diagnosis' && <DiagnosisScreen />}
        {preview === 'dialogue' && <DialogueScreen />}
        <div className="phone-home" />
      </div>
    </div>
  )
}

function AiPage() {
  const [theme, toggleTheme] = useSiteTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewKey>('tutor')
  const heroRef = usePointerSurface<HTMLElement>('glow', 6)
  const compactHeader = useCompactHeader(heroRef)

  useRevealOnScroll()
  useEscapeKey(() => setMenuOpen(false))
  useLockBodyScroll(menuOpen)

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <a className="skip-link" href="#ai-features">跳到主要内容</a>
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
        className="ai-hero content-hero"
        testId="ai-hero"
        titleId="ai-hero-title"
        eyebrow="AI 伴学"
        title={<>按当前进度，<br /><span>答这一题。</span></>}
        description="讲解会参考当前课时和错题。关掉 AI，学习和复习照常进行。"
        primaryAction={{ label: '查看伴学能力', href: '#ai-features' }}
        scrollTarget="#ai-features"
      />

      <main>
        <section id="ai-features" className="content-section features-section" aria-labelledby="ai-features-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">伴学能力</p>
            <h2 id="ai-features-title">按正在学的内容讲解，而不是闲聊。</h2>
            <p>AI 跟着课程、错题和弱词走。用完可以关掉。</p>
          </div>
          <div className="feature-grid">
            {aiFeatures.map((feature, index) => (
              <div key={feature.title} data-reveal style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                <GlowCard className="feature-card">
                  <div className="feature-topline"><span className="feature-icon"><AiFeatureIcon name={feature.icon} /></span><small>{feature.index}</small></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </GlowCard>
              </div>
            ))}
          </div>
          <div className="quiet-promise" data-reveal>
            <span aria-hidden="true">○</span>
            <p><strong>可以完全关掉。</strong>不配模型时，仍可用本地课程片段答疑；Key 只留在本机。</p>
          </div>
        </section>

        <section id="ai-preview" className="content-section anki-flow-section" aria-labelledby="ai-preview-title">
          <div className="anki-flow-copy" data-reveal>
            <p className="eyebrow">伴学界面</p>
            <h2 id="ai-preview-title">看看实际怎么问。</h2>
            <div className="preview-tabs" role="tablist" aria-label="伴学界面预览">
              {([
                ['tutor', '答疑'],
                ['diagnosis', '诊断'],
                ['dialogue', '对话'],
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
              <span>{preview === 'tutor' ? '01' : preview === 'diagnosis' ? '02' : '03'}</span>
              <p>
                {preview === 'tutor'
                  ? '讲解绑定当前句子：先给规则，再给例子。'
                  : preview === 'diagnosis'
                    ? '根据最近的错题和弱词给出短计划。'
                    : '在 A1 场景里开口，一句纠错，结束可以复盘。'}
              </p>
            </div>
          </div>
          <div className="anki-stage" data-reveal>
            <AiPhone preview={preview} />
          </div>
        </section>

        <section className="content-section anki-cta-section" aria-labelledby="ai-cta-title">
          <GlowCard className="anki-cta-card">
            <div data-reveal>
              <p className="eyebrow">继续探索</p>
              <h2 id="ai-cta-title">继续查看课程和复习。</h2>
              <p>AI 只是可选的讲解。课程用来学新内容，FSRS 用来安排复习。</p>
              <div className="anki-cta-actions">
                <a className="source-button" href="./index.html">
                  <span>返回 Turna 首页</span><span aria-hidden="true">↗</span>
                </a>
                <a className="source-button is-ghost" href="./curriculum.html">
                  <span>看看课程内容</span><span aria-hidden="true">↗</span>
                </a>
                <a className="source-button is-ghost" href="./fsrs.html">
                  <span>了解 FSRS 算法</span><span aria-hidden="true">↗</span>
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

export default AiPage
