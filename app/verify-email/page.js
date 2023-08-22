"use client"

import { OTPInputBox } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col mx-auto text-center min-h-screen bg-hero bg-cover bg-no-repeat bg-center py-8 sm:py-10 px-8 sm:px-20">
      <div>
        <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white text-3xl mb-5 font-semibold">Enter the code</h1>
        <p className="text-white text-lg mb-14 font-normal">Enter the OTP that we sent to your email. <br/> Be careful not to share the code with anyone. </p>
        <form className='flex flex-col gap-40'>
          <OTPInputBox />
          <button
            className="text-sm font-bold relative space-x-2 bg-[#F8F0FF] w-[367px] p-4 text-primary text-center cursor-pointer rounded-full"
             
          >
            Verify
          </button>

        </form>
      </div>
    </div>
  )
}

export default page