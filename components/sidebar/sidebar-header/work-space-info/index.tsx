"use client"
import { Button } from '@/components/ui/button'
import { setIsCollapsed } from '@/hooks/sotre/use-layout-store'
import { ChevronsLeft, ChevronsUpDown } from 'lucide-react'
import { WorkSpaceAvatar } from './work-space-avatar'
import { Tooltip } from '@/components/tooltip'
import { Popover } from '@/components/popover'
import { WorkspacePopoverContent } from './work-space-popover-content'
import { Icon } from '@/components/icon'

export const WorkSpaceInfo = () => {

  return (
    <div className='transition-all relative p-2 flex flex-col justify-center flex-shrink-0 cursor-pointer'>

      <Popover
        content={<WorkspacePopoverContent />}
      >
        <div>
          <Tooltip
            triggerOptions={{
              'aria-label': 'Switch workspace'
            }}
            content="Switch workspace"
          >
            <div className='transition-all flex justify-between items-center h-10 px-1.5 group  rounded hover:bg-foreground/5 w-full'>
              <div className='flex items-center gap-x-2 w-[65%]'>
                <WorkSpaceAvatar className='size-6' src={''} fallbackName={'notethings'} />
                <div className='flex items-center w-full'>
                  <div className='truncate max-w-full'>notethingsnotethingsnotethings</div>
                  <Icon>
                    <ChevronsUpDown className='size-4' />
                  </Icon>
                </div>
              </div>
              <Tooltip
                content="Collapse sidebar"
              >
                <Button
                  variant="ghost"
                  className=" transition-opacity duration-200 size-6 hover:bg-foreground/10 opacity-0  group-hover/aside:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsCollapsed(true)
                  }} size="icon">
                  <ChevronsLeft className='size-5' />
                </Button>
              </Tooltip>
            </div>
          </Tooltip>
        </div>

      </Popover>

    </div >
  )
}
