import AuthServiceHeader from '@/components/layouts/AuthServiceHeader'
import AuthServiceHeaderCsr from '@/components/layouts/AuthServiceHeaderCsr'
import React from 'react'

function layout({
  children
}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <AuthServiceHeaderCsr  />
      {children}
    </>
  )
}

export default layout
