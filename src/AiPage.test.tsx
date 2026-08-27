import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import AiPage from './AiPage'

describe('AI companion page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero and the four companion feature cards', () => {
    render(<AiPage />)

    expect(screen.getByTestId('ai-hero')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: '按当前进度，答这一题。' })).toBeInTheDocument()

    expect(screen.getByText('跟课答疑')).toBeInTheDocument()
    expect(screen.getByText('先提示，后揭晓')).toBeInTheDocument()
    expect(screen.getByText('按错题和弱词练')).toBeInTheDocument()
    expect(screen.getByText('情景对话')).toBeInTheDocument()
  })

  it('switches between tutor, diagnosis, and dialogue previews', async () => {
    const user = userEvent.setup()
    render(<AiPage />)

    expect(screen.getByTestId('tutor-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '诊断' }))
    expect(screen.getByTestId('diagnosis-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '对话' }))
    expect(screen.getByTestId('dialogue-screen')).toBeInTheDocument()
  })

  it('states that AI can be turned off', () => {
    render(<AiPage />)

    expect(screen.getByText('可以完全关掉。')).toBeInTheDocument()
    expect(screen.getByText(/Key 只留在本机/)).toBeInTheDocument()
  })

  it('shares the homepage theme storage key', async () => {
    window.localStorage.setItem('turna-theme', 'mist')
    const user = userEvent.setup()
    render(<AiPage />)

    await user.click(screen.getByRole('button', { name: '切换到夕光主题' }))

    expect(window.localStorage.getItem('turna-theme')).toBe('sunset')
  })

  it('links back to the homepage, curriculum, and FSRS pages', () => {
    render(<AiPage />)

    expect(screen.getByRole('link', { name: '返回 Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: '看看课程内容' })).toHaveAttribute('href', './curriculum.html')
    expect(screen.getByRole('link', { name: '了解 FSRS 算法' })).toHaveAttribute('href', './fsrs.html')
    expect(within(screen.getByRole('navigation', { name: '主导航' })).getByRole('link', { name: '文档' })).toHaveAttribute('href', './docs/')
  })
})
