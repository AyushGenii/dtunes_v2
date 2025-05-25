import React from 'react'
import {SignupForm} from '../../components/auth/signupForm'

const SignupPage = () => {
  return (
    <div className='flex w-screen h-screen bg-gradient-to-r from-neutral-900 to-zinc-700 items-center justify-center'>
      <SignupForm  />
    </div>
  )
}

export default SignupPage