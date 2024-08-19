import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'

export default function page() {

  const session = getServerSession(options)
  console.log(session?.user)
  return (
    <div>
      main
    </div>
  )
}
