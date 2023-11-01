import { Navigate, useNavigate } from 'react-router-dom'

import { SignIn } from '@/components'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const { data } = useMeQuery()
  const [signIn, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  if (data) return <Navigate to={'/'} />

  const handleSignIn = (data: any) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return <SignIn error={error} onSubmit={handleSignIn} isSubmitting={isLoading} />
}
