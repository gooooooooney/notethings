import React from 'react'
import { NavbarLeft } from './navbar-left'
import { ModeToggle } from '@/components/ui/ThemeToggle'

export const Navbar = () => {
  return (
    <section
      className='w-full border-b'
    >
      <div className='flex justify-between items-center px-4 h-12'>
        <NavbarLeft />
        <div>
          <ModeToggle />
        </div>
      </div>
    </section>
  )
}
