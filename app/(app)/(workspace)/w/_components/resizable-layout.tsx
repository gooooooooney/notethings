"use client"

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { setDefaultSize, setIsCollapsed, useLayoutStore } from '@/hooks/sotre/use-layout-store'
import { cn } from '@/lib/utils'
import React, { useEffect, useMemo, useState } from 'react'
import { getPanelElement } from 'react-resizable-panels'
import { useMediaQuery } from 'usehooks-ts'


type ResizableLayoutProps = React.PropsWithChildren<{
  layoutSize?: number[]
}>


export const ResizableLayout = ({
  children,
}: ResizableLayoutProps) => {
  const { isCollapsed, defaultSize } = useLayoutStore(s => s)
  const matches = useMediaQuery("(max-width: 1024px)");

  const withoutCollapsedFlexGrow = 'flex-grow-' + defaultSize[1]

  return (
    <ResizablePanelGroup
      direction='horizontal'
    >
      {
        matches ? (
          <ResizablePanel
            className={cn(' opacity-100 transition-all duration-300', isCollapsed && ' opacity-0 !flex-grow-0', !isCollapsed && withoutCollapsedFlexGrow)}
            minSize={50}
            maxSize={50}
            defaultSize={50}
          >
            <Sidebar />
          </ResizablePanel>
        ) : (
          <ResizablePanel
            className={cn(' opacity-100 transition-all duration-300', isCollapsed && ' opacity-0 !flex-grow-0', !isCollapsed && withoutCollapsedFlexGrow)}
            minSize={14}
            maxSize={30}

            defaultSize={defaultSize[0]}
          >
            <Sidebar />
          </ResizablePanel>
        )
      }

      <ResizableHandle className={cn("hidden", {
        "lg:block": !isCollapsed,
      })} />
      <ResizablePanel
        defaultSize={defaultSize[1]}>
        <main className='flex flex-col'>
          <section className='relative flex flex-1 min-h-0 w-full overflow-hidden'>
            <div className='w-full flex flex-col flex-1 min-h-0'>
              <Navbar />
              {children}
            </div>
          </section>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
