import React, { useState, useEffect } from 'react';
import lg from '../images/Light logo.png'
import bg from '../images/registerimg.png'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    const isSubmitDisabled =
        !firstName || !lastName || !email || !selectedCountry || !phoneNumber || !selectedCourse;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your form submission logic here
    };

    const countryCodes = [

        { name: 'Niger', code: '+227', shortForm: 'Nig' },
        { name: 'Nigeria', code: '+234', shortForm: 'NG' },
        { name: 'Rwanda', code: '+250', shortForm: 'Rwa' },
        { name: 'Sao Tome and Principe', code: '+239', shortForm: 'STP' },
        { name: 'Senegal', code: '+221', shortForm: 'Sen' },
        { name: 'Seychelles', code: '+248', shortForm: 'Sey' },
        { name: 'Sierra Leone', code: '+232', shortForm: 'SLE' },
        { name: 'Somalia', code: '+252', shortForm: 'Som' },
        { name: 'South Africa', code: '+27', shortForm: 'SA' },
        { name: 'South Sudan', code: '+211', shortForm: 'SSD' },
        { name: 'Sudan', code: '+249', shortForm: 'SD' },
        { name: 'Tanzania', code: '+255', shortForm: 'TZ' },
        { name: 'Togo', code: '+228', shortForm: 'TGO' },
        { name: 'Tunisia', code: '+216', shortForm: 'TUN' },
        { name: 'Uganda', code: '+256', shortForm: 'UG' },
        { name: 'Zambia', code: '+260', shortForm: 'ZM' },
        { name: 'Zimbabwe', code: '+263', shortForm: 'ZW' },
        { name: 'United States', code: '+1', shortForm: 'US' },
        { name: 'United Kingdom', code: '+44', shortForm: 'UK' },
        { name: 'Germany', code: '+49', shortForm: 'Ger' },
        { name: 'France', code: '+33', shortForm: 'Fra' },
        { name: 'Italy', code: '+39', shortForm: 'Ita' },
        { name: 'Spain', code: '+34', shortForm: 'ESP' },
        { name: 'Netherlands', code: '+31', shortForm: 'NED' },
        { name: 'Belgium', code: '+32', shortForm: 'BEL' },
        { name: 'Sweden', code: '+46', shortForm: 'SWE' },
        { name: 'Norway', code: '+47', shortForm: 'NOR' },
        { name: 'Canada', code: '+1', shortForm: 'CAN' },
        { name: 'Mexico', code: '+52', shortForm: 'MEX' },
        { name: 'Brazil', code: '+55', shortForm: 'BRA' },
        { name: 'Argentina', code: '+54', shortForm: 'ARG' },
        { name: 'Chile', code: '+56', shortForm: 'CHL' },
        { name: 'Colombia', code: '+57', shortForm: 'COL' },
        { name: 'Peru', code: '+51', shortForm: 'PER' },
        { name: 'Venezuela', code: '+58', shortForm: 'VEN' },
        { name: 'Ecuador', code: '+593', shortForm: 'ECU' },
        { name: 'Bolivia', code: '+591', shortForm: 'BOL' },
        { name: 'Paraguay', code: '+595', shortForm: 'PRY' },
        { name: 'Uruguay', code: '+598', shortForm: 'URY' },
        { name: 'Panama', code: '+507', shortForm: 'PAN' },
        { name: 'Costa Rica', code: '+506', shortForm: 'CRI' },
        { name: 'Puerto Rico', code: '+1', shortForm: 'PRI' },
        { name: 'Dominican Republic', code: '+1', shortForm: 'DOM' },
        { name: 'Jamaica', code: '+1', shortForm: 'JAM' },
        { name: 'Trinidad and Tobago', code: '+1', shortForm: 'TTO' },
        { name: 'Barbados', code: '+1', shortForm: 'BRB' },
        { name: 'Bahamas', code: '+1', shortForm: 'BHS' },
        { name: 'Belize', code: '+501', shortForm: 'BLZ' },
        { name: 'Honduras', code: '+504', shortForm: 'HND' },
        { name: 'El Salvador', code: '+503', shortForm: 'SLV' },
        { name: 'Guatemala', code: '+502', shortForm: 'GTM' },
        { name: 'Nicaragua', code: '+505', shortForm: 'NIC' },
        { name: 'Japan', code: '+81', shortForm: 'JPN' },
        { name: 'China', code: '+86', shortForm: 'CHN' },
        { name: 'India', code: '+91', shortForm: 'IND' },
        { name: 'South Korea', code: '+82', shortForm: 'KOR' },
        { name: 'Australia', code: '+61', shortForm: 'AUS' },
        { name: 'New Zealand', code: '+64', shortForm: 'NZL' },
        { name: 'Indonesia', code: '+62', shortForm: 'IDN' },
        { name: 'Philippines', code: '+63', shortForm: 'PHL' },
        { name: 'Thailand', code: '+66', shortForm: 'THA' },
        { name: 'Singapore', code: '+65', shortForm: 'SGP' },
        { name: 'Malaysia', code: '+60', shortForm: 'MYS' },
        { name: 'Vietnam', code: '+84', shortForm: 'VNM' },
        { name: 'Turkey', code: '+90', shortForm: 'TUR' },
        { name: 'Saudi Arabia', code: '+966', shortForm: 'SAU' },
        { name: 'United Arab Emirates', code: '+971', shortForm: 'ARE' },
        { name: 'Israel', code: '+972', shortForm: 'ISR' },
        // ... add more countries
    ];


    return (
        <div className='w-full h-[100%]  flex '>
            <div className=' hidden xl:block bg-new-blue min-h-screen w-[40%]'>
                <div className='ml-20 mt-4'>
                    <img src={lg} alt="" className='home__img' width='120' />
                </div>
                <div className='flex flex-col justify-center items-center mt-16'>
                    <div className='flex justify-center'>
                        <img src={bg} alt="" className=' object-contain w-[85%] ' />
                    </div>
                    <div className='w-[70%] mt-4'>
                        <p className='text-white text-3xl font-semibold text-center'>Your journey to success starts here!</p>
                    </div>
                </div>
            </div>
            <div className='bg-white w-[100%] xl:w-[60%] '>
                <div className=' hidden lg:flex justify-end items-baseline pr-8 py-4 '>
                    <p className='px-2 '>Already have an account? </p>
                    <button className='bg-new-blue text-white' onClick={() => navigateToPage('/login')}> Log in</button>
                </div>

                <div className='px-16 py-8'>
                    <p className='text-3xl font-semibold'>Create an account</p>
                </div>

                <form action="" className=' flex flex-col justify-center gap-4'>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <label htmlFor="" className='font-semibold'>First Name</label>
                        <input
                            type='text'
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                        />
                    </div>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <label htmlFor="" className='font-semibold'>Last Name</label>
                        <input
                            type='text'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                        />
                    </div>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <label htmlFor="" className='font-semibold'>Email</label>
                        <input
                            type='text'
                            placeholder='example@domain.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                        />

                    </div>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <label htmlFor="" className='font-semibold'>Where did you get to know about us?</label>
                        <select name="" id="" className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'>
                            <option value="" disabled selected>Select an option</option>
                            <option value="google">Google</option>
                            <option value="friend">Friend</option>
                            <option value="social-media">Social Media</option>
                            <option value="other">Other</option>
                        </select>

                    </div>
                    <div className='w-[100%] lg:w-[80%] flex gap-6 md:gap-6 px-10 md:px-16'>
                        <div className='flex flex-col w-[32%]  md:w-[25%] gap-1 '>
                            <label htmlFor="" className='font-semibold'>Country</label>
                            <select
                                name=''
                                id=''
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-1 md:px-4 placeholder-gray-500 placeholder text-sm'
                            >
                                <option value="" disabled selected className='text-xs md:text-sm'>
                                    US +1
                                </option>
                                {countryCodes.map((country, index) => (
                                    <option key={index} value={country.code} className='text-xs md:text-sm'>
                                        {`${country.shortForm} ${country.code}`}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className='flex flex-col w-[60%] md:w-[100%] gap-1  '>
                            <label htmlFor="" className='font-semibold'>Phone Number</label>
                            <input
                                type='text'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <label htmlFor="" className='font-semibold'>Select Course</label>
                        <select
                            name=''
                            id=''
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className='border-2 border-gray-400 rounded-md py-1.5 px-2 placeholder-gray-500 placeholder text-sm'
                        >
                            <option value="" disabled selected>Select an option</option>
                            <option value="google">Business Analysis</option>
                            <option value="friend">Data Analysis</option>

                        </select>

                    </div>

                    <div className='flex flex-col px-10 md:px-16 w-[100%] lg:w-[80%] gap-1  '>
                        <button
                            type='submit'
                            disabled={isSubmitDisabled}
                            className={`bg-new-blue text-white hover:bg-blue-900 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'
                                }`}
                        >Submit
                        </button>
                    </div>

                </form>
                <div className='py-4 px-10 md:px-16'>
                    <p className='text-sm'>By signing up, you agree to our <span className='text-new-blue font-semibold'>Terms of service</span> and <span className='text-new-blue font-semibold'>privacy policy</span></p>
                </div>

                <div className='flex items-baseline px-10 gap-2 lg:hidden  '>
                    <p className='md:pl-6 '>Already have an account? </p>
                    <p className=' text-new-blue hover:scale-110' onClick={() => navigateToPage('/login')}> Log in</p>
                </div>

            </div>
        </div>
    )
}

export default Register
