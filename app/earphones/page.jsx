import EarphoneFirstSection from '@components/EarphoneFirstSection'
import EarphoneSecondSection from '@components/EarphoneSecondSection'
import SecondSectionA from '@/components/SecondSectionA'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import SixthSection from '@components/SixthSection'
import React from 'react'

function page() {
  return (
    <div>
        <div>
            <EarphoneFirstSection />
        </div>
        <div>
            <EarphoneSecondSection />
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