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
import { Layout, PATH } from '@/shared'

//========================================================================================

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: PATH.SIGNIN,
  },
  {
    element: <SignUpPage />,
    path: PATH.SIGNUP,
  },
  {
    element: <ForgotPasswordPage />,
    path: PATH.RECOVERPASSWORD,
  },
  {
    element: <Error404 />,
    path: PATH.ERRORPAGE,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Demo />,
    path: '/demo',
  },
  {
    element: <DecksPage />,
    path: PATH.DECKSPAGE,
  },
  {
    element: <CardsPage />,
    path: PATH.CARDSPAGE,
  },
  {
    element: <LearnPage />,
    path: PATH.LEARNDECK,
  },
  {
    element: <Error404 />,
    path: PATH.ERRORPAGE,
  },
]

//========================================================================================

export const routes = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={PATH.ERRORPAGE} />,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}

//========================================================================================

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}
