import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png';
import bs from '../images/faqsm.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaShieldVirus, FaDiamondTurnRight } from "react-icons/fa6";

const Bookmd = () => {
    const navigate = useNavigate();
    const ProgressBar = ({ steps, currentStep }) => {
        return (
            <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 
                  ${index + 1 <= currentStep ? 'bg-[#FFA62B]' : 'bg-gray-300'}`}>
                            {index + 1}
                        </div>
                        <span className={`text-sm text-center ${index + 1 <= currentStep ? 'tex[#FFA62B]' : 'text-gray-400'}`}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const steps = ['Delivery details', 'Delivery class', 'Review and confirm', 'Payment'];
    const currentStep = 2; // This would be dynamic in a real application
    


    const [isPremiumSelected, setIsPremiumSelected] = useState(false);
    const [isStandardSelected, setIsStandardSelected] = useState(false);

    const isSubmitDisabled = !isPremiumSelected && !isStandardSelected;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        navigate('/bookrw')
    };

    

    // Save premium selection to localStorage
    const handlePremiumClick = () => {
        const newPremiumSelected = !isPremiumSelected;
        setIsPremiumSelected(newPremiumSelected);
        localStorage.setItem('isPremiumSelected', JSON.stringify(newPremiumSelected));
        if (isStandardSelected) {
            setIsStandardSelected(false);
            localStorage.setItem('isStandardSelected', JSON.stringify(false));
        }
    };

    // Save standard selection to localStorage
    const handleStandardClick = () => {
        const newStandardSelected = !isStandardSelected;
        setIsStandardSelected(newStandardSelected);
        localStorage.setItem('isStandardSelected', JSON.stringify(newStandardSelected));
        if (isPremiumSelected) {
            setIsPremiumSelected(false);
            localStorage.setItem('isPremiumSelected', JSON.stringify(false));
        }
    };

    return (
        <div className='h-[80vh]'>
            <div className='w-[100%] lg:h-[80vh] xl:h-[110vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20 flex flex-col justify-center xl:justify-normal items-center'>
                <div className='bg-white w-[90%] md:w-[70%] xl:w-[40%]'>
                    <div className='px-10 md:px-14 pt-8 '>
                        <p className=' text-2xl md:text-4xl font-semibold text-center '>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center pb-10 '>Fill in the details below to book your parcel delivery.</p>

                        <ProgressBar steps={steps} currentStep={currentStep} />
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
                        {/* Delivery Class */}
                        <div className='flex flex-col px-10 md:px-16 w-[100%] gap-2'>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A]'>Select a Delivery Class</p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {/* Premium Class */}
                                <label onClick={handlePremiumClick} className={`border-2 border-gray-300 rounded-lg py-4 flex flex-col px-4 justify-start hover:bg-gray-100 cursor-pointer gap-4 ${isPremiumSelected ? 'border-[#ACACAC]' : ''}`}>
                                    <div className='flex flex-row justify-between'>
                                        <FaShieldVirus className='text-[#00401A] text-xl' />
                                        <span className={`w-5 h-5 border-2 rounded-full ${isPremiumSelected ? 'bg-[#00401A] border-[#00401A]' : 'border-[#00401A]'}`}></span>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <p className='font-semibold text-lg'>Premium Class</p>
                                        <p className='text-sm text-gray-500 pt-2'>Same-Day Delivery</p>
                                    </div>
                                </label>

                                {/* Standard Class */}
                                <label onClick={handleStandardClick} className={`border-2 border-gray-300 rounded-lg py-4 flex flex-col px-4 justify-start hover:bg-gray-100 cursor-pointer gap-4 ${isStandardSelected ? 'border-[#ACACAC]' : ''}`}>
                                    <div className='flex flex-row justify-between'>
                                        <FaDiamondTurnRight className='text-[#00401A] text-xl' />
                                        <span className={`w-5 h-5 border-2 rounded-full ${isStandardSelected ? 'bg-[#00401A] border-[#00401A]' : 'border-[#00401A]'}`}></span>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <p className='font-semibold text-lg'>Standard Class</p>
                                        <p className='text-sm text-gray-500 pt-2'>Up to 7 Days Delivery</p>
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
