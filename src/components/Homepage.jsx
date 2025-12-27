import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import Landing from './Landing'
import Ourservices from './Ourservices'
import OurPartners from './OurPartners'

const Homepage = () => {
  return (
    <div>
      <Landing/>
      <Aboutus/>
      <Ourservices/>
      <OurPartners/>
    </div>
  )
}

export default Homepage
