import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ChevronDown, Settings, User } from 'lucide-react'
import { SignOutButton, UserButton } from '@clerk/clerk-react'

export const Profile = () => {
  return (
    <UserButton showName></UserButton>
     
  )
}
