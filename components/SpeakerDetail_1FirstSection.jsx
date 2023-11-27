import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SpeakerDetail_1FirstSection() {
  return (
    <div className=''>
        <div className='md:flex justify-start items-center md:mx-12 lg:mt-2 lg:mx-8'>
            <div className='bg-deep-white flex justify-center items-center md:max-w-[50%] md:px-20 md:py-32 py-5  rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px]'>
                <Image src="/smallSpeaker.png" alt="small speaker" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
            </div>
            <div className='ml-8 md:max-w-[40%] lg:ml-6'>
                <div className='mt-8 mb-5 '>
                    <p className='text-deep-brown tracking-[0.5em] lg:text-start'>NEW PRODUCT</p>
                </div>
                <div>
                    <h2 className='font-thin my-2 text-xl pb-3 lg:text-start text-deep-black'>ZX9 <br/> SPEAKER</h2>
                </div>
                <div className='mr-8 md:max-w-[80%] md:mr-0 lg:text-start lg:mx-0'>
                    <p className='text-gray-600 text-deep-white text-sm lg:text-start lg:max-w-[380px] lg:text-lg'>Upgrade your sound system with all the new ZX9 active speaker.It's a bookshelf speaker system that offers truly wireless connectivity-creating new possibilities for more pleasing and practical audio setups.</p>
                </div>
                <div className='mt-3  lg:text-start mb-4 lg:mx-0'>
                    <p className='font-bold'>$4,500</p>
                </div>
                <div className='flex justify-start items-center mb-16' >
                    <div className='bg-gray-600 max-w-[70px] mr-2'>
                        <button className='px-2 hover:bg-light-brown'>-</button><input type="text" placeholder="1" className='pl-2 max-w-[20px] bg-gray-600 placeholder-black hover:bg-light-brown' /><button className='px-2 hover:bg-light-brown'>+</button>
                    </div>
                    <div>
                        <Link href="#"><button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown'>ADD TO CART</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   
  )
}

export default SpeakerDetail_1FirstSection