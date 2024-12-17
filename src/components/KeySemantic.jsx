import React from 'react'
import Lottie from 'react-lottie-player'
import semantics from '../lottie/key-sementic.json'
import mobile from '../lottie/key-mobile.json'

const KeySemantics = () => {
    return (
        <div className='key-bg'>
            <div className='container'>
                <div className=' sm:block hidden w-full'>
                    <Lottie className='!max-w-[1200px] !h-[588px]'
                        loop
                        animationData={semantics}
                        play
                    />
                </div>
                <div className='max-w-[1300px] mx-auto sm:hidden'>
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