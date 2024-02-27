"use client"

import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { MoreHorizontal, Slash } from 'lucide-react'
import { Icon } from '../icon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export type Breadcrumb = {
  icon: string
  label: string
  link: string
  menus?: Breadcrumb[]
}

const breadcrumbList = [
  {
    icon: "🦈",
    label: "Home",
    link: "/",
  },
  {
    icon: "🤩",
    label: "A",
    link: "/",
  },
  {
    icon: "🐴",
    label: "FFFFFF",
    link: "/",
  },
  {
    icon: "🦈",
    label: "EEEE",
    link: "/",
  },
  {
    icon: "🐴",
    label: "FFFFFF",
    link: "/",
  },
]


export const Breadcrumbs = () => {



  const paths = React.useMemo<Breadcrumb[]>(() => {

    if (breadcrumbList.length > 3) {
      const start = breadcrumbList[0]
      const end = breadcrumbList[breadcrumbList.length - 1]
      const middle = breadcrumbList.slice(1, breadcrumbList.length - 1)
      return [
        start,
        {
          icon: "",
          label: "",
          link: "/",
          menus: middle
        },
        end
      ]
    }
    return [...breadcrumbList]
  }, [])



  return (
    <nav>
      <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
        {
          paths.map((path, index) => {
            return path.menus ? (
              <li className="inline-flex items-center">
                <div className="flex items-center text-gray-500">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="size-6"
                        size="icon"
                      >
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {
                        path.menus.map((menu, index) => {
                          return (
                            <DropdownMenuItem className='cursor-pointer' asChild key={menu.icon+menu.label}>
                              <Link href={menu.link}>
                                {menu.label}
                              </Link>
                            </DropdownMenuItem>
                          )
                        })
                      }
                    </DropdownMenuContent>
                  </DropdownMenu >
                  <span className="mx-2 overflow-visible text-gray-400 dark:text-neutral-600">/</span>

                </div>
              </li>
            ) : (
              <li className="inline-flex items-center">
                <Link className={cn(buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                  className: "px-1 h-8"
                }))} href="#">
                  {path.label}
                </Link>
                {index == paths.length - 1 ? null : (
                  <span className="mx-2 overflow-visible  text-gray-400 dark:text-neutral-600">/</span>
                )}
              </li>
            )
          })
        }

      </ol>
    </nav>
  )
}
