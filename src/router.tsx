import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Header, SignIn } from '@/components'
import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery.tsx'
import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { Decks } from '@/pages/packs-list/decks.tsx'

const isAuthenticated = true

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/registration',
    element: <SignUp />,
  },
  {
    path: '/password-recovery',
    element: <PasswordRecovery />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

const Layout = () => {
  return (
    <>
      <Header isAuth={isAuthenticated} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...privateRoutes.map(route => ({
        ...route,
        element: <PrivateRouteWrapper>{route.element}</PrivateRouteWrapper>,
      })),
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRouteWrapper({ children }: { children: React.ReactNode }) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
}
