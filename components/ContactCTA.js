import React from 'react'

const ContactCTA = () => {
  return (
    <div className='bg-[#101722] py-12 sm:py-20 px-8 sm:px-16'>
      <div className='gap-6'>
        <h3 className='text-[#E14594] text-sm sm:text-2xl font-medium'>
          Shape the Future of Breastfeeding with Biamo
        </h3>
        <h1 className='highlight text-2xl sm:text-6xl sm:pr-40 pt-4 font-semibold'>
          We can't wait to guide you on this rewarding journey. Let's create tech-enabled breastfeeding solutions 
          that bring immense value to mothers worldwide. Ready for the leap? Connect with Biamo today!
        </h1>
        <button className='flex flex-row items-center pt-8 sm:pt-16 gap-2'>
          <p className='text-white text-sm font-bold leading-4'>Contact Us</p>
         <img src="/arrow.svg" alt="logo" className="w-4 h-10 object-contain" />
        </button>
      </div>
      <div className='flex flex-col xl:flex-row gap-12 py-8'>
        
        <div className='flex flex-col items-center justify-center'>
          <div class="box">Bluetooth Connection</div>
          
          <div className='flex flex-row'>
            <div class="box-2">Sessions</div>
            <div class="box-2">Pump Controls</div>
          </div>

          <div className='flex flex-row'>
            <div class="box-3">Milk Tracking</div>
            <div class="box-3">Pump Battery</div>
            <div class="box-3">Pumping Schedules</div>
          </div>
        </div>

        <div className='flex flex-col sm:pl-16 justify-center'>
          <h1 className='text-white text-3xl sm:text-6xl font-semibold'>
            Build your Breastfeeding App with our Lego Brick
          </h1>
          <button className='flex flex-row items-center pt-8 sm:pt-16 gap-2'>
          <p className='text-white text-sm font-bold leading-4'>Contact Us</p>
         <img src="/arrow.svg" alt="logo" className="w-4 h-10 object-contain" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default ContactCTA