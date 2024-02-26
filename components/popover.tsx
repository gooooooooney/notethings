import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover as PopoverRoot,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type PopoverProps = React.PropsWithChildren<{
  content: React.ReactNode
  triggerOptions?: React.ComponentPropsWithoutRef<typeof PopoverTrigger>
  contentOptions?: React.ComponentPropsWithoutRef<typeof PopoverContent>
}>

export function Popover({
  content,
  children,
  triggerOptions,
  contentOptions,
}: PopoverProps) {
  return (
    <PopoverRoot>
      <PopoverTrigger
        asChild
        {...triggerOptions}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent
        {...contentOptions}
      >
        {content}
      </PopoverContent>
    </PopoverRoot>
  )
}
