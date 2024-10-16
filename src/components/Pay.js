import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLandmark } from "react-icons/fa6";
import hm from '../images/success.png'

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
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const closeModal = () => {
        setShowModal(false);
    };

    // Format card number to include spaces every 4 digits and limit to 16 digits
    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\s+/g, ''); // Remove all spaces
        if (value.length > 16) return; // Limit to 16 digits
        // Add space every 4 digits
        setCardNumber(value.replace(/(\d{4})/g, '$1 ').trim());
    };

    // Limit expiry date to 5 characters and format as MM/YY
    const handleExpiryDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 4) return; // Limit to 4 digits
        if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`; // Add '/' after MM
        }
        setExpiryDate(value);
    };

    // Limit CVV to 3 digits
    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 3) return; // Limit to 3 digits
        setCvv(value);
    };


    const PREMIUM_DELIVERY_FEE = 500;
    const STANDARD_DELIVERY_FEE = 400;
    const SERVICE_CHARGE = 50;

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

    const isSubmitDisabled = !paymentMethod;

    // Calculate total fee based on delivery option
    const calculateTotalFee = () => {
        const deliveryFee = isPremiumSelected ? PREMIUM_DELIVERY_FEE : STANDARD_DELIVERY_FEE;
        return deliveryFee + SERVICE_CHARGE;
    };

    const handleCardClick = () => {
        setPaymentMethod('card');
    };

    const handleBankClick = () => {
        setPaymentMethod('bank');
    };



    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); // Show the modal when button is clicked
        // navigate('/'); // Navigating to the next page
    };

    return (
        <div className='h-[80vh]'>
            <div className='w-[100%] lg:h-[110vh] xl:h-[180vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20 flex flex-col justify-center xl:justify-normal items-center'>
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
                                    <span className='text-[#3B3B3B] text-base font-[500]'> GH₵ {isPremiumSelected ? PREMIUM_DELIVERY_FEE : STANDARD_DELIVERY_FEE}
                                    </span>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <span className='text-[#3B3B3B] text-base font-[400]'>Service charge:</span>
                                    <span className='text-[#3B3B3B] text-base font-[500]'>GH₵ {SERVICE_CHARGE}</span>
                                </div>
                                <div className='flex justify-between font-semibold border-t border-[#F0F0F0] mt-6 pt-4'>
                                    <span className='text-[#3B3B3B] text-lg font-[400]'>Total:</span>
                                    <span className='text-[#001A0A] text-base font-[600]'>GH₵ {calculateTotalFee()}</span>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <p className='text-lg font-semibold pt-6 mt-2 '>Select Payment Method</p>
                            <div className='mt-3'>
                                <div
                                    onClick={handleCardClick}
                                    className={`flex flex-col  border px-2 py-3 rounded-md justify-start cursor-pointer 
                                     ${paymentMethod === 'card' ? 'border-[#00401A]' : 'border-[#ACACAC]'}`}
                                >
                                    <div className=' flex flex-row justify-between items-center'>
                                        <div className='flex flex-row justify-between items-center'>
                                            <span
                                                className={`w-4 h-4 border-2 rounded-full mr-2 
                                      ${paymentMethod === 'card' ? 'bg-[#00401A] border-[#00401A]' : 'border-[#00401A]'}`}
                                            ></span>
                                            <label className='text-sm font-[400] text-[#001A0A]'>
                                                Pay with card
                                            </label>
                                        </div>
                                        <FaCreditCard className='text-[#00401A] text-xl' />
                                    </div>

                                    {/* Conditionally Render Add Card Details */}
                                    {paymentMethod === 'card' && (

                                        <div className='flex flex-col mt-4'>
                                            <div className='flex flex-col w-[100%] lg:w-[100%] gap-2  '>
                                                <p className='text-sm md:text-sm font-[500] pt-3 text-left text-[#3B3B3B] '>Add Card Details</p>
                                            </div>
                                            <div className='flex flex-col  w-[100%] lg:w-[80%] gap-2 mt-4  '>
                                                <label htmlFor="" className='font-[400] text-sm text-[#3B3B3B]'>Card number</label>
                                                <input
                                                    type='text'
                                                    placeholder='1234 5678 9012 3456'
                                                    value={cardNumber}
                                                    onChange={handleCardNumberChange}
                                                    maxLength="19" // For 16 digits and 3 spaces
                                                    className='border border-[#ACACAC] rounded-sm py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                                                />
                                            </div>
                                            <div className='flex flex-row  w-[100%] lg:w-[80%] gap-2 mt-2  '>
                                                <div className='flex flex-col  w-[48.5%] lg:w-[100%] gap-2 mt-1  '>
                                                    <label htmlFor="" className='font-[400] text-sm text-[#3B3B3B]'>Expiry date</label>
                                                    <input
                                                        type='text'
                                                        placeholder='MM/YY'
                                                        value={expiryDate}
                                                        onChange={handleExpiryDateChange}
                                                        maxLength="5"

                                                        className='border border-[#ACACAC] rounded-sm py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                                                    />
                                                </div>
                                                <div className='flex flex-col  w-[48.5%] lg:w-[100%] gap-2 mt-1  '>
                                                    <label htmlFor="" className='font-[400] text-sm text-[#3B3B3B]'>CVV</label>
                                                    <input
                                                        type='text'
                                                        placeholder='123'
                                                        value={cvv}
                                                        onChange={handleCvvChange}
                                                        maxLength="3"
                                                        className='border border-[#ACACAC] rounded-sm py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    )}

                                </div>
                                <div
                                    onClick={handleBankClick}
                                    className={`flex flex-col border px-2 py-3 rounded-md justify-start cursor-pointer mt-4
                                     ${paymentMethod === 'bank' ? 'border-[#00401A]' : 'border-[#ACACAC]'}`}
                                >
                                    <div className=' flex flex-row justify-between items-center'>
                                        <div className='flex flex-row justify-between items-center'>
                                            <span
                                                className={`w-4 h-4 border-2 rounded-full mr-2 
                                   ${paymentMethod === 'bank' ? 'bg-[#00401A] border-[#00401A]' : 'border-[#00401A]'}`}
                                            ></span>
                                            <label className='text-sm font-[400] text-[#001A0A]'>
                                                Pay with bank transfer
                                            </label>
                                        </div>
                                        <FaLandmark className='text-[#00401A] text-xl' />
                                    </div>

                                </div>


                            </div>

                            {/* Proceed Button */}
                            <div className='flex flex-col px-0 md:px-0 w-[100%] xl:w-[100%] gap-1 mt-20 pb-12 '>
                                <button
                                    type='submit'
                                    disabled={isSubmitDisabled}
                                    className={`bg-[#00401A] text-white  text-sm md:text-lg rounded-full font-semibold  hover:bg-green-700 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'
                                    } `}
                                >Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] relative">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4"></h2>

                        <div className='flex flex-col justify-between items-center mt-2 gap-6'>
                        <img src={hm} alt="" className=' rounded-bl-3xl rounded-tr-3xl h-[100%] xl:h-[75%] object-cover xl:object-cover ' />
                        <p className='text-xl font-[500] text-[#001A0A] pt-3'>Payment Successful!</p> 
                        <p className='text-base font-[400] px-1 text-center text-[#3B3B3B]'>Your delivery has been successfully booked. You will receive an email with more information.</p> 
                        <button
                             onClick={() => {
                                // Handle payment logic here
                                navigateToPage('/Bookd')
                                closeModal();
                                
                            }}
                                type="button"
                                className=" my-4 px-6 py-2 bg-[#00401A] text-white rounded-full hover:bg-green-700 font-semibold"
                            >
                                Book Again
                            </button>
                      
                        </div>

                       

                      
                        

                        
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Pay;
