import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function FifthSection() {
  return (
    <div className='md:flex justify-between items-center md:mx-10 mx-5 rounded-lg mt-7 lg:mx-32 xl:mx-[250px] '>
        <div className='max-w-[500px] mx-auto md:max-w-[50%]'>
            <Image src="/earphone2.png" alt="earphone" width={400} height={25} loading="lazy" className='md:w-[600px] lg:w-[950px] md:mt-5'  />
        </div>
        <div className='bg-deep-white rounded-lg py-10 mt-4 md:pr-32 md:w-[50%] md:h-[320px] mx-auto md:ml-2 lg:h-[360px] xl:h-[365px] '>
            <h1 className='text-xl pl-6 pb-5 lg:text-start pt-16'>YX1 EARPHONES</h1>
            <Link href="/earphones"><button className='ml-6 px-4 py-2 text-[10px] border-black border hover:bg-black hover:text-white mt-3 lg:px-4'>SEE PRODUCT</button></Link>
        </div>
    </div>
  )
}

export default FifthSection