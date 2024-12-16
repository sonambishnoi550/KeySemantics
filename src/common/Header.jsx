import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
    return (
        <div className='pt-[47px]'>
            <div className="container">
                <div className="flex justify-between max-sm:flex-wrap">
              <img className='max-w-[248px] max-sm:max-w-[160px] max-sm:h-[30px]' src="./assets/webp/logo.webp" alt="logo" />  
                    <CustomButton text="Request a demo" className=" !mt-0 max-sm:py-2 max-sm:px-3"/>
                </div>
            </div>
        </div>
    )
}

export default Header

