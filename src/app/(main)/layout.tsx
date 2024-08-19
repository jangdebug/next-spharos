import React from 'react'

export default function layout(
  {children}: Readonly<{children: React.ReactNode}>
) {
  return (
    <>
    <header>main header</header>
    {children}
    </>
  )
}
