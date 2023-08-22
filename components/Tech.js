import React from 'react'

const Tech = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-start lg:justify-center pt-14 lg:pt-0 pl-10 md:pl-24 pr-10 lg:pr-0 gap-8 w-full lg:w-[50%] lg:h-[100vh] relative lg:sticky top-0" id="about">
        <h1 className='text-secondary text-3xl sm:text-7xl font-semibold'>
          Breastfeeding, Tech-Enabled
        </h1>
        <h3 className='text-primary text-lg lg:text-2xl'>
          Unleash Your Potential with Everything you need to create the best breastfeeding experiences for moms 
          all over the world.Together, we can redefine what's possible in the world of breastfeeding technology. 
          Are you ready to make magic together?
        </h3>
      </div>

      <div class="scroll py-10 lg:py-0">
        <div className='lg:h-[75vh] gap-6 pl-10 lg:pl-40 pr-10 lg:pr-24 pb-10 lg:pb-0'>
          <div className="w-12 h-12 bg-[#E14594] rounded-full text-center text-white">
            1
          </div>
          <h2 className='text-primary text-3xl font-semibold'>Revolutionary Service</h2>
          <p className='text-[#0d0d0c] opacity-80 text-base'>
            We're breaking barriers with our infrastructure-first approach, empowering your business to provide more than just hardware. 
            Together, let's unlock new avenues of value for your customers.
          </p>
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

        <div className='lg:h-[75vh] gap-6 pl-10 lg:pl-40 pr-10 lg:pr-24 pb-10 lg:pb-0'>
          <div className="w-12 h-12 bg-[#2B3595] rounded-full text-center text-white">
            3
          </div>
          <h2 className='text-primary text-3xl font-semibold'>Your Growth is Our Success</h2>
          <p className='text-[#0d0d0c] opacity-80 text-base'>
            Whether you're taking baby steps or preparing for a growth spurt, Biamo scales with you. Our platform is designed
            for high performance and seamless scalability, hand in hand with your journey.
          </p>
        </div>

        <div className='lg:h-[75vh] gap-6 pl-10 lg:pl-40 pr-10 lg:pr-24 pb-10 lg:pb-0'>
          <div className="w-12 h-12 bg-primary rounded-full text-center text-white">
            4
          </div>
          <h2 className='text-primary text-3xl font-semibold'>Secure and Reliable</h2>
          <p className='text-[#0d0d0c] opacity-80 text-base'>
            Your trust is our priority. Rest assured, we uphold stringent data security and privacy standards, ensuring
            your business and your breastfeeding mom's data is always safe.
          </p>
        </div>
            
      </div>
    </section>
  )
}

export default Tech