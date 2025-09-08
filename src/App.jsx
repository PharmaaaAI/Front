import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Support/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import ShippingReturns from "./pages/Support/ShippingReturns";
import PrivacyPolicy from "./pages/Support/PrivacyPolicy";
import TermsOfService from "./pages/Support/TermsOfService";
import FAQ from "./pages/Support/FAQ";
import ProductDetails from "./pages/Products/ProductDetails";
import Products from "./pages/Products/Products";
import HeroSection from "./components/HeroSection"
import Cart from "./components/Cart";
import InitialCart from "./components/InitialCart"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { token } from "./utils/api-url"; // wherever you store it
import { isTokenValid } from "./utils/isTokenValid";
import SessionExpiredModal from "./components/SessionExpiredModal";

export const App = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    const checkToken = () => {
      console.log("checking")
      if (!isTokenValid(token)) {
        setShowModal(true);
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 30 * 1000);
    return () => clearInterval(interval);
  }, [navigate]);

    const handleModalClose = () => {
      setShowModal(false);
      navigate("/login");
    };
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-fredoka">
        <Header />

        <main className="flex-1">
          <InitialCart />
          {showModal && <SessionExpiredModal onClose={handleModalClose} />}
          <Routes>
            <Route index element={<HeroSection/>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping-and-returns" element={<ShippingReturns />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
