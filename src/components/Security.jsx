import React from 'react'
import { SECURITY_ITEMS } from '../utils/helper'
import CommonCard from '../common/CommonCard'
const Security = () => {
    return (
        <div className='pb-[148px] max-sm:pb-12 max-md:pb-16 max-lg:pb-20 bg-pink'>
            <div className="container">
                <div className="flex !justify-between max-lg:flex-wrap max-lg:flex-col-reverse">
                    <div className='lg:w-5/12 w-full'>
                        <img className='max-w-[570px] max-sm:max-w-[330px] max-xl:max-w-[450px] max-lg:mx-auto max-lg:pb-6 pointer-events-none' src="./assets/webp/security.webp" alt="search" />
                    </div>
                    <div className='lg:w-5/12 w-full xl:pt-[48.5px] mr-10'>
                        <CommonCard classList="!text-left !whitespace-nowrap" text="Data Security and Hosting" NavButton="Get a demo" list={SECURITY_ITEMS} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security