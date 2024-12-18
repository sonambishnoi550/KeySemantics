import React from 'react'

const CustomHeading = ({ classList,text}) => {
  return (
    <h2 className={`font-bold text-custom-3xl max-xl:text-[28px] max-md:text-2xl max-sm:text-3xl leading-custom-2xl text-darkblue ${classList}`}
          >  {text}</h2>
  )
}

export default CustomHeading
