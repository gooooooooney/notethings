import { Icon } from '@/components/icon'
import { Tooltip } from '@/components/tooltip'
import { Settings } from 'lucide-react'

export const FunctionBar = () => {
  return (
    <div className='mx-3'>
      <Tooltip
      contentOptions={{
        side: "right",
        sideOffset: 12
      }}
       content='Manage your account and settings'>
        <div className='transition-all flex relative items-center  cursor-pointer px-2 py-1 rounded hover:bg-foreground/5 text-sm text-secondary-foreground'>
          <Icon>
            <Settings className='size-4' />
          </Icon>
          <span>
            Settings
          </span>
        </div>
      </Tooltip>
    </div>
  )
}
