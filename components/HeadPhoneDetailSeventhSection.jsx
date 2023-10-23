import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function HeadPhoneDetailSeventhSection() {
  return (
    <div className='mt-5 mx-5'>
        <div className='bg-deep-white flex justify-center items-center rounded-lg  mx-auto max-w-[300px]'>
            <Image src="/whiteheadset.png" alt="headphone" width={150} height={5} loading="lazy" className='py-3  md:px-16 md:py-10 md:w-[200px] lg:py-12 lg:w-[500px]'  />
        </div>
        <div className='mt-6'>
            <h2 className='font-thin my-2 text-lg pb-3 text-center text-deep-black'>XX59</h2>
        </div>
        <div className='mt-2 text-center '>
            <Link href="/headphones/headphoneDetails3"><button className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown mb-10'>SEE PRODUCT</button></Link>
        </div>
    </div>
    
    
  )
}

export default HeadPhoneDetailSeventhSection