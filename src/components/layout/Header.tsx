import { APP_CONFIG } from '@/constants/app';
import { Bell, HelpCircle, Search, LayoutGridIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/Logo"
import { Input } from '../ui/input'
import { UserButton } from '@clerk/clerk-react';


export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl flex items-center justify-center">
          <Logo className='w-16 h-16 object-contain' />
        </div>
        <div>
          <h1 className="text-2xl !font-semibold josefin-sans bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            {APP_CONFIG.name}
          </h1>
          <p className="text-sm text-muted-foreground">{APP_CONFIG.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <Input
            type="text"
            placeholder="Buscar cursos, tareas..."
            className="w-full md:w-[300px] pl-10 pr-4 py-2 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-black/5 border border-white/20 dark:border-white/10 shadow-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* User options */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">3</Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                <div className="p-3 hover:bg-muted rounded-md">
                  <p className="text-sm font-medium">Nueva tarea asignada</p>
                  <p className="text-xs text-muted-foreground">Hace 10 minutos</p>
                </div>
                <div className="p-3 hover:bg-muted rounded-md">
                  <p className="text-sm font-medium">Comentario en tu proyecto</p>
                  <p className="text-xs text-muted-foreground">Hace 30 minutos</p>
                </div>
                <div className="p-3 hover:bg-muted rounded-md">
                  <p className="text-sm font-medium">Clase en vivo mañana</p>
                  <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon">
            <LayoutGridIcon className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>

          <UserButton/>
        </div>
      </div>
    </div>
  )
}
