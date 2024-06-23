import { flashcardsApi } from '@/services/api/flashcards.api'

import {
  AuthResponse,
  LoginArgs,
  LoginResponse,
  SignUpArgs,
  UpdateUserDataArgs,
} from '../types/auth.types'

const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken.trim())
          localStorage.setItem('refreshToken', data.refreshToken.trim())
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        /* так как при logout никакого ответа не приходит, мы просто удалим токены, нужно сразу
           сделать запрос useMeQuery чтобы перенаправить пользователя на страницуу ллогинизации.

           Можно логику удаления токенов описать в LayOut, а можно сдесь - в псевдо-запросе */
        invalidatesTags: ['Auth'],
        onQueryStarted() {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        },
        /* затычка вместо запроса */
        queryFn: () => ({ data: undefined }),
      }),
      me: builder.query<AuthResponse, void>({
        providesTags: ['Auth'],
        query: () => `/v1/auth/me`,
      }),
      signUp: builder.mutation<AuthResponse, SignUpArgs>({
        /* несмотря на то что при успешной рестирации получаем данные пользователя, будем перенаправлять его на
           /sing-in => пусть там входит и получает токены. Перенаправление реализовано в SignUpPage */
        query: args => ({
          body: args,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
      updateUserData: builder.mutation<AuthResponse, UpdateUserDataArgs>({
        query: args => ({
          body: args,
          method: 'PATCH',
          url: `/v1/auth/me`,
        }),
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useSignUpMutation,
  useUpdateUserDataMutation,
} = authService
