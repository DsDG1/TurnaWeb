import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import EditorPage from './EditorPage'

describe('Course editor page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero and the four editor feature cards', () => {
    render(<EditorPage />)

    expect(screen.getByTestId('editor-hero')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: '在桌面上编课，不进 App。' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: '三级课程树' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '课时蓝图' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '课程工坊' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '教师试做' })).toBeInTheDocument()
  })

  it('shows the real dark editor toolbar in the main window mock', () => {
    render(<EditorPage />)

    const windowMock = screen.getByTestId('main-window')
    expect(within(windowMock).getByText('课程仓库')).toBeInTheDocument()
    expect(within(windowMock).getByText('保存')).toBeInTheDocument()
    expect(within(windowMock).getByText('课程工坊')).toBeInTheDocument()
    expect(within(windowMock).getByText('总览')).toBeInTheDocument()
    expect(within(windowMock).getByText('资源库')).toBeInTheDocument()
    expect(within(windowMock).getByText('发布')).toBeInTheDocument()
    expect(within(windowMock).getByText('生成听力音频')).toBeInTheDocument()
    expect(within(windowMock).getByText('教师模式')).toBeInTheDocument()
    expect(within(windowMock).getByText('设置')).toBeInTheDocument()
    expect(within(windowMock).getAllByText('Merhaba').length).toBeGreaterThan(0)
    expect(within(windowMock).getByText('+ 添加题目')).toBeInTheDocument()
    expect(windowMock.textContent).not.toMatch(/PDF|PPT/)
  })

  it('switches between main, listening blueprint, and workshop previews', async () => {
    const user = userEvent.setup()
    render(<EditorPage />)

    expect(screen.getByTestId('main-window')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '听力蓝图' }))
    expect(screen.getByTestId('listening-window')).toBeInTheDocument()
    expect(screen.getByText('阶段 1: 听音选词')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: '课程工坊' }))
    expect(screen.getByTestId('workshop-window')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '从教材新建…' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '空白 AI 项目' })).toBeInTheDocument()
  })

  it('lists the four authoring flow steps', () => {
    render(<EditorPage />)

    expect(screen.getByText('打开本地课程目录')).toBeInTheDocument()
    expect(screen.getByText('在树里改一课')).toBeInTheDocument()
    expect(screen.getByText('保存并校验')).toBeInTheDocument()
    expect(screen.getByText('教师模式试做')).toBeInTheDocument()
  })

  it('links back to the homepage and the curriculum page', () => {
    render(<EditorPage />)

    expect(screen.getByRole('link', { name: '返回 Turna 首页' })).toHaveAttribute('href', './index.html')
    expect(screen.getByRole('link', { name: '看看课程内容' })).toHaveAttribute('href', './curriculum.html')
    expect(within(screen.getByRole('navigation', { name: '主导航' })).getByRole('link', { name: '文档' })).toHaveAttribute('href', './docs/')
  })
})
