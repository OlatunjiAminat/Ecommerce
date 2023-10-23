import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function FourthSection() {
  return (
    <div className='md:mx-10 mx-5 rounded-lg mt-7 bg-gray-300 py-24 flex justify-center items-center lg:mx-32 xl:mx-[250px]'>
        <div className='pr-10 pl-4 md:pr-32'>
            <h1 className='text-xl text-center  pb-3 lg:text-start '>ZX7 SPEAKER</h1>
            <Link href="/speakers/speakerDetail2"><button className='px-2 py-2 text-[10px] border-black border hover:bg-black hover:text-white mt-3 lg:px-4'>SEE PRODUCT</button></Link>
        </div>
        <div>
            <Image src="/sitting_speaker1.png" alt="speaker" width={190} height={90} loading="lazy" className=' '  />
        </div>
    </div>
  )
}

export default FourthSection