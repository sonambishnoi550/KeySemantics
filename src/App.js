import React from 'react'
import Hero from './components/Hero'
import KeySementicWork from './components/KeySementicWork'
import Search from './components/Search'
import Security from './components/Security'
import Faq from './components/Faq'
import KeySementic from './components/KeySementic'
import Footer from './common/Footer'
import FormValidation from './common/FormValidation'

const App = () => {
  return (
    <div>
      <Hero />
      <KeySementicWork />
      <KeySementic/>
      <Faq />
      <Search />
      <Security />
      <FormValidation/>
      <Footer/>
      
    </div>
  )
}

export default App