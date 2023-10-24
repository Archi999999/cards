import { Navigate, useNavigate } from 'react-router-dom'

import { SignIn } from '@/components'
import { LoaderRotating } from '@/pages/loader/loader-roating.tsx'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const { data, isLoading } = useMeQuery()
  const [signIn, { isLoading: isSigningIn }] = useLoginMutation()
  const navigate = useNavigate()

  if (isLoading) return <LoaderRotating />
  if (data) return <Navigate to={'/'} />

  const handleSignIn = (data: any) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return <SignIn onSubmit={handleSignIn} isSubmitting={isSigningIn} />
}
