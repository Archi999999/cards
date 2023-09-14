import { Route, Routes } from 'react-router-dom'

import { SignIn } from '@/components'
import EditForm from '@/components/auth/edit-form/edit-form.tsx'
import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery.tsx'
import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { Header } from '@/components/ui'

export function App() {
  return (
    <>
      <Header isAuth={true} />

      <main>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/edit-form" element={<EditForm />} />
        </Routes>
      </main>
    </>
  )
}
