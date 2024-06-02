import { Provider } from 'react-redux'

import { AddDeckModal } from '@/entities/modals/decks/add-deck-modal/AddDeckModal'
import { store } from '@/services/store'
import { Dialog, Layout } from '@/shared'

import { Router } from './router'

export function App() {
  const handler = (data: any) => {
    console.log(data)

    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(data)
      }, 2000)
    })
  }

  return (
    <Provider store={store}>
      {/*<Layout>*/}
      {/*  <Router />*/}
      {/*</Layout>*/}
      <AddDeckModal onSubmit={handler} />
    </Provider>
  )
}
