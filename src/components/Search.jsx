import React from 'react'
import { LIST_ITEMS } from '../utils/helper'
import CommonCard from '../common/CommonCard'
const Search = () => {
    return (
        <div className='py-[148px] max-xl:py-28  max-sm:py-12 max-md:py-16 max-lg:py-20 bg-pink'>
            <div className="container">
                <div className="flex max-lg:flex-wrap max-xl:justify-between">
                    <div className='lg:w-6/12 w-full xl:pt-[30.5px]'>

                        <CommonCard classList="text-left" text="Headless federated search" NavButton="Get a demo" list={LIST_ITEMS} />
                    </div>
                    <div className='lg:w-5/12 w-full'>
                        <img className='max-w-[570px] max-xl:max-w-[420px] max-lg:max-w-[450px] xl:ml-10 max-sm:max-w-[330px] max-lg:mx-auto max-lg:pt-6' src="./assets/webp/search.webp" alt="search" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search