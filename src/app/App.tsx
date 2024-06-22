import { Provider } from 'react-redux'

import { Router } from '@/app/router/routes'
import { LineLoadingProvider } from '@/services'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <LineLoadingProvider>
        <Router />
      </LineLoadingProvider>
    </Provider>
  )
}
