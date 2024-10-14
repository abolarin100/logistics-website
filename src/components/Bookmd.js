import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png';
import bs from '../images/faqsm.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Bookmd = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isPremiumSelected, setIsPremiumSelected] = useState(false);
    const [isStandardSelected, setIsStandardSelected] = useState(false);

    const isSubmitDisabled =
        (!isPremiumSelected || !isStandardSelected);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const handlePremiumClick = () => {
        setIsPremiumSelected(!isPremiumSelected);
        if (isStandardSelected) setIsStandardSelected(false);  // Ensure only one class is selected
    };

    const handleStandardClick = () => {
        setIsStandardSelected(!isStandardSelected);
        if (isPremiumSelected) setIsPremiumSelected(false);  // Ensure only one class is selected
    };

    return (
        <div className='h-[80vh]'>
            <div className='w-[100%] lg:h-[110vh] xl:h-[210vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20 flex flex-col justify-center xl:justify-normal items-center'>
                <div className='bg-white w-[80%] md:w-[70%] xl:w-[40%]'>
                    <div className='px-10 md:px-14 py-8'>
                        <p className='text-2xl md:text-4xl font-semibold text-center'>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center'>
                            Fill in the details below to book your parcel delivery.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
                        {/* Delivery Class */}
                        <div className='flex flex-col px-10 md:px-16 w-[100%] gap-2'>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A]'>Select a Delivery Class</p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {/* Premium Class */}
                                <label className='border-2 border-gray-300 rounded-lg py-4 flex flex-col items-start px-4  justify-start hover:bg-gray-100 cursor-pointer gap-4'>
                                    <input type="radio" name="deliveryClass" className='w-5 h-4 bg-[#00401A] text-[#00401A] ' />
                                    <div className='flex flex-col items-start'>
                                        
                                        <p className='font-semibold text-lg'>Premium Class</p>
                                        <p className='text-sm text-gray-500'>Same-Day Delivery</p>
                                    </div>
                                </label>

                                {/* Standard Class */}
                                <label className='border-2 border-gray-300 rounded-lg py-4 flex flex-col items-start px-4 justify-center hover:bg-gray-100 cursor-pointer gap-4'>
                                    <input type="radio" name="deliveryClass" className='w-5 h-4 bg-[#00401A] text-[#00401A] ' />
                                    <div className='flex flex-col items-start'>
                                       
                                        <p className='font-semibold text-lg'>Standard Class</p>
                                        <p className='text-sm text-gray-500'>Up to 7 Days Delivery</p>
                                    </div>
                                </label>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div className='flex flex-col px-10 md:px-16 w-[100%] gap-1 mt-12 pb-8'>
                            <button
                                type='submit'
                                disabled={isSubmitDisabled}
                                className={`bg-[#00401A] text-white text-sm md:text-lg rounded-full font-semibold hover:bg-green-700 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'
                                    }`}
                            >
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bookmd;
