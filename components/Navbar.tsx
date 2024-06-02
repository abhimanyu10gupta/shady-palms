import Image from 'next/image'
import React from 'react'
import ShadyLogoWhite from '../public/ShadyLogoWhite.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='top-0 sticky pl-12 pr-12 p-5 flex justify-between max-w-7xl mx-auto z-20 md:items-center text-white'>
        <div className='container mx-auto px-4 h-full'>
            <div className='flex justify-between items-center h-full'>
                <Image 
                src={ShadyLogoWhite}
                alt= "shady_logo"
                height={160}
                width={160}
                />
                <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Whats On</p>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <p>Menu</p>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <p>Book a Table</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    



        {/* / </div> */}
        {/* // <div className='flex justify-end gap-16'>
        //     <div>
        //         Whats On?
        //     </div>
        //     <div>
        //         Menu
        //     </div>
        //     <div>
        //         Book a Table
        //     </div>
        //     <div>
        //         Contact
        //     </div>
        // </div> */}
    </header>
  )
}

export default Navbar