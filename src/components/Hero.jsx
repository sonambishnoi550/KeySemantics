import React from 'react'
import CustomButton from '../common/CustomButton'
import Header from '../common/Header'
import CustomHeading from '../common/CustomHeading'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(./assets/webp/hero-bg.webp)` }} className='bg-hero-bg bg-pink bg-cover bg-no-repeat bg-center pb-[287px] max-xl:pb-[200px] max-lg:pb-[140px] max-sm:pb-16'>
            <Header />
            <div className="container">
                <CustomHeading text="AI-Powered Search as a Service" className="text-center pt-[198px] max-xl:pt-[150px] max-lg:pt-[110px] text-custom-6xl max-w-[645px] leading-custom-lg mx-auto max-sm:pt-[70px]"/>
                <p className='font-medium opacity-70 text-2xl leading-custom-2lg text-darkblue text-center pt-10 pb-12 max-lg:pt-5 max-lg:pb-8 max-md:text-lg max-sm:text-base'>Unlock your content with KeySemantics.</p>
                <CustomButton text="Get started" className="!text-base !font-medium !bg-darkblue !text-white hover:!bg-white hover:!text-darkblue !mt-0 flex mx-auto !py-[17px] !px-[34px]"/>
            </div>
        </div>
    )
}

export default Hero