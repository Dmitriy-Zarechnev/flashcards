import { Provider } from 'react-redux'

import { store } from '@/services/store'
import { Dialog, Layout } from '@/shared'

import { Router } from './router'

export function App() {
  return (
    <Provider store={store}>
      {/*<Layout>*/}
      {/*  <Router />*/}
      {/*</Layout>*/}
      <Dialog isSubmitting trigger={<button>CLICK</button>} />
    </Provider>
  )
}
