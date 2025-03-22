import React, { useState } from 'react';
import { CiLogin, CiShoppingCart } from 'react-icons/ci';
import { IoPersonAddSharp } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logOut } from '../featuree/Auth/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { CartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className="bg-blue-600 p-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="font-bold text-xl text-white">SHOP-ME</Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:underline text-white">Home</Link>
        <Link to="/products" className="hover:underline text-white">Products</Link>
        <Link to="/about" className="hover:underline text-white">About</Link>
        <Link to="/contact" className="hover:underline text-white">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-blue-600 p-5 flex flex-col space-y-4 text-center md:hidden z-10">
          <Link to="/" className="hover:underline text-white" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" className="hover:underline text-white" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" className="hover:underline text-white" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:underline text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Right Section (Login/Logout & Cart) */}
      <div className="hidden md:flex space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="border-white text-white border-[1.2px] p-1 rounded-lg inline-flex items-center transition-transform duration-300 hover:scale-110">
              Login <CiLogin className="ml-1" />
            </Link>
            <Link to="/register" className="border-white text-white border-[1.2px] p-1 rounded-lg mx-2 inline-flex items-center transition-transform duration-300 hover:scale-110">
              Register <IoPersonAddSharp className="ml-1" />
            </Link>
          </>
        ) : (
          <>
            <button onClick={handleLogout} className="text-white border-white border-[1.2px] p-1 rounded-lg mx-2 inline-flex items-center transition-transform duration-300 hover:scale-110">
              Logout <IoPersonAddSharp className="ml-1" />
            </button>
            {location.pathname !== "/cart" && (
              <Link to="/cart" className="text-white bg-blue-700 p-1 px-2 inline-flex items-center fixed right-4 bottom-4 rounded-full transition-transform duration-300 hover:scale-110">
                Cart({CartItems.length}) <CiShoppingCart className="ml-1" />
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

