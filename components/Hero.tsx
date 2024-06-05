import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import ShadyBanner from '../public/ShadyBanner.png'
import ShadyLogoWhite from '../public/ShadyLogoWhite.png'
import { Button } from './ui/button'
import { Separator } from './ui/separator'


const Hero = () => {
  return (

    <div className='w-screen min-h-[990px] top-0'>
      <div className="z-0 mx-auto text-center md:mb-20 lg:mb-[6.25rem]">
      <div className='flex pt-16 justify-center m-auto min-h-[990px] text-white z-10'>
        <div className=' bg-[#0D0C11] w-[600px] h-[740px] rounded-t-full flex flex-col ' >
          <div className='flex justify-center pt-24'>
          <Image 
                src={ShadyLogoWhite}
                alt= "shady_logo"
                height={160}
                width={160}
                
                />
          </div>

          <h1 className="h1 mb-6 text-4xl pt-24">
            Shady Palms Bar & Cafe
            <span className="inline-block text-xl pt-12">
              Your local StoCos Bar
            </span>
          </h1>
          <div className="pt-12 pb-8">
          <Button>
            Book a Table
          </Button>
          </div>
          <div className='w-2/3 m-auto'>
            <Separator />

          </div>

          <div className='pb-12'>
            <p>
            427 Logan Road, Stones Corner QLD 4120
            </p>
          </div>
          </div>
 
          </div>

        {/* <div className='-z-10 top-0'>       */}
          {/* <Image 
          src={ShadyBanner}
          alt={'shady_banner'}
          sizes="100vw"
          
        /> */}
      {/* </div> */}

      </div>
      </div>

  )
}

export default Hero