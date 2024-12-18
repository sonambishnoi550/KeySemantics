import React from 'react'
import Hero from './components/Hero'
import KeySemanticWork from './components/KeySemanticWork'
import Search from './components/Search'
import Security from './components/Security'
import Faq from './components/Faq'
import KeySemantic from './components/KeySemantic'
import Footer from './components/Footer'
import FormValidation from './components/FormValidation'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <>
      <>
        <Hero />
        <KeySemanticWork />
        <KeySemantic />
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