import React from 'react'
import Lottie from 'react-lottie-player'
import semantics from '../lottie/infography (1).json'
import mobile from '../lottie/mobile.json'

const KeySemantics = () => {
    return (
        <div className='xl:-mb-[294px]'>
            <div className='container'>
                <div className='max-w-[1200px] w-full sm:block hidden'>
                    <Lottie
                        loop
                        animationData={semantics}
                        play
                    />
                </div>
                <div className='max-w-[1200px] w-full sm:hidden'>
                    <Lottie
                        loop
                        animationData={mobile}
                        play
                    />
                </div>
            </div>
        </div>
    )
}

export default KeySemantics