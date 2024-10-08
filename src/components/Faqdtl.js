// FAQ.js
import React, { useState } from 'react';
import bg from '../images/faqbg.png'
import bs from '../images/faqsm.png'
import Footer from './Footer';


const Faqdtl = () => {
    const faqs = [
        { question: 'Are classes online or physical?', answer: 'All classes hold online (virtually).' },
        { question: 'Are classes live sessions or prerecorded?', answer: 'All classes are live sessions. However, live sessions are recorded in case you miss any class or want to go over what was taught in the class.' },
        { question: 'What if I miss a class?', answer: 'All classes are recorded from live sessions. You will have access to the recorded class.' },
        { question: 'How many days in a week do classes hold?', answer: 'Two days in a week per course.' },
        { question: 'What are the days and time?',
          answer: `
          Business Analysis:
            Monday 5:30pm-7:30pm UK Time
            Wednesday 5:30pm-8:30pm UK Time
      |
          Data Analysis:
            Tuesday 5:30pm-8:30pm UK Time
            Thursday 5:30pm-8:30pm UK Time
          ` },
        { question: 'How much does the training cost?', answer: '£600 for outright payment. £650 for installment payment (maximum of twice, £350 initially and £300 after one month).' },
        { question: 'Can payment be done in installments?', answer: 'Yes, a maximum of two installments per course.' },
        { question: 'What is the installment plan?', answer: '£650 for installment payment (maximum of twice, £350 initially and £300 after one month).' },
        { question: 'How long does the training last?', answer: '12 weeks.' },
        { question: 'Can I take two courses at a time?', answer: 'Yes. The training is flexible, and classes for each course hold on different days.' },
        { question: 'Can I join from outside the United Kingdom (UK)?', answer: 'Yes. You can join the training from any part of the world.' },
        { question: 'What are the requirements for the training?', answer: 'To enhance your learning experience, you need a working computer and good internet service.' },
        { question: 'Do I need to have background knowledge in tech before joining the training?', answer: 'No, you don’t need to have background knowledge in tech. The courses are designed to teach you all you need to know from the basics, simplified and extensive.' },
        { question: 'Is this training enough to get a job?', answer: 'Yes, it is enough to get a job in your chosen course. This training is comprehensive and will take you through the beginner level to the intermediate level in your tech career.' },
        { question: 'Will there be job search support?', answer: 'Yes. During and after the training, you will enjoy interview coaching by experts with professional CV writing to aid your job search.' },
        { question: 'Can I get sponsorship in the UK from tech jobs?', answer: 'Yes. Tech jobs are in the shortage occupation list, so you can be sponsored.' },
        { question: 'Is there any benefit for referring someone?', answer: 'Yes, there is £50 referral bonus per referral on every referred person who completes payment.' },
      ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-white pt-12 md:mt-0 lg:pt-12'>
       <div className='mt-6'>
       <div className=' hidden md:flex items-center justify-center mb-6 bg-cover md:bg-contain h-[15vh] md:h-[22vh] xl:h-[62vh]' style={{ backgroundImage: `url(${bg})`,  backgroundRepeat: 'no-repeat' }}>
        <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white'>Frequently Asked Questions</h2>
        </div>
       <div className=' md:hidden flex items-center justify-center mb-6 bg-cover  h-[45vh] ' style={{ backgroundImage: `url(${bs})`,  backgroundRepeat: 'no-repeat' }}>
        <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white'>Frequently Asked Questions</h2>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center   mx-0 py-8 ">
      {faqs.map((faq, index) => (
        <div key={index} className=" w-[90%] md:w-[80%] faq-item border border-gray-300 ">
          <div className="question flex justify-between items-center cursor-pointer p-4" onClick={() => toggleAnswer(index)}>
          <h3 className='w-[85%] md:w-[100%]'>{faq.question}</h3>
            <div className="toggle-btn bg-new-blue w-6 h-6 rounded-full  text-white font-bold text-xl flex justify-center items-center ">
                <p className='pb-0.5 md:pb-1 text-white'>{activeIndex === index ? '-' : '+'}</p>
                </div>
           
          </div>
          <div className={`answer p-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p className='w-[85%] md:w-[100%]'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
       </div>
       <Footer />
    </div>
  );
};

export default Faqdtl;
