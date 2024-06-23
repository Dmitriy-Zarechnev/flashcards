import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './../store'

export const ProviderBrowserDecorator = (Story: () => ReactNode) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  )
}
