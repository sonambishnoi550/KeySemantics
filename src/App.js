import React from 'react'
import Hero from './components/Hero'
import KeySementicWork from './components/KeySementicWork'
import Search from './components/Search'
import Security from './components/Security'
import Faq from './components/Faq'
import KeySementic from './components/KeySementic'
import Footer from './common/Footer'
import FormValidation from './common/FormValidation'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <>
      <>
        <Hero />
        <KeySementicWork />
        <KeySementic />
        <Faq />
        <Search />
        <Security />
        <FormValidation />
        <Footer />
      </>
      <BackToTop />
    </>
  )
}

export default App