import HeadPhoneDetailFirstSection from '@components/HeadPhoneDetailFirstSEction.jsx'
import SpeakerDetail_2FirstSection from '@components/SpeakerDetail_2FirstSection'
import SpeakerDetail_2SecondSection from '@components/SpeakerDetail_2SecondSection'
import SpeakerDetail_2ThirdSection from '@components/SpeakerDetail_2ThirdSection'
import React from 'react'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'
import SecondSectionA from '@components/SecondSectionA'
import HeadPhoneDetailEighthSection from '@components/HeadPhoneDetailEighthSection'
import HeadPhoneDetailSeventhSection from '@components/HeadPhoneDetailSeventhSection'
import HeadPhoneDetailSixthSection from '@components/HeadPhoneDetailSixthSection'
import HeadPhoneDetailFifthSection from '@components/HeadPhoneDetailFifthSection'




function page() {
  return (
    <div>
        <div>
            <HeadPhoneDetailFirstSection />
        </div>
        <div>
            <SpeakerDetail_2FirstSection />
        </div>
        <div>
            <SpeakerDetail_2SecondSection />
        </div>
        <div>
            <SpeakerDetail_2ThirdSection />
        </div>
        <div>
            <HeadPhoneDetailFifthSection />
        </div>
        <div className='mt-10 md:flex justify-center items-center md:mx-16 xl:justify-start'>
            <div>
                <HeadPhoneDetailEighthSection />
            </div>
            <div>
                <HeadPhoneDetailSixthSection/>
            </div>
            <div>
                <HeadPhoneDetailSeventhSection />
            </div>
        </div>
        <div className='mt-10 mb-16 md:flex justify-start items-center md:mx-20 '>
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