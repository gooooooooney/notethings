import React from 'react'


type PageLayoutProps = React.PropsWithChildren

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className='h-[calc(100vh-3rem-1px)] overflow-y-auto overflow-x-hidden'
    >{children}</div>
  )
}

export default PageLayout