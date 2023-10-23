import HeadPhoneDetailFirstSection from '@components/HeadPhoneDetailFirstSEction.jsx'
import HeadPhoneDetail_2FirstSection from '@components/HeadPhoneDetail_2FirstSection'
import HeadPhoneDetail_2SecondSection from '@components/HeadPhoneDetail_2SecondSection'
import HeadPhoneDetail_2ThirdSection from '@components/HeadPhoneDetail_2ThirdSection'
import React from 'react'
import HeadPhoneDetailFifthSection from '@components/HeadPhoneDetailFifthSection'
import HeadPhoneDetailSeventhSection from '@components/HeadPhoneDetailSeventhSection'
import HeadPhoneDetailEighthSection from '@components/HeadPhoneDetailEighthSection'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'
import EightSectionA from '@components/EightSectionA'
import SecondSectionA from '@components/SecondSectionA'




function page() {
  return (
    <div>
        <div>
            <HeadPhoneDetailFirstSection />
        </div>
        <div>
            <HeadPhoneDetail_2FirstSection />
        </div>
        <div>
            <HeadPhoneDetail_2SecondSection/>
        </div>
        <div>
            <HeadPhoneDetail_2ThirdSection />
        </div>
        <div>
            <HeadPhoneDetailFifthSection />
        </div>
        <div className='md:flex justify-center items-center md:mx-16 xl:justify-start'>
            <div>
                <EightSectionA />
            </div>
            <div>
                <HeadPhoneDetailSeventhSection />
            </div>
            <div>
                <HeadPhoneDetailEighthSection />
            </div>
        </div>
        <div className='mt-16 mb-16 md:flex justify-start items-center md:mx-20 '>
            <div className='md:w-[200px] lg:w-[330px]'>
                <SecondSectionA />
            </div>
            <div className='md:w-[200px] lg:w-[330px]'>
                <SecondSectionB />
            </div>
            <div className='md:w-[200px] lg:w-[330px]'>
                <SecondSectionC />
            </div>
        </div>
        <div className='mb-16 lg:flex justify-start xl:flex justify-start'>
            <div className='order-2'>
                <LastSectionA/>
            </div>
            <div>
                <LastSectionB />
            </div>
        </div>


    </div>

    
  )
}

export default page