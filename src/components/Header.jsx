import { useState, useContext } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const items = useSelector((state) => state.items);
  const { user, logout } = useContext(AuthContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const handleMobileMenuToggle = (menu) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  const NavLink = ({ children, to = "#" }) => (
    <Link
      to={to}
      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
    >
      {children}
    </Link>
  );

  const DropdownItem = ({ children, to = "#", onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
    >
      {children}
    </Link>
  );

  const CartIconWithCounter = ({ count }) => {
    const showCounter = typeof count === "number";
    const counterBgClass = count > 0 ? "bg-red-500" : "bg-gray-500";

    return (
      <div className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300">
        <Link to="/cart">
          <FiShoppingCart size={22} />
          {showCounter && (
            <span
              className={`absolute -top-2 -right-3 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center p-1 ${counterBgClass}`}
            >
              {count > 10 ? "10+" : count}
            </span>
          )}
        </Link>
      </div>
    );
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">PharmaAI</Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            How It Works
          </Link>

          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              <Link to="/products">
                <span>Products</span>
              </Link>
              <FiChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <DropdownItem to="/products/Skincare">Skincare</DropdownItem>
              <DropdownItem to="/products/Hair Care">Hair Care</DropdownItem>
              <DropdownItem to="/products/Body Care">Body Care</DropdownItem>
              <DropdownItem to="/products/Hand Care">Hand Care</DropdownItem>
            </div>
          </div>
          <CartIconWithCounter count={items?.length || 0} />
          {user ? (
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <FiUser size={22} />
                <FiChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>Order History</DropdownItem>
                <DropdownItem onClick={logout}>Logout</DropdownItem>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link to="/signup" className="text-gray-600 hover:text-gray-900">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-t border-gray-200">
          <div className="flex flex-col pt-4">
            <NavLink>How It Works</NavLink>

            <div>
              <button
                onClick={() => handleMobileMenuToggle("products")}
                className="w-full flex justify-between items-center py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Link to="/products">
                  <span>Products</span>
                </Link>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openMobileMenu === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileMenu === "products" && (
                <div className="pl-4 pb-2 flex flex-col space-y-2">
                  <Link
                    to="/products/Skincare"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Skincare
                  </Link>
                  <Link
                    to="/products/Hair Care"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Hair Care
                  </Link>
                  <Link
                    to="/products/Body Care"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Body Care
                  </Link>
                  <Link
                    to="/products/Hand Care"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    Hand Care
                  </Link>
                </div>
              )}
            </div>
            {user ? (
              <div>
                <button
                  onClick={() => handleMobileMenuToggle("user")}
                  className="w-full flex justify-between items-center py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <span>My Account</span>
                  <FiChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openMobileMenu === "user" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileMenu === "user" && (
                  <div className="pl-4 pb-2 flex flex-col space-y-2">
                    <Link to="#" className="text-gray-500 hover:text-gray-800">
                      My Profile
                    </Link>
                    <Link to="#" className="text-gray-500 hover:text-gray-800">
                      Order History
                    </Link>
                    <Link
                      to="#"
                      onClick={logout}
                      className="text-gray-500 hover:text-gray-800"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}

            <Link
              to="/cart"
              className="flex justify-between items-center py-2 text-gray-600 hover:text-gray-900"
            >
              <span>My Cart</span>
              <CartIconWithCounter count={items?.length || 0} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
