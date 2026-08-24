import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import AnkiPage from './AnkiPage'

describe('Anki feature page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero and the five integration feature cards', () => {
    render(<AnkiPage />)

    expect(screen.getByTestId('anki-hero')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: '你的 Anki 积累，长成一门课程。' })).toBeInTheDocument()

    expect(screen.getByText('官方 Anki 内核')).toBeInTheDocument()
    expect(screen.getByText('牌组变成课程')).toBeInTheDocument()
    expect(screen.getByText('一张卡，一份记忆')).toBeInTheDocument()
    expect(screen.getByText('原卡保真渲染')).toBeInTheDocument()
    expect(screen.getByText('本地优先')).toBeInTheDocument()
  })

  it('lists the four import-to-review flow steps', () => {
    render(<AnkiPage />)

    expect(screen.getByText('选择牌组文件')).toBeInTheDocument()
    expect(screen.getByText('确认字段映射')).toBeInTheDocument()
    expect(screen.getByText('进入课程路径')).toBeInTheDocument()
    expect(screen.getByText('按官方调度复习')).toBeInTheDocument()
  })

  it('explains the FSRS scheduling with a forgetting-curve chart', () => {
    render(<AnkiPage />)

    expect(screen.getByRole('heading', { name: '复习，交给 FSRS。' })).toBeInTheDocument()
    expect(screen.getByText('记忆有模型')).toBeInTheDocument()
    expect(screen.getByText('评分即数据')).toBeInTheDocument()
    expect(screen.getByText('越复习越省力')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /遗忘曲线示意图/ })).toBeInTheDocument()
  })

  it('reveals the answer of the demo card from an imported deck', async () => {
    const user = userEvent.setup()
    render(<AnkiPage />)

    expect(screen.queryByText('早上好')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '查看释义' }))

    expect(screen.getByText('早上好')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '收起释义' })).toBeInTheDocument()
  })

  it('shares the homepage theme storage key', async () => {
    window.localStorage.setItem('turna-theme', 'mist')
    const user = userEvent.setup()
    render(<AnkiPage />)

    await user.click(screen.getByRole('button', { name: '切换到夕光主题' }))

    expect(window.localStorage.getItem('turna-theme')).toBe('sunset')
  })

  it('links back to the homepage and the curriculum page', () => {
    render(<AnkiPage />)

    expect(screen.getByRole('link', { name: '返回 Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: '看看课程内容' })).toHaveAttribute('href', './curriculum.html')
    expect(screen.getByRole('link', { name: 'Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: 'Anki' })).toHaveAttribute('href', '#top')
  })
})
