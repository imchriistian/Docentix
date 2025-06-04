import { Outlet } from '@tanstack/react-router'
import Header from './Header'
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react'
import Unauthorized from '@/features/errors/unauthorized-error'
import { LoaderCircle } from 'lucide-react'

interface Props {
    children?: React.ReactNode
}

export function AuthenticatedLayout({ children }: Props) {
    const { isLoaded, isSignedIn } = useAuth()


    if (!isLoaded) {
        return (
            <div className='flex h-svh items-center justify-center'>
                <LoaderCircle className='size-8 animate-spin' />
            </div>
        )
    }
    if (!isSignedIn) {
        return <Unauthorized />
    }

    return (
        <>
            <SignedIn>
                <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-8 px-52">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Header />
                        <div
                            id='content'
                            className=''
                        >
                            {children ? children : <Outlet />}
                        </div>
                    </div>
                </div>
            </SignedIn>

            <SignedOut>
                {/* Si no está autenticado, redirige al login */}
                {/* <RedirectToSignIn /> */}
            </SignedOut>

        </>

    )
}