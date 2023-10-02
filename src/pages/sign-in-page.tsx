import { SignIn } from '@/components'
// import { useLoginMutation } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  // const [login, { error }] = useLoginMutation()
  //
  // let loginError = ''
  //
  // if (error) {
  //   if (
  //     'status' in error &&
  //     typeof error.data === 'object' &&
  //     error.data &&
  //     'message' in error.data
  //   ) {
  //     loginError = error.data.message as string
  //   }
  // }
  // console.log(error)

  return <SignIn />
}
