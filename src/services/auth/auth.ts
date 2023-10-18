import {LoginArgs, MeResponse, RegistrationArgs, updateRequest, updateResponse} from '@/services/auth/auth.types.ts'
import {baseApi} from '@/services/base-api.ts'

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
            async onQueryStarted(args, {queryFulfilled, dispatch}) {
                if (args instanceof FormData) {
                    const image = args.get('avatar');
                    console.log(image)
                }
                const patchResult = dispatch(
                    authApi.util.updateQueryData('me', undefined, draft => {
                        if ('name' in args) {
                            draft.name = args.name
                        }
                        if (args instanceof FormData) {
                            const image = args.get('avatar');
                            draft.avatar = URL.createObjectURL(image as Blob);
                        }
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
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
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    authApi.util.updateQueryData('me', undefined, () => {
                        return {}
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
    }),
})

export const {useLoginMutation, useMeQuery, useUpdateMeMutation, useLogoutMutation, useRegistrationMutation} = authApi
