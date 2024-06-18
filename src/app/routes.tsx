import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Demo } from '@/demo/Demo'
import {
  CardsPage,
  DecksPage,
  Error404,
  ForgotPasswordPage,
  LearnPage,
  SignInPage,
  SignUpPage,
} from '@/pages'
import { Layout } from '@/shared'

//========================================================================================

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
  {
    element: <SignUpPage />,
    path: '/sign-up',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/recover-password',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Demo />,
    path: '/demo',
  },
  {
    element: <DecksPage />,
    path: '/decks',
  },
  {
    element: <CardsPage />,
    path: '/decks/:deckId',
  },
  {
    element: <LearnPage />,
    path: '/decks/:deckId/learn',
  },
]

//========================================================================================

export const routes = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
    errorElement: <Error404 />,
  },
  ...publicRoutes,
])

export function Router() {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  )
}

//========================================================================================

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
