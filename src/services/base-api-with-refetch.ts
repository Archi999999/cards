import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseUrl = `https://api.flashcards.andrii.es`

// Create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
})

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'v1/auth/refresh-token', method: 'POST' },
          api,
          extraOptions
        )

        if (refreshResult?.meta?.response?.status === 204) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          // api.dispatch(logout())
          // window.location.href = '/login'
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
