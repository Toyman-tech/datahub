import React from 'react'


const Reviews = () => {
  return (
    <div className='flex flex-col justify-center align-middle w-[100vw] gap-10 pt-10 bg-[#f8f8ff]'>
       <div className='flex flex-col gap-3'>
          <h1 className='flex text-center justify-center align-middle text-[1.3rem] font-semibold'>
            Users Reviews
          </h1>
          <p className='text-center flex justify-center align-middle'>
            Checkout these reviews from some of our customers
          </p>
       </div>
       <div>Carousel</div>
    </div>
  )
}

export default Reviews