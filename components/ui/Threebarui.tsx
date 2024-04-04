"use client"
import React from 'react'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'


const Threebarui = () => {
  return (
    <Menu>
          <Menu.Button>
               <Image
                 src='/right.png'
                 width={40}
                 height={40}
                 alt='menu bar'
               />
          </Menu.Button>
          <Menu.Items className='w-full flex  gap-10 flex-col bg-[#9ca3af]  absolute right-0 top-[6rem] p-5 text-white text-[1.5rem]'>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-zinc-500'}  flex justify-center align-middle`}
                  href="/account-settings"
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}  flex justify-center align-middle`}
                  href="/account-settings"
                >
                  About Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}  flex justify-center align-middle`}
                  href="/account-settings"
                >
                  Services
                </a>
              )}
            </Menu.Item><Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}  flex justify-center align-middle`}
                  href="/account-settings"
                >
                  Pricing
                </a>
              )}
            </Menu.Item><Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}  flex justify-center align-middle`}
                  href="/account-settings"
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
  )
}

export default Threebarui