import React from 'react'

const Cta = () => {
  return (
    <section className='pt-[120px]  max-w-[1920px]  mx-auto pr-[150px] pl-[150px] min-h-[328px]'>
        <div className='flex justify-evenly items-center'>
            <div>
                <p className='text-[36px] font-extrabold font-jakarta'><span className='text-[#1B2559]'>Save time with Horizon.</span> <br />
                Turn your visitors into clients.</p>
            </div>

            <div className='flex gap-[16px]'>
                <button className='text-[#4318FF] outline outline-[#4318FF] pt-[16px] pb-[16px] pl-[28px] pr-[28px] rounded-[12px] font-bold font-jakarta'>Try Demo</button>
                <button className='font-jakarta bg-[#4318FF] pt-[16px] pb-[16px] pl-[28px] pr-[28px] rounded-[12px] font-bold text-[#fff]'>Get Started Now</button>
            </div>
        </div>
    </section>
  )
}

export default Cta