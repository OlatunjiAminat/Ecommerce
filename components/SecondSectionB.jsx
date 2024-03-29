import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SecondSectionB() {
  return (
  <Link href="/speakers/speakerDetail1">
      <div className='mx-auto max-w-[300px] text-center lg:max-w-[350px]'>
            <div className='mt-8 flex justify-center items-center'>
                <Image src="/smallSpeaker.png" alt="speaker" width={70} height={5} loading="lazy" className=''  />
            </div>
            <div className='bg-deep-white mt-[-50px] mx-4 pt-16 pb-5 px-12 md:px-16 lg:px-20 text-center text-sm rounded'>
                <p>SPEAKERS</p>
                <div className='text-xs pt-3'>
                  <Link href="/speakers/speakerDetail1" className='text-gray-600 hover:text-deep-brown'>SHOP <span className='ml-3 text-deep-brown font-extrabold text-sm'>&#62;</span></Link>
                </div>
            </div>
        </div>
  </Link>
  )
}

export default SecondSectionB