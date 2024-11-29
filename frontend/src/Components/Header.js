import React from "react";
import logo from "../assest/logo.png";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  return (
    <div className="mx-auto shadow-sm lg:px-4">
      <div className="flex py-7 justify-between lg:px-20 px-5 items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex gap-10 font-medium">
          <Link to="/">Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link to="/Sign-Up">Sign Up</Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-full justify-between max-w-xs focus-within:shadow border py-2 px-3">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full outline-none text-sm"
            />
            <div className="text-lg items-center justify-center flex">
              <GrSearch />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <FaRegHeart className="text-xl" />

            {/* Cart Icon */}
            <Link className="sm:text-2xl text-xl cursor-pointer relative">
              <BsCart3 />
              <div className="bg-red-600 text-white sm:w-5 sm:h-5 w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="sm:text-sm text-xs">0</p>
              </div>
            </Link>

            {/* User Icon with Hover Dropdown */}
            <div className="relative group">
              <div className="p-1 rounded-full hover:bg-red-600 hover:text-white cursor-pointer text-xl">
                <FaRegUser />
              </div>
              <div className="absolute -right-3 top-6 transition-all mt-2 w-60 bg-gradient-to-b from-gray-700 to-gray-900 text-white rounded-lg shadow-lg hidden group-hover:flex flex-col z-10 p-2">
                <Link to="/account" className="px-4 py-2 hover:bg-gray-600 flex items-center">
                  <CiUser className="mr-4 text-xl" />
                  Manage My Account
                </Link>
                <Link to="/orders" className="px-4 py-2 hover:bg-gray-600 flex items-center">
                  <FiShoppingBag className="mr-4 text-xl" />
                  My Order
                </Link>
                <Link to="/cancellations" className="px-4 py-2 hover:bg-gray-600 flex items-center">
                  <IoIosCloseCircleOutline className="mr-4 text-xl" />
                  My Cancellations
                </Link>
                <Link to="/reviews" className="px-4 py-2 hover:bg-gray-600 flex items-center">
                  <IoIosStarOutline className="mr-4 text-xl" />
                  My Reviews
                </Link>
                <Link to="/logout" className="px-4 py-2 hover:bg-gray-600 flex items-center">
                  <CiLogout className="mr-4 text-xl" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex justify-end">
        <div className="text-2xl cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;