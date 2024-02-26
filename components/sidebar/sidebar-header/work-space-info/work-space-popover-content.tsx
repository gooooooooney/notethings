import React from 'react'
import { WorkSpaceAvatar } from './work-space-avatar'
import { Icon } from '@/components/icon'
import { Check, PlusCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export const WorkspacePopoverContent = () => {
  return (
    <div>
      <section>
        <div className='text-sm mb-1 font-semibold text-gray-500'>Workspaces</div>
        <div className='transition-all flex relative items-center justify-between cursor-pointer px-2 rounded h-[58px] hover:bg-foreground/5'>
          <div className='flex items-center gap-x-2 w-5/6'>
            <WorkSpaceAvatar src={''} fallbackName={'notethings'} />
            <div className='flex flex-col w-2/3'>
              <div className=' truncate text-sm text- max-w-full'>notethingsnotethingsnotethings</div>
              <div className='text-xs text-muted-foreground'>
                free plan
              </div>
            </div>
          </div>
          <Icon className="text-xs font-semibold">
            <Check className='size-5' />
          </Icon>
        </div>
        <Separator className='m-2' />
        <div className='transition-all flex relative items-center justify-between cursor-pointer px-2 rounded h-10 hover:bg-foreground/5'>
          <div className='flex items-center gap-x-2 text-sm  text-muted-foreground'>
            <Icon>
              <PlusCircle className='size-5' />
            </Icon>
            Create a new workspace
          </div>
        </div>
      </section>
    </div>
  )
}
