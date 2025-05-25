import React from 'react'
import {SigninForm} from '../../components/auth/signinForm'

const SigninPage = () => {
  return (
    <div className='flex w-screen h-screen bg-gradient-to-r from-neutral-900 to-zinc-700 items-center justify-center'>
      <SigninForm  />
    </div>
  )
}

export default SigninPage