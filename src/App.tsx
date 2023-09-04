import { Route, Routes } from 'react-router-dom'

import { SignIn } from '@/components'
import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery.tsx'
import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { Header } from '@/components/ui'

export function App() {
  return (
    <>
      <Header isAuth={false} />
      <main>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </main>
    </>
  )
}
