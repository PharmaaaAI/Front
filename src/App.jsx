import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'
import ShippingReturns from './pages/ShippingReturns'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-fredoka">
        <Header />

        <main className="flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/shipping-and-returns' element={<ShippingReturns/>} ></Route>
              <Route path='/privacy-policy' element={<PrivacyPolicy/>} ></Route>
              <Route path='/terms-of-service' element={<TermsOfService/>} ></Route>
            </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App