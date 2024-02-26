import React from 'react'
import { TooltipContent, Tooltip as TooltipRoot, TooltipTrigger } from '@/components/ui/tooltip'

type TooltipProps = React.PropsWithChildren<{
  content: React.ReactNode
  triggerOptions?: React.ComponentPropsWithoutRef<typeof TooltipTrigger>
  contentOptions?: React.ComponentPropsWithoutRef<typeof TooltipContent>
}>

export const Tooltip = ({
  content,
  children,
  triggerOptions,
  contentOptions
}: TooltipProps) => {
  return (
    <TooltipRoot>
      <TooltipTrigger
        tabIndex={-1}
        asChild
        
        {...triggerOptions}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        sideOffset={5}
        align="center"
        {...contentOptions}
      >
        {content}
      </TooltipContent>
    </TooltipRoot>
  )
}
