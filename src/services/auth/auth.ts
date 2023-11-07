import {
  LoginArgs,
  MeResponse, RecoverPassArgs,
  RegistrationArgs, ResetPasswordArgs,
  updateRequest,
  updateResponse,
} from '@/services/auth/auth.types.ts'
import { baseApi } from '@/services/base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<MeResponse, void>({
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
    updateMe: builder.mutation<updateResponse, updateRequest>({
      query: params => {
        return {
          url: 'v1/auth/me',
          method: 'PATCH',
          body: params,
        }
      },
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('me', undefined, draft => {
            if (draft && 'name' in args) {
              draft.name = args.name
            }
            if (draft && args instanceof FormData) {
              const image = args.get('avatar')

              draft.avatar = URL.createObjectURL(image as Blob)
            }
          })
        )

        queryFulfilled.catch(patchResult.undo)
      },
      // invalidatesTags: ['Me'],
    }),
    login: builder.mutation<any, LoginArgs>({
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
    registration: builder.mutation<any, RegistrationArgs>({
      query: body => {
        return {
          url: 'v1/auth/sign-up',
          method: 'POST',
          body,
        }
      },
    }),
    recoverPassword: builder.mutation<any, RecoverPassArgs>({
      query: body => {
        return {
          url: '/v1/auth/recover-password',
          method: 'POST',
          body,
        }
      }
    }),
    resetPassword: builder.mutation<any, ResetPasswordArgs>({
      query: ({token, ...body}) => {
        return {
          url: `/v1/auth/reset-password/${token}`,
          method: 'POST',
          body,
        }
      }
    })
  }),
})

export const {
  useLoginMutation,
  useMeQuery,
  useUpdateMeMutation,
  useLogoutMutation,
  useRegistrationMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authApi
