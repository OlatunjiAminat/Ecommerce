import SecondSectionA from '@/components/SecondSectionA'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import SixthSection from '@components/SixthSection'
import HeadPhoneFirstSection from '@components/HeadPhoneFirstSection'
import HeadPhoneFourthSection from '@components/HeadPhoneFourthSection'
import HeadPhoneSecondSection from '@components/HeadPhoneSecondSection'
import HeadPhoneThirdSection from '@components/HeadPhoneThirdSection'
import React from 'react'

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
        <div className='my-32'>
          <SixthSection />
        </div>
    </div>
  )
}

export default page