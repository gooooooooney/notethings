"use client"
import { Button } from '@/components/ui/button'
import { setIsCollapsed } from '@/hooks/sotre/use-ayout-tore'
import { ChevronsLeft } from 'lucide-react'
import React from 'react'

export const WorkSpaceInfo = () => {

  return (
    <div className='transition-all relative p-2 flex flex-col justify-center flex-shrink-0'>
      <div className='transition-all flex justify-between items-center h-10 px-1.5  rounded hover:bg-foreground/5 w-full'>
        <div>userInfo</div>
        <Button
          variant="ghost"
          className='size-6 hover:bg-foreground/10'
          onClick={() => {
            setIsCollapsed(true)
          }} size="icon">
          <ChevronsLeft className='size-5' />
        </Button>
      </div>
    </div>
  )
}
