import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function SpeakerSecondSection() {
  return (
    <div>
        <div className='lg:flex justify-center items-center lg:mt-16 lg:mx-20 xl:mx-28 '>
            <div className='bg-deep-white flex justify-center items-center mt-7 md:mt-10 md:max-w-[450px] py-5 mx-10 rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px]'>
                <Image src="/smallSpeaker.png" alt="headphone" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
            </div>
            <div className='lg:ml-6'>
                <div className='mt-8 mb-5'>
                    <p className='text-deep-brown tracking-[0.5em] text-center lg:text-start'>NEW PRODUCT</p>
                </div>
                <div>
                    <h2 className='font-thin my-2 text-xl pb-3 text-center lg:text-start text-deep-black'>ZX9 <br/> SPEAKER</h2>
                </div>
                <div className='mx-10 md:mx-40 text-center  lg:text-start lg:mx-0'>
                    <p className='text-gray-600 text-deep-white text-sm text-base lg:text-start lg:max-w-[380px]'>Upgrade your sound system with all the new ZX9 active speaker.It's a bookshelf speaker system that offers truly wireless connectivity-creating new possibilities for more pleasing and practical audio setups.</p>
                </div>
                <div className='mt-5 text-center lg:text-start' >
                    <Link href="speakers/speakerDetail1"><button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown mb-10'>SEE PRODUCT</button></Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SpeakerSecondSection