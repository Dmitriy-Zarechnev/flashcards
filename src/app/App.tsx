import { Provider } from 'react-redux'

import { Demo } from '@/app/demo'
import { store } from '@/services/store'
import { Dialog, Layout } from '@/shared'

import { Router } from './router'

export function App() {
  return (
    <Provider store={store}>
      {/*<Layout>*/}
      {/*  <Router />*/}
      {/*</Layout>*/}
      <Dialog title={'Add New Deck'} trigger={<button>CLICK</button>}>
        <Demo />
      </Dialog>
    </Provider>
  )
}
