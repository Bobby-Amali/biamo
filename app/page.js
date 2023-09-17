import { Header, Hero, Tech, Steps, ContactCTA, MissionStatement, Footer, AnimatedSection  } from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='relative z-0 bg-home bg-cover bg-no-repeat bg-center pt-14 px-8 sm:px-20'>
      <Header />
      <Hero />
    </div>

    <Tech />
    <AnimatedSection>
      <Steps />
    </AnimatedSection>
    <AnimatedSection>
      <ContactCTA />
    </AnimatedSection>
    <AnimatedSection>
      <MissionStatement />
    </AnimatedSection>
    <Footer />
    </>
  )
}

export default page