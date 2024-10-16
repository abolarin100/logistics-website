import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png'
import bs from '../images/faqsm.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Bookrw = () => {

    const ProgressBar = ({ steps, currentStep }) => {
        return (
            <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 
                  ${index + 1 <= currentStep ? 'bg-[#FFA62B]' : 'bg-gray-300'}`}>
                            {index + 1}
                        </div>
                        <span className={`text-sm ${index + 1 <= currentStep ? 'tex[#FFA62B]' : 'text-gray-400'}`}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const steps = ['Delivery details', 'Delivery class', 'Review and confirm', 'Payment'];
    const currentStep = 3; // This would be dynamic in a real application
    const navigate = useNavigate();

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



    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); // Show the modal when button is clicked

        // Add your form submission logic here
    };


    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };

    return (

        <div className='h-[80vh]'>

            <div className=' w-[100%] lg:h-[100vh] xl:h-[200vh] bg-[#E6ECE8] pt-20 pb-10 md:pt-20 xl:pt-40 md:mt-0 md:pb-16 xl:pb-20  flex flex-col justify-center xl:justify-normal items-center  '>
                <div className='bg-white w-[90%] md:w-[70%] xl:w-[40%] '>


                    <div className='px-10 md:px-14 pt-8 '>
                        <p className=' text-2xl md:text-4xl font-semibold text-center '>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center pb-10 '>Fill in the details below to book your parcel delivery.</p>

                        <ProgressBar steps={steps} currentStep={currentStep} />
                    </div>



                    <form onSubmit={handleSubmit} className=' flex flex-col justify-center gap-5'>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-black '>Review Your Booking</p>
                        </div>
                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Sender information</p>
                        </div>

                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Full Name</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{firstName} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Email</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{email} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Phone Number</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{phoneNumber} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Pickup address</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{pickupAddress} </p>
                            </div>

                        </div>


                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Recipient's information</p>
                        </div>

                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Full Name</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{recipientName} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Phone Number </label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{recipientPhone} Jerry</p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Delivery Location</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{deliveryAddress} </p>
                            </div>

                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Package Details</p>
                        </div>

                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Package type</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{packageType} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Package size</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{packageSize} </p>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-normal text-[#3B3B3B] text-sm md:text-base md:w-[40%]'>Special instructions</label>
                            <div className='flex flex-row justify-start md:w-[60%] md:gap-12'>
                                <p className='hidden md:block'>:</p>
                                <p className='font-[500 text-base]'>{specialInstructions} </p>
                            </div>

                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='text-sm md:text-lg font-[500] pt-3 text-left text-[#00401A] '>Delivery Class</p>
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <p className='font-[500 text-base]'> {isPremiumSelected ? 'Premium Class (Same-Day Delivery)' : isStandardSelected ? 'Standard Class (Up to 7 Days Delivery)' : 'No class selected'}</p>
                        </div>





                        <div className='flex flex-col px-10 md:px-16 w-[100%] xl:w-[100%] gap-1 mt-12 pb-8 '>
                            <button
                                type='submit'
                                className={`bg-[#00401A] text-white  text-sm md:text-lg rounded-full font-semibold  hover:bg-green-700 `}
                            >Confirm and Pay
                            </button>
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
                        <h2 className="text-lg font-semibold mb-4">Do you have an account?</h2>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="text-sm block mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00401A] text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-sm block mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00401A] text-sm"
                                />
                            </div>

                            <button
                             onClick={() => {
                                // Handle payment logic here
                                navigateToPage('/pay')
                                closeModal();
                                
                            }}
                                type="button"
                                className="w-full py-2 bg-[#00401A] text-white rounded-lg hover:bg-green-700 font-semibold"
                            >
                                Login
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-8 text-left text-xl font-[500] text-[#3D3D3D]">New customer?</div>

                        {/* Guest and Signup buttons */}
                        <div className="flex justify-start items-center">
                            <button
                             onClick={() => {
                                // Handle payment logic here
                                navigateToPage('/pay')
                                closeModal();
                                
                            }}
                                type="button"
                                className="py-2 px-1 border-none font-[500] rounded-lg hover:bg-gray-200  mr-2 text-[#00401A] text-sm md:text-base"
                            >
                                Continue as Guest
                            </button>
                            <button
                            //  onClick={() => {
                            //     // Handle payment logic here
                            //     closeModal();
                            //     navigateToPage('/pay')
                            // }}
                                type="button"
                                className="py-2 px-6 border border-[#00401A] bg-white text-[#00401A] rounded-full hover:bg-green-50 font-semibold  ml-2 text-sm md:text-base"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Footer Text */}
                        <p className="text-sm text-left text-gray-500 mt-8">
                            Sign up to save your delivery details for next time, or proceed without an account. You can easily create an account after completing your booking.
                        </p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Bookrw;
