import { Button } from '@/components/ui/button'
import TailwindEditor from '@/components/ui/editor'
import { Github, Link, Menu } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
    
      <TailwindEditor />
    </div>
  )
}

export default Page