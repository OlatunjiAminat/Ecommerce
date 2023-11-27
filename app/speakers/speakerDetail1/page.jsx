import HeadPhoneDetailFirstSection from '@components/HeadPhoneDetailFirstSEction.jsx'
import SpeakerDetail_1FirstSection from '@components/SpeakerDetail_1FirstSection'
import SpeakerDetail_1SecondSection from '@components/SpeakerDetail_1SecondSection'
import SpeakerDetail_1ThirdSection from '@components/SpeakerDetail_1ThirdSection'
import HeadPhoneDetailFifthSection from '@components/HeadPhoneDetailFifthSection'
import HeadPhoneDetailSeventhSection from '@components/HeadPhoneDetailSeventhSection'
import SecondSectionB from '@components/SecondSectionB'
import SecondSectionC from '@components/SecondSectionC'
import LastSectionA from '@components/LastSectionA'
import LastSectionB from '@components/LastSectionB'
import SecondSectionA from '@components/SecondSectionA'
import EightSectionB from '@components/EightSectionB'
import HeadPhoneDetailSixthSection from '@components/HeadPhoneDetailSixthSection'


function page() {
  return (
    <div>
        <div>
            <HeadPhoneDetailFirstSection />
        </div>
        <div>
            <SpeakerDetail_1FirstSection />
        </div>
        <div>
            <SpeakerDetail_1SecondSection />
        </div>
        <div>
            <SpeakerDetail_1ThirdSection />
        </div>
        <div>
            <HeadPhoneDetailFifthSection />
        </div>
        <div className='mt-6 md:flex justify-center items-center md:mx-16 xl:justify-start'>
            <div>
                <EightSectionB />
            </div>
            <div>
                <HeadPhoneDetailSixthSection />
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