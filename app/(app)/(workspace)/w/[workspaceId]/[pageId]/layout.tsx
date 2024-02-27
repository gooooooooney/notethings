import React from 'react'


type PageLayoutProps = React.PropsWithChildren

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default PageLayout