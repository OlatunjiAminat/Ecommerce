import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function FirstSection() {
  return (
    <div className='bg-deep-black relative  flex justify-around items-center font-manrope mt-[-10px]' >
        <div className='text-white ml-[35px] absolute top-1/2 md:top-[270px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className=''>
                <p className='pt-0 font-[80] text-[10px] md:text-[15px] md:ml-[-15px] text-deep-white ml-[-40px] tracking-[0.5em]'>NEW PRODUCT</p>
            </div>
            <div>
                <h2 className='font-bold my-2 text-2xl ml-[-60px] md:ml-[-15px]'>XX99 MARK II <br/> HEADPHONES</h2>
            </div>
            <div className=''>
                <p className='mb-2 text-[8px] text-deep-white ml-[-55px] md:text-[12px] md:ml-[-40px]'>Experience natural, lifelike audio and exceptional <br></br> build quality made for the passionate music<br></br> enthusiast.</p>
            </div>
            <div className=''>
                <Link href="/headphones"><button className='bg-deep-brown px-3 py-2 text-[8px] ml-[-20px] md:ml-[20px] md:text-[10px]'>SEE PRODUCT</button></Link>
            </div>
        </div>
        <div className='max-w-[95%] mt-[-20px]'>
            <Image src="/headset_24.png" alt="headphone" width={490} height={5} loading="lazy" className=''  />
        </div>
    </div>
    
  )
}

export default FirstSection