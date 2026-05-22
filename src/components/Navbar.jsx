import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

/**
 * Navbar Component
 * Navigation bar with logo, menu, and cart
 */
const Navbar = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={isAdmin ? '/admin/dashboard' : '/'} className="flex items-center gap-2">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 2L6.46 6H3v2h1.54L5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2l-1.54-11H19V6h-3.46L15 2H9zm3 2h6v2h-6V4zm-2 2h10l1.46 10H9.54L10 6z" />
            </svg>
            <span className="text-2xl font-bold">eShop</span>
          </Link>

          {/* Menu Links */}
          <div className="flex items-center gap-8">
            {isAdmin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="hover:text-gray-200 transition font-semibold"
                >
                  Dashboard
                </Link>
                {token && (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition"
                  >
                    Logout
                  </button>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="hover:text-gray-200 transition font-semibold"
                >
                  Home
                </Link>
                <a
                  href="#products"
                  className="hover:text-gray-200 transition font-semibold"
                >
                  Products
                </a>
                <Link
                  to="/admin/login"
                  className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded font-semibold transition"
                >
                  Admin
                </Link>
                <Cart />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
