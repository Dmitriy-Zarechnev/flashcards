import { toast } from 'react-toastify'

import { Middleware, MiddlewareAPI, isRejected } from '@reduxjs/toolkit'

type ServerErrorType = {
  data?: {
    message: string
    path: string
    statusCode: number
  }
}

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (api) {
  }

  if (isRejected(action)) {
    const serverError = action.payload as ServerErrorType

    /* если не связанно с auth + есть ответ от сервера */
    if (!(serverError.data?.statusCode === 401) && serverError.data) {
      toast.error(serverError.data?.message || 'An error occurred')
    }

    /* если ошибка относится к auth + есть ответ от сервера */
    if (serverError.data?.path === '/v1/auth/login') {
      toast.error("We couldn't recognize that login or password. Care to try again?")
    }

    /* если нет ответа от сервера */
    if (!serverError.data) {
      toast.error('Network Error')
    }
  }

  return next(action)
}
