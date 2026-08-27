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

const memoryVariables = [
  {
    symbol: 'D',
    name: '难度 Difficulty',
    description: '这张卡对你来说有多难，1–10 之间。复习回答越好，难度越低；连续答错则升高。',
  },
  {
    symbol: 'S',
    name: '稳定度 Stability',
    description: '记忆的“半衰期”尺度：经过 S 天后，留存率恰好降到目标值（默认 90%）。',
  },
  {
    symbol: 'R',
    name: '可提取性 Retrievability',
    description: '此刻还能想起来的概率，随时间沿幂函数曲线下降——FSRS 不用指数曲线。',
  },
] as const

const engineSources = [
  {
    tag: 'Rust · fsrs-rs 6.6.1',
    title: '官方 Anki 牌组复习',
    description:
      '导入的 .apkg 牌组由官方 Anki 内核（rslib）内的 fsrs-rs 调度，与桌面版 Anki 完全一致，默认权重为其内置的官方参数组。',
    file: 'anki/Cargo.toml → fsrs 6.6.1',
  },
  {
    tag: 'Dart · fsrs 2.0.1',
    title: '课程词汇与语法复习',
    description:
      'Turna 自有内容（课程词、表达、语法）由应用内的 FsrsEngine 驱动，底层是 pub 上的 fsrs 包（open-spaced-repetition），同样是一套 21 参数的 FSRS-6。',
    file: 'lib/core/fsrs_engine.dart',
  },
] as const

const parameterGroups = [
  { range: 'w0 – w3', name: '初始稳定度', description: '第一次以 重来 / 困难 / 良好 / 简单 遇到一张卡时，各自的起始稳定度。' },
  { range: 'w4 – w5', name: '初始难度', description: '新卡的起始难度，以及简单回答带来的难度折减。' },
  { range: 'w6 – w8', name: '难度更新', description: '复习后难度向上下回归的斜率，决定难度变化多快。' },
  { range: 'w9 – w13', name: '稳定度更新', description: '复习成功与失败两条路径上，新稳定度的增量与衰减。' },
  { range: 'w14 – w15', name: '均值回归', description: '稳定度与难度向长期均值收敛的权重，防止极端值。' },
  { range: 'w16 – w18', name: '短期与同日', description: '同一天内反复复习（短步进）时的稳定度变化。' },
  { range: 'w19', name: '失败再学习', description: '答错进入重学后，稳定度的恢复提升。' },
  { range: 'w20', name: '曲线衰减', description: '遗忘曲线的形状参数 δ = −w20，是 FSRS-6 新增的自由衰减。' },
] as const

const dartDefaultParameters = [
  '0.2172', '1.1771', '3.2602', '16.1507', '7.0114', '0.57', '2.0966', '0.0069',
  '1.5261', '0.112', '1.0178', '1.849', '0.1133', '0.3127', '2.2934', '0.2191',
  '3.0004', '0.7536', '0.3332', '0.1437', '0.2',
] as const

const engineConfigs = [
  { key: '目标留存率', value: '0.9（可在 0.8 – 0.95 间调整）' },
  { key: '间隔上限', value: '730 天' },
  { key: '间隔取整', value: '默认开启模糊（fuzz），预览时关闭以保证确定' },
  { key: '学习 / 重学短步进', value: '10 分钟' },
  { key: '同日容错', value: '同一天最多 4 次失败' },
] as const

const ratingMappings = [
  { rating: '重来 Again', from: '课程练习判错（fail），或打分 ≤ 2' },
  { rating: '困难 Hard', from: '打分 = 3' },
  { rating: '良好 Good', from: '课程练习判对（pass），或打分 = 4' },
  { rating: '简单 Easy', from: '打分 ≥ 5' },
] as const

function RetentionCurves() {
  return (
    <svg viewBox="0 0 700 300" aria-hidden="true">
      <path d="M50 20 V250 H560" className="fsrs-axis" />
      <line x1="50" y1="66.7" x2="560" y2="66.7" className="fsrs-target" />
      <text x="565" y="70" className="fsrs-label fsrs-label-start">90% 目标</text>
      <path
        d="M50 30 C 55 46, 60 60, 67 66.7 C 78 80, 90 93, 101 104 C 122 116, 145 128, 169 139.3 C 208 149, 248 158, 287.8 168.6 C 380 179, 470 189, 560 198.7"
        className="retention-curve s1"
      />
      <path
        d="M50 30 C 67 35, 84 40, 101 43.6 C 124 47.5, 147 53, 169 57.9 C 208 63.5, 248 70, 287.8 76.6 C 380 85, 470 93.5, 560 101.5"
        className="retention-curve s10"
      />
      <path
        d="M50 30 C 67 31, 84 32, 101 33 C 124 34, 147 35.5, 169 36.6 C 208 38.5, 248 40.5, 287.8 42.8 C 380 46.5, 470 50.5, 560 54.5"
        className="retention-curve s50"
      />
      <circle cx="67" cy="66.7" r="6" className="fsrs-dot" />
      <text x="568" y="203" className="fsrs-label fsrs-label-start">S = 1</text>
      <text x="568" y="106" className="fsrs-label fsrs-label-start">S = 10</text>
      <text x="568" y="58" className="fsrs-label fsrs-label-start">S = 50</text>
      <text x="50" y="272" className="fsrs-label fsrs-label-start">0 天</text>
      <text x="560" y="272" className="fsrs-label fsrs-label-end">30 天</text>
      <text x="58" y="22" className="fsrs-label fsrs-label-start">100%</text>
      <text x="42" y="71" className="fsrs-label fsrs-label-end fsrs-label-y">90%</text>
    </svg>
  )
}

function FsrsPage() {
  const [theme, toggleTheme] = useSiteTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = usePointerSurface<HTMLElement>('glow', 6)
  const compactHeader = useCompactHeader(heroRef)

  useRevealOnScroll()
  useEscapeKey(() => setMenuOpen(false))
  useLockBodyScroll(menuOpen)

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <a className="skip-link" href="#fsrs-what">跳到主要内容</a>
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
        className="fsrs-hero content-hero"
        testId="fsrs-hero"
        titleId="fsrs-hero-title"
        eyebrow="FSRS 算法"
        title={<>Turna 如何，<br /><span>安排复习。</span></>}
        description="FSRS 根据卡片难度、记忆稳定度和当前记忆概率，计算下一次复习时间。"
        primaryAction={{ label: '查看算法说明', href: '#fsrs-what' }}
        scrollTarget="#fsrs-what"
      />

      <main>
        <section id="fsrs-what" className="content-section fsrs-what-section" aria-labelledby="fsrs-what-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">它是什么</p>
            <h2 id="fsrs-what-title">FSRS 是开源的间隔重复算法。</h2>
            <p>
              FSRS 出自 open-spaced-repetition 开源社区，基于数千名学习者的真实复习数据训练。Turna 没有自造调度器，而是在两条链路上各接入一套官方实现——都是 21 参数的 FSRS-6。
            </p>
          </div>
          <div className="engine-grid">
            {engineSources.map((engine, index) => (
              <div key={engine.tag} data-reveal style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                <GlowCard className="engine-card">
                  <span className="engine-tag">{engine.tag}</span>
                  <h3>{engine.title}</h3>
                  <p>{engine.description}</p>
                  <code>{engine.file}</code>
                </GlowCard>
              </div>
            ))}
          </div>
        </section>

        <section id="fsrs-model" className="content-section anki-fsrs-section" aria-labelledby="fsrs-model-title">
          <div className="anki-fsrs-copy" data-reveal>
            <p className="eyebrow">记忆模型</p>
            <h2 id="fsrs-model-title">三个变量决定复习时间。</h2>
            <div className="fsrs-points">
              {memoryVariables.map((item) => (
                <div key={item.symbol} className="fsrs-point variable-point">
                  <span>{item.symbol}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="formula-card">
              <p className="formula-title">遗忘曲线（幂函数）</p>
              <p className="formula">R(t) = ( 1 + F · t / S )<sup>δ</sup></p>
              <p className="formula-note">δ = −w₂₀，F = 0.9<sup>1/δ</sup> − 1 ≈ 0.693（≈ ln 2）</p>
            </div>
            <div className="formula-card">
              <p className="formula-title">由目标留存率反解复习间隔</p>
              <p className="formula">I(S) = ( S / F ) · ( R<sup> 1/δ</sup> − 1 )</p>
              <p className="formula-note">R 为目标留存率（默认 0.9）：想要记得更牢，间隔就更短。</p>
            </div>
          </div>
          <div className="anki-fsrs-stage" data-reveal>
            <div className="fsrs-chart">
              <RetentionCurves />
              <p className="fsrs-caption">
                不同稳定度下的留存率曲线。稳定度 S 就是留存率降到 90% 所需的天数——S 越大，曲线越平。
              </p>
            </div>
          </div>
        </section>

        <section id="fsrs-params" className="content-section fsrs-params-section" aria-labelledby="fsrs-params-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">21 个参数</p>
            <h2 id="fsrs-params-title">21 个权重控制计算结果。</h2>
            <p>
              21 个权重（w0 – w20）刻画整条记忆曲线与每次复习的更新规则。默认值来自社区的训练结果；Turna 还内置了一个轻量优化器，用你自己的复习历史微调它们。
            </p>
          </div>
          <div className="param-group-grid">
            {parameterGroups.map((group, index) => (
              <details key={group.range} className="param-group" data-reveal style={{ '--delay': `${index * 50}ms` } as CSSProperties} open={index === 0}>
                <summary>
                  <span>{group.range}</span>
                  <h3>{group.name}</h3>
                  <i aria-hidden="true">＋</i>
                </summary>
                <p>{group.description}</p>
              </details>
            ))}
          </div>
          <div className="param-array" data-reveal>
            <p>fsrs-dart 2.0.1 的默认权重（与 Anki 内核各自携带一组默认值）</p>
            <code>
              {dartDefaultParameters.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </code>
          </div>
          <div className="quiet-promise" data-reveal>
            <span aria-hidden="true">○</span>
            <p><strong>参数可以个性化。</strong>FsrsLiteOptimizer 使用课程练习记录做带约束的梯度下降，只有训练损失降低时才替换默认权重，并且可以随时恢复。</p>
          </div>
        </section>

        <section id="fsrs-engine" className="content-section fsrs-engine-section" aria-labelledby="fsrs-engine-title">
          <div className="anki-flow-copy" data-reveal>
            <p className="eyebrow">工程映射</p>
            <h2 id="fsrs-engine-title">Turna 中的具体配置。</h2>
            <p className="curriculum-lead">
              应用内的 FsrsEngine 包装 fsrs-dart：课程练习的二选一结果（对 / 错）会映射成 FSRS 的四档评分，其余配置如下。
            </p>
            <div className="rating-map">
              {ratingMappings.map((item) => (
                <div key={item.rating} className="rating-row-item">
                  <span>{item.rating}</span>
                  <p>{item.from}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="anki-fsrs-stage" data-reveal>
            <div className="config-card">
              <p className="formula-title">FsrsEngine 默认配置</p>
              <dl>
                {engineConfigs.map((config) => (
                  <div key={config.key}>
                    <dt>{config.key}</dt>
                    <dd>{config.value}</dd>
                  </div>
                ))}
              </dl>
              <code>lib/core/fsrs_engine.dart · lib/core/fsrs_optimizer.dart</code>
            </div>
          </div>
        </section>

        <section className="content-section anki-cta-section" aria-labelledby="fsrs-cta-title">
          <GlowCard className="anki-cta-card">
            <div data-reveal>
              <p className="eyebrow">继续探索</p>
              <h2 id="fsrs-cta-title">继续查看课程和 Anki 集成。</h2>
              <p>FSRS 负责安排复习；课程用于学习新内容，也可以导入已有的 Anki 牌组。</p>
              <div className="anki-cta-actions">
                <a className="source-button" href="./index.html">
                  <span>返回 Turna 首页</span><span aria-hidden="true">↗</span>
                </a>
                <a className="source-button is-ghost" href="./anki.html">
                  <span>了解 Anki 集成</span><span aria-hidden="true">↗</span>
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

export default FsrsPage
