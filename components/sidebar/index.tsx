import { SidebarHeader } from './sidebar-header'
import { SidebarMain } from './sidebar-main'

export const Sidebar = () => {
  return (
    <div className='size-full  bg-aside'>
      <aside className='relative group/aside z-40 hidden lg:block'>
        <div className='h-screen  flex flex-col'>
          <SidebarHeader />
          <SidebarMain />
        </div>
      </aside>
    </div>
  )
}
