import SecondSectionA from '@/components/SecondSectionA'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import SixthSection from '@components/SixthSection'
import SpeakerFirstSection from '@components/SpeakerFirstSection'
import SpeakerSecondSection from '@components/SpeakerSecondSection'
import SpeakerThirdSection from '@components/SpeakerThirdSection'
import React from 'react'

function page() {
  return (
    <div>
        <div>
            <SpeakerFirstSection />
        </div>
        <div>
            <SpeakerSecondSection />
        </div>
        <div>
            <SpeakerThirdSection />
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