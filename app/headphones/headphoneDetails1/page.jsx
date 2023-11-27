import HeadPhoneDetailFifthSection from '@components/HeadPhoneDetailFifthSection'
import HeadPhoneDetailFirstSection from '@components/HeadPhoneDetailFirstSEction.jsx'
import HeadPhoneDetailFourthSection from '@components/HeadPhoneDetailFourthSection'
import HeadPhoneDetailSecondSection from '@components/HeadPhoneDetailSecondSection'
import HeadPhoneDetailSixthSection from '@components/HeadPhoneDetailSixthSection'
import HeadPhoneDetailThirdSection from '@components/HeadPhoneDetailThirdSection'
import React from 'react'
import HeadPhoneDetailSeventhSection from '@components/HeadPhoneDetailSeventhSection'
import HeadPhoneDetailEighthSection from '@components/HeadPhoneDetailEighthSection'
import SecondSectionA from '@/components/SecondSectionA'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'


function page() {
  return (
    <div>
        <div>
            <HeadPhoneDetailFirstSection />
        </div>

        <div>
            <HeadPhoneDetailSecondSection />
        </div>
        <div>
            <HeadPhoneDetailThirdSection />
        </div>
        <div>
            <HeadPhoneDetailFourthSection />
        </div>
        <div>
            <HeadPhoneDetailFifthSection />
        </div>
        <div className='md:flex justify-center items-center md:mx-16 xl:justify-start'>
            <div>
                <HeadPhoneDetailSixthSection />
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