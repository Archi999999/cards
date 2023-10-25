import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Header } from '@/components'
import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery.tsx'
import { EditProfile } from '@/components/ui/edit-profile/edit-profile.tsx'
import { Cards } from '@/pages/cards-list/cards.tsx'
import ErrorPack from '@/pages/error-pack/error-pack.tsx'
import { LearnPack } from '@/pages/learn-pack/learn-pack.tsx'
import { LoaderLinear } from '@/pages/loader/loader-line.tsx'
import { PacksList } from '@/pages/packs-list/packs-list.tsx'
import { SignInPage } from '@/pages/sign-in-page.tsx'
import { SignUpPage } from '@/pages/sign-up-page.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/registration',
    element: <SignUpPage />,
  },
  {
    path: '/password-recovery',
    element: <PasswordRecovery />,
  },
  {
    path: '*',
    element: <ErrorPack />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PacksList />,
  },
  {
    path: '/cards/:deckId',
    element: <Cards />,
  },
  {
    path: '/learn/:deckId',
    element: <LearnPack />,
  },

  {
    path: '/profile',
    element: <EditProfile />,
  },
]

const Layout = () => {
  const { data, isLoading } = useMeQuery()

  return (
    <>
      <Header data={data} isLoading={isLoading} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isLoading, isError } = useMeQuery()

  if (isLoading) return <LoaderLinear />

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
