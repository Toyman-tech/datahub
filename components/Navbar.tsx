"use client"
import React from 'react'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import Threebarui from './ui/Threebarui'

const Navbar = () => {
    return (
        <main className='sticky w-[100vw] top-0  z-10'>
       <div className='  w-full  flex flex-row bg-[#9ca3afed] text-white justify-between align-middle p-7 transition duration-700 ease-in-out'>
          <div>logo</div>
          <div className=' hidden md:flex'>
             pc view
           </div>
           <div className='flex md:hidden z-10 text-black '>
              <Threebarui/>
           </div>
       </div>
       </main>
    )
}

export default Navbar