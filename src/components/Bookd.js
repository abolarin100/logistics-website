import React, { useState, useEffect } from 'react';
import bg from '../images/faqbg.png'
import bs from '../images/faqsm.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Bookd = () => {

    const ProgressBar = ({ steps, currentStep }) => {
        return (
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 
                  ${index + 1 <= currentStep ? 'bg-orange-500' : 'bg-gray-300'}`}>
                  {index + 1}
                </div>
                <span className={`text-sm ${index + 1 <= currentStep ? 'text-gray-800' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        );
      };

      const steps = ['Delivery details', 'Delivery class', 'Review and confirm', 'Payment'];
      const currentStep = 1; // This would be dynamic in a real application
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
    }, []);

    // Save to localStorage when field values change
    useEffect(() => {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('email', email);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('pickupAddress', pickupAddress);
        localStorage.setItem('recipientName', recipientName);
        localStorage.setItem('recipientPhone', recipientPhone);
        localStorage.setItem('deliveryAddress', deliveryAddress);
        localStorage.setItem('packageType', packageType);
        localStorage.setItem('packageSize', packageSize);
        localStorage.setItem('specialInstructions', specialInstructions);
    }, [firstName, email, phoneNumber, pickupAddress, recipientName, recipientPhone, deliveryAddress, packageType, packageSize, specialInstructions]);


    const isSubmitDisabled = !firstName || !email || !phoneNumber || !recipientName || !recipientPhone || !deliveryAddress || !packageType || !packageSize;

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


                    <div className='px-10 md:px-14 pt-8 '>
                        <p className=' text-2xl md:text-4xl font-semibold text-center '>Book a Delivery</p>
                        <p className='text-sm md:text-lg font-normal pt-3 text-center pb-10 '>Fill in the details below to book your parcel delivery.</p>
                   
                        <ProgressBar steps={steps} currentStep={currentStep} />
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
                                value={pickupAddress}
                                onChange={(e) => setPickupAddress(e.target.value)}
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
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Phone Number</label>
                            <input
                                type="number"
                                placeholder='Enter your phone number'
                                value={recipientPhone}
                                onChange={(e) => setRecipientPhone(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Delivery Address</label>
                            <input
                                type='text'
                                placeholder='Enter the drop-off address'
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
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
                                value={packageType}
                                onChange={(e) => setPackageType(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Package Size</label>
                            <select value={packageSize}
                                onChange={(e) => setPackageSize(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'>
                                <option value="" disabled selected>Select an option</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>

                            </select>

                        </div>

                        <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[100%] gap-2  '>
                            <label htmlFor="" className='font-semibold'>Special Instructions (optional) </label>
                            <input
                                type='text'
                                placeholder='Add any additional instructions'
                                value={specialInstructions}
                                onChange={(e) => setSpecialInstructions(e.target.value)}
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
