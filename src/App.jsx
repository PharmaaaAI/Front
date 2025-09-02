import React from "react";
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

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-fredoka">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping-and-returns" element={<ShippingReturns />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
