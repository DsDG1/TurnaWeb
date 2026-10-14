import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'

export type ThemeMode = 'mist' | 'sunset'

export const THEME_STORAGE_KEY = 'turna-theme'

export type NavItem = {
  id: string
  label: string
  href: string
}

export const DOCS_HREF = './docs/'

export const GITHUB_HREF = 'https://github.com/DsDG1/TurnaWeb'
export const GITEE_HREF = 'https://gitee.com/dhwdwf3/turna-web'

export function siteNavigation(page: 'home' | 'curriculum' | 'other' = 'other'): readonly NavItem[] {
  return [
    {
      id: 'features',
      label: '功能',
      href: page === 'home' ? '#features' : './index.html#features',
    },
    {
      id: 'curriculum',
      label: '课程',
      href: page === 'curriculum' ? '#top' : './curriculum.html',
    },
    {
      id: 'docs',
      label: '文档',
      href: DOCS_HREF,
    },
  ]
}

export type HeroAction = {
  label: string
  href: string
}

export type EditorialHeroProps = {
  id?: string
  className?: string
  testId?: string
  titleId: string
  eyebrow?: string
  title: ReactNode
  description?: string
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  scrollTarget: string
  scrollLabel?: string
  art?: 'wetland' | 'none'
}

export function getTimeBasedTheme(hour = new Date().getHours()): ThemeMode {
  return hour >= 6 && hour < 18 ? 'mist' : 'sunset'
}

export function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'mist'
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'mist' || stored === 'sunset') return stored
  return getTimeBasedTheme()
}

export function useSiteTheme(): [ThemeMode, () => void] {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'mist' ? 'sunset' : 'mist'
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
      return next
    })
  }

  return [theme, toggleTheme]
}

export function applyPointerPosition(
  node: HTMLElement,
  clientX: number,
  clientY: number,
  mode: 'glow' | 'tilt',
  parallax = 0,
) {
  const rect = node.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top
  const normalizedX = rect.width ? x / rect.width - 0.5 : 0
  const normalizedY = rect.height ? y / rect.height - 0.5 : 0

  node.style.setProperty('--pointer-x', `${x}px`)
  node.style.setProperty('--pointer-y', `${y}px`)

  if (mode === 'tilt') {
    node.style.setProperty('--tilt-x', `${(-normalizedY * 6).toFixed(2)}deg`)
    node.style.setProperty('--tilt-y', `${(normalizedX * 6).toFixed(2)}deg`)
  } else if (parallax > 0) {
    node.style.setProperty('--parallax-x', `${(-normalizedX * parallax).toFixed(2)}px`)
    node.style.setProperty('--parallax-y', `${(-normalizedY * parallax).toFixed(2)}px`)
  }
}

function supportsPointerMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function usePointerSurface<T extends HTMLElement>(
  mode: 'glow' | 'tilt' = 'glow',
  parallax = 0,
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !supportsPointerMotion()) return

    let frame = 0
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() =>
        applyPointerPosition(node, event.clientX, event.clientY, mode, parallax),
      )
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        node.style.setProperty('--tilt-x', '0deg')
        node.style.setProperty('--tilt-y', '0deg')
        node.style.setProperty('--parallax-x', '0px')
        node.style.setProperty('--parallax-y', '0px')
      })
    }

    node.addEventListener('pointermove', move)
    node.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', move)
      node.removeEventListener('pointerleave', leave)
    }
  }, [mode, parallax])

  return ref
}

export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export function useCompactHeader(
  heroRef: RefObject<HTMLElement | null>,
  ratio = 0.82,
  hysteresis = 24,
): boolean {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let heroHeight = hero.offsetHeight
    let last = false
    let ticking = false
    let raf = 0
    let ro: ResizeObserver | null = null

    const calc = () => {
      ticking = false
      const threshold = heroHeight * ratio
      const next = last ? window.scrollY > threshold - hysteresis : window.scrollY > threshold
      if (next !== last) {
        last = next
        setCompact(next)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      raf = requestAnimationFrame(calc)
    }

    const onResize = () => {
      heroHeight = hero.offsetHeight
      onScroll()
    }

    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        heroHeight = hero.offsetHeight
        onScroll()
      })
      ro.observe(hero)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      ro?.disconnect()
    }
  }, [heroRef, ratio, hysteresis])

  return compact
}

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

export function useEscapeKey(handler: () => void) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handler()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [handler])
}

export function BirdMark() {
  return (
    <span className="bird-mark" aria-hidden="true">
      <svg viewBox="0 0 58 58" fill="none">
        <rect x="0.75" y="0.75" width="56.5" height="56.5" rx="12" />
        <path d="M15 42.5c3.9-9.4 8.4-16.1 16.2-21.7 3.8-2.7 6.6-6.8 5.3-9.8" />
        <path d="M17.2 40.1c6.8-3.8 12.6-8.7 16.3-15.2 2-3.5 2.4-7.2.8-10.4" />
        <path d="M33.8 13.7c3.3-1.1 6.3-.2 9.2 2.4l-6.6 1.5" />
        <path d="M22.5 32.8c.2 8.1-.4 12.5-2.3 15.2M24.9 32.1c1.9 7.5 2.3 12.2 1.1 15.1" />
        <path d="m19.5 48 3.3-1.2M25.5 47.4l3.1.5" />
      </svg>
    </span>
  )
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon${open ? ' is-open' : ''}`} aria-hidden="true">
      <i />
      <i />
    </span>
  )
}

export function GlowCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = usePointerSurface<HTMLDivElement>('glow')
  return (
    <div ref={ref} className={`glow-card ${className}`}>
      {children}
    </div>
  )
}

export function FeatureIcon({ name }: { name: string }) {
  if (name === 'offline') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 30.5a11 11 0 0 1 2.2-21.7A15.5 15.5 0 0 1 43 18.2a8.3 8.3 0 0 1-3.2 15.9H27" />
        <path d="M18 24v17m0 0-6-6m6 6 6-6" />
      </svg>
    )
  }
  if (name === 'memory') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 7a17 17 0 1 0 17 17" />
        <path d="M24 13v12l8 5M33 7h8v8" />
      </svg>
    )
  }
  if (name === 'anki') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="12" width="28" height="27" rx="5" />
        <path d="M15 8h25v27M22 18v15m-7-7h14" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6c1.4 7.5 4.6 10.8 12 12-7.4 1.3-10.6 4.5-12 12-1.4-7.5-4.6-10.7-12-12 7.4-1.2 10.6-4.5 12-12Z" />
      <path d="M37 28c.7 4.1 2.5 5.9 6.5 6.6-4 .7-5.8 2.5-6.5 6.4-.8-3.9-2.5-5.7-6.5-6.4 4-.7 5.7-2.5 6.5-6.6Z" />
    </svg>
  )
}

export const EditorialHero = forwardRef<HTMLElement, EditorialHeroProps>(function EditorialHero(
  {
    id = 'top',
    className = '',
    testId,
    titleId,
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    scrollTarget,
    scrollLabel = '继续查看',
    art = 'none',
  },
  ref,
) {
  return (
    <section
      id={id}
      ref={ref}
      className={`hero editorial-hero${className ? ` ${className}` : ''}`}
      data-testid={testId}
      aria-labelledby={titleId}
    >
      {art === 'wetland' && (
        <picture className="hero-media" aria-hidden="true">
          <source media="(max-width: 520px)" srcSet="./assets/misty-wetland-mobile.webp" type="image/webp" />
          <img
            src="./assets/misty-wetland.jpg"
            width="1586"
            height="992"
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      )}
      {art === 'none' && (
        <svg className="hero-motif" viewBox="0 0 720 720" fill="none" aria-hidden="true">
          <circle cx="430" cy="315" r="224" />
          <path d="M288 548c31-112 80-201 163-274 42-37 62-91 43-135" />
          <path d="M311 526c79-47 137-105 171-181 17-39 18-80-2-116" />
          <path d="M476 216c47-15 89-2 126 34l-90 18" />
          <path d="M344 441c7 75 4 132-10 170M371 431c21 71 30 127 24 171" />
          <path d="M235 596c49-26 101-29 156-10M438 594c48-25 94-29 139-12" />
        </svg>
      )}
      <div className="hero-overlay" />
      <div className="hero-frame">
        <div className="hero-light" />
        <div className="hero-copy">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1 id={titleId}>{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          {(primaryAction || secondaryAction) && (
            <div className="hero-actions">
              {primaryAction && <a className="hero-action primary" href={primaryAction.href}>{primaryAction.label}</a>}
              {secondaryAction && <a className="hero-action secondary" href={secondaryAction.href}>{secondaryAction.label}</a>}
            </div>
          )}
        </div>
        <a className="scroll-cue" href={scrollTarget}>
          <span>{scrollLabel}</span>
          <i aria-hidden="true">↓</i>
        </a>
      </div>
    </section>
  )
})

export function SiteHeader({
  items,
  brandHref,
  compact,
  theme,
  activeId,
  menuOpen,
  onToggleTheme,
  onToggleMenu,
  onNavigate,
}: {
  items: readonly NavItem[]
  brandHref: string
  compact: boolean
  theme: ThemeMode
  activeId: string
  menuOpen: boolean
  onToggleTheme: () => void
  onToggleMenu: () => void
  onNavigate: () => void
}) {
  return (
    <header className={`site-header${compact ? ' is-compact' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <a className="brand" href={brandHref} aria-label="Turna 首页" onClick={onNavigate}>
        <BirdMark />
        <span>Turna</span>
      </a>

      <nav className="desktop-nav" aria-label="主导航">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={activeId === item.id ? 'active' : ''}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-switch"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'mist' ? '切换到夕光主题' : '切换到晨雾主题'}
          title={theme === 'mist' ? '切换到夕光' : '切换到晨雾'}
        >
          <span />
        </button>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          onClick={onToggleMenu}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="移动端导航" aria-hidden={!menuOpen}>
        {items.map((item) => (
          <a key={item.id} href={item.href} onClick={onNavigate}>
            <span>{item.label}</span>
            <span aria-hidden="true">↘</span>
          </a>
        ))}
        <button
          className="mobile-theme-button"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'mist' ? '在菜单中切换到夕光主题' : '在菜单中切换到晨雾主题'}
        >
          <span>{theme === 'mist' ? '切换夕光' : '切换晨雾'}</span>
          <i aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}

const footerLinks = [
  { href: './curriculum.html', label: '课程', external: false },
  { href: DOCS_HREF, label: '文档', external: false },
  { href: './anki.html', label: 'Anki', external: false },
  { href: './fsrs.html', label: 'FSRS', external: false },
  { href: './ai.html', label: 'AI', external: false },
  { href: './editor.html', label: '编辑器', external: false },
  { href: GITHUB_HREF, label: 'GitHub', external: true },
  { href: GITEE_HREF, label: 'Gitee', external: true },
] as const

export function SiteFooter({ brandHref = '#top' }: { brandHref?: string }) {
  return (
    <footer>
      <div className="footer-brand-block">
        <a className="footer-brand" href={brandHref}>
          <BirdMark />
          <span>Turna</span>
        </a>
        <p>离线学习，按时复习。</p>
      </div>
      <nav className="footer-links" aria-label="站点页面与代码仓库">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
            {link.external && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </nav>
      <p className="credits">基于 <a href="https://github.com/rshrc/Varnamala" target="_blank" rel="noreferrer">rshrc/Varnamala</a> 持续构建。</p>
    </footer>
  )
}
