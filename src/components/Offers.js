import React from 'react';
import pa from '../images/call.png'
import pb from '../images/Layer2.png'
import pc from '../images/layer1.png'
import pd from '../images/off1.png'
import pe from '../images/off2.png'
import pf from '../images/off3.png'

const Offers = () => {

   const offerData = [
      {
         image: pa,
         title: 'Practical Training',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
      {
         image: pb,
         title: 'Expert Instruction',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
      {
         image: pc,
         title: 'Lifetime Access',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
      {
         image: pd,
         title: 'Remote Learning',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
      {
         image: pe,
         title: 'Remote Learning',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
      {
         image: pf,
         title: 'Remote Learning',
         description: 'Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet.',
      },
   ];

   return (
      <div className=' mx-0 md:mx-16 relative top-16 bg-[#E6ECE8] py-8 mb-4'>
         <h2 className=' items-center text-center text-4xl text-[#001A0A] font-[600] pb-6'>Make your work easier with us</h2>
         <div className='w-full relative  mx-auto   px-20 sm:px-0 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start  '>
            {offerData.map((offer, index) => (
               <div
                  key={index}
                  className='text-lg w-[120%] sm:w-[120%] md:w-[100%] relative right-5 sm:right-5 md:right-0 font-bold text-gray-700 border-[1px] border-[#ACACAC] p-4 rounded shadow-md flex flex-col items-start justify-between gap-3 pb-6'
               >
                  <div>
                     <img className='w-full h-[40px] object-contain' src={offer.image} alt={offer.title} />
                  </div>
                  <div className='items-start'>
                     <h4 className='font-semibold'>{offer.title}</h4>
                  </div>
                  <p className='item-start text-left w-[98%] font-normal px-0 sm:px-0 md:px-0 text-sm sm:text-xs md:text-sm'>
                     {offer.description}
                  </p>
               </div>
            ))}



         </div>
      </div>
   );
};

export default Offers;
