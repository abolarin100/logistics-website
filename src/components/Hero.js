import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive';
import ha from '../images/hero1.png'
import hb from '../images/hero1.png'
import hc from '../images/hero2.png'
import hd from '../images/hero2.png'
import Offers from './Offers';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const navigateToPage = (path) => {
        navigate(path);
        // setNav(false); // Close the menu after navigation
      };


    const slides = isSmallScreen
        ? [
            {
                url: hc,
                title: 'Salmon',
            },
            {
                url: hd,
                title: 'Salmon',
            },
        ]
        : isLargeScreen
            ? [
                {
                    url: ha,
                    title: 'Salmon',
                },
                {
                    url: hb,
                    title: 'Salmon',
                },
            ]
            : [];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='w-full pb-16 h-[80vh] lg:h-[100vh] relative '>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    className={`absolute w-full h-full  ${currentIndex === slideIndex ? '' : 'hidden'
                        }`}
                >
                    <img
                        className='w-full h-[80vh] md:h-full object-cover md:object-cover '
                        src={slide.url}
                        alt={slide.title}
                    />
                </div>
            ))}
            {/* <div className='bg-black/30 absolute top-12 left-0 w-full h-[70vh]' /> */}
            <div className='absolute top-40 w-full h-[70vh] flex flex-col justify-center text-white'>
                <div className='justify-center md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <h1 className='font-bold mb-4 text-3xl md:text-6xl drop-shadow-2xl w-[65%]'>
                        Your Delivery Partner for <span className='text-[#FFA62B]'>Fast and Reliable</span> Service
                    </h1>
                    {/* <h1 className='font-bold mb-4 text-3xl md:text-6xl drop-shadow-2xl'>
                    Partner for Fast and 
                    </h1>
                    <h1 className='font-bold mb-4 text-3xl md:text-6xl drop-shadow-2xl'>
                    Reliable Service
                    </h1> */}
                    <p className='text-xl mb-4 text-white w-[95%] md:w-[50%]'>From small packages to bulk deliveries, we handle your parcels with care and ensure they reach their destination on time.</p>
                    <button 
                    onClick={() => navigateToPage('/bookd')}
                    className='px-4 text-lg font-[500] rounded-full relative top-5 bg-[#00401A] hover:text-white border-none transform transition-transform hover:scale-110'>
                        Book a Delivery
                    </button>
                    <button className='px-4 text-lg font-[500] rounded-full relative ml-4 top-5 bg-white text-[#00401A]  border-none transform transition-transform hover:scale-110'>
                        Track My Parcel
                    </button>
                </div>
                <div className='flex absolute bottom-8 lg:-bottom-60 justify-center  pt-6 w-full'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-white' : 'text-gray-500'
                                }`}
                            onClick={() => goToSlide(slideIndex)}
                        >
                            <RxDotFilled className='relative bottom-8 xl:bottom-48' />
                        </div>
                    ))}
                </div>
            </div>



        </div>

    );
};

export default Hero;
