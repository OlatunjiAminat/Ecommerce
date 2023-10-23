import EarphoneDetail_1FirstSection from '@components/EarphoneDetail_1FirstSection'
import EarphoneDetail_1SecondSection from '@components/EarphoneDetail_1SecondSection'
import EarphoneDetail_1ThirdSection from '@components/EarphoneDetail_1ThirdSection'
import React from 'react'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'
import SecondSectionA from '@components/SecondSectionA'
import HeadPhoneDetailFifthSection from '@components/HeadPhoneDetailFifthSection'
import HeadPhoneDetailEighthSection from '@components/HeadPhoneDetailEighthSection'
import HeadPhoneDetailSeventhSection from '@components/HeadPhoneDetailSeventhSection'
import HeadPhoneDetailSixthSection from '@components/HeadPhoneDetailSixthSection'
import HeadPhoneDetailFirstSection from '@components/HeadPhoneDetailFirstSEction.jsx'



function page() {
  return (
    <div>
        <div>
            <HeadPhoneDetailFirstSection />
        </div>
        <div>
            <EarphoneDetail_1FirstSection />
        </div>
        <div>
            <EarphoneDetail_1SecondSection />
        </div>
        <div>
            <EarphoneDetail_1ThirdSection />
        </div>
        <div>
            <HeadPhoneDetailFifthSection />
        </div>
        <div className='mt-10 md:flex justify-center items-center md:mx-16 xl:justify-start'>
            <div>
                <HeadPhoneDetailSixthSection/>
            </div>
            <div>
                <HeadPhoneDetailSeventhSection />
            </div>
            <div>
                <HeadPhoneDetailEighthSection />
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