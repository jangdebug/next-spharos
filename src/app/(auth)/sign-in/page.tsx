import LogInForm from '@/components/login/LogInForm'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function page() {

  async function handleLogin(formData: FormData) {
    
    'use server'
    const payload = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    signIn('credentials', {
      redirect: false,
      email: payload.email,
      password: payload.password
    })
    

  }
  return (
    <>
      <LogInForm handleLogin={handleLogin} />
    </>
  )
}
