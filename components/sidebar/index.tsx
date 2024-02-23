import { SidebarHeader } from './sidebar-header'

export const Sidebar = () => {
  return (
    <div className='size-full  bg-aside'>
      <aside className='relative z-40 hidden lg:block'>
        <div className='h-screen  flex flex-col'>
          <SidebarHeader />
        </div>
      </aside>
    </div>
  )
}
