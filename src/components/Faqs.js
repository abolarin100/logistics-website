// FAQ.js
import React, { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const FAQ = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('faqdtl');
    };


    const faqs = [
        { question: 'Are classes online or physical?', answer: 'All classes hold online (virtually).' },
        { question: 'Are classes live sessions or prerecorded?', answer: 'All classes are live sessions. However, live sessions are recorded in case you miss any class or want to go over what was taught in the class.' },
        { question: 'Do I need to have background knowledge in tech before joining the training?', answer: 'No, you don’t need to have background knowledge in tech. The courses are designed to teach you all you need to know from the basics, simplified and extensive.' },
        { question: 'Can payment be done in installments?', answer: 'Yes, a maximum of two installments per course.' },
        { question: 'Can I take two courses at a time?', answer: 'Yes. The training is flexible, and classes for each course hold on different days.' },
        ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-white pt-16'>
        <div className='flex items-center justify-center mb-6'>
        <h2 className='text-2xl font-bold'>Frequently Asked Questions</h2>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center   mx-0 ">
      {faqs.map((faq, index) => (
        <div key={index} className=" w-[90%] md:w-[80%] faq-item border border-gray-300 ">
          <div className="question flex justify-between items-center cursor-pointer p-4" onClick={() => toggleAnswer(index)}>
          <h3 className='w-[85%] md:w-[100%] font-semibold'>{faq.question}</h3>
            <div className="toggle-btn bg-new-blue w-6 h-6 rounded-full  text-white font-bold text-xl flex justify-center items-center ">
                <p className='pb-0.5 md:pb-1 text-white'>{activeIndex === index ? '-' : '+'}</p>
                </div>
           
          </div>
          <div className={`answer p-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p className='w-[85%] md:w-[100%] '>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='mt-8 flex justify-center'>
        <button className='bg-new-blue text-white text-sm hover:scale-90' onClick={handleButtonClick}>See More Questions</button>
    </div>

    <div className='bg-custom-blue mt-10 flex flex-col md:flex-row h-[30vh] md:h-full '>
        <div className='flex flex-row py-8 pl-8 pr-0 md:pl-10 md:px-8 lg:px-20 justify-between'>
            <div className='w-[100%] md:w-[100%] lg:w-[70%] flex flex-col gap-6 md:gap-4 xl:ml-4'>
                <h2 className='text-xl font-semibold'>Subscribe to Our Weekly Newsletters</h2>
                <p className='text-sm'>Receive the latest educational materials, new courses, interesting posts, and much more!</p>
            </div>

            
        </div>
        <div className=' w-[82%] md:w-[70%] lg:w-[40%] xl:w-[35%] mr-6  md:bg-white flex flex-col md:flex-row justify-between pr-4 xl:ml-16  md:h-[20%] items-baseline ml-8 md:ml-0 relative top-0  md:top-16 lg:top-16'>
            <input type="text" placeholder='Enter Your Email' className='w-[95%] md:w-[75%] text-sm px-4 py-2 ' />
            <button className=' text-sm md:text-base my-2 px-3 md:px-3 lg:px-6 bg-new-blue text-white hover:scale-90'>Subscibe</button>
            </div>
    </div>
    <Footer />
    </div>
  );
};

export default FAQ;
