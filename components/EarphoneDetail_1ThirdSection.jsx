import React from 'react'
import Image from 'next/image';


function EarphoneDetail_1ThirdSection() {
  return (
    <div className='mx-7 md:mx-20 lg:mx-16 lg:mt-10 xl:mx-24'>
        <div className='md:flex justify-start'>
            <div className=''>
                <div className='mb-4'>
                    <Image src="/earbud.png" alt="ear buds" width={400} height={5} loading="lazy" className='md:w-[380px] lg:w-[500px] lg:h-[250px] '  />
                </div>
                <div className='mb-4'>
                    <Image src="/earphone2.png" alt="earphone" width={400} height={2} loading="lazy" className='md:w-[380px] lg:w-[500px] lg:h-[250px] '  />
                </div>
            </div>
            <div className='mb-4 md:ml-5'>
                <Image src="/budEarphone.png" alt="bud and earphone" width={400} height={5} loading="lazy" className='md:w-[380px] md:h-[385px] lg:w-[500px] lg:h-[510px]'  />
            </div>
        </div>
    </div>
  )
}

export default EarphoneDetail_1ThirdSection