import Image from 'next/image'
import React, { useState } from 'react'
import ShadyLogoWhite from '@/public/ShadyLogoWhite.png'
import Link from 'next/link'
import LogoLink from './LogoLink'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className='top-0 sticky p-5 pl-12 pr-12 mx-auto z-20 md:items-center text-white'>
          <div className="container hidden relative py-6 sm:flex justify-between ">
            <Image 
              src={ShadyLogoWhite}
              alt= "shady_logo"
              height={160}
              width={160}
              className='hidden md:flex'
            />
            <ul className="hidden md:flex justify-between my-auto gap-x-12 text-white">
              <li key={"one"}>
                <Link href="/">
                  <p>Whats On</p>
                </Link>
              </li>
              <li key={"two"}>
                <Link href="/menu">
                  <p>Menu</p>
                </Link>
              </li>
              <li key={"three"}>
                <Link href="/booking">
                  <p>Book a Table</p>
                </Link>
              </li>
              <li key={"four"}>
                <Link href="#footer">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-end sm:hidden relative my-4'>
            <Image 
                src={ShadyLogoWhite}
                alt= "shady_logo"
                height={160}
                width={160}
                className='hidden md:flex'
              />
            <button type="button" className="" onClick={handleDrawerToggle}>
              {/* Menu icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
            <Sidebar isOpen={isDrawerOpen} toggle={handleDrawerToggle} />
          </div>
    </header>
  )
}

export default Navbar