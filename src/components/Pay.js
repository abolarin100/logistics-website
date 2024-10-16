import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLandmark  } from "react-icons/fa6";

const Pay = () => {
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
                        <span className={`text-sm ${index + 1 <= currentStep ? 'text-[#FFA62B]' : 'text-gray-400'}`}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const steps = ['Delivery details', 'Delivery class', 'Review and confirm', 'Payment'];
    const currentStep = 4; // Currently at the payment step


    const [paymentMethod, setPaymentMethod] = useState('');
    // Define separate state variables for each field
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [recipientPhone, setRecipientPhone] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [packageType, setPackageType] = useState('');
    const [packageSize, setPackageSize] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [isPremiumSelected, setIsPremiumSelected] = useState(false);
    const [isStandardSelected, setIsStandardSelected] = useState(false);
    const [showModal, setShowModal] = useState(true); // Modal visibility state

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedFirstName = localStorage.getItem('firstName');
        const savedEmail = localStorage.getItem('email');
        const savedPhoneNumber = localStorage.getItem('phoneNumber');
        const savedPickupAddress = localStorage.getItem('pickupAddress');
        const savedRecipientName = localStorage.getItem('recipientName');
        const savedRecipientPhone = localStorage.getItem('recipientPhone');
        const savedDeliveryAddress = localStorage.getItem('deliveryAddress');
        const savedPackageType = localStorage.getItem('packageType');
        const savedPackageSize = localStorage.getItem('packageSize');
        const savedSpecialInstructions = localStorage.getItem('specialInstructions');
        const savedPremiumSelection = localStorage.getItem('isPremiumSelected');
        const savedStandardSelection = localStorage.getItem('isStandardSelected');

        if (savedFirstName) setFirstName(savedFirstName);
        if (savedEmail) setEmail(savedEmail);
        if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
        if (savedPickupAddress) setPickupAddress(savedPickupAddress);
        if (savedRecipientName) setRecipientName(savedRecipientName);
        if (savedRecipientPhone) setRecipientPhone(savedRecipientPhone);
        if (savedDeliveryAddress) setDeliveryAddress(savedDeliveryAddress);
        if (savedPackageType) setPackageType(savedPackageType);
        if (savedPackageSize) setPackageSize(savedPackageSize);
        if (savedSpecialInstructions) setSpecialInstructions(savedSpecialInstructions);
        if (savedPremiumSelection) setIsPremiumSelected(JSON.parse(savedPremiumSelection));
        if (savedStandardSelection) setIsStandardSelected(JSON.parse(savedStandardSelection));
    }, []);





    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/bookmd'); // Navigating to the next page
    };

    return (
        <div className='h-[80vh]'>
            <div className='w-[100%] lg:h-[110vh] xl:h-[160vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20 flex flex-col justify-center xl:justify-normal items-center'>
                <div className='bg-white w-[90%] md:w-[70%] xl:w-[40%] shadow-lg rounded-lg'>
                    <div className='px-10 md:px-14 pt-8'>
                        <p className='text-2xl md:text-4xl font-semibold text-center'>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center pb-10'>
                            Fill in the details below to book your parcel delivery.
                        </p>

                        {/* Progress Bar */}
                        <ProgressBar steps={steps} currentStep={currentStep} />
                    </div>

                    {/* Payment Section */}
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
                        <div className='px-10 md:px-16'>
                            <p className='text-lg font-semibold'>Payment</p>

                            {/* Cost Breakdown */}
                            <div className='bg-white border border-[#ACACAC] p-4 rounded-md mt-3 w-[100%] md:w-[80%]'>
                                <p className='font-normal text-[#00401A] text-base'>Cost Breakdown</p>
                                <div className='flex justify-between mt-4'>
                                    <span className='text-[#3B3B3B] text-base font-[400]'>Delivery fee:</span>
                                    <span className='text-[#3B3B3B] text-base font-[500]'>GH₵ 400</span>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <span className='text-[#3B3B3B] text-base font-[400]'>Service charge:</span>
                                    <span className='text-[#3B3B3B] text-base font-[500]'>GH₵ 50</span>
                                </div>
                                <div className='flex justify-between font-semibold border-t border-[#F0F0F0] mt-6 pt-4'>
                                    <span className='text-[#3B3B3B] text-lg font-[400]'>Total:</span>
                                    <span className='text-[#001A0A] text-base font-[600]'>GH₵ 450</span>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <p className='text-lg font-semibold pt-6 mt-2 '>Select Payment Method</p>
                            <div className='mt-3'>
                                <div className='flex items-center border border-[#ACACAC] px-2 py-3 rounded-md justify-between'>
                                    <div>
                                        <input
                                            type='radio'
                                            id='card'
                                            name='paymentMethod'
                                            value='card'
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className='mr-2 text-[#00401A] checked:text-[#00401A] text-xl focus:ring-0 '
                                        />

                                        <label htmlFor='card' className='text-sm font-[400]  text-[#001A0A]'>
                                            Pay with card
                                        </label>
                                    </div>
                                    <FaCreditCard className='text-[#00401A]' />

                                </div>
                                <div className='flex items-center border border-[#ACACAC] px-2 py-3 rounded-md justify-between mt-4'>
                                    <div>
                                        <input
                                            type='radio'
                                            id='bank'
                                            name='paymentMethod'
                                            value='card'
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className='mr-2 text-[#00401A] checked:text-[#00401A] text-xl focus:ring-0 '
                                        />

                                        <label htmlFor='bank' className='text-sm font-[400]  text-[#001A0A]'>
                                        Pay with bank transfer
                                        </label>
                                    </div>
                                    <FaLandmark className='text-[#00401A]' />

                                </div>

                             
                            </div>

                            {/* Proceed Button */}
                            <div className='flex flex-col px-0 md:px-0 w-[100%] xl:w-[100%] gap-1 mt-20 pb-12 '>
                                <button
                                    type='submit'
                                    className={`bg-[#00401A] text-white  text-sm md:text-lg rounded-full font-semibold  hover:bg-green-700 `}
                                >Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Pay;
