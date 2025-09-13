import { Routes, Route } from "react-router";
import { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthContext } from "./context/AuthContext.jsx";
import { fetchItems } from "./rtk/slices/items-slice";
import Categories from "./utils/categories.jsx";
import Chatbot from "./components/Chatbot.jsx";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const App = () => {
  const dispatch = useDispatch();
  const { user, token } = useContext(AuthContext);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    if (user) {
      const decodedToken = jwtDecode(token);
      dispatch(fetchItems({ userId: decodedToken.userId, token }));
    }
  }, [user, dispatch, token]);

  return (
    <>
      <Categories />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-fredoka">
        <Header />
        <main className="flex-1">
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        <Footer />
        {user && (
          <>
            <button
              onClick={() => setIsChatbotOpen(!isChatbotOpen)}
              className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
            >
              <IoChatbubbleEllipsesOutline size={25}/>
            </button>
            {isChatbotOpen && <Chatbot />}
          </>
        )}
      </div>
    </>
  );
};

export default App;
