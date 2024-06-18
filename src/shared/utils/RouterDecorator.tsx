import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (storyFn: () => ReactNode) => {
  return <BrowserRouter>{storyFn()}</BrowserRouter>
}
