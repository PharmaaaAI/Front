import React from 'react'
import Avatar from './avatar'
import PricingSection1 from './PricingSection1'
import ProductsCards from './ProductsCards'
import HeroComponent from './HeroComponent'
import ValuePreposition from './ValuePreposition'
import HowItWorks from './HowItWorks'
import SocialProof from './SocialProof'
import FAQ from './FAQ'

const HeroSection = () => {
  return (
    <div>
      <HeroComponent/>
      <ValuePreposition/>
      <HowItWorks/>
      <SocialProof/>
      <ProductsCards/>
      <PricingSection1/>
      <FAQ/>
    

       
    </div>
  )
}

export default HeroSection