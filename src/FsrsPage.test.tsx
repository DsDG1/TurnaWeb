import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import FsrsPage from './FsrsPage'

describe('FSRS algorithm page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero and both engine implementations', () => {
    render(<FsrsPage />)

    expect(screen.getByTestId('fsrs-hero')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Turna 如何，安排复习。' })).toBeInTheDocument()

    expect(screen.getByText('Rust · fsrs-rs 6.6.1')).toBeInTheDocument()
    expect(screen.getByText('Dart · fsrs 2.0.1')).toBeInTheDocument()
    expect(screen.getByText('官方 Anki 牌组复习')).toBeInTheDocument()
    expect(screen.getByText('课程词汇与语法复习')).toBeInTheDocument()
  })

  it('explains the three memory variables and the formulas', () => {
    render(<FsrsPage />)

    expect(screen.getByText('难度 Difficulty')).toBeInTheDocument()
    expect(screen.getByText('稳定度 Stability')).toBeInTheDocument()
    expect(screen.getByText('可提取性 Retrievability')).toBeInTheDocument()
    expect(screen.getByText('遗忘曲线（幂函数）')).toBeInTheDocument()
    expect(screen.getByText('由目标留存率反解复习间隔')).toBeInTheDocument()
  })

  it('lists all parameter groups and the 21 default weights', () => {
    render(<FsrsPage />)

    expect(screen.getByText('初始稳定度')).toBeInTheDocument()
    expect(screen.getByText('稳定度更新')).toBeInTheDocument()
    expect(screen.getByText('曲线衰减')).toBeInTheDocument()
    expect(screen.getByText('0.2172')).toBeInTheDocument()
    expect(screen.getByText('0.2')).toBeInTheDocument()
    expect(screen.getByText(/FsrsLiteOptimizer/)).toBeInTheDocument()
  })

  it('lets readers expand a parameter explanation', async () => {
    const user = userEvent.setup()
    render(<FsrsPage />)

    const group = screen.getByText('初始难度').closest('details')
    expect(group).not.toHaveAttribute('open')
    await user.click(screen.getByText('初始难度'))
    expect(group).toHaveAttribute('open')
  })

  it('shows the engine configuration and rating mapping', () => {
    render(<FsrsPage />)

    expect(screen.getByText('目标留存率')).toBeInTheDocument()
    expect(screen.getByText(/730 天/)).toBeInTheDocument()
    expect(screen.getByText('重来 Again')).toBeInTheDocument()
    expect(screen.getByText('简单 Easy')).toBeInTheDocument()
  })

  it('links to the other pages', () => {
    render(<FsrsPage />)

    expect(screen.getByRole('link', { name: '返回 Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: '了解 Anki 集成' })).toHaveAttribute('href', './anki.html')
    expect(screen.getByRole('link', { name: '看看课程内容' })).toHaveAttribute('href', './curriculum.html')
  })
})
