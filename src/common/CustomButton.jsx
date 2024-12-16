import React from 'react'

const CustomButton = ({className,text }) => {
    return (
        <button className={`mt-6 bg-white text-darkblue rounded-[48px] py-3 border-darkblue border px-[18px] font-normal text-sm hover:text-white hover:bg-darkblue transition-all duration-700 ${className}`}> { text}</button>
    )
}

export default CustomButton