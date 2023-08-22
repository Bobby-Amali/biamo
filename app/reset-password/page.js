"use client"

import React from 'react'
import { OTPInputBox } from '@/components'

const page = () => {
  return (
    <div className="flex flex-col mx-auto text-center min-h-screen bg-hero bg-cover bg-no-repeat bg-center py-8 sm:py-10 px-8 sm:px-20">
      <div>
        <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white text-3xl mb-5 font-semibold">Enter the code</h1>
        <p className="text-white text-lg mb-14 font-normal">Enter the OTP that we sent to your email. <br/> Be careful not to share the code with anyone. </p>
        <form className='flex flex-col gap-14'>
          <OTPInputBox />
          <button
            className="text-sm font-bold relative space-x-2 bg-[#F8F0FF] w-[367px] p-4 text-primary text-center cursor-pointer rounded-full"
             
          >
            Continue
          </button>

          <p className="text-white text-center text-sm">Didn't receive the email? <a href='/' className="text-[#e14594] font-semibold">Click Here</a></p>

          <div className="text-sm flex items-center justify-center mt-4 gap-3">
            <img src="/leftarrow.svg" alt="logo" className="w-5 h-5 object-contain" />
            <p className="text-white text-center text-sm my-6">Back to log in</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page