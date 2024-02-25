import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { generateColor } from "@/lib/color"

  type WorkSpaceAvatarProps = {
    src: string
    fallbackName: string
  }
  
  export function WorkSpaceAvatar({
    src,
    fallbackName = "notethings",
  }: WorkSpaceAvatarProps) {
    const color = generateColor(fallbackName)
    return (
      <Avatar className="rounded-sm size-6">
        <AvatarImage src={src} alt={fallbackName} />
        <AvatarFallback style={{
            color: color.color,
            backgroundColor: color.backgroundColor,
        }} className="rounded-sm size-6 uppercase">
            {fallbackName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    )
  }
  