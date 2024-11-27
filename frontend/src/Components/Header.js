import React from 'react'
import logo from '../assest/logo.png'
import { GrSearch } from "react-icons/gr";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mx-auto shadow-sm px-4'>
      <div className="flex py-7 justify-between lg:px-20 md:px-8 items-center">

        <div>
          <img src={logo} alt="" />
        </div>

        <div className='hidden sm:flex gap-10 font-medium'>
          <Link to='/'>Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link to='/Sign-Up'>Sign Up</Link>
        </div>

        <div className='hidden md:flex items-center w-full justify-between max-w-64 focus-within:shadow border py-2 px-3'>
          <input type="text" placeholder='What are you looking for?' className='w-full outline-none' />
          <div className='text-lg items-center justify-center flex'>
            <GrSearch />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header