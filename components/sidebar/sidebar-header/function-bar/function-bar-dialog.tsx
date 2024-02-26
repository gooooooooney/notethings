import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'

type FunctionBarDialogProps = React.PropsWithChildren<{
  title: string
  description: string
  icon: LucideIcon
}>

export const FunctionBarDialog = (props: FunctionBarDialogProps) => {
  const { title, description, icon: IconSvg, children } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='transition-all flex relative items-center  cursor-pointer px-2 py-1 rounded hover:bg-foreground/5 text-sm text-secondary-foreground'>
          <Icon>
            <IconSvg className='size-4' />
          </Icon>
          <span>
            {title}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center  text-xl [text-shadow:_0_4px_0_#e1e1e1] dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-600 dark:bg-clip-text dark:text-transparent dark:[text-shadow:none] ">
            <IconSvg className="mb-1 mr-2 size-7" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


