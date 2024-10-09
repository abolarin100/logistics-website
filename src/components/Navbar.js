import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import LG from '../images/Logo.png';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setCoursesDropdown(false);
  };

  const openCoursesDropdown = () => {
    setCoursesDropdown(true);
  };

  const closeCoursesDropdown = () => {
    setCoursesDropdown(false);
  };

  const toggleCoursesDropdown = () => {
    setCoursesDropdown(!coursesDropdown);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to navigate to specific pages
  const navigateToPage = (path) => {
    navigate(path);
    setNav(false); // Close the menu after navigation
  };

  return (
    <div className={`bg-[#FFFFFF99] z-50 fixed w-full flex justify-between lg:justify- py-2 sm:py-2 md:py-0 lg:py-0 px-2 sm:px-4 md:px-4 lg:px-16 items-center
    ${scrolling ? 'scrolled' : 'opacity-0 transition duration-1000 ease-out' // Apply a different class when scrolling
      }`}
    >
      <img src={LG} alt="" className='home__img' width='120' />

      {/* Visible on md and larger screens */}
      <div className='hidden lg:flex  flex-row justify-between   '>
        <ul className='flex flex-row mr-28 px-4 space-x-8  lg:mr-36 md:ml-16'>
          <li
            className='hover:text-[#FFA62B] hover:cursor-pointer text-lg text-[#3B3B3B] py-8 px-2'
            onClick={() => navigateToPage('/')}
          >
            Home
          </li>
          <li
            className='hover:text-[#FFA62B]  hover:cursor-pointer text-lg py-8 px-2 flex text-[#3B3B3B]'
          // onClick={() => navigateToPage('/about-us')}

          >
            About

          </li>
          <li
            className='hover:text-[#FFA62B] hover:cursor-pointer text-lg py-8 px-2 text-[#3B3B3B]'
          // onClick={() => navigateToPage('/about-us')}
          >
            Services
          </li>
          <li
            className='hover:text-[#FFA62B] hover:cursor-pointer text-lg py-8 px-2 text-[#3B3B3B]'
          // onClick={() => navigateToPage('/contact')}
          >
            Contact
          </li>
        </ul>

        <div className='ml-40'>
          <button
            className='bg-transparent border-none my-6  text-[#00401A]  hover:text-[#FFA62B] text-lg font-semibold px-4 mx-2'
            onClick={() => navigateToPage('/login')}
          >
            Login
          </button>
          <button
            className='bg-[#00401A] my-6 border-[#00401A] hover:bg-[#FFA62B] hover:text-[#00401A] text-white text-lg font-semibold px-6 mx-2 border-none rounded-full'
            onClick={() => navigateToPage('/register')}
          >
            Sign Up
          </button>
        </div>

      </div>

      {/* Toggleable menu for all screen sizes */}
      <HiMenuAlt3
        onClick={handleNav}
        className='z-20 text-gray-500 cursor-pointer lg:hidden' // Hide on md and larger screens
        size={25}
      />

      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
       
        <ul className='flex flex-col fixed w-full h-full space-y-4 items-center justify-start mt-12'>
          <li
            className='text-2xl p-8 mr-10  hover:cursor-pointer hover:text-[#FFA62B]'
            onClick={() => navigateToPage('/')}
          >
            Home
          </li>
          <li
            className={`text-2xl p-8 mr-10  hover:cursor-pointer hover:text-[#FFA62B] flex justify-between`}
            // onClick={() => toggleAnswer(0)}
          >
            About

          </li>

          <li
            className='text-2xl p-8 mr-10  hover:cursor-pointer hover:text-[#FFA62B]'
            // onClick={() => navigateToPage('/about-us')}
          >
            Services
          </li>
          <li
            className='text-2xl p-8 mr-10  hover:cursor-pointer hover:text-[#FFA62B]'
            // onClick={() => navigateToPage('/contact')}
          >
            Contact
          </li>

          <div className='mt-8'>
            <button
              className='bg-transparent  text-[#00401A] transform transition-transform hover:scale-110  text-xl p-4 mx-2'
              onClick={() => navigateToPage('/login')}
            >
              Login
            </button>
            <button
              className='bg-[#00401A] m-4 border-none transform transition-transform hover:scale-110 text-white text-xl p-4 mx-2'
              onClick={() => navigateToPage('/register')}
            >
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
