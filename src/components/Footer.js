import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
import lg from '../images/Light logo.png'

const Footer = () => {
    return (
        <div className='w-full mt-0 bg-footer-blue text-gray-300 py-2 px-8 md:px-4 lg:px-16'>
            <div className='w-full mx-auto flex flex-col md:flex-row md:justify-start '>
                <div className='col-span-2 py-8 md:pt-0 md:w-[40%] '>
                    <img src={lg} alt="" className='home__img' width='120' />
                    <p className='md:w-[90%] lg:w-[85%] py-4 px-4 md:text-xs lg:text-base text-white'>
                        We are a reputable tech company committed to training and mentoring great minds. We equip individuals with outstanding soft skills and technical skills relevant to this 21st century and build future-forward Tech experts regardless of your academic background or prior knowledge.
                    </p>
                    <div className='flex justify-around md:justify-around mr-24 md:mr-20  pt-2 text-2xl md:text-base lg:text-2xl'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>

                </div>
                <div className=' w-[100%] lg:w-[75%]  grid grid-cols-1 md:grid-cols-3  py-6 gap-8 md:gap-0 pl-6 md:pl-0 xl:space-x-4 md:pr-6 lg:px-0 xl:pl-16'>
                    <div>
                        <h6 className='font-bold uppercare pt-2'>Courses</h6>
                        <ul>
                            <li className='py-1 text-sm '>Business Analysis</li>
                            <li className='py-1 text-sm '>Data Analysis</li>

                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold uppercare pt-2'>Company</h6>
                        <ul>
                            <li className='py-1 text-sm '>About Us</li>
                            <li className='py-1 text-sm '>Contact Us</li>
                            <li className='py-1 text-sm '>FAQ</li>
                            <li className='py-1 text-sm '>Terms of Service</li>
                            <li className='py-1 text-sm '>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold uppercare pt-2 pb-1'>Contact Us</h6>
                        <div className='flex flex-col'>
                            <div className='py-1'> <p className='text-sm text-white'>+447778019210</p> </div>
                            <div className='py-1'><p className='text-sm text-white'>United Kingdom</p></div>
                            <div className='py-1'><p className='text-sm text-white'>admin@smartapproaches.org</p></div>
                            <div className='py-1'><p className='text-sm text-white'>Daily: 10:00 Am - 5:00 Pm <br /> Monday & Holiday: Closed</p></div>

                        </div>
                    </div>
                </div>


            </div>

            <div className='-mx-8 md:-mx-0 xl:-mx-16 border-t-2 border-gray-700'>
                <div className='flex flex-col max-w-[1400px] px-2 py-0 mx-auto justify-center sm:flex-row text-center text-gray-500'>
                    <p className='py-4 text-white'>©2024 Smart Approaches. All Right Reserved</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;
