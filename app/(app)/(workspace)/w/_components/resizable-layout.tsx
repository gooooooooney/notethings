"use client"

import { Sidebar } from '@/components/sidebar/index'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { useLayoutStore } from '@/hooks/sotre/use-ayout-tore'
import { cn } from '@/lib/utils'
import React from 'react'


type ResizableLayoutProps = React.PropsWithChildren<{
  layoutSize?: number[]
}>


export const ResizableLayout = ({
  children,
}: ResizableLayoutProps) => {
  const { isCollapsed, defaultSize } = useLayoutStore(s => s)

  return (
    <ResizablePanelGroup
      direction='horizontal'
    >
      <ResizablePanel
        className={cn(' opacity-100', isCollapsed && 'transition-all duration-300 opacity-0 !flex-grow-0')}
        minSize={0}
        maxSize={30}
       
        defaultSize={defaultSize[0]}
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle className={cn("hidden", {
        "lg:block": !isCollapsed,
      })} />
      <ResizablePanel
        defaultSize={defaultSize[1]}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
