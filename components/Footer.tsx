import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const socials=
[
  { href:'#', key: 'linkedin', name:'/linkedin1.svg',},
  {href:'#', key: 'instagram', name:'/insta2.svg',},
  {href: '#', key: 'x-app', name:'/twitter2.svg', },
  {href: '#', key: 'Whatsapp', name:'/whatsapp.svg', },
]

const Footer = () => {
  return (
    <div className='flex flex-col gap-8 w-[100vw] bg-[#9ca3afed] p-3  pt-10'>
     <div className='flex flex-col gap-3 p-5'>
        <div className='flex '>
            Logo
        </div>
        <div className='flex'>
            We offer instant recharge of Airtime, Databundle, Scratch cards,  Electricity Bills and more.....
        </div>
     </div>
     <div className='flex flex-col gap-2 font-semibold'>
        <h1>Useful Links</h1>
        <div className='flex flex-col md:flex-row p-2 gap-3 text-cyan-900'>
          <Link href='#'>Home</Link>
          <Link href='#'>About Us</Link>
          <Link href='#'>Services</Link>
          <Link href='#'>Login</Link>
          <Link href='#'>Data plans</Link>
        </div>
     </div>
     <div className='flex flex-col gap-5'>
        <h1 className='flex font-semibold '>Contact us Through</h1>
        <div className='flex flex-row justify-center allign-middle gap-5'>
            social media links
        </div>
     </div>
     <div className='flex justify-center align-middle '>
          &copy; <span className='font-bold'>Toymantech Data Hub.</span> All rights reserved.
        </div>
        <div className='flex  md:pr-4 justify-center align-middle '>
           {socials.map((social)=>(
                <div className='flex flex-row  rounded-full px-3'>
                <Link href={social.href} key={social.key}>
                  <Image 
                    src={social.name}
                    alt={social.key}
                    width={34}
                    height={34}
                    className='w-[3rem] p-1'
                  />
                </Link>
                </div>
              ))}
        </div>
    </div>
  )
}

export default Footer