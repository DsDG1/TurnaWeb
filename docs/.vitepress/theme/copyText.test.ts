import { describe, expect, it, vi } from 'vitest'
import { copyText } from './copyText'

describe('copyText', () => {
  it('writes the complete Markdown source to the Clipboard API', async () => {
    const markdown = '# 标题\n\n| A | B |\n| --- | --- |\n| 1 | 2 |'
    const writeText = vi.fn().mockResolvedValue(undefined)

    await expect(copyText(markdown, { writeText })).resolves.toBe(true)
    expect(writeText).toHaveBeenCalledOnce()
    expect(writeText).toHaveBeenCalledWith(markdown)
  })

  it('falls back to a temporary textarea when Clipboard API access fails', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'))
    const execCommand = vi.fn().mockReturnValue(true)
    Object.defineProperty(document, 'execCommand', { configurable: true, value: execCommand })

    await expect(copyText('# fallback', { writeText }, document)).resolves.toBe(true)
    expect(execCommand).toHaveBeenCalledWith('copy')
    expect(document.querySelector('textarea')).toBeNull()
  })
})
