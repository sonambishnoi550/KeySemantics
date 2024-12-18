import React from 'react'

const CustomButton = ({ classList,text }) => {
    return (
        <button className={`mt-6 bg-white text-darkblue rounded-[48px] py-[11px] border-darkblue border px-[14px] font-normal text-sm hover:text-white hover:bg-darkblue transition-all duration-700 ${classList}`}> { text}</button>
    )
}

export default CustomButton