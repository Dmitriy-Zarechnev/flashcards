import { Provider } from 'react-redux'

import { Router } from '@/app/routes'
import { store } from '@/services/store'
import { Layout } from '@/shared'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
