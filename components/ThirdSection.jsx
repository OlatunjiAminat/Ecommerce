import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function ThirdSection() {
  return (
    <div className='rounded-lg mt-32 bg-deep-brown mx-5 md:mx-10 lg:flex justify-center items-center lg:mx-32 xl:mx-[250px] '>
        <div className='flex justify-center items-center pt-12 lg:px-20'>
            <Image src="/smallSpeaker.png" alt="speaker" width={70} height={5} loading="lazy" className='md:w-[200px] lg:w-[350px] '  />
        </div>
        <div className='lg:pr-32'>
            <div className='flex justify-center items-center text-white mt-6 '>
                <h1 className='text-xl text-center font-extrabold pb-3 lg:text-5xl lg:text-start '>ZX9 <br />SPEAKER</h1>
            </div>
            <div className='flex justify-center items-center '>
                <p className='text-xs max-w-[250px] text-center text-gray-200 lg:text-lg lg:text-start '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            </div>
            <div className='flex justify-center items-center '>
            <Link href="/speakers"><button className='text-xs mt-5 mb-10 text-white bg-deep-black px-4 py-2 hover:bg-gray-500'>SEE PRODUCT</button></Link>
            </div>

        </div>
        
    </div>
  )
}

export default ThirdSection