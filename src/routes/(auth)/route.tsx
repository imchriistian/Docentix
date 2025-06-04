import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import {Logo} from '@/components/Logo'
import { APP_CONFIG } from '@/constants/app';

export const Route = createFileRoute('/(auth)')({
  component: ClerkAuthLayout,
})

function ClerkAuthLayout() {
  return (
    <div className='relative container grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0' 
        style={{
          background: 'radial-gradient(at 90% 37%, #ecf4f3 0px, transparent 50%), radial-gradient(at 97% 35%, #d1eecc 0px, transparent 50%), radial-gradient(at 15% 99%, #76db9e 0px, transparent 50%), radial-gradient(at 96.61637914591822% 93.83333206176758%, #aaf254 0px, transparent 50%), #ecf4f3',
        }} />
        
        {/* Difuminado en el pie */}
        {/* <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-10' /> */}
        
        <Link
          to='/sign-in'
          className='relative z-20 flex items-center text-lg font-medium'
        >
          <Logo className='w-16 h-16 object-contain' />
          {/* <span className='text-white josefin-sans text-2xl'>{APP_CONFIG.name}</span> */}
          <span className='text-2xl !font-semibold josefin-sans bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent'>{APP_CONFIG.name}</span>
        </Link>

        <img className='relative m-auto' width={600} src="login_ilustration.webp" alt="Imagen"/>

        <div className='relative z-20 mt-auto px-10'>
          <blockquote className='space-y-2'>
            <p className='text-lg text-center text-[#0b6f57]'>
              Gestiona tareas, visualiza el avance docente y obtén control total en un solo clic con {APP_CONFIG.name}.
            </p>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='relative mx-auto flex w-full flex-col items-center justify-center gap-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}