import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-8 px-52">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </div>
    </>
  ),
})
