import { flashcardsApi } from '@/services/api/flashcards.api'

import { AuthResponse, LoginArgs, LoginResponse, UpdateUserDataArgs } from '../types/auth.types'

const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        // invalidatesTags: ['Auth'],
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
        query: () => ({
          method: 'POST',
          url: `/v2/auth/logout`,
        }),
      }),
      me: builder.query<AuthResponse, void>({
        providesTags: ['Auth'],
        query: () => `/v1/auth/me`,
      }),
      updateUserData: builder.mutation<AuthResponse, UpdateUserDataArgs>({
        // invalidatesTags: ['Auth'],
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
