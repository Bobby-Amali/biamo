import { Header, Hero, Tech, Steps, ContactCTA, MissionStatement, Footer  } from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='relative z-0 bg-home bg-cover bg-no-repeat bg-center pt-14 px-8 sm:px-20'>
      <Header />
      <Hero />
    </div>
    <Tech />
    <Steps />
    <ContactCTA />
    <MissionStatement />
    <Footer />
    </>
  )
}

export default page