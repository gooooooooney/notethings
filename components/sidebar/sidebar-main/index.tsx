"use client"

import { Tooltip } from '@/components/tooltip'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Plus } from 'lucide-react'
import React from 'react'
import { SidebarMenus } from './sidebar-menus'

export const SidebarMain = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='relative p-2 flex flex-col justify-center'>
      <div className='px-1.5'>
        <div>
          <div className=''>

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}

            >
              <CollapsibleTrigger asChild>
                <div className='flex justify-between items-center w-full'>
                  <Tooltip
                    content={
                      <div className='flex flex-col'>
                        <div className='text-sm'>Click to {isOpen ? "hide" : "show"} section</div>
                        <div className='text-xs text-muted-foreground'>
                          Pages you created that are only visible to you.
                        </div>
                      </div>
                    }
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-sm px-1 rounded-sm size-auto transition-opacity duration-200 hover:bg-foreground/10"
                    >
                      Private
                    </Button>
                  </Tooltip>

                  <Tooltip
                    content="Add a new page"
                  >
                    <Button
                      variant="ghost"
                      className=" transition-opacity duration-200 size-5 hover:bg-foreground/10 opacity-0  group-hover/aside:opacity-100"
                      size="icon">
                      <Plus className='size-4' />
                    </Button>
                  </Tooltip>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenus />
              </CollapsibleContent>
            </Collapsible>


          </div>
        </div>
      </div>
    </div>
  )
}
