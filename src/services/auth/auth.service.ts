import { flashcardsApi } from '@/services/flashcards.api'

import { AuthResponse, LoginArgs, LoginResponse, UpdateUserDataArgs } from './auth.types'

const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Auth'],
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
        query: () => ({
          method: 'GET',
          url: '/v1/auth/me',
        }),
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