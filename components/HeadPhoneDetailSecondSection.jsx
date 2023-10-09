import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function HeadPhoneDetailSecondSection() {
  return (
    <div>
        <div className='md:flex justify-center items-center md:mx-16 lg:mt-16 lg:mx-20 xl:mx-28 '>
            <div className='bg-deep-white flex justify-center items-center md:max-w-[50%] md:px-16 md:py-32 py-5  rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px]'>
                <Image src="/headphone1.png" alt="headphone" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
            </div>
            <div className='ml-8 md:max-w-[40%] lg:ml-6'>
                <div className='mt-8 mb-5 '>
                    <p className='text-deep-brown tracking-[0.5em] lg:text-start'>NEW PRODUCT</p>
                </div>
                <div>
                    <h2 className='font-thin my-2 text-xl pb-3 lg:text-start text-deep-black'>XX99 MARK II <br/> HEADPHONES</h2>
                </div>
                <div className='md:max-w-[80%] lg:text-start lg:mx-0'>
                    <p className='text-gray-600 text-deep-white text-sm text-base lg:text-start lg:max-w-[380px]'>The new XX99 Mark II is the pinnacle of prinstine audio.It redefines your premium headphones experience by reproducing the balanced depth and precision of studio quality sound.</p>
                </div>
                <div className='mt-3  lg:text-start mb-4 lg:mx-0'>
                    <p className='font-bold'>$2.999</p>
                </div>
                <div className='flex justify-start items-center mb-16' >
                    <div className='bg-gray-600 max-w-[70px] mr-2'>
                        <button className='pl-3 py-1 hover:bg-light-brown'>-<button className='px-2 hover:bg-light-brown'>1<button className='pl-2 hover:bg-light-brown'>+</button></button></button>
                    </div>
                    <div>
                        <Link href="#"><button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown'>SEE PRODUCT</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeadPhoneDetailSecondSection