import React from 'react'
import Hero from './Hero/Hero'
import ServicesMain from './Services/ServicesMain'
import PortfolioMain from './Portfolio/PortfolioMain'
import ClientsMain from './Clients/ClientsMain'
import AwardsMain from './Awards/AwardsMain'
import TestimonialMain from './Testimonial/TestimonialMain'
import NewsMain from './News/NewsMain'
import Footer from '../components/Footer/Footer'


const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <ServicesMain/>
        <PortfolioMain/>
        <ClientsMain/>
        <AwardsMain/>
        <TestimonialMain/>
        <NewsMain/>
        <Footer/>
    </div>
  )
}

export default LandingPage