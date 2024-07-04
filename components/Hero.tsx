import React from 'react'
import Image from 'next/image'
import ShadyBanner from '../public/ShadyBanner.png'
import ShadyLogoWhite from '../public/ShadyLogoWhite.png'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import Link from 'next/link'
import logowhite2 from '@/public/logowhite2.png'
import logowhite1 from '@/public/logowhite1.png'


const Hero = () => {
  return (

    <div className='w-screen min-h-[740px] top-0'>
      <div className="z-0 mx-auto text-center mb-0 md:mb-20 lg:mb-[6.25rem] ">
        <div className='flex pt-10 md:pt-24 sm:justify-evenly m-auto min-h-[650px]  
           z-10 bg-[#0D0C11] rounded-t-full mt-20 md:w-[600px] 
          h-[740px] md:mt-0 flex-col sm:h-[740px] pb-20 '>
          <div className='flex pt-12 sm:pt-0 justify-center '>
            <Image 
                  src={logowhite2}
                  alt= "shady_logo"
                  height={160}
                  width={160}
                  
                  />
          </div>

          <h1 className="h1 md:mb-6 text-6xl pt-12">
            
            <span className='text-[12rem]'>
              BAR
            </span>
          </h1>
          
          <span className="inline-block text-xl pt-6 ">
              The Village Local
            </span>
          <div className="pt-6 md:pt-12 pb-8 text-[#FBB117]">
          <Button variant={'outline'} className='border-[#FBB117]'>
            <Link href='/booking'>
            Book a Table
            </Link>
          </Button>
          </div>
          <div className='w-2/3 mx-auto'>
            <Separator />

          </div>

          <div className='pb-12 pt-4'>
            <p>
            427 Logan Road, Stones Corner QLD 4120
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero