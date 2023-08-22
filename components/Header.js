import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
      <button className="bg-cta hover:bg-[#E14594] transition ease-in-out duration-300 text-primary hover:text-white px-4 sm:px-10 py-2 sm:py-4 text-xs sm:text-sm font-semibold rounded-full">Get Started</button>
    </div>
  )
}

export default Header