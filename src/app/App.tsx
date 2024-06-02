import { Provider } from 'react-redux'

import { DeckFormValues } from '@/entities'
import { DeckModal } from '@/entities/modals/decks/deck-modal/DeckModal'
import { store } from '@/services/store'
import { Dialog, Layout } from '@/shared'

import img from './../shared/ui/assembled/dropdown-profile/stories/Dropdown.webp'

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
      <DeckModal onSubmit={handler} variant={'edit'} />
    </Provider>
  )
}
