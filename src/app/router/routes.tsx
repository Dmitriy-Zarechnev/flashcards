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
import { CheckEmailPage } from '@/pages/ui/check-email/CheckEmail.page'
import { ProfilePage } from '@/pages/ui/profile/Profile.page'
import { ResetPasswordPage } from '@/pages/ui/reset-password/ResetPassword.page'
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
  {
    element: <CheckEmailPage />,
    path: PATH.CHECKEMAILPAGE,
  },
  {
    element: <ResetPasswordPage />,
    path: PATH.RESETPASSWORD,
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
    element: <ProfilePage />,
    path: PATH.PROFILE,
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

/* init-flow:

🟢 у пользователя 2 валидных токена | просто ззагрузка странички или логинизация
🟢 => layout => 🚀useMeQuery => <Outlet /> => routes => PrivateRoutes =>  <Outlet  /> => /decks

🔴 у пользвоателя невалидный токен
🔴 => layout => 🚀useMeQuery => <Outlet /> => PublicRoutes =>  <Outlet  /> => /sign-in

🟣 попытка АВТОРИЗИРОВАННОГО пользователя через URL попасть на публичные странички
🟣 => layout => 🚀useMeQuery => <Outlet /> => routes => PublicRoutes =>  <Navigate to={PATH.DECKSPAGE} /> => /decks

💥 таким образом ограничение между публичными и приватными страничками осуществляется за счет проверки токенов
   но проверять только откены не совсем безопасно - вдруг они не валидны? => у нас в layout есть проверка useMeQuery,
   которая если не пройдет, пользователя просто переведет на /sign-in

   однако тут есть ❗ проблема => если у пользователя есть два токена, но они не валидны, то запрос useMeQuery не пройдет, и пользователя
   перенаправят на /sign-in, однако в логике PublicRoutes установленно - что если есть в наличии два токена, то перенаправить на /decks,
   но токены же не валидны, и запрос useMeQuery опять не пройдет => получается циклический flow

   как его разорвать? => будем удалять accessToken из localStorage в flashcards-base-query, когда повторный запрос не прошел, соответственно
   так как у пользователя теперь только один токен, он успешно будет перенаправлен на /sign-in и если у него есть валидный refreshToken, то он
   может востановить accessToken перезагрузив страничку ( хотя если у него уже упал запрос в flashcards-base-query врядли у него это получиться)

   💢 новая задача => если остался только refreshToken и при перезагрузке мы получим accessToken, однако нас не пенаправляет на /decks
      нужно еще раз перезагрузить страничку
      решение => при обноновлении accessToken по refreshToken будем проверять url странички, и если окажется что это /sign-in, то будем
      перенаправлять пользователя на /decks. Реализуем получение url через утилиту getPathname в flashcards-base-query
*/

function PrivateRoutes() {
  /* ⛔ если вынести refreshToken | accessToken | isAuthenticated из локальной области видимости функции,
     то после логинизации не происходит роутинга на /decks */

  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const isAuthenticated = refreshToken && accessToken

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.SIGNIN} />
}

function PublicRoutes() {
  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const isAuthenticated = refreshToken && accessToken

  return isAuthenticated ? <Navigate to={PATH.DECKSPAGE} /> : <Outlet />
}
