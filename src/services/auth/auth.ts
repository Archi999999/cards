import { baseApi } from '@/services/base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<any, void>({
      query: () => {
        return {
          url: 'v1/auth/me',
          method: 'GET',
        }
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['Me'],
    }),
    login: builder.mutation<any, { email: string; password: string }>({
      query: params => {
        return {
          url: 'v1/auth/login',
          method: 'POST',
          body: params,
        }
      },
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<void, void>({
      query: () => {
        return {
          url: 'v1/auth/logout',
          method: 'POST',
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Me'],
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useLogoutMutation } = authApi
