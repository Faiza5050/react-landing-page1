import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 mb-12 md:mb-54 md:pr-12">
          <div className='mb-20 w-[80%] text-2xl font-bold text-white'>
            <h2>Currently Available For Freelance Worldwide</h2>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4">
            Creative Visual Designer
          </h1>
          
          <div className="relative max-w-md">
            <div className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              </svg>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center"> {/* Added flex and justify-center */}
          <img 
            src="/image.png" 
            alt="Creative Designer"
            className="max-w-[80%] h-auto md:h-[500px] opacity-45"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
