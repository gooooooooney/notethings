"use client"

import { Sidebar } from '@/components/sidebar/index'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'


type ResizableLayoutProps = React.PropsWithChildren<{
  layoutSize?: number[]
}>

export const ResizableLayout = ({
  children,
  layoutSize = [16, 84]
}: ResizableLayoutProps) => {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='transition-all'
      onLayout={(sizes) => {
        console.log(sizes)
      }}
    >
      <ResizablePanel
        minSize={16}
        maxSize={30}
        defaultSize={layoutSize[0]}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={layoutSize[1]}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
