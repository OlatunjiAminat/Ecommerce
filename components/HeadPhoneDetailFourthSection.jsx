import React from 'react';
import Image from 'next/image';


function HeadPhoneDetailFourthSection() {
  return (
    <div className='mx-7 md:mx-20 lg:mx-16 lg:mt-10 xl:mx-24'>
        <div className='md:flex justify-start'>
            <div className=''>
                <div className='mb-4'>
                    <Image src="/man.png" alt="a man's picture" width={400} height={5} loading="lazy" className='md:w-[380px] lg:w-[500px] lg:h-[250px] '  />
                </div>
                <div className='mb-4'>
                    <Image src="/headset_on.png" alt="headphone" width={400} height={2} loading="lazy" className='md:w-[380px] lg:w-[500px] lg:h-[250px] '  />
                </div>
            </div>
            <div className='mb-4'>
                <Image src="/half_headset.png" alt="headset" width={400} height={5} loading="lazy" className='md:w-[680px]  md:hidden '  />
                <div className='hidden md:block ml-5'>
                    <Image src="/half_headphone.png" alt="headset" width={400} height={5} loading="lazy" className='md:w-[380px] md:h-[385px] lg:w-[500px] lg:h-[510px] rounded-lg'  />
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default HeadPhoneDetailFourthSection