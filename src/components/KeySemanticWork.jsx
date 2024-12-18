import React from 'react'
import { WORK_ITEMS } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'
import Lottie from 'react-lottie-player'
const KeySemanticWork = () => {
  return (
      <div className='pt-24 max-sm:pt-12 max-lg:pb-12 max-sm:pb-0 max-lg:pt-16'>
          <div className="container">
              <CustomHeading text="How does KeySemantics work?" className="text-center pb-[56px] max-lg:pb-8"/>
              <div className="flex justify-between max-lg:flex-wrap max-lg:justify-center max-lg:gap-10 max-w-[1026px] mx-auto">
                  {WORK_ITEMS.map((item, index) => (
                      <div key={index}>
                          <Lottie className='w-[278px] h-[190px]'
                              loop
                              animationData={item.image}
                              play
                          />
                          <p className='text-darkblue max-w-[289px] mx-auto text-center lg:pt-6 pt-4 text-base leading-custom-xl'>
                              {item.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default KeySemanticWork