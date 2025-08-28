import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-fredoka">
        <Header />

        <main className="flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App