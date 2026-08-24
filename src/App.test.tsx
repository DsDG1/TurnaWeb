import { Profiler } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
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

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: '打开导航菜单' })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: '关闭导航菜单' })).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-nav')).toHaveAttribute('aria-hidden', 'false')

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: '打开导航菜单' })).toHaveAttribute('aria-expanded', 'false')
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
