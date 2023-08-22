const Hero = () => {
  return (
    <>
    <div className="flex justify-center items-center h-[75vh] sm:h-screen">
      <div className="flex flex-col text-center items-center gap-10 xs:gap-14 w-full p-6">
        <div className="border-2 border-blue-400 px-6 py-2 rounded-full gap-2">
          <p className='text-white text-xs xs:text-sm sm:text-base font-semibold'>Breastfeeding Industry Solutions</p>
        </div>
        <h1 className="text-white text-2xl xs:text-4xl sm:text-6xl font-bold">Welcome to Biamo, Your Compass in the Breastfeeding Tech World</h1>
        <button className="bg-cta hover:bg-[#E14594] transition ease-in-out duration-300 text-primary hover:text-white px-4 sm:px-10 py-2 sm:py-4 text-xs sm:text-sm font-semibold rounded-full">Get Started</button>
      </div>
    </div>
    </>
  );
};

export default Hero;
