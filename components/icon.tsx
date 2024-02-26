import { cn } from '@/lib/utils'
import React from 'react'
import { buttonVariants } from './ui/button'

type IconProps = React.PropsWithChildren<{
  className?: string
}>

export const Icon = ({ children, className }: IconProps) => {
  return (
    <span
      className={cn(buttonVariants({
        variant: 'withoutHover',
        size: 'icon',
      }), "size-6", className)}
    >
      {children}
    </span>
  )
}
