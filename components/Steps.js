import React from 'react'

const Steps = () => {
  return (
    <section className='min-h-screen mx-auto'>
      <div className='bg-[#DED3EE] m-6 lg:m-10 rounded-[37.8px]'>
        <h1 className="text-primary text-center text-3xl sm:text-6xl pt-10 md:pt-24 px-8 md:px-32 font-semibold">
          Make Breastfeeding Work for Your Moms
        </h1>
        
        <div className='flex flex-col md:grid md:grid-cols-2 overflow-hidden mt-4 lg:mt-24 rounded-br-[37.8px]'>
          <div className="overflow-auto md:max-h-[391px] scrollbar-hide mb-10 md:mb-0 pl-4 md:pl-10">
            <div className="w-full h-full flex flex-row mt-10 pr-10 pb-8 md:pb-0 gap-4 md:gap-14">
              <h3 className='text-[#E14594] mt-2 md:mt-3 font-semibold'>01</h3>
              <div>
                <h2 className='text-[#2B3595] text-3xl md:text-5xl font-semibold mb-4 md:mb-8'>Connect</h2>
                <p className='text-primary md:text-lg font-semibold'>
                  Easily link your app with our API through our friendly SDK and comprehensive documentation. Need help with app design? We’d help you. Need help with connecting th
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-row pr-10 pb-8 md:pb-0 gap-4 md:gap-14">
              <h3 className='text-[#E14594] mt-2 md:mt-3 font-semibold'>02</h3>
              <div>
                <h2 className='text-[#2B3595] text-3xl md:text-5xl font-semibold mb-4 md:mb-8'>Innovate</h2>
                <p className='text-primary md:text-lg font-semibold'>
                  With our endpoints at your disposal, design personalized solutions that resonate with your users
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-row pr-10 pb-8 md:pb-0 gap-4 md:gap-14">
              <h3 className='text-[#E14594] mt-2 md:mt-3 font-semibold'>03</h3>
              <div>
                <h2 className='text-[#2B3595] text-3xl md:text-5xl font-semibold mb-4 md:mb-8'>Thrive</h2>
                <p className='text-primary md:text-lg font-semibold'>
                  Analyze user data, make informed decisions and let's grow together!
                </p>
              </div>
            </div>
          </div>
          <img src="/browser.svg" alt="logo" className="w-full h-[115%] object-contain" />
        </div>

      </div>
    </section>
  )
}

export default Steps