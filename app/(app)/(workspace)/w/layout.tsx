import React from 'react'
import { ResizableLayout } from './_components/resizable-layout'
import { getCurrentUser } from '@/lib/auth/utils'


type WorkSpaceInfoProps = React.PropsWithChildren<{}>

const WorkSpacePage = async ({ children }: WorkSpaceInfoProps) => {
  const user = await getCurrentUser()
  return (
    <ResizableLayout>
      {children}
    </ResizableLayout>
  )
}

export default WorkSpacePage