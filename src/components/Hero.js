import React from 'react'
import Counter from './TimeCounter'

const Hero = () => {
  return (
    <div className='lg:grid grid-cols-2 gap-3 items-center'>
        {/* left */}
        <div className='col-span-1 py-12 lg:py-0'>
            <h1 className='2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-head text-black tracking-wide'>
                MINT, DISCOVER, COLLECT <br  />
                <span className=''> Sell </span>
                <span className='text-black'> Collections </span>
            </h1>
            <p className='font-medium text-black mt-3'>
                We are a platform dedicated to offering elite status
                Nfts to people excited about getting in the space

            </p>
            <div className='flex-colo w-full sm:w-3/5 border-none py-6 px-6 bg-subMain rounded mt-10'>
                <h2 className='italic font-semibold text-black'>
                 Community drop coming soon!!!
                </h2>
               <Counter />
            </div>
        </div>
        {/* right */}
        <div className='hero lg:block hidden'>
            <img 
            src='/assets/meta1.png'/>

        </div>
    </div>
  )
}

export default Hero