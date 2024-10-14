import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosClock } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import pa from '../images/pexels.png'
import ca from '../images/delivery1.png'
import cb from '../images/delivery2.png'
import st from '../images/star.png'
import bg from '../images/group.png'
import lay from '../images/overlay.png'
import ji from '../images/Jira logo 1.png'
import sl from '../images/Slack logo 1.png'
import co from '../images/Confluence logo 1.png'
import ex from '../images/Microsoft excel logo 1.png'
import vi from '../images/visio.png'
import sq from '../images/SQL logo 1.png'
import bi from '../images/Power BI logo 1.png'
import si from '../images/Group 161.png'
import wk from '../images/works1.png'
import pr from '../images/profile.png'
import wb from '../images/Webpattern.png'
import pw from '../images/PricewaterhouseCoopers_Logo 1.png'
import ns from '../images/National_Health_Service_(England)_logo 1.png'
import jg from '../images/Jaguar logo 1.png'
import bm from '../images/Birmingham logo 1.png'
import cv from '../images/HM_Civil_Service_logo 1.png'
import ll from '../images/LloydsBankLogo 1.png'
import hm from '../images/parcel.png'
import mb from '../images/faqsmob.png'
import ta from '../images/call.png'
import ra from '../images/fast.png'
import rb from '../images/real.png'
import rc from '../images/order.png'
import rr from '../images/john1.png'

import Slider from 'react-slick';
import FAQ from './Faqs';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Offers from './Offers';




const Skills = () => {

    const navigate = useNavigate();

    const handleData = () => {
        navigate('data-analysis');
    };
    const handleBusiness = () => {
        navigate('business-analysis');
    };

    const reviews = [
        { name: 'John Doe', role: 'Architect', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'Tim Ugo', role: 'CEO, Tee Ventures', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'Jane Doe', role: 'Fashion designer', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'Mike Ade', role: 'Graphic designer', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'John Jane', role: 'Trader', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        ,

    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // dots: true,
        // arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 767, // for small screens
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1023, // for medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 9999, // for large screens
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='w-full relative  bg-blue-00 mt-16'>
            <div className=' flex flex-col-reverse md:flex md:flex-row py-8 px-10 md:px-20 justify-between'>
                <div className=' '>
                    <img
                        className=' w-[100%] md:w-[80%] lg:w-[100%]   object-cover sm:object-contain md:object-contain lg:object-cover '
                        src={pa}

                    />


                    <div

                        className=' z-50 bg-white bottom-11 left-24 hidden lg:flex text-lg w-[120%] sm:w-[120%] md:w-[90%] relative right-5 sm:right-5 md:right-0 font-bold text-gray-700 border-[1px] border-[#ACACAC] p-4 rounded shadow-md  justify-between  gap-3 pb-4'
                    >


                        <div className=''>
                            <img className='w-full h-[25px] object-contain' src={ra} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Fast delivery</p>
                        </div>

                        <div className='border-l-2 pl-5'>
                            <img className='w-full h-[25px] object-contain' src={rb} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Real time tracking</p>
                        </div>
                        <div className='border-l-2 pl-5'>
                            <img className='w-full h-[25px] object-contain' src={rc} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Convenient order</p>
                        </div>



                    </div>
                    <div

                        className='z-50 bg-white bottom-9 lg:hidden mx-3 mr-6 flex text-lg left-2 md:left-0 w-[87%] sm:w-[87%] md:w-[75%] relative  font-bold text-gray-700 border-[1px] border-[#ACACAC] p-4 rounded shadow-md  justify-between  gap-3 pb-4'
                    >


                        <div className=''>
                            <img className=' h-[25px] object-contain' src={ra} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Fast delivery</p>
                        </div>

                        <div className='border-l-2 pl-5'>
                            <img className=' h-[25px] object-contain' src={rb} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Real time tracking</p>
                        </div>




                    </div>
                    <div

                        className='z-50 bg-white left-16 md:left-12 bottom-9 lg:hidden mx-3 mr-6   text-lg w-[50%] sm:w-[50%] md:w-[50%] relative  font-bold text-gray-700 border-[1px] border-[#ACACAC] p-4 rounded shadow-md  justify-start items-start  gap-3 pb-4'
                    >


                        <div className=' justify-start items-start'>
                            <img className=' h-[25px] object-contain items-start justify-start' src={rc} alt='' />
                            <p className=' text-sm text-[#00401A] font-[500] pt-3'>Convenient order</p>
                        </div>





                    </div>


                </div>
                <div className='w-[100%] md:w-[80%] lg:w-[50%] flex flex-col justify-center gap-3 mb-8 md:mb-0  '>
                    <h2 className='font-semibold text-xl md:text-xl  lg:text-2xl'>Delivering Convenience with Every Parcel</h2>
                    <p className='  text-left font-normal pr-0 sm:pr-0 md:pr-0 lg:pr-20 text-xs sm:text-xs md:text-xs lg:text-base'>At Multi-Bag Deliveries (MBD), we make sending and receiving packages easy and affordable across Ghana. From food to clothes, drugs to gadgets, we’ve got you covered. Simply place your order, and MBD will deliver swiftly and securely.</p>

                    <button className='rounded-full px-0 lg:px-2 text-xs sm:text-xs md:text-xs lg:text-base font-[600] w-[55%] sm:w-[50%] md:w-[100%] lg:w-[35%]   items-start text-white bg-[#00401A]  border-none transform transition-transform hover:scale-110 mt-3'>
                        Send or Receive a Package
                    </button>

                </div>


            </div>

            <Offers />

            <div className='px-10 md:px-16 py-8 items-center mt-20'>
                <h3 className='text-2xl md:text-2xl font-semibold pb-4 text-center'>Delivery Options Tailored to Your Needs</h3>
                <p className='text-center'>We offer two delivery options you can choose from</p>
            </div>

            <div className='w-full md:w-[60%] relative  px-8 sm:px-8 md:pl-16 md:left-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-start justify-around '>
                <div className='flex flex-col items-start space-y-[1px] border p-3 shadow-md shadow-gray-400'>
                    <img src={ca} alt=""
                        className='h-45 w-full object-cover'
                    />
                    <div className='  w-full'>
                        <div className='flex flex-row justify-between pt-2 px-1 items-start'>
                            <div className='pt-4'>
                                <h2 className='font-semibold text-[#1E1E1E] text-2xl'>Premium Class Delivery</h2>

                            </div>
                            <p className='text-xs pt-1 text-blue-500'> </p>
                        </div>

                        <div className='flex flex-row justify-between pt-4 px-1'>

                            <p className='text-base'>Need your parcel delivered fast? Our Premium Class Delivery ensures same-day delivery for urgent parcels. Ideal for time-sensitive items, this service guarantees that your package reaches its destination quickly and reliably.</p>

                        </div>

                        <div className='flex flex-row-reverse justify-between px-1 mt-2 pt-4 pb-3'>
                            <p className='text-base font-semibold'></p>
                            <button className='hover:bg-green-700 hover:text-white text-base font-[600] bg-[#00401A] text-white border-1 border-none rounded-full' onClick={handleBusiness}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start space-y-[1px] border p-3 shadow-md shadow-gray-400'>
                    <img src={cb} alt=""
                        className='h-45 w-full object-cover'
                    />
                    <div className='  w-full'>
                        <div className='flex flex-row justify-between pt-2 px-1 items-start'>
                            <div className='pt-4'>
                                <h2 className='font-semibold text-[#1E1E1E] text-2xl'>Standard Class Delivery</h2>

                            </div>
                            <p className='text-xs pt-1 text-blue-500'> </p>
                        </div>

                        <div className='flex flex-row justify-between mt-2 pt-4 px-1'>

                            <p className='text-base'>For less time-sensitive deliveries, our Standard Class Delivery offers an affordable option with parcels delivered within 7 days. This service is perfect for regular deliveries that don’t require immediate attention.</p>

                        </div>

                        <div className='flex flex-row-reverse justify-between px-1 pt-4 pb-3'>
                            <p className='text-base font-semibold'></p>
                            <button className='hover:bg-green-700 hover:text-white text-base font-[600] bg-[#00401A] text-white border-1 border-none rounded-full' onClick={handleBusiness}>Book Now</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className='bg-custom-blue items-center mx-20 my-24 px-16 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div>
                    <h2 className='text-center text-3xl font-bold'>500+</h2>
                    <p className='text-center text-sm'>Students worldwide</p>
                </div>
                <div>
                    <h2 className='text-center text-3xl font-bold'>471+</h2>
                    <p className='text-center text-sm'>Total course views</p>
                </div>
                <div>
                    <h2 className='text-center text-3xl font-bold'>280+</h2>
                    <p className='text-center text-sm'>Five-star course reviews</p>
                </div>
                <div>
                    <h2 className='text-center text-3xl font-bold'>700+</h2>
                    <p className='text-center text-sm'>Students community</p>
                </div>
            </div> */}

            {/* <div className="bg-contain md:bg-cover  " style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay bg-cover h-full w-full flex flex-col gap-8 items-center py-10 " style={{ backgroundImage: `url(${lay})` }}>
                    <div className='items-center h-full flex flex-col gap-4' >
                        <h2 className='text-white text-center text-xl font-semibold'>Gain Practical Real-world Experiences</h2>
                        <p className='text-white items-center text-left md:text-center text-sm w-[75%] md:w-[45%]'>Our commitment goes beyond theoretical knowledge — we're dedicated to providing you with a hands-on learning experience that translates directly to practical work scenarios.</p>
                    </div>
                    <div className=' bg-gradient-to-t from-white via-white via-gray-100 via-white  to-gray-500 items-center w-[78%] md:w-[45%] pt-4 pb-8 flex flex-col'>
                        <div><h3 className='text-sm pt-3 font-semibold text-center '>You will learn to use industry tools like</h3>
                            <hr className='mt-3 border-gray-400 border-b w-[70vw] md:w-[40vw] lg:w-[30vw] ' />
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-3 mt-3 px-12  '>
                            <div><img src={ji} alt="" className='object-contain w-[40%] relative top-2' /></div>
                            <div><img src={sl} alt="" className='object-contain relative top-1 right-2 w-[75%] ' /></div>
                            <div><img src={co} alt="" className='object-contain w-[90%] relative top-3 ' /></div>
                        </div>
                        <div className='grid grid-cols-4 md:grid-cols-4 mt-2 gap-6 pl-4'>
                            <div><img src={bi} alt="" className='object-contain w-[95%]  relative top-2' /></div>
                            <div><img src={sq} alt="" className='object-contain relative top-3 w-[70%]' /></div>
                            <div><img src={ex} alt="" className='object-contain relative top-3 w-[80%]' /></div>
                            <div><img src={vi} alt="" className='object-contain relative top-3 w-[80%]' /></div>

                        </div>
                    </div>
                </div>


            </div > */}

            <div className='bg-white  pt-8 px-8 md:px-10 lg:pl-16  flex flex-col md:flex-row md:justify-between md:items-center relative '>
                <div className='bg-gradient  px-4'>
                    <h2 className='text-2xl font-bold '>How it Works</h2>
                    <p className='text-sm mt-4'>Sending a parcel with MBD is simple and stress-free.</p>

                    <div>
                        <div className='flex flex-row mt-8 gap-4'>

                            <img src={si} alt="" />
                            <div className=' flex flex-col  justify-between   '>
                                <div className='relative top-1'>
                                    <h3 className='font-semibold text-base'>Book Your Delivery</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%] '>Fill in the delivery details and choose your preferred service.</p>
                                </div>

                                <div className='relative top-5 md:top-5 lg:top-3'>
                                    <h3 className='font-semibold text-base'>Pay Securely Online</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%]'>Make payments through our safe and easy payment gateway.</p>
                                </div>

                                <div className='relative top-10 md:top-10 lg:top-5'>
                                    <h3 className='font-semibold  text-base'>Track Your Parcel</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%]'>Get real-time updates from pick-up to final delivery.</p>
                                </div>
                            </div>
                        </div>
                        <button className=' hover:scale-110 mt-20 md:mt-16 bg-[#00401A] font-[600] rounded-full text-white my-0 md:my-4 lg:mt-16 '>Get Started</button>
                    </div>
                </div>

                <div className='my-8 w-full xl:w-[50%]'>
                    <img src={wk} alt="" className=' rounded-bl-3xl rounded-tr-3xl h-[100%] xl:h-[75%] object-cover xl:object-cover ' />
                </div>


            </div>

            <div className='bg-white py-8 '>
                <div className='flex flex-col justify-center px-8 md:px-12 lg:px-20 items-center    '>
                    <h3 className='text-[#001A0A] text-xl md:text-4xl font-semibold items-center text-center'>What Our Clients Say</h3>
                    <p className='text-center text-lg pt-2'>See why businesses and individuals trust MBD for their local deliveries.</p>
                </div>
                <div>
                    <Slider {...settings} className='  w-[92%] px-8 md:px-12 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                        {reviews.map((review, index) => (
                            <div key={index} className='border'>
                                <div className='flex flex-row bg-white px-8 py-4 rounded-tr-3xl  '>
                                    <div>
                                        <img src={rr} alt='' className='rounded-full object-contain' />
                                    </div>
                                    <div className='ml-6 mt-3'>
                                        <h3 className='font-[700]'>{review.name}</h3>
                                        <p className='text-xs mt-2 text-[#00401A]'>{review.role}</p>
                                    </div>
                                </div>
                                <hr className='mx-6' />
                                <div className='rounded-bl-3xl bg-white px-10 py-6'>
                                    <p className=' font-worksans text-[#FFA62B] text-3xl'>"</p>
                                    <p className='text-sm'>{review.text}</p>
                                    <p className=' flex justify-end mt-2 font-worksans text-[#FFA62B] text-3xl'>"</p>
                                </div>
                            </div>
                        ))}
                    </Slider>


                </div>

            </div>


            <div className='bg-white  pt-8 px-8 md:px-10 lg:pl-16  flex flex-col md:flex-row md:justify-between md:items-center relative '>
                <div className='bg-white  pl-8 pt-8'>
                    <h2 className='text-2xl lg:text-5xl font-bold '>Ready to Send a Parcel?</h2>
                    <p className='text-sm mt-4'>Experience seamless parcel deliveries with MBD.</p>
                    <button className=' hover:scale-110 mt-10 md:mt-8 bg-[#00401A] font-[600] rounded-full text-white my-0 md:my-4 lg:mt-8 '>Get Started Now</button>

                    <div className=' w-[92%] md:w-[100%] lg:w-[99%] bg-[#E6ECE8] items-center mx-0 my-8 px-4 py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div>
                            <h2 className='text-left text-3xl font-bold'>250+</h2>
                            <p className='text-left text-base md:text-sm lg:text-sm xl:text-base'>Completed Delivery</p>
                        </div>
                        <div>
                            <h2 className='text-left text-3xl font-bold'>200+</h2>
                            <p className='text-left text-base md:text-sm lg:text-sm xl:text-base'>Satisfied Clients</p>
                        </div>
                        <div>
                            <h2 className='text-left text-3xl font-bold'>7+</h2>
                            <p className='text-left text-base md:text-sm lg:text-sm xl:text-base'>Years Experience</p>
                        </div>
                       
                    </div>
                </div>

                <div className='my-8 w-[100%] md:w-[50%] xl:w-[50%] ml-6 md:ml-0'>
                    <img src={hm} alt="" className=' rounded-bl-3xl rounded-tr-3xl h-[100%] xl:h-[75%] object-cover xl:object-cover ' />
                </div>


            </div>
            <FAQ />

        </div>
    );
};

export default Skills;



