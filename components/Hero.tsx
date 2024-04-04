import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className='w-full h-[90vh]  relative bg-gradient-to-br from-[#1d2120c4]  to-[#181717ed] '>
    <Image 
      src='/lp4.jpg'
      objectFit='cover'
      layout='fill'
      alt='hero section'
      className="z-[-5]"
    />
   
    <div className='text-white relative flex flex-col gap-[35px] px-5 align-bottom justify-center  pt-[25vh]'>
    <div className='text-white flex  align-bottom justify-center  font-semibold text-1xl '>
       welcome to
        <span className='text-[17px] md:text-[25px]   leading-10 pl-5 font-bold  '>
            Toymantech Data hub
        </span>
    </div>
    <div className='flex align-middle justify-center text-center text-[19px] '>
        Welcome to a technology platform that provides instant and smooth services at the best possible price without compromisung quality.
    </div>
    <div className='  flex flex-row justify-center align-middle gap-5 md:gap-[5rem] mt-3 mx-5'>
        <div className=' hover:text-cyan-900 bg-[#9ca3af] rounded-md px-[2.5rem] py-[.5rem] text-[20px] text-[#180909bd]  font-bold'>
           <Link href='#'>Login</Link> 
        </div>
        <div className=' hover:text-cyan-900  rounded-md px-[2.5rem] py-[.5rem] text-[20px] text-[#180909bd]  font-bold bg-[#9ca3af]'>
           <Link href='#'>Register</Link> 
        </div>
    </div>
    </div>
 </main>
  )
}

export default Hero