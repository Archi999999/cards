import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Header } from '@/components'
import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery.tsx'
import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { PacksList } from '@/pages/packs-list/packs-list.tsx'
import { SignInPage } from '@/pages/sign-in-page.tsx'
import { useMeQuery } from '@/services/auth/auth.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
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
    element: <PacksList />,
  },
]

const Layout = () => {
  return (
    <>
      <Header />
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
  // {
  //   element: <Layout />,
  //   children: [
  //     ...privateRoutes.map(route => ({
  //       ...route,
  //       element: <PrivateRouteWrapper>{route.element}</PrivateRouteWrapper>,
  //     })),
  //     ...publicRoutes,
  //   ],
  // },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <>Loading...</>

  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

// function PrivateRouteWrapper({ children }: { children: React.ReactNode }) {
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
// }
