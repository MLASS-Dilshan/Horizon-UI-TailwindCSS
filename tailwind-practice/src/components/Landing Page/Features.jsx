import React from 'react'
import inbox from '../../assets/inboxIcon.png'
import analytics from '../../assets/analyticsIcon.png'
import deliver from '../../assets/deliverIcon.png'

const Features = () => {
  return (
    <section className='flex justify-center pb-[120px] pt-[120px]  max-w-[1920px]  mx-auto pr-[150px] pl-[150px] min-h-[502px]'>
        <div>
        <div className='flex flex-col items-center gap-[24px] px-[60px] py-[60px] '>
            <img className='w-[64px] h-[64px]' src={inbox} alt="inbox" />

            <p className='text-[26px] font-jakarta text-[#1B2559] font-extrabold'>Share team inboxes</p>

            <p className='text-[20px] font-jakarta font-extralight leading-[35px] text-center'>Whether you have a team of 2 or 200 ,<br /> our shared team inboxes keep <br /> everyone </p>
        </div>
        </div>

        <div>
        <div className='flex flex-col items-center gap-[24px] bg-[#fff] px-[60px] py-[60px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[16px]'>
            <img className='w-[64px] h-[64px]' src={analytics} alt="inbox" />

            <p className='text-[26px] font-jakarta text-[#1B2559] font-extrabold'>Analytics dashboard</p>

            <p className='text-[20px] font-jakarta font-extralight leading-[35px] text-center'>Whether you have a team of 2 or 200 ,<br /> our shared team inboxes keep <br /> everyone </p>
        </div>
        </div>
        
        <div>
        <div className='flex flex-col items-center gap-[24px] px-[60px] py-[60px]'>
            <img className='w-[64px] h-[64px]' src={deliver} alt="inbox" />

            <p className='text-[26px] font-jakarta text-[#1B2559] font-extrabold'>Deliver instant answer</p>

            <p className='text-[20px] font-jakarta font-extralight leading-[35px] text-center'>Whether you have a team of 2 or 200 ,<br /> our shared team inboxes keep <br /> everyone </p>
        </div>
        </div>
    </section>
  )
}

export default Features