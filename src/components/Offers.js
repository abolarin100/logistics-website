import React from 'react';
import pa from '../images/offer1.png'
import pb from '../images/offer2.png'
import pc from '../images/offer3.png'
import pd from '../images/offer4.png'

const Offers = () => {
  return (
    <div className='w-full relative top-16 bg-custom-blue'>
    <div className='w-full relative  mx-auto   px-24 sm:px-0 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-start  '>
      <div className='text-lg  w-[120%]  sm:w-[120%] md:w-[100%] relative bottom-6 right-5 sm:right-5 md:right-0 font-bold text-gray-700 bg-white p-4 sm:px-0 md:px-4 rounded shadow-md flex flex-col items-center justify-between gap-3 pb-6  '>
      <div>
      <img
            className='w-full h-[60px] object-contain '
            src={pa}
            
          />
      </div>
         <div className='items-center'>
            <h4 className='font-semibold'>Practical Training</h4>
            
         </div>
         
            <p className='text-center font-normal px-6 sm:px-2 md:px-6 text-sm sm:text-xs md:text-sm'>Gain practical insights and hands-on experience to apply your knowledge</p>
            
         
      </div>
      
      <div className='text-lg w-[120%]  sm:w-[120%] md:w-[100%]  relative bottom-6 right-5 sm:right-5 md:right-0  font-bold text-gray-700 bg-white p-4 rounded shadow-md flex flex-col items-center justify-between gap-3 pb-6  '>
      <div>
      <img
            className='w-full h-[60px] object-contain '
            src={pb}
            
          />
      </div>
         <div className='items-center'>
            <h4 className='font-semibold'>Expert Instruction</h4>
            
         </div>
         
            <p className='text-center font-normal px-6 sm:px-2 md:px-6  text-sm sm:text-xs md:text-sm'>Gain practical insights and hands-on experience to apply your knowledge</p>
            
         
      </div>
      
      <div className='text-lg w-[120%]  sm:w-[120%] md:w-[100%]  relative bottom-6 right-5 sm:right-5 md:right-0  font-bold text-gray-700 bg-white p-4 rounded shadow-md flex flex-col items-center justify-between gap-3 pb-6  '>
      <div>
      <img
            className='w-full h-[60px] object-contain '
            src={pc}
            
          />
      </div>
         <div className='items-center'>
            <h4 className='font-semibold'>Lifetime Access</h4>
            
         </div>
         
            <p className='text-center font-normal px-6 sm:px-2 md:px-6  text-sm sm:text-xs md:text-sm'>Gain practical insights and hands-on experience to apply your knowledge</p>
            
         
      </div>
      
      <div className='text-lg w-[120%]  sm:w-[120%] md:w-[100%]  relative bottom-6 right-5 sm:right-5 md:right-0 font-bold text-gray-700 bg-white p-4 rounded shadow-md flex flex-col items-center justify-between gap-3 pb-6  '>
      <div>
      <img
            className='w-full h-[60px] object-contain '
            src={pd}
            
          />
      </div>
         <div className='items-center'>
            <h4 className='font-semibold'>Remote Learning</h4>
            
         </div>
         
            <p className='text-center font-normal px-6 sm:px-2 md:px-6  text-sm sm:text-xs md:text-sm'>Gain practical insights and hands-on experience to apply your knowledge</p>
            
         
      </div>
      

     
    </div>
    </div>
  );
};

export default Offers;
