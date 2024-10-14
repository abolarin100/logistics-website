import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png'
import bs from '../images/faqsm.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Bookd = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const isSubmitDisabled =
        !firstName || !email || !password || !confirmPassword || !phoneNumber;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your form submission logic here
    };


    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };

    return (

        <div className='h-[80vh]'>

            <div className=' w-[100%] lg:h-[110vh] xl:h-[230vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20  flex flex-col justify-center xl:justify-normal items-center  '>
                <div className='bg-white w-[80%] md:w-[70%] xl:w-[40%] '>


                    <div className='px-10 md:px-14 py-8 '>
                        <p className=' text-2xl md:text-4xl font-semibold text-center '>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center '>Fill in the details below to book your parcel delivery.</p>
                    </div>

                    <form action="" className=' flex flex-col justify-center gap-5'>
                       
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Sender information</p>
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Full Name</label>
                            <input
                                type='text'
                                placeholder='Enter your full name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Email Address</label>
                            <input
                                type='text'
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />

                        </div>
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Phone Number</label>
                            <input
                                type="number"
                                placeholder='Enter your phone number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Pickup Address</label>
                            <input
                                type='text'
                                placeholder='Enter the address for pickup'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />

                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Recipient's information</p>
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Full Name</label>
                            <input
                                type='text'
                                placeholder='Enter your full name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>
                      
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Phone Number</label>
                            <input
                                type="number"
                                placeholder='Enter your phone number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Delivery Address</label>
                            <input
                                type='text'
                                placeholder='Enter the drop-off address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />

                        </div>
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Package Details</p>
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Package Type</label>
                            <input
                                type='text'
                                placeholder='What type of package is it. Ex Food, Clothes, Gadgets, etc.'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>
                      
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Package Size</label>
                            <select name="" id="" className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'>
                            <option value="" disabled selected>Select an option</option>
                            <option value="google">Small</option>
                            <option value="friend">Medium</option>
                            <option value="social-media">Large</option>
                            
                        </select>

                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Special Instructions (optional) </label>
                            <input
                                type='text'
                                placeholder='Add any additional instructions'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />

                        </div>

                       
                       


                        <div className='flex flex-col px-10 md:px-16 w-[100%] xl:w-[100%] gap-1 mt-12 pb-8 '>
                            <button
                                type='submit'
                                disabled={isSubmitDisabled}
                                className={`bg-[#00401A] text-white  text-sm md:text-lg rounded-full font-semibold  hover:bg-green-700 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'
                                    }`}
                            >Proceed
                            </button>
                        </div>

                    </form>
                    



                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Bookd;
