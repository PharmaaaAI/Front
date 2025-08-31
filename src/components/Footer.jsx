import { FaInstagram, FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const FooterLink = ({ to = "#", children }) => (
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );

  const SocialIcon = ({ to = "#", icon: Icon }) => (
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <Icon size={24} />
    </Link>
  );

  return (
    <footer className="bg-dark-purple text-gray-300 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-start mx-auto">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-white">PharmaAI</h2>
            <p className="text-gray-400 ">
              Personalized medicine powered by artificial intelligence. Discover
              your optimal treatment plan today.
            </p>
            <div className="flex space-x-4 pt-2 mx-auto sm:mx-0">
              <SocialIcon icon={FaInstagram} />
              <SocialIcon icon={FaTiktok} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={FaFacebookF} />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink>How It Works</FooterLink>
            <FooterLink>Science</FooterLink>
            <FooterLink>Press</FooterLink>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Shop Now</h3>
            <FooterLink>Body Building</FooterLink>
            <FooterLink>Medicine</FooterLink>
            <FooterLink>Nutrition</FooterLink>
            <FooterLink>Personal Care</FooterLink>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
            <FooterLink to="/shipping-and-returns">
              Shipping & Returns
            </FooterLink>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">
              Get medical tips and exclusive offers
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-l-md border border-r-0 border-gray-600 focus:outline-none focus:ring-1 focus:border-gray-400 w-full"
              />
              <button className="bg-primary text-white font-semibold px-6 py-2 rounded-r-md hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 PharmaAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
