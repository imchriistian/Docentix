import { useNavigate, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export default function NotFoundError() {
    const HOME_URL = import.meta.env.VITE_HOME_URL
    const navigate = useNavigate()
    const { history } = useRouter()
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] leading-tight font-bold'>404</h1>
                <span className='font-medium'>Oops! Página no encontrada.</span>
                <p className='text-muted-foreground text-center'>
                    Parece que la página que estás buscando <br />
                    no existe o ha sido removida.
                </p>
                <div className='mt-6 flex gap-4'>
                    <Button variant='outline' onClick={() => history.go(-1)}>
                        Regresar
                    </Button>
                    <Button onClick={() => navigate({ to: HOME_URL })}>Regresar a inicio</Button>
                </div>
            </div>
        </div>
    )
}