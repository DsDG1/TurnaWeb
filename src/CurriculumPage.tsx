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

const navigation = siteNavigation('curriculum')

const cefrLevels = [
  { level: 'A1', label: '入门', sections: 'Section 1 – 3' },
  { level: 'A2', label: '基础', sections: 'Section 4' },
  { level: 'B1', label: '进阶', sections: 'Section 5 – 6' },
  { level: 'B2', label: '自如', sections: 'Section 7 – 8' },
] as const

const lessonTypes = [
  {
    icon: 'intro',
    title: '新知课',
    description: '4 个子课时依次引入新的词汇、表达与语法，是每个主题的起点。',
  },
  {
    icon: 'listening',
    title: '听力课',
    description: '三阶段听力训练：先辨音，再理解，最后整体听懂一段内容。',
  },
  {
    icon: 'practice',
    title: '练习课',
    description: '以更高难度复练新知课学过的内容，巩固而不是重复。',
  },
  {
    icon: 'reading',
    title: '阅读课',
    description: '一篇短文加理解题，把词汇和语法放进真实语境。',
  },
  {
    icon: 'review',
    title: '复习课',
    description: '混合复习此前学过的内容，由课程树按前置关系解锁。',
  },
  {
    icon: 'mastery',
    title: '挑战课',
    description: '单次掌握度检验，达到通过阈值才能继续向后推进。',
  },
] as const

const interactionChips = [
  '认词卡',
  '单选题',
  '多选题',
  '填空',
  '句子翻译',
  '听音选词',
  '听写',
  '听音理解',
] as const

const contentStats = [
  { value: '8', label: '分级 Section' },
  { value: '11', label: '主题 Unit' },
  { value: '54', label: '课时' },
  { value: '148', label: '词汇' },
  { value: '18', label: '表达' },
  { value: '37', label: '配套音频' },
] as const

function LessonTypeIcon({ name }: { name: string }) {
  if (name === 'intro') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 11v26M11 24h26" />
        <circle cx="24" cy="24" r="17" />
      </svg>
    )
  }
  if (name === 'listening') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 22v4M20 16v16M26 19v10M32 13v22M38 22v4" />
      </svg>
    )
  }
  if (name === 'practice') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="9" y="9" width="30" height="30" rx="7" />
        <path d="m18 24 4.5 4.5L31 20" />
      </svg>
    )
  }
  if (name === 'reading') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 12c-3.5-2.6-8-3.4-14-3v27c6-.4 10.5.4 14 3 3.5-2.6 8-3.4 14-3V9c-6-.4-10.5.4-14 3Z" />
        <path d="M24 12v27" />
      </svg>
    )
  }
  if (name === 'review') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M39 24a15 15 0 1 1-4.4-10.6" />
        <path d="M39 8v6h-6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 8h13l9 9v23a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3Z" />
      <path d="M28 8v10h10M19 28l4 4 7-8" />
    </svg>
  )
}

type PreviewKey = 'practice' | 'listening' | 'reading'

function PracticeScreen() {
  const [selected, setSelected] = useState<number | null>(0)
  const options = ['早上好', '晚上好', '再见', '谢谢']
  return (
    <div className="phone-screen curriculum-screen" data-testid="practice-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="review-top"><button type="button" aria-label="返回">‹</button><span>练习课 · 问候</span><small>3 / 8</small></div>
      <div className="review-progress"><i /></div>
      <div className="mcq-prompt">
        <small>选择正确释义</small>
        <strong>“Günaydın” 是什么意思？</strong>
      </div>
      <div className="mcq-options" role="listbox" aria-label="释义选项">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={selected === index ? 'selected' : ''}
            aria-selected={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>{option}</span>
            <i aria-hidden="true">{selected === index ? '✓' : ''}</i>
          </button>
        ))}
      </div>
      <button className="reveal-button" type="button">检查</button>
    </div>
  )
}

function ListeningScreen() {
  return (
    <div className="phone-screen curriculum-screen" data-testid="listening-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="review-top"><button type="button" aria-label="返回">‹</button><span>听力课 · 辨音</span><small>1 / 3</small></div>
      <div className="review-progress"><i /></div>
      <div className="audio-card">
        <button type="button" aria-label="播放音频">▶</button>
        <div className="audio-bars" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      </div>
      <div className="mcq-prompt">
        <small>听到的词是？</small>
        <strong>点击选项作答</strong>
      </div>
      <div className="mcq-options three" role="listbox" aria-label="听到的词">
        <button type="button" className="selected" aria-selected="true"><span>çay · 茶</span><i aria-hidden="true">✓</i></button>
        <button type="button" aria-selected="false"><span>kalem · 笔</span><i aria-hidden="true" /></button>
        <button type="button" aria-selected="false"><span>elma · 苹果</span><i aria-hidden="true" /></button>
      </div>
      <button className="reveal-button" type="button">检查</button>
    </div>
  )
}

function ReadingScreen() {
  return (
    <div className="phone-screen curriculum-screen" data-testid="reading-screen">
      <div className="phone-status"><span>09:41</span><span>● ◒ ϟ</span></div>
      <div className="review-top"><button type="button" aria-label="返回">‹</button><span>阅读课 · 自我介绍</span><small>2 / 5</small></div>
      <div className="review-progress"><i /></div>
      <div className="reading-passage">
        <p>Merhaba! Ben Ali. Bugün hava çok güzel. Arkadaşımla çay içiyorum.</p>
        <small>你好！我是 Ali。今天天气很好，我正在和朋友喝茶。</small>
      </div>
      <div className="mcq-prompt compact">
        <small>理解题</small>
        <strong>Ali 今天觉得天气怎么样？</strong>
      </div>
      <div className="mcq-options" role="listbox" aria-label="理解题选项">
        <button type="button" className="selected" aria-selected="true"><span>很好</span><i aria-hidden="true">✓</i></button>
        <button type="button" aria-selected="false"><span>很冷</span><i aria-hidden="true" /></button>
        <button type="button" aria-selected="false"><span>在下雨</span><i aria-hidden="true" /></button>
      </div>
    </div>
  )
}

function CurriculumPhone({ preview }: { preview: PreviewKey }) {
  const ref = usePointerSurface<HTMLDivElement>('tilt')
  return (
    <div ref={ref} className="phone-perspective">
      <div className="phone-glow" />
      <div className="phone-shell">
        <div className="phone-speaker" />
        {preview === 'practice' && <PracticeScreen />}
        {preview === 'listening' && <ListeningScreen />}
        {preview === 'reading' && <ReadingScreen />}
        <div className="phone-home" />
      </div>
    </div>
  )
}

function CurriculumPage() {
  const [theme, toggleTheme] = useSiteTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewKey>('practice')
  const heroRef = usePointerSurface<HTMLElement>('glow', 6)
  const compactHeader = useCompactHeader(heroRef)

  useRevealOnScroll()
  useEscapeKey(() => setMenuOpen(false))
  useLockBodyScroll(menuOpen)

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <a className="skip-link" href="#curriculum-structure">跳到主要内容</a>
      <SiteHeader
        items={navigation}
        brandHref="./index.html"
        compact={compactHeader}
        theme={theme}
        activeId="curriculum"
        menuOpen={menuOpen}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <EditorialHero
        ref={heroRef}
        className="curriculum-hero content-hero"
        testId="curriculum-hero"
        titleId="curriculum-hero-title"
        eyebrow="土耳其语课程"
        title={<>课程按级别组织，<br /><span>从 A1 学到 B2。</span></>}
        description="课程分为 Section、Unit 和 Lesson。每节课约 5 分钟，并按顺序解锁。"
        primaryAction={{ label: '查看课程结构', href: '#curriculum-structure' }}
        scrollTarget="#curriculum-structure"
      />

      <main>
        <section id="curriculum-structure" className="content-section curriculum-structure-section" aria-labelledby="curriculum-structure-title">
          <div className="anki-flow-copy" data-reveal>
            <p className="eyebrow">课程结构</p>
            <h2 id="curriculum-structure-title">课程分为三个层级。</h2>
            <p className="curriculum-lead">
              课程分三级：<strong>Section</strong> 按 CEFR 能力分级，<strong>Unit</strong> 围绕一个生活主题（如“问候”），<strong>Lesson</strong> 是一次 5 分钟左右的课时。课程树记录前置关系，学完当前内容才会解锁下一课。
            </p>
          </div>
          <div className="cefr-ladder" data-reveal aria-label="CEFR 分级阶梯">
            {cefrLevels.map((item, index) => (
              <div key={item.level} className="cefr-step" style={{ '--step': index } as CSSProperties}>
                <span className="cefr-level">{item.level}</span>
                <div className="cefr-block">
                  <strong>{item.label}</strong>
                  <small>{item.sections}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="curriculum-types" className="content-section curriculum-types-section" aria-labelledby="curriculum-types-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">课时类型</p>
            <h2 id="curriculum-types-title">六种课时对应不同练习。</h2>
            <p>从引入新知识到检验掌握，每种课时对应一种明确的教学目的。</p>
          </div>
          <div className="type-grid">
            {lessonTypes.map((lessonType, index) => (
              <div key={lessonType.title} data-reveal style={{ '--delay': `${index * 60}ms` } as CSSProperties}>
                <GlowCard className="type-card">
                  <span className="feature-icon"><LessonTypeIcon name={lessonType.icon} /></span>
                  <h3>{lessonType.title}</h3>
                  <p>{lessonType.description}</p>
                </GlowCard>
              </div>
            ))}
          </div>
          <div className="interaction-strip" data-reveal>
            <p>课时内的练习形式</p>
            <div className="interaction-chips" aria-label="练习形式列表">
              {interactionChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum-preview" className="content-section anki-flow-section" aria-labelledby="curriculum-preview-title">
          <div className="anki-flow-copy" data-reveal>
            <p className="eyebrow">课时界面</p>
            <h2 id="curriculum-preview-title">查看课时界面。</h2>
            <div className="preview-tabs" role="tablist" aria-label="课时界面预览">
              {([
                ['practice', '练习'],
                ['listening', '听力'],
                ['reading', '阅读'],
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
              <span>{preview === 'practice' ? '01' : preview === 'listening' ? '02' : '03'}</span>
              <p>
                {preview === 'practice'
                  ? '练习课里的选择题：先自己想，再选择释义。'
                  : preview === 'listening'
                    ? '听力课从辨音开始：播放音频，选出听到的词。'
                    : '阅读课提供短文与理解题，把词汇放进语境。'}
              </p>
            </div>
          </div>
          <div className="anki-stage" data-reveal>
            <CurriculumPhone preview={preview} />
          </div>
        </section>

        <section id="curriculum-status" className="content-section curriculum-status-section" aria-labelledby="curriculum-status-title">
          <GlowCard className="curriculum-status-card">
            <div data-reveal>
              <p className="eyebrow">内容进度</p>
              <h2 id="curriculum-status-title">课程内容仍在开发。</h2>
              <p>
                A1 到 B2 的 8 个 Section 已经填入实际课程内容。新课时、语法点和更多语言会按开发进度增加；这是业余维护的开源项目，更新时间不会固定。
              </p>
              <div className="status-stats" aria-label="当前内容量">
                {contentStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <small>{stat.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </section>

        <section className="content-section anki-cta-section" aria-labelledby="curriculum-cta-title">
          <GlowCard className="anki-cta-card">
            <div data-reveal>
              <p className="eyebrow">继续探索</p>
              <h2 id="curriculum-cta-title">继续查看复习和 Anki 集成。</h2>
              <p>课程用于学习新内容，FSRS 用于安排复习，已有的 Anki 牌组也可以导入。</p>
              <div className="anki-cta-actions">
                <a className="source-button" href="./index.html">
                  <span>返回 Turna 首页</span><span aria-hidden="true">↗</span>
                </a>
                <a className="source-button is-ghost" href="./anki.html">
                  <span>了解 Anki 集成</span><span aria-hidden="true">↗</span>
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

export default CurriculumPage
