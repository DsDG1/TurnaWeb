import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import CurriculumPage from './CurriculumPage'

describe('Curriculum page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero, CEFR ladder and lesson types', () => {
    render(<CurriculumPage />)

    expect(screen.getByTestId('curriculum-hero')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: '课程按级别组织，从 A1 学到 B2。' })).toBeInTheDocument()

    expect(screen.getByText('A1')).toBeInTheDocument()
    expect(screen.getByText('B2')).toBeInTheDocument()

    expect(screen.getByText('新知课')).toBeInTheDocument()
    expect(screen.getByText('听力课')).toBeInTheDocument()
    expect(screen.getByText('练习课')).toBeInTheDocument()
    expect(screen.getByText('阅读课')).toBeInTheDocument()
    expect(screen.getByText('复习课')).toBeInTheDocument()
    expect(screen.getByText('挑战课')).toBeInTheDocument()
  })

  it('lists the interaction forms from the app', () => {
    render(<CurriculumPage />)

    expect(screen.getByText('认词卡')).toBeInTheDocument()
    expect(screen.getByText('句子翻译')).toBeInTheDocument()
    expect(screen.getByText('听音选词')).toBeInTheDocument()
    expect(screen.getByText('听写')).toBeInTheDocument()
  })

  it('switches between practice, listening, and reading previews', async () => {
    const user = userEvent.setup()
    render(<CurriculumPage />)

    expect(screen.getByTestId('practice-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '听力' }))
    expect(screen.getByTestId('listening-screen')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '阅读' }))
    expect(screen.getByTestId('reading-screen')).toBeInTheDocument()
  })

  it('lets the learner pick an option in the practice demo', async () => {
    const user = userEvent.setup()
    render(<CurriculumPage />)

    await user.click(screen.getByRole('button', { name: /再见/ }))

    expect(screen.getByRole('button', { name: /再见/ })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('button', { name: /早上好/ })).toHaveAttribute('aria-selected', 'false')
  })

  it('states that content is still in development with current stats', () => {
    render(<CurriculumPage />)

    expect(screen.getByRole('heading', { name: '课程内容仍在开发。' })).toBeInTheDocument()
    expect(screen.getByText('分级 Section')).toBeInTheDocument()
    expect(screen.getByText('课时')).toBeInTheDocument()
  })

  it('links back to the homepage and the anki page', () => {
    render(<CurriculumPage />)

    expect(screen.getByRole('link', { name: '返回 Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: '了解 Anki 集成' })).toHaveAttribute('href', './anki.html')
    const nav = screen.getByRole('navigation', { name: '主导航' })
    expect(within(nav).getByRole('link', { name: '课程' })).toHaveAttribute('href', '#top')
    expect(within(nav).getByRole('link', { name: '文档' })).toHaveAttribute('href', './docs/')
  })
})
