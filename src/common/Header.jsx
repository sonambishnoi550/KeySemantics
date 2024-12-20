import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
    return (
        <div className='lg:pt-[47px] pt-9'>
            <div className="container">
                <div className="flex justify-between max-sm:flex-wrap">
                    <a href="/"><img className='max-w-[248px] max-sm:max-w-[160px] max-sm:h-[30px] h-10' src="./assets/webp/logo.webp" alt="logo" /></a> 
                    <CustomButton text="Request a demo" classList=" !mt-0 max-sm:py-2 max-sm:px-3" />
                </div>
            </div>
        </div>
    )
}

export default Header

