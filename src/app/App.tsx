import { Provider } from 'react-redux'

import { Router } from '@/app/router'
import { LearnPage } from '@/pages'
import { store } from '@/services/store'
import { Layout } from '@/shared'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        {/*<Router />*/}
        <LearnPage />
      </Layout>
    </Provider>
  )
}
