"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronsRight } from 'lucide-react'
import { setIsCollapsed, useLayoutStore } from '@/hooks/sotre/use-layout-store'
import { cn } from '@/lib/utils'
import { Breadcrumbs } from './breadcrumbs'

export const NavbarLeft = () => {
  const isCollapsed = useLayoutStore(s => s.isCollapsed)
  return (
    <div className='flex items-center gap-x-3'>
      <Button
        variant="ghost"
        className={cn("size-8", {
          hidden: !isCollapsed,
        })}
        onClick={() => {
          setIsCollapsed(false)
        }} size="icon">
        <ChevronsRight className='size-5' />
      </Button>
      <div>
        <Breadcrumbs />
      </div>
    </div>
  )
}
