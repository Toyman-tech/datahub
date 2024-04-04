import React from 'react'

const Rating = () => {
  return (
    <div className='flex flex-col md:flex-row w-[100vw] gap-[50px] md:gap-5  bg-[#f8f8ff] pt-10 justify-center align-middle'>
        <div className='flex flex-row gap-[50px] justify-center align-middle mx-5'>
            <div className='flex flex-col gap-2 '>
               <div className='flex text-[#607D8B] justify-center align-middle text-[1.5rem] font-bold'>
                2852
                </div>
               <div className='flex justify-center align-middle font-semibold'>
                Registered Users 
               </div>
            </div>
            <div className='flex flex-col gap-2 '>
               <div className='flex  text-[#607D8B]  font-bold justify-center align-middle text-[1.5rem]'>
                1080
                </div>
               <div className='flex justify-center align-middle font-semibold'>
                Daily Visitors 
               </div>
            </div>
        </div>
        <div className='flex flex-row gap-[65px] justify-center align-middle mx-5'>
            <div className='flex flex-col gap-2 '>
               <div className='flex text-[#607D8B]  font-bold justify-center align-middle text-[1.5rem]'>
                2000
                </div>
               <div className='flex justify-center align-middle font-semibold'>
                Total Agent 
               </div>
            </div>
            <div className='flex flex-col gap-2 '>
               <div className='flex text-[#607D8B]  font-bold justify-center align-middle text-[1.5rem]'>
                1985
                </div>
               <div className='flex justify-center align-middle font-semibold'>
                Active Users 
               </div>
            </div>
        </div>
    </div>
  )
}

export default Rating