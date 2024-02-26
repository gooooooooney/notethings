"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { setIsCollapsed } from '@/hooks/sotre/use-layout-store'
import { ChevronsLeft, ChevronsUpDown } from 'lucide-react'
import React from 'react'
import { WorkSpaceAvatar } from './work-space-avatar'
import { cn } from '@/lib/utils'

export const WorkSpaceInfo = () => {

  return (
    <div className='transition-all relative p-2 flex flex-col justify-center flex-shrink-0 cursor-pointer'>
      <div className='transition-all flex justify-between items-center h-10 px-1.5 group    rounded hover:bg-foreground/5 w-full'>
        <div className='flex items-center gap-x-2 w-[65%]'>
          <WorkSpaceAvatar src={''} fallbackName={'notethings'} />
          <div className='flex items-center w-full'>
            <div className=' truncate max-w-full'>notethingsnotethingsnotethings</div>
            <span
              className={cn(buttonVariants({
                variant: 'withoutHover',
                size: 'icon',
              }), "size-6")}
            >
              <ChevronsUpDown className='size-4' />
            </span>

          </div>
        </div>
        <Button
          variant="ghost"
          className=" transition-opacity duration-200 size-6 hover:bg-foreground/10 opacity-0  group-hover/aside:opacity-100"
          onClick={() => {
            setIsCollapsed(true)
          }} size="icon">
          <ChevronsLeft className='size-5' />
        </Button>
      </div>
    </div>
  )
}
