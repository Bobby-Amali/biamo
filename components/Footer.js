const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-20 px-10 sm:px-16'>
      <div className='flex flex-col pb-6 gap-4'>
        <img src="/logo.svg" alt="logo" className="w-10 h-10 object-contain" />
        <p className='text-xs sm:text-[16px] font-normal'>© 2023 Biamo. All rights reserved</p>
      </div>
      <div className='flex flex-col sm:flex-row pb-6 gap-5 sm:gap-16'>
        <div className='flex flex-col gap-5'>
          <p className='text-xs sm:text-[16px] font-normal'>Instagram</p>
          <p className='text-xs sm:text-[16px] font-normal'>Linkedin</p>
          <p className='text-xs sm:text-[16px] font-normal'>Twitter</p>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-xs sm:text-[16px] font-normal'>Privacy Policy</p>
          <p className='text-xs sm:text-[16px] font-normal'>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer