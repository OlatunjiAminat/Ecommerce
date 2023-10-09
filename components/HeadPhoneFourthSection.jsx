import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function HeadPhoneFourthSection() {
  return (
    <div className='lg:flex justify-center items-center lg:mt-16 lg:mx-20 xl:mx-28 '>
        <div className='bg-deep-white flex justify-center items-center mt-7 md:mt-10 md:max-w-[450px] py-5 mx-10 rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px]'>
            <Image src="/whiteheadset.png" alt="headphone" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
        </div>
        <div className='lg:ml-6'>
            <div className='mt-8'>
                <h2 className='font-thin my-2 text-xl pb-3 text-center lg:text-start text-deep-black'>XX99 MARK II <br/> HEADPHONES</h2>
            </div>
            <div className='mx-10 md:mx-40 text-center  lg:text-start lg:mx-0'>
                <p className='text-gray-600 text-deep-white text-sm text-base lg:text-start lg:max-w-[380px]'>The new XX99 Mark II is the pinnacle of prinstine audio.It redefines your premium headphones experience by reproducing the balanced depth and precision of studio quality sound.</p>
            </div>
            <div className='mt-5 text-center lg:text-start' >
                <Link href="#"><button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown mb-10'>SEE PRODUCT</button></Link>
            </div>
        </div>
    </div>
   
    
  )
}

export default HeadPhoneFourthSection