import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import {
  CardsPage,
  DecksPage,
  Error404,
  ForgotPasswordPage,
  LearnPage,
  SignInPage,
  SignUpPage,
} from '@/pages'
import { PATH } from '@/shared/utils/routerVariables'

import { Layout } from './layout/Layout'

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
  // {
  //   element: <Error404 />,
  //   path: PATH.ERRORPAGE,
  // },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: PATH.DECKSPAGE,
  },
  {
    // replace - убирает путь '/' из истории браузера
    element: <Navigate replace to={PATH.DECKSPAGE} />,
    path: '/',
  },
  {
    element: <CardsPage />,
    path: PATH.CARDSPAGE,
  },
  {
    element: <LearnPage />,
    path: PATH.LEARNDECK,
  },
  // {
  //   element: <Error404 />,
  //   path: PATH.ERRORPAGE,
  // },
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
    // errorElement: <Navigate to={PATH.ERRORPAGE} />,
    errorElement: <Error404 />,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}

//========================================================================================

// function PrivateRoutes() {

//
//   const { data, isLoading, isSuccess, isUninitialized } = useMeQuery()
//
//   // Проверяем, идет ли загрузка или запрос еще не был инициирован
//   if (isLoading || isUninitialized) {
//     // Здесь можно вернуть индикатор загрузки или null, если не хотите ничего показывать
//     return <InitLoader />
//   }
//
//   // const isAuthenticated = isSuccess && data
//
//   const isAuthenticated = true
//
//   return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
// }

function PrivateRoutes() {
  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const isAuthenticated = refreshToken && accessToken

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}
