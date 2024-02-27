import { Icon } from '@/components/icon'
import { Tooltip } from '@/components/tooltip'
import { Settings } from 'lucide-react'
import { FunctionBarDialog } from './function-bar-dialog'
import { Fragment } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { title } from 'process'


const FunctionBarItems = [
  {
    icon: Settings,
    label: 'Settings',
    description: 'Manage your account and settings',
  }
]

export const FunctionBar = () => {
  return (
    <div className='mx-3'>
      {FunctionBarItems.map((item, index) => (
        <Fragment key={index}>
          <Tooltip

            contentOptions={{
              side: "right",
              sideOffset: 12
            }}
            content={item.description}>
            {/* <div className='transition-all flex relative items-center  cursor-pointer px-2 py-1 rounded hover:bg-foreground/5 text-sm text-secondary-foreground'>
            <Icon>
              <item.icon className='size-4' />
            </Icon>
            <span>
              {item.label}
            </span>
          </div> */}
            <FunctionBarDialog title={item.label} description={item.description} icon={item.icon}>
              <div>
                {item.label}
              </div>
            </FunctionBarDialog>
          </Tooltip>
        </Fragment>
      ))}
    </div>
  )
}
