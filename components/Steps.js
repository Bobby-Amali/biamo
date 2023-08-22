import React from 'react'

const Steps = () => {
  return (
    <section className='min-h-screen mx-auto'>
      <div className='bg-[#DED3EE] m-10 rounded-[37.8px]'>
        <h1 className="text-primary text-center text-2xl xs:text-4xl sm:text-6xl pt-24 px-32 font-semibold">Make Breastfeeding Work for Your Moms</h1>
        
        <div className="flex flex-col lg:flex-row pt-[380px]">
          <div class="scroll-two">
            <div className='lg:h-[75vh] flex flex-row gap-6 pl-10 lg:pl-40 pr-10 lg:pr-24 pb-10 lg:pb-0'>
              <div className="w-12 h-12 bg-[#E14594] rounded-full text-center text-white">
                1
              </div>
              <div className='flex flex-col'>
                <h2 className='text-primary text-3xl font-semibold'>Revolutionary Service</h2>
                <p className='text-[#0d0d0c] opacity-80 text-base'>
                  Easily link your app with our API through our friendly SDK and comprehensive documentation. Need help with app design? We’d help you. Need help with connecting th
                </p>
              </div>
            </div>
            
            <div className='lg:h-[75vh] gap-6 pl-10 lg:pl-40 pr-10 lg:pr-24 pb-10 lg:pb-0'>
              <div className="w-12 h-12 bg-secondary rounded-full text-center text-white">
                2
              </div>
              <h2 className='text-primary text-3xl font-semibold'>Techie at Heart, Friendly in Spirit</h2>
              <p className='text-[#0d0d0c] opacity-80 text-base'>
                Are you overwhelmed by the technical bits? Fear not! We'll walk you through, providing simple, user-friendly API documentation and 
                hands-on support throughout your app development process. Think of us as your amiable guide in the tech wilderness.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start lg:justify-center pt-14 lg:pt-0 pl-10 md:pl-24 pr-10 lg:pr-0 gap-8 w-full lg:w-[50%] lg:h-[100vh] relative lg:sticky top-0" id="about">
            <img src="/browser.svg" alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps