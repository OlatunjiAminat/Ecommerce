import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function SecondSectionA() {
  return (
      <div className='mx-auto max-w-[300px] text-center lg:max-w-[450px]'>
          <div className='mt-8 flex justify-center items-center'>
              <Image src="/smallHeadset.png" alt="small_headphone" width={70} height={5} loading="lazy" className=''  />
          </div>
          <div className='bg-deep-white mt-[-50px] mx-3 pt-16 pb-5 px-12 md:px-16 lg:px-20 text-center text-sm rounded'>
              <p>HEADPHONES</p>
              <div className='text-xs pt-3'>
                <Link href="#" className='text-gray-600'>SHOP <span className='ml-3 text-deep-brown font-extrabold text-sm'>&#62;</span></Link>
              </div>
          </div>
      </div>
  )
}

export default SecondSectionA