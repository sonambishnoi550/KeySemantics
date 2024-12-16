import React from 'react'

const CustomHeading = ({className,text}) => {
  return (
          <h2 className={`font-bold text-custom-3xl max-xl:text-[28px] max-md:text-2xl max-sm:text-xl leading-custom-2xl text-darkblue ${className}`}
          >  {text}</h2>
  )
}

export default CustomHeading
