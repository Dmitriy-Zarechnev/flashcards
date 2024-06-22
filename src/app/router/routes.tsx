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
]

//========================================================================================

export const routes = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
      {
        // replace - убирает путь '/' из истории браузера
        element: <Navigate replace to={PATH.DECKSPAGE} />,
        path: '/',
      },
    ],
    element: <Layout />,
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

/* init-flow:

🟢 у пользователя 2 валидных токена | просто ззагрузка странички или логинизация
🟢 => layout => <PageHeader /> 🚀useMeQuery => <Outlet /> => routes => PrivateRoutes =>  <Outlet  /> => /decks

🔴 у пользвоателя невалидный токен
🔴 => layout => <PageHeader /> 🚀useMeQuery => <Outlet /> => PublicRoutes =>  <Outlet  /> => /sign-in

🟣 попытка АВТОРИЗИРОВАННОГО пользователя через URL попасть на публичные странички
🟣 => layout => <PageHeader /> 🚀useMeQuery => <Outlet /> => routes => PublicRoutes =>  <Navigate to={PATH.DECKSPAGE} /> => /decks

💥 таким образом ограничение между публичными и приватными страничками осуществляется за счет проверки токенов
   но проверять только откены не совсем безопасно - вдруг они не валидны? => у нас в layout => <PageHeader />
   есть проверка useMeQuery которая если не пройдет, пользователя просто переведет на /sign-in

   однако тут есть ❗ проблема => если у пользователя есть два токена, но они не валидны, то запрос useMeQuery не пройдет, и пользователя
   перенаправят на /sign-in, однако в логике PublicRoutes установленно - что если есть в наличии два токена, то перенаправить на /decks,
   но токены же не валидны, и запрос useMeQuery опять не пройдет => получается циклический flow

   как его разорвать? => будем удалять accessToken из localStorage в flashcards-base-query, когда повторный запрос не прошел, соответственно
   так как у пользователя теперь только один токен, он успешно будет перенаправлен на /sign-in и если у него есть валидный refreshToken, то он
   может востановить accessToken перезагрузив страничку ( хотя если у него уже упал запрос в flashcards-base-query врядли у него это получиться)

*/

function PrivateRoutes() {
  /* ⛔ если вынести refreshToken | accessToken | isAuthenticated из локальной области видимости функции,
     то после логинизации не происходит роутинга на /decks */

  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const isAuthenticated = refreshToken && accessToken

  console.log('🟢PrivateRoutes')

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}

function PublicRoutes() {
  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const isAuthenticated = refreshToken && accessToken

  console.log('🔴PublicRoutes')

  return isAuthenticated ? <Navigate to={PATH.DECKSPAGE} /> : <Outlet />
}
