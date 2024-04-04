import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Agent = () => {
  return (
    <div className='flex flex-col  w-[100vw] gap-3 pt-[30px] bg-[#f8f8ff]'>
      <div className='flex flex-col md:flex-row-reverse gap-3 p-7'>
      <div className='flex justify-center align- h-[20rem]'>
        <Image
          src='/lp3.jpg'
          alt='agent'
          height={50}
          width={430}
        />
      </div>
      <div className='flex flex-col gap-5 justify-center align-middle text-center'>
         <div className='font-semibold text-[1.5rem] mt-3'>
             Become An Agent
         </div>
         <div>
         Join our network of outstanding entrepreneurs patnering with TOYMANTECH DATA HUB. This will provide an 'easy-payments' experience closer to your network and earn a commission for every transaction you perform for your customers.
         </div>
         <div>
         We offer our Referrers the best referral program incentives to encourage entrepreneurial and managerial skill acquisition; enhance growth and development and general empowerment among our students on campuses of higher learning and youths in diaspora. Finally, to promote technology via the use of the advincing technology in the ecosystem.
         </div>
      </div>
      </div>
      <div className=' hover:text-cyan-900 bg-[ #1f293d80] rounded-md px-[2.5rem] py-[.5rem] text-[20px] text-[#180909bd]  font-bold bg-[#9ca3af] flex justify-center align-middle mx-4'>
           <Link href='#' className='flex text-center p-3'>Get Started</Link> 
        </div>
    </div>
  )
}

export default Agent