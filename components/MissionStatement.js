import React from 'react'

const MissionStatement = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-12 py-14 sm:py-24 px-8 sm:px-20 justify-center'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-primary sm:text-2xl font-semibold'>
          Mission Statement:
        </h1>
        <h1 className='text-secondary text-lg sm:text-4xl font-semibold sm:mr-20'>
          "Our mission is to empower breastfeeding businesses with cutting-edge technology solutions, fostering innovation and 
          delivering unparalleled value to the global community of mothers."
        </h1>
      </div>
      <div>
        <div className='sm:w-[506px] h-12 sm:h-[80px] m-2 flex-shrink-0 bg-primary transform rotate-[4.695deg] pl-5 flex justify-start items-center'>
          <p className='font-medium sm:text-2xl text-white'>Lego bricks of what exists &  has existed so far</p>
        </div>
        <div className='sm:w-[506px] h-12 sm:h-[80px] m-2 flex-shrink-0 bg-[#2B3595] transform rotate-[-0.264deg] pl-5 flex justify-start items-center'>
          <p className='font-medium sm:text-2xl text-white'>The APK</p>
        </div>
        <div className='sm:w-[506px] h-12 sm:h-[80px] m-2 flex-shrink-0 bg-secondary transform rotate-[2.694deg] pl-5 flex justify-start items-center'>
          <p className='font-medium sm:text-2xl text-white'>Question sessions</p>
        </div>
        <div className="sm:w-[506px] h-12 sm:h-[80px] m-2 flex-shrink-0 bg-[#E14594] transform rotate-[-1.716deg] pl-5 flex justify-start items-center">
          <p className="font-medium sm:text-2xl text-white">The journey and the future</p>
        </div>
        <div className="flex flex-row items-center mt-16 sm:gap-4 text-primary font-medium sm:text-2xl tracking-widest sm:tracking-[4px] rotate-4 -skew-y-6 transform-gpu">
          <h3 >The messaging process</h3>
          <img src="/slant_arrow.svg" alt="logo" className="-mt-4 w-10 sm:w-14 h-10 sm:h-14 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default MissionStatement