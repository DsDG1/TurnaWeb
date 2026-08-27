import { Profiler } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
// Vite 的 ?raw 导入：把 CSS 文件当字符串读入，绕开 node:fs 的类型依赖。
// vitest 使用 vite 解析器，所以这里同样可用。
import stylesCss from './styles.css?raw'
import App from './App'
import { getTimeBasedTheme } from './shared'

describe('Turna homepage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('chooses the time-based theme at the expected boundary', () => {
    expect(getTimeBasedTheme(5)).toBe('sunset')
    expect(getTimeBasedTheme(6)).toBe('mist')
    expect(getTimeBasedTheme(17)).toBe('mist')
    expect(getTimeBasedTheme(18)).toBe('sunset')
  })

  it('persists a manual theme choice', async () => {
    window.localStorage.setItem('turna-theme', 'mist')
    const user = userEvent.setup()
    const { container } = render(<App />)

    await user.click(screen.getByRole('button', { name: '切换到夕光主题' }))

    expect(container.firstChild).toHaveClass('theme-sunset')
    expect(window.localStorage.getItem('turna-theme')).toBe('sunset')
  })

  it('switches between course, review, and AI previews', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByTestId('course-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '复习' }))
    expect(screen.getByTestId('review-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'AI 伴学' }))
    expect(screen.getByTestId('ai-screen')).toBeInTheDocument()
  })

  it('uses direct hero copy and links to features and curriculum', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: '离线学习，按时复习。' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '查看功能' })).toHaveAttribute('href', '#features')
    expect(screen.getByRole('link', { name: '查看课程' })).toHaveAttribute('href', './curriculum.html')
  })

  it('keeps the header to 功能, 课程 and 文档', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: '主导航' })
    const labels = within(nav).getAllByRole('link').map((link) => link.textContent)
    expect(labels).toEqual(['功能', '课程', '文档'])
    expect(within(nav).getByRole('link', { name: '功能' })).toHaveAttribute('href', '#features')
    expect(within(nav).getByRole('link', { name: '课程' })).toHaveAttribute('href', './curriculum.html')
    expect(within(nav).getByRole('link', { name: '文档' })).toHaveAttribute('href', './docs/')
  })

  it('links the AI feature card and the course editor from the homepage', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: '了解 AI 伴学' })).toHaveAttribute('href', './ai.html')
    expect(screen.getByRole('link', { name: '课程编辑器' })).toHaveAttribute('href', './editor.html')
  })

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: '打开导航菜单' })
    const mobileNav = document.getElementById('mobile-nav') as HTMLElement
    expect(mobileNav).toHaveAttribute('aria-hidden', 'true')

    await user.click(menuButton)
    expect(screen.getByRole('button', { name: '关闭导航菜单' })).toHaveAttribute('aria-expanded', 'true')
    expect(mobileNav).toHaveAttribute('aria-hidden', 'false')
    // 展开后菜单必须在视觉上真正可见：opacity、visibility 都要到位。
    // jsdom 不解析外部 CSS，所以更严格的视觉测试在下面通过源码扫描完成。
    const styles = getComputedStyle(mobileNav)
    expect(styles.opacity).toBe('1')
    expect(styles.visibility).toBe('visible')

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: '打开导航菜单' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps .site-header free of contain: paint so the dropdown is not clipped', () => {
    // 回归测试：.site-header 不能带 contain: paint，否则溢出 header 边界的
    // .mobile-nav（position: absolute; top: 64px）会被裁掉，看起来"无法展开"。
    // jsdom 不解析外部 CSS，因此直接扫描源码。
    const css = String(stylesCss)
    const blocks = css
      .split('}')
      .map((chunk) => chunk.trim())
      .filter((chunk) => chunk.length > 0)

    const offenders: string[] = []
    for (const block of blocks) {
      const selectorPart = block.split('{')[0]
      if (!/site-header\b/.test(selectorPart)) continue
      if (!/contain\s*:[^;]*\bpaint\b/.test(block)) continue
      offenders.push(selectorPart)
    }

    expect(offenders).toEqual([])
  })

  it('updates pointer CSS variables without committing a React render', () => {
    let commits = 0
    render(
      <Profiler id="turna" onRender={() => { commits += 1 }}>
        <App />
      </Profiler>,
    )
    const commitsAfterMount = commits
    const hero = screen.getByTestId('hero')
    Object.defineProperty(hero, 'getBoundingClientRect', {
      value: () => ({ x: 0, y: 0, left: 0, top: 0, right: 1000, bottom: 700, width: 1000, height: 700, toJSON: () => ({}) }),
    })

    fireEvent.pointerMove(hero, { clientX: 700, clientY: 210 })

    expect(hero.style.getPropertyValue('--pointer-x')).toBe('700px')
    expect(hero.style.getPropertyValue('--pointer-y')).toBe('210px')
    expect(commits).toBe(commitsAfterMount)
  })
})
