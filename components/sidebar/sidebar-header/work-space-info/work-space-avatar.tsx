import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { generateColor } from "@/lib/color"
import { cn } from "@/lib/utils"

  type WorkSpaceAvatarProps = {
    src: string
    className?: string
    fallbackName: string
  }
  
  export function WorkSpaceAvatar({
    src,
    className,
    fallbackName = "notethings",
  }: WorkSpaceAvatarProps) {
    const color = generateColor(fallbackName)
    return (
      <Avatar className={cn("rounded-sm", className)}>
        <AvatarImage src={src} alt={fallbackName} />
        <AvatarFallback style={{
            color: color.color,
            backgroundColor: color.backgroundColor,
        }} className={cn("rounded-sm uppercase", className)}>
            {fallbackName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    )
  }
  