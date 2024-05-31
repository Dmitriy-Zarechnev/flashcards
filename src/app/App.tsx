import { Provider } from 'react-redux'

import { store } from '@/services/store'
import { Layout } from '@/shared'

import { Router } from './router'

export function App() {
  const centerStyles = {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
  }

  return (
    <div style={centerStyles}>
      <Provider store={store}>
        <Layout>
          <Router />
        </Layout>
      </Provider>
    </div>
  )
}
