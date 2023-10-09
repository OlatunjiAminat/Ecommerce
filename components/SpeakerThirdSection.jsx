import React from 'react';
import Image from 'next/image';


function SpeakerThirdSection() {
  return (
    <div>
         <div className='lg:flex justify-center items-center lg:mt-16 lg:mx-20 xl:mx-[190px] '>
        <div className='bg-deep-white flex justify-center items-center mt-7 md:mt-10 md:max-w-[450px] py-5 mx-10 rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px] lg:order-2 xl:ml-[130px]'>
            <Image src="/flatSpeaker.png" alt="flat speaker" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
        </div>
        <div className='lg:ml-6'>
            <div className='mt-8'>
                <h2 className='font-thin my-2 text-xl pb-3 text-center lg:text-start text-deep-black'>ZX9<br/> SPEAKERS</h2>
            </div>
            <div className='mx-10 md:mx-40 text-center  lg:text-start lg:mx-0 lg:max-w-[380px]'>
                <p className='text-gray-600 text-deep-white text-sm text-base lg:text-start'>Stream high quality sound wirelessly with minimal loss.The ZX9 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
            </div>
            <div className='mt-5 text-center lg:text-start' >
                <button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown mb-10'>SEE PRODUCT</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SpeakerThirdSection