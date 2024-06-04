import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/features/decks-page/Decks.page'
import { DecksLessonPage } from '@/pages'
import { CreateDeckPage } from '@/pages/CreateDeck.page'

//========================================================================================

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: (
      <>
        {/*<CardsPage />*/}
        {/*<DecksPage />*/}
        <DecksLessonPage />
        <CreateDeckPage />
      </>
    ),
    path: '/',
  },
]

//========================================================================================

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}

//========================================================================================

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
