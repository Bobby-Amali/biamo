"use client"

import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col mx-auto text-center min-h-screen bg-hero bg-cover bg-no-repeat bg-center py-8 sm:py-10 px-8 sm:px-20">
      <div>
        <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white text-3xl mb-5 font-semibold">Forgot Password?</h1>
        <p className="text-white text-lg mb-14 font-normal">No worries, we’ll send you reset instructions. </p>
        <form>
          <input 
            className="placeholder:text-[#8F8FB1] bg-transparent w-[367px] p-3 mb-8 text-center cursor-pointer rounded-full text-[#8F8FB1] border border-[#99A4E1] focus:outline-none focus:ring-0 focus:scale-105" 
            id="email"
            type="email" 
            placeholder='Email address' 

            required={true}
          />

          <div className="items-center flex flex-col justify-center">
            <button
             className="text-sm font-bold relative space-x-2 bg-[#F8F0FF] w-[367px] p-4 text-primary text-center cursor-pointer rounded-full"
             
            >
              Reset Password
            </button>
          </div>

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