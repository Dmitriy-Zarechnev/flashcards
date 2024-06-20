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
import { useMeQuery } from '@/services'
import { Layout } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import InitLoader from './InitLoader'

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
      {
        /* гарантирует, что перенаправление заменит текущую запись в истории браузера, так что если пользователь нажмет
        кнопку "назад" в браузере, он не вернется к корневому пути, а перейдет к предыдущему URL в истории. */

        element: <Navigate replace to={'/decks'} />,
        path: '/',
      },
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
  /* проверяем авторизирован пользователь или нет есть отдельная проверка в 'flashcards-base-query'
  но там переодресация на логинизацию только если повторный запрос с обновленным токеном упал */

  const { data, isLoading, isSuccess, isUninitialized } = useMeQuery()

  // Проверяем, идет ли загрузка или запрос еще не был инициирован
  if (isLoading || isUninitialized) {
    // Здесь можно вернуть индикатор загрузки или null, если не хотите ничего показывать
    return <InitLoader />
  }

  const isAuthenticated = isSuccess && data

  console.log('isAuthenticated', isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}
