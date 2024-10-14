// FAQ.js
import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png'
import bs from '../images/faqsm.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Faqdtl = () => {
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
    // navigate('bookd');

    // Add your form submission logic here
  };
 


  const navigateToPage = (path) => {
    navigate(path);
    // setNav(false); // Close the menu after navigation
  };

  return (

    <div className='h-[80vh]'>

      <div className=' w-[100%] lg:h-[80vh] xl:h-[140vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20  flex flex-col justify-center xl:justify-normal items-center  '>
        <div className='bg-white w-[80%] md:w-[70%] xl:w-[40%] '>


          <div className='px-10 md:px-14 py-8 '>
            <p className=' text-2xl md:text-4xl font-semibold'>Create an account</p>
            <p className='text-sm md:text-lg font-normal pt-3'>Create a free account to get started with your delivery booking</p>
          </div>

          <form action="" className=' flex flex-col justify-center gap-5'>
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
              <label htmlFor="" className='font-semibold'>Password</label>
              <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
              />

            </div>
            <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
              <label htmlFor="" className='font-semibold'>Confirm Password</label>
              <input
                type="password"
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
              />

            </div>



            <div className='flex flex-col px-10 md:px-16 w-[65%] xl:w-[60%] gap-1 mt-12  '>
              <button
                type='submit'
                disabled={isSubmitDisabled}
                onClick={() => navigateToPage('/bookd')}
                className={`bg-[#00401A] text-white  text-sm md:text-lg rounded-full font-semibold  hover:bg-green-700 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'
                  }`}
              >Create Account
              </button>
            </div>

          </form>
          <div className='py-4 px-10 md:px-16 pb-8'>
            <p className='text-sm'>By signing up, you agree to our <span className='text-[#00401A] font-semibold'>Terms of service</span> and <span className='text-[#00401A] font-semibold'>privacy policy</span></p>
          </div>



        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Faqdtl;
