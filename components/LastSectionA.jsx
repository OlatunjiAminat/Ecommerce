import React from 'react';
import Image from 'next/image';


function LastSectionA() {
  return (
    <div className='mx-5 mt-5'>
         <div className='flex justify-center items-center '>
            <Image src="/man.png" alt="a man's picture" width={400} height={5} loading="lazy" className='md:w-[580px] lg:w-[340px] lg:h-[400px] xl:w-[500px] xl:h-[450px] '  />
        </div>
    </div>
  )
}

export default LastSectionA