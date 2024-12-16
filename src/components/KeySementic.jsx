import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../lottie/infography (1).json'
const KeySementic = () => {
  return (
      <div className='-mb-[400px]'>
          <Lottie
              loop
              animationData={lottieJson}
              play
              
          />
      </div>
  )
}

export default KeySementic