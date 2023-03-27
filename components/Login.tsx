
'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import logo from '../public/logo.png'

const Login = () => {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>

      <Image src={logo}
      width={300}
      height={300}
      alt="logo"
      />
      <button
      onClick={()=>signIn('google')}
      className='text-white animate-pulse font-bold text-3xl border '>Sign in to use VoiceGPT</button>
    </div>
  )
}

export default Login