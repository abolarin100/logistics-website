import React, { useState, useEffect } from 'react';
import lg from '../images/Light logo.png'
import bg from '../images/adminlog.png'
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { CiGrid42, CiCirclePlus } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiCircleFill } from "react-icons/pi";
import BarChart from './BarChart';


const AdminDashboard = () => {
    const navigate = useNavigate();
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hoveredButton, setHoveredButton] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
    };

    const isSubmitDisabled = !username || !password;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your form submission logic here
    };

    const selectOptions = [
        'Jan 22',
        'April 22',
        'Aug 22',
        'Jan 23',
        'May 23',
        'Sept 23',
        'Feb 24',
    ];



    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonHover = (buttonId) => {
        setHoveredButton(buttonId);
    };

    const handleButtonLeave = () => {
        setHoveredButton(null);
    };

    // Dummy scores for demonstration
    const courseScores = [
        { name: 'Business analysis', score: '4/12' },
        { name: 'Data analysis', score: '6/12' }, // Example with half-filled border
    ];

    const students = [
        { cohort: 'Jan 22', totalStudents: 60, businessStudents: 35, dataStudents: 25 },
        { cohort: 'April 22', totalStudents: 40, businessStudents: 10, dataStudents: 30 },
        { cohort: 'Aug 22', totalStudents: 50, businessStudents: 15, dataStudents: 35 },
        { cohort: 'Jan 23', totalStudents: 70, businessStudents: 25, dataStudents: 45 },
        { cohort: 'May 23', totalStudents: 90, businessStudents: 45, dataStudents: 45 },
        { cohort: 'Sept 23', totalStudents: 50, businessStudents: 15, dataStudents: 35 },
        { cohort: 'Feb 24', totalStudents: 61, businessStudents: 20, dataStudents: 41 },
    ];

    const handleCheckboxChange = (cohort) => {
        // Handle checkbox change here
    };




    return (
        <>
            <AdminNav />
            <div className='w-full h-[100%]  flex '>
                <div className=' hidden md:block bg-white min-h-screen w-[15%] shadow-md  border-r-2 border-[#A7AEB91A] '>

                    <div className='flex flex-col justify-between px-4 mt-24'>
                        <div>
                            <button
                                className={`flex flex-row items-center pr-10 text-sm border-none ${hoveredButton === 'button1'
                                    ? 'bg-[#127ABB] text-white'
                                    : 'hover:bg-[#127ABB] hover:text-white'
                                    }`}
                                onClick={() => navigateToPage('')}
                                onMouseEnter={() => handleButtonHover('button1')}
                                onMouseLeave={handleButtonLeave}
                            >
                                <CiGrid42
                                    className={`text-2xl mr-2 ${hoveredButton === 'button1' ? 'text-white' : 'text-[#127ABB]'
                                        }`}
                                />
                                Dashboard
                            </button>
                            <button
                                className={`flex flex-row items-center pr-10 text-sm mt-2 border-none ${hoveredButton === 'button2'
                                    ? 'bg-[#127ABB] text-white'
                                    : 'hover:bg-[#127ABB] hover:text-white'
                                    }`}
                                onClick={() => navigateToPage('')}
                                onMouseEnter={() => handleButtonHover('button2')}
                                onMouseLeave={handleButtonLeave}
                            >
                                <FiBookOpen
                                    className={`text-2xl mr-2 ${hoveredButton === 'button2' ? 'text-white' : 'text-[#127ABB]'
                                        }`}
                                />
                                Courses
                            </button>
                            <button
                                className={`flex flex-row items-center pr-10 text-sm mt-2 border-none ${hoveredButton === 'button3'
                                    ? 'bg-[#127ABB] text-white'
                                    : 'hover:bg-[#127ABB] hover:text-white'
                                    }`}
                                onClick={() => navigateToPage('')}
                                onMouseEnter={() => handleButtonHover('button3')}
                                onMouseLeave={handleButtonLeave}
                            >
                                <CgNotes
                                    className={`text-2xl mr-2 ${hoveredButton === 'button3' ? 'text-white' : 'text-[#127ABB]'
                                        }`}
                                />
                                Students
                            </button>
                        </div>

                        <div className='relative top-56'>
                            <button
                                className={`flex flex-row items-center pr-10 text-sm mt-2 border-none ${hoveredButton === 'button4'
                                    ? 'bg-[#127ABB] text-white'
                                    : 'hover:bg-[#127ABB] hover:text-white'
                                    }`}
                                onClick={() => navigateToPage('')}
                                onMouseEnter={() => handleButtonHover('button4')}
                                onMouseLeave={handleButtonLeave}
                            >
                                <RiLogoutBoxLine
                                    className={`text-2xl mr-2 ${hoveredButton === 'button4' ? 'text-white' : 'text-[#127ABB]'
                                        }`}
                                />
                                Logout
                            </button>
                        </div>

                    </div>

                </div>
                <div className='bg-[#FAFAFA] w-[100%] md:w-[85%] flex flex-col justify-start mt-20 pl-0 lg:px-4  pb-4'>
                    <div className='flex flex-row   w-[100%]'>
                        <div className='flex flex-col w-[70%]'>

                            <div className='flex flex-col border py-2 px-4 w-[100%] bg-white shadow-md'>
                                <div className='flex flex-row justify-between items-center pb-2'>
                                    <p>Courses</p>
                                    <p className='flex items-center text-sm text-[#127ABB] '> <CiCirclePlus /> Add new course</p>

                                </div>

                                <div className='flex flex-row justify-between items-center '>
                                    <div className='border flex flex-row p-2 justify-between rounded-md w-[45%]  '>
                                        <div className=''>
                                            <p className='text-base'>Business analysis</p>
                                            <button className='border-none text-xs text-[#127ABB] hover:underline hover:scale-90'>Edit course</button>
                                        </div>
                                        <div className='rounded-full border-4 border-t-[#127ABB] flex flex-col justify-center items-center  '>
                                            <p className='text-center text-xs'>4/12</p>
                                            <p className='text-center text-[7px] px-2'>Weeks done</p>

                                        </div>
                                    </div>
                                    <div className='border flex flex-row p-2 justify-between rounded-md w-[45%]  '>
                                        <div className=''>
                                            <p className='text-base '>Data analysis</p>
                                            <button className='border-none text-xs text-[#127ABB] hover:underline hover:scale-90 '>Edit course</button>
                                        </div>
                                        <div className='rounded-full border-4 border-t-[#BB5312] flex flex-col justify-center items-center  '>
                                            <p className='text-center text-xs'>4/12</p>
                                            <p className='text-center text-[7px] px-2'>Weeks done</p>

                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className='flex flex-col border py-2 px-4 w-[100%] bg-white shadow-md mt-4'>
                                <div className='flex flex-row items-center'>
                                    <p className='text-base'>Cohort</p>
                                    <select
                                        name="options"
                                        id="options"
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        className='ml-4 bg-[#127ABB] rounded-md  text-white px-1 text-xs py-0.5'
                                    >
                                        <option value="">All</option>
                                        {selectOptions.map((option, index) => (
                                            <option value={option} key={index}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <div className='flex flex-row justify-between items-center py-4 w-[100%]'>
                                    <div className=' w-[30%] flex flex-col items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D]'>Total students</p>
                                        <p>431</p>
                                    </div>
                                    <div className=' w-[30%] flex flex-col items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D] flex items-center '> <PiCircleFill className=' rounded-full text-[#127ABB] text-[11px] mr-1' />  Business analysis</p>
                                        <p>254</p>
                                    </div>
                                    <div className=' w-[30%] flex flex-col items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D] flex items-center '> <PiCircleFill className=' rounded-full text-[#BB5312] text-[11px] mr-1' />  Data analysis</p>
                                        <p>177</p>
                                    </div>


                                </div>

                                <div className=' '>
                                    <BarChart students={students} />

                                </div>

                            </div>

                        </div>
                        <div className='w-[30%] flex flex-col  pl-4 '>
                            <div className='flex flex-col border py-2 justify-start px-4 w-[100%] bg-white shadow-md '>
                                <div className='flex flex-row justify-between items-center border px-5 py-1 bg-[#052538]'>
                                    <p className='text-base text-white '> Current Cohort:</p>
                                    <p className='text-base text-white font-semibold '> Feb '24 Cohort</p>


                                </div>
                                <div className='flex flex-row justify-between items-center py-4 w-[100%]'>
                                    <div className=' w-[30%] flex flex-row items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D]  '>  All</p>
                                        <input type="checkbox" className='rounded-full' />

                                    </div>
                                    <div className=' w-[30%] flex flex-row items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D] flex items-center '> BA</p>
                                        <input type="checkbox" className='rounded-full' />

                                    </div>
                                    <div className=' w-[30%] flex flex-row items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D] flex items-center '>  DA</p>
                                        <input type="checkbox" className='rounded-full' />

                                    </div>


                                </div>

                                <div className='flex justify-between'>
                                    <div className=' w-[100%] flex flex-col items-start border border-white shadow-md p-2'>
                                        <p className='text-[11px] text-[#6D6D6D]'>No of students</p>
                                        <p>75</p>
                                    </div>
                                </div>





                            </div>

                            <div className=' w-[100%] flex flex-col items-start border border-white shadow-md p-2'>
                                <p className='text-[11px] text-[#6D6D6D]'>Total students</p>
                                <p>431</p>
                            </div>
                            <div className=' w-[100%] flex flex-col items-start border border-white shadow-md p-2'>
                                <p className='text-[11px] text-[#6D6D6D]'>Total students</p>
                                <p>431</p>
                            </div>

                        </div>




                    </div>






                </div>
            </div>
        </>

    )
}

export default AdminDashboard
