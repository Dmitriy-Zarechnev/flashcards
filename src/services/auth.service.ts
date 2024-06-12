import { baseApi } from '@/services/base.api'

import { AuthResponse, LoginArgs, LoginResponse, UpdateUserDataArgs } from './types/auth.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Auth'],
        async onQueryStarted(_, { queryFulfilled }) {
          const response = await queryFulfilled

          if (!response.data) {
            return
          }
          localStorage.setItem('accessToken', response.data.accessToken)
          localStorage.setItem('refreshToken', response.data.refreshToken)
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        query: () => ({
          method: 'POST',
          url: `/v2/auth/logout`,
        }),
      }),
      me: builder.query<AuthResponse, void>({
        providesTags: ['Auth'],
        query: () => '/v1/auth/me',
      }),
      updateUserData: builder.mutation<AuthResponse, UpdateUserDataArgs>({
        invalidatesTags: ['Auth'],
        query: args => ({
          body: args,
          method: 'PATCH',
          url: `/v1/auth/me`,
        }),
      }),
    }
  },
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useUpdateUserDataMutation } =
  authService
