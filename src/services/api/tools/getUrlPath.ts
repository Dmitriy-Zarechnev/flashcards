export function getPathname() {
  if (typeof window !== 'undefined') {
    return window.location.pathname // Возвращает только путь URL
  }

  return null // Возвращает null, если window не определен (например, на сервере)
}
