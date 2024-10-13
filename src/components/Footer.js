import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
import { FaXTwitter } from 'react-icons/fa6';

import lg from '../images/logof.png'

const Footer = () => {
    return (
        <div className='w-full mt-0 bg-[#001A0A] text-gray-300 py-2 px-8 md:px-4 lg:px-16'>
            

                <div className=' w-[100%] lg:w-[100%]  grid grid-cols-1 md:grid-cols-3  py-6 gap-8 md:gap-0 pl-6 md:pl-0 xl:space-x-4 md:pr-6 lg:px-0 xl:pl-1'>
                    <div className=' py-8 md:pt-0  bg-[#00401A33]  '>
                        <img src={lg} alt="" className='home__img pt-6 pl-4' width='120' />
                        <p className='md:w-[90%] lg:w-[85%] py-4 px-4 md:text-xs lg:text-base text-white'>
                            Jorem ipsum dolor sit amet, consectet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                       

                    </div>
                    <div className='pl-0 lg:pl-24'>
                        <h6 className='font-bold uppercare pt-2 pb-3 '>Company</h6>
                        <ul>
                            <li className='py-2 text-sm '>Services</li>
                            <li className='py-2 text-sm '>About Us</li>
                            <li className='py-2 text-sm '>FAQ</li>
                            <li className='py-2 text-sm '>Track my parcel</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold uppercare pt-2 pb-4'>Contact Us</h6>
                        <div className='flex flex-col'>
                        <div className='py-2 flex items-center'>
                            <FaMapMarkerAlt className='mr-2' />
                            <p className='text-sm text-white'>Ghana</p>
                        </div>
                        <div className='py-2 flex items-center'>
                            <FaEnvelope className='mr-2' />
                            <p className='text-sm text-white'>help@multibag.com</p>
                        </div>
                        <div className='py-2 flex items-center'>
                            <FaClock className='mr-2' />
                            <p className='text-sm text-white'>Mon - Fri 8:00am - 6:00pm</p>
                        </div>

                        </div>
                        <div className='flex justify-start md:justify-start gap-5  pt-4 text-2xl md:text-base lg:text-2xl'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaXTwitter />
                       
                    </div>
                    </div>
                </div>


            

            <div className='-mx-8 md:-mx-0 xl:-mx-16 border-t-2 border-gray-700'>
                <div className='flex flex-col max-w-[1400px] px-2 py-0 mx-auto justify-center sm:flex-row text-center text-gray-500'>
                    <p className='py-4 text-white'>© MultiBag 2024, All Right Reserved.</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;
