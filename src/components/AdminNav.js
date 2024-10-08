import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import LG from '../images/Logo.png';
import PG from '../images/profilep.png';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp, IoIosNotificationsOutline, IoMdMore } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
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
        <div className={`bg-white z-50 fixed w-full flex justify-between py-3  lg:py-3 px-2 sm:px-4 md:px-4 lg:px-8 items-center shadow-md border-b border-[#A7AEB91A]
    ${scrolling ? 'scrolled' : 'opacity-0 transition duration-1000 ease-out' // Apply a different class when scrolling
            }`}
        >
            <div className='flex justify-between w-[50%]'>
                <img src={LG} alt="" className='' width='80' />

                <div className='  px-2   flex justify-between bg-white border items-center rounded-md w-[60%]  '>
                    <IoIosSearch
                        className='ion-ios-search text-xl cursor-pointer  top-2 right-6  text-gray-400'
                    // onClick={''}
                    />
                    <input
                        type='text'
                        placeholder='Search for anything'

                        placeholderStyle={{ color: '#999', fontSize: 9 }}
                        className='  px-2   relative bottom-0 text-sm w-full outline-none border-none  '
                    />

                </div>
            </div>


            {/* Visible on md and larger screens */}
            <div className='hidden lg:flex  flex-row justify-between items-center '>
                <IoIosNotificationsOutline
                    className=' text-xl cursor-pointer mr-4 text-[#127ABB]'

                />

                <img src={PG} alt="" className=' rounded-full' width='30' />

                <IoMdMore
                    className='text-xl cursor-pointer top-2 right-6 text-gray-400'
                // onClick={...}
                />




            </div>





        </div>
    );
};

export default AdminNav;
