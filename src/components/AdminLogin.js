import React, { useState, useEffect } from 'react';
import lg from '../images/Light logo.png'
import bg from '../images/adminlog.png'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };

    const isSubmitDisabled = !username || !password;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your form submission logic here
    };




    return (
        <div className='w-full h-[100%]  flex '>
            <div className=' hidden xl:block bg-[#0E6296] min-h-screen w-[40%] '>

                <div className='flex flex-col justify-between'>
                    <div className='ml-20 mt-4'>
                        <img src={lg} alt="" className='home__img' width='120' />
                    </div>
                    <div className='flex flex-col justify-center items-center relative top-40  '>
                        <div className='flex justify-center'>
                            <img src={bg} alt="" className=' object-contain w-[90%] ' />
                        </div>

                    </div>
                </div>

            </div>
            <div className='bg-white w-[100%] xl:w-[60%] flex flex-col justify-center pl-0 lg:pl-16 '>


                <div className='px-10 md:px-16 pb-20'>
                    <p className='text-3xl font-semibold pb-4'>Login as an admin</p>

                </div>

                <form action="" className=' flex flex-col justify-center gap-4'>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] md:w-[90%] lg:w-[70%] gap-1  '>
                        <label htmlFor="" className='font-semibold text-xl'>Username</label>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='border-2 border-gray-400 rounded-md py-3 px-2 placeholder-gray-500 placeholder text-sm'
                        />

                    </div>
                    <div className='flex flex-col px-10 md:px-16 w-[100%] md:w-[90%] lg:w-[70%] gap-1 mt-0 lg:mt-2  '>
                        <label htmlFor="" className='font-semibold text-xl'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter password'
                            className='border-2 border-gray-400 rounded-md py-3 px-2 placeholder-gray-500 placeholder text-sm'
                        />
                    </div>

                    <div className='w-[100%] md:w-[90%] lg:w-[80%] py-2 flex justify-between gap-6 md:gap-6 px-10 md:px-16'>
                        <div className='flex justify-between items-center pl-1'>
                            <input
                                type='checkbox'
                                id='keepSignedIn'
                                checked={keepSignedIn}
                                onChange={() => setKeepSignedIn(!keepSignedIn)}
                                className='mr-4 transform scale-125'
                            />
                            <label htmlFor='keepSignedIn' className='text-sm md:text-base'>Keep me signed in</label>
                        </div>
                        {/* <div className='flex flex-col pr-1  '>
                            <p className='text-new-blue text-sm md:text-base'>Forgot password</p>
                        </div> */}

                    </div>


                    <div className='flex flex-col px-10 md:px-16 w-[100%] md:w-[90%] lg:w-[70%] gap-1 pt-0 lg:pt-16  '>
                        <button
                            type='submit'
                            disabled={isSubmitDisabled}
                            className={`bg-new-blue text-white hover:bg-blue-900 ${isSubmitDisabled && 'opacity-50 cursor-not-allowed'}`}
                        >
                            Login
                        </button>
                    </div>

                </form>




            </div>
        </div>
    )
}

export default AdminLogin
