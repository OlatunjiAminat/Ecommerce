import React from 'react';
import Image from 'next/image';


function SixthSection() {
  return (
    <div className='mx-5 my-16 lg:flex justify-between items-center lg:mx-32 xl:mx-[250px]'>
        <div className='flex justify-center items-center order-2'>
            <Image src="/man.png" alt="a man's picture" width={400} height={5} loading="lazy" className='md:w-[680px] lg:w-[2280px] lg:h-[350px] '  />
        </div>
        <div className='md:mt-10 lg:pr-8'>
            <h1 className='text-center mt-5 mb-3 text-xl'>BRINGING YOU THE <span className='text-deep-brown'>BEST</span> AUDIO GEAR</h1>
            <p className='text-center text-gray-600 font-thin'>Located at the heart of New York city, Audiophile is the premier store for high end headphones, speakers, earphones, and audio accessories.We have a large showroom and luxury demonstrations available for you to browse a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portfolio audio equipment.</p>
        </div>
    </div>
  )
}

export default SixthSection