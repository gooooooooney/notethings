import React from 'react'
import { WorkSpaceInfo } from './work-space-info'
import { FunctionBar } from './function-bar'
import { Separator } from '@/components/ui/separator'

export const SidebarHeader = () => {
  return (
    <div className='flex flex-col w-full'>
      <WorkSpaceInfo />
      <FunctionBar />
      <div className='mx-3 my-4'>
        <Separator />
      </div>
    </div>
  )
}
