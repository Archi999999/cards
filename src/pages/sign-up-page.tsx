import { useNavigate } from 'react-router-dom'

import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { useRegistrationMutation } from '@/services/auth/auth.ts'

export const SignUpPage = () => {
  const [signUp] = useRegistrationMutation()
  const navigate = useNavigate()
  const signUpHandler = (data: any) => {
    const { confirmPassword, ...formData } = data

    signUp(formData)
      .unwrap()
      .then(() => {
        navigate('/login')
      })
      .catch(e => {
        console.log(e)

        return <>ERROR</>
      })
  }

  return <SignUp onSubmit={signUpHandler} />
}
