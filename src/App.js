import React from 'react'
import Hero from './components/Hero'
import KeySemanticWork from './components/KeySemanticWork'
import Search from './components/Search'
import Security from './components/Security'
import Faq from './components/Faq'
import KeySemantic from './components/KeySemantic'
import Footer from './components/Footer'
import KeySemanticFrom from './components/KeySementicForm'
import BackToTop from './common/BackToTop'
import SecondFaq from './components/SecondFaq'

const App = () => {
  return (
    <>
        <Hero />
        <KeySemanticWork />
        <KeySemantic />
        <Faq />
        <Search />
        <Security />
        <KeySemanticFrom />
      <Footer />
      <SecondFaq/>
      <BackToTop />
    </>
  )
}

export default App