import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosClock } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import pa from '../images/skills.png'
import ca from '../images/course1.png'
import cb from '../images/course2.png'
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
import si from '../images/side.png'
import wk from '../images/worknew.png'
import pr from '../images/profile.png'
import wb from '../images/Webpattern.png'
import pw from '../images/PricewaterhouseCoopers_Logo 1.png'
import ns from '../images/National_Health_Service_(England)_logo 1.png'
import jg from '../images/Jaguar logo 1.png'
import bm from '../images/Birmingham logo 1.png'
import cv from '../images/HM_Civil_Service_logo 1.png'
import ll from '../images/LloydsBankLogo 1.png'
import hm from '../images/Home_Office 1.png'
import mb from '../images/faqsmob.png'

import Slider from 'react-slick';
import FAQ from './Faqs';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';




const Skills = () => {

    const navigate = useNavigate();

    const handleData = () => {
      navigate('data-analysis');
    };
    const handleBusiness = () => {
      navigate('business-analysis');
    };

    const reviews = [
        { name: 'John Doe', role: 'Student', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'Jane Doe', role: 'Student', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'John Mark', role: 'Student', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'Mark Doe', role: 'Student', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
        { name: 'John Jane', role: 'Student', text: ' Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi, metus nec fringilla accumsan, risus sem sollicitudin lacus' },
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
                        className=' w-[100%] md:w-[80%]   object-cover sm:object-contain md:object-contain lg:object-cover '
                        src={pa}

                    />
                </div>
                <div className='w-[100%] md:w-[70%] lg:w-[50%] flex flex-col justify-center gap-3 mb-8 md:mb-0  '>
                    <h2 className='font-semibold text-xl md:text-xl  lg:text-2xl'>Enhance Your Tech Skills</h2>
                    <p className='  text-left font-normal pr-0 sm:pr-0 md:pr-0 lg:pr-20 text-xs sm:text-xs md:text-xs lg:text-base'>At Smart Approaches, we are committed to empowering individuals with the knowledge and skills essential for success in the ever-evolving landscapes of business and data analysis.</p>

                    <button className=' text-xs sm:text-xs md:text-xs lg:text-base w-[38%] sm:w-[50%] md:w-[40%] lg:w-[31%]   items-start bg-blue-500 text-white border-blue-500 transform transition-transform hover:scale-110 mt-3'>
                        Learn more
                    </button>
                </div>


            </div>

            <div className='px-10 md:px-16 py-8'>
                <h3 className='text-2xl md:text-2xl font-semibold pb-4'>Our Courses</h3>
                <p>Handpicked instructors and expertly designed courses for modern students and entrepreneurs</p>
            </div>

            <div className='w-full relative  px-8 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start '>
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img src={ca} alt=""
                        className='h-40 w-full object-cover'
                    />
                    <div className=' shadow-md shadow-gray-400 w-full'>
                        <div className='flex flex-row justify-between pt-2 px-4'>
                            <div className=''>
                                <h2 className='font-semibold'>Business Analysis</h2>
                                <div className='flex space-x-2 pt-1'>
                                    <img src={st} alt="" className='object-contain w-[45%] ' />
                                    <p className='text-xs'>5.00</p>
                                </div>
                            </div>
                            <p className='text-xs pt-1 text-blue-500'>Learn more>>> </p>
                        </div>

                        <div className='flex flex-row justify-between pt-4 px-4'>

                            <div>
                                <p className='text-xs'>
                                    <IoIosClock className='inline-block mr-1 text-blue-500' />
                                    12 weeks
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                            <p className='text-base font-semibold'>£600</p>
                            <button className='hover:bg-blue-500 hover:text-white text-xs bg-white text-blue-500 border-1 border-blue-500' onClick={handleBusiness}>Enroll Now</button>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img src={cb} alt=""
                        className='h-40 w-full object-cover'
                    />
                    <div className='shadow-md shadow-gray-400 w-full'>
                        <div className='flex flex-row justify-between pt-2 px-4'>
                            <div className=''>
                                <h2 className='font-semibold'>Data Analysis</h2>
                                <div className='flex space-x-2 pt-1'>
                                    <img src={st} alt="" className='object-contain w-[45%] ' />
                                    <p className='text-xs'>5.00</p>
                                </div>
                            </div>
                            <p className='text-xs pt-1 text-blue-500'>Learn more>>> </p>
                        </div>

                        <div className='flex flex-row justify-between pt-4 px-4'>

                            <div>
                                <p className='text-xs'>
                                    <IoIosClock className='inline-block mr-1 text-blue-500' />
                                    12 Weeks
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between px-4 pt-4 pb-4'>
                            <p className='text-base font-semibold'>£600</p>
                            <button className=' hover:bg-blue-500 hover:text-white text-xs bg-white text-blue-500 border-1 border-blue-500' onClick={handleData}>Enroll Now</button>
                        </div>
                    </div>


                </div>
            </div>

            <div className='bg-custom-blue items-center mx-20 my-24 px-16 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
            </div>

            <div className="bg-contain md:bg-cover  " style={{ backgroundImage: `url(${bg})` }}>
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


            </div >

            <div className='bg-white pt-8 px-8 md:px-10 lg:px-16  flex flex-col md:flex-row'>
                <div>
                    <h2 className='text-2xl font-bold '>How it Works</h2>
                    <p className='text-sm mt-4'>Your online learning made easy</p>

                    <div>
                        <div className='flex flex-row mt-8 gap-4'>

                            <img src={si} alt="" />
                            <div className=' flex flex-col  justify-between   '>
                                <div className='relative top-1'>
                                    <h3 className='font-semibold text-base'>Explore Courses</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%] '>Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                                </div>

                                <div className='relative top-5 md:top-5 lg:top-3'>
                                    <h3 className='font-semibold text-base'>Sign Up and Pay</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%]'>Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                                </div>

                                <div className='relative top-10 md:top-10 lg:top-5'>
                                    <h3 className='font-semibold  text-base'>Start Learning</h3>
                                    <p className='text-sm mt-2 w-[100%] md:w-[90%]'>Rorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                                </div>
                            </div>
                        </div>
                        <button className=' hover:scale-110 mt-20 md:mt-16 bg-new-blue text-white my-0 md:my-4 lg:mt-16 '>Get Started</button>
                    </div>
                </div>

                <div className='my-8 w-full xl:w-[60%]'>
                    <img src={wk} alt="" className='w-full rounded-bl-3xl rounded-tr-3xl h-[100%] xl:h-[77%] object-cover xl:object-cover ' />
                </div>


            </div>

            <div className='bg-new-blue py-8 '>
                <div className='flex flex-row justify-between px-8 md:px-12 lg:px-20    '>
                    <h3 className='text-white text-xl md:text-2xl font-semibold'>What our students have to say</h3>
                    <div className='hidden md:flex flex-row gap-3 '>
                       
                    </div>
                </div>
                <div>
                <Slider {...settings}  className=' w-[92%] px-8 md:px-12 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className='flex flex-row bg-custom-blue px-8 py-4 rounded-tr-3xl '>
              <div>
                <img src={pr} alt='' className='rounded-full object-contain' />
              </div>
              <div className='ml-6 mt-3'>
                <h3 className='font-semibold'>{review.name}</h3>
                <p className='text-xs mt-2'>{review.role}</p>
              </div>
            </div>
            <div className='rounded-bl-3xl bg-white px-10 py-6'>
              <p className=' font-worksans text-new-blue text-3xl'>"</p>
              <p className='text-sm'>{review.text}</p>
              <p className=' flex justify-end mt-2 font-worksans text-new-blue text-3xl'>"</p>
            </div>
          </div>
        ))}
      </Slider>
      
            
                </div>

               </div>

               <div className='hidden md:block bg-white '>
               <div className="py-16 mt-6 items-center flex flex-col  " 
         style={{
           backgroundImage: `url(${wb})`, 
           backgroundSize: 'contain', 
           backgroundRepeat: 'no-repeat', 
           backgroundPosition: 'center', 

           
         }}
    >
                        <h2 className=' text-lg md:text-lg lg:text-2xl  font-semibold items-center text-center'>Our Alumni have gone on to work at these organizations after training</h2>

                        <div className='mt-4 w-[80%]'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 mx-8  '>
                        <div><img src={ns} alt="" className='object-contain w-[75%]  relative top-4' /></div>
                            <div><img src={pw} alt="" className='object-contain w-[60%] relative top-2' /></div>
                            <div><img src={jg} alt="" className='object-contain relative top-1 right-2 w-[70%] ' /></div>
                            <div><img src={bm} alt="" className='object-contain w-[80%] relative top-7 ' /></div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 mt-10 gap-5 mx-20 pl-5'>
                            
                            <div><img src={cv} alt="" className='object-contain relative top-3 w-[50%]' /></div>
                            <div><img src={ll} alt="" className='object-contain relative top-7 w-[65%]' /></div>
                            <div><img src={hm} alt="" className='object-contain relative top-3 w-[55%]' /></div>

                        </div>

                        </div>
                    </div>
                     
               </div>
               <div className=' md:hidden bg-white '>
               <div className="py-20 mt-6 items-center flex flex-col  " 
         style={{
           backgroundImage: `url(${mb})`, 
           backgroundSize: 'contain', 
           backgroundPosition: 'center',
           width: '100%' 

           
         }}
    >
                        <h2 className=' text-base  font-bold items-center text-center mx-4'>Our Alumni have gone on to work at these organizations after training</h2>

                        <div className='mt-4 w-[85%]'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 mx-8  '>
                        <div><img src={ns} alt="" className='object-contain w-[75%]  relative top-4' /></div>
                            <div><img src={pw} alt="" className='object-contain w-[70%] relative top-2' /></div>
                            <div><img src={jg} alt="" className='object-contain relative top-1 right-2 w-[80%] ' /></div>
                            <div><img src={bm} alt="" className='object-contain w-[90%] relative top-7 ' /></div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 mt-10 gap-5 mx-10 pl-5'>
                            
                            <div><img src={cv} alt="" className='object-contain relative top-3 right-6 w-[100%]' /></div>
                            <div><img src={ll} alt="" className='object-contain relative top-3 w-[100%]' /></div>
                            <div><img src={hm} alt="" className='object-contain relative top-5 left-10 w-[95%]' /></div>

                        </div>

                        </div>
                    </div>
                     
               </div>
               <FAQ />
               
        </div>
    );
};

export default Skills;



