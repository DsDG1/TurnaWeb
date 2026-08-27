export async function copyText(
  text: string,
  clipboard: Pick<Clipboard, 'writeText'> | undefined = navigator.clipboard,
  documentRef: Document = document,
): Promise<boolean> {
  if (clipboard) {
    try {
      await clipboard.writeText(text)
      return true
    } catch {
      // Continue with the selection-based fallback.
    }
  }

  try {
    const textarea = documentRef.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    documentRef.body.appendChild(textarea)
    textarea.select()
    const copied = documentRef.execCommand('copy')
    textarea.remove()
    return copied
  } catch {
    return false
  }
}
