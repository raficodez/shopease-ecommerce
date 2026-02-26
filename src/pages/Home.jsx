import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

const Home = () => {
  return (  
    <>
    <Hero />
    <Categories />
    <FeaturedProducts />
    <WhyChooseUs />
    <Footer />
    </>
  )
}

export default Home
