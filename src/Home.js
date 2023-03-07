import React from 'react'
import FeaturedProduct from './components/FeaturedProduct'
import HomeContent from './components/HomeContent'
import Services from './components/Services'

const Home = () => {

  return (
    <>
      <HomeContent title="Sarki ECommerce"/>
      <FeaturedProduct />
      <Services />
    </>
  )
}

export default Home
