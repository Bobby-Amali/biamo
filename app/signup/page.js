"use client"

import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col mx-auto text-center min-h-screen bg-hero bg-cover bg-no-repeat bg-center py-8 sm:py-10 px-8 sm:px-20">
      <div>
        <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white text-3xl mb-5 font-semibold">Create Your Account</h1>
        <p className="text-white text-lg mb-14 font-normal">Let’s get you onboard. It’s easy</p>
        <form>
          <div className='flex gap-8 mb-2 container flex-col'>
            <input 
              className="placeholder:text-[#8F8FB1] border bg-transparent w-[367px] p-3 text-center cursor-pointer rounded-full text-[#8F8FB1] border-[#99A4E1] focus:outline-none focus:ring-0 focus:scale-105" 
              id="name"
              type="text" 
              placeholder='Full name' 

              required={true}
            />
            <input 
              className="placeholder:text-[#8F8FB1] border bg-transparent w-[367px] p-3 text-center cursor-pointer rounded-full text-[#8F8FB1] border-[#99A4E1] focus:outline-none focus:ring-0 focus:scale-105" 
              id="email"
              type="email" 
              placeholder='Email address' 

              required={true}
            />
            <input 
              className="placeholder:text-[#8F8FB1] border bg-transparent w-[367px] p-3 text-center cursor-pointer rounded-full text-[#8F8FB1] border-[#99A4E1] focus:outline-none focus:ring-0 focus:scale-105" 
              id="password"
              type="password"
              placeholder='Password'
               
              required={true}
            />
          </div> 

          <div className='flex items-center justify-center gap-3'>
            <img src="/square.svg" alt="logo" className="w-5 h-5 object-contain" />
            <p className="text-white font-light text-center text-sm my-6">I agree to Biamo's <a href='/' className="text-[#e14594]">Terms and Privacy Policy</a></p>
          </div>

          <div className="items-center flex flex-col gap-5 justify-center">
            <button
             className="text-sm font-bold relative space-x-2 bg-[#F8F0FF] w-[367px] p-4 text-primary text-center cursor-pointer rounded-full"
             
            >
              Sign Up
            </button>

            <p className='text-white text-sm font-light'>Or</p>

            <div>
              <button
               className="text-sm flex items-center justify-center gap-3 font-semibold leading-4 relative space-x-2 border border-[#99A4E1] bg-transparent w-[367px] p-5 text-white text-center cursor-pointer rounded-full"
               
              >
                <img src="/google.svg" alt="logo" className="w-5 h-5 object-contain" />
                Sign Up With Google
              </button>
            </div>
          </div>
          <p className="text-white text-center text-sm my-6">Already have an account? <a href='/' className="text-[#e14594] font-semibold">Log In</a></p>
        </form>
      </div>
    </div>
  )
}

export default page