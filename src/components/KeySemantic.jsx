import React from 'react'
import Lottie from 'react-lottie-player'
import semantics from '../lottie/key-sementic.json'
import mobile from '../lottie/key-mobile.json'

const KeySemantics = () => {
    return (
        <div className='key-bg'>
            <div className='container'>
                <div className='max-w-[1200px] mx-auto sm:block hidden xl:-ml-10 !lg:h-[588px]'>
                    <Lottie
                        loop
                        animationData={semantics}
                        play
                    />
                </div>
                <div className=' sm:hidden'>
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