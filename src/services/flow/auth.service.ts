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
           сделать запрос useMeQuery чтобы перенаправить пользователя*/
        invalidatesTags: ['Auth'],
        async onQueryStarted() {
          /* ну нужно ждать ответа от сервера просто разлогиниваемся, так как response не предусмотрен API */
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')

          //TODO после logout не происходит обновление PageHeader мы разлогинились, а данные остались профиля
        },
        query: () => ({
          method: 'POST',
          url: `/v2/auth/logout`,
        }),
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
        invalidatesTags: ['Auth'],
        query: ({ avatar, name }) => {
          const formData = new FormData()

          // !!! так как тут метод patch, нужно отправлять только те свойства, которые нужно поменять
          if (name) {
            formData.append('name', name)
          }

          if (avatar) {
            formData.append('avatar', avatar)
          } else if (avatar === null) {
            // если передали null, значит мы хотим удалить avatar
            formData.append('avatar', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/auth/me`,
          }
        },
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
