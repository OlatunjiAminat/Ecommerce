import SecondSectionA from '@/components/SecondSectionA'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import SixthSection from '@components/SixthSection'
import HeadPhoneFirstSection from '@components/HeadPhoneFirstSection'
import HeadPhoneFourthSection from '@components/HeadPhoneFourthSection'
import HeadPhoneSecondSection from '@components/HeadPhoneSecondSection'
import HeadPhoneThirdSection from '@components/HeadPhoneThirdSection'
import React from 'react'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'

function page() {
  return (
    <div>
        <div>
            <HeadPhoneFirstSection />
        </div>
        <div>
          <HeadPhoneSecondSection />
        </div>
        <div>
          <HeadPhoneThirdSection />
        </div>
        <div>
          <HeadPhoneFourthSection />
        </div>

        <div className='mt-16 md:flex justify-center items-center'>
          <div>
            <SecondSectionA />
          </div>
          <div>
            <SecondSectionB />
          </div>
          <div>
            <SecondSectionC />
          </div>
        </div>
        {/* <div className='my-32'>
          <SixthSection />
        </div> */}
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