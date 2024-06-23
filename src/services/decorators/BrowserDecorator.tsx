import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Декоратор, предоставляющий доступ к BrowserRouter в историях
export const BrowserDecorator = (Story: () => ReactNode) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}
