import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import ShadyBanner from '../public/ShadyBanner.png'
import ShadyLogoWhite from '../public/ShadyLogoWhite.png'


const Hero = () => {
  return (
    <>
            {/* <div className="-z-10 fixed top-0 w-screen">
        <Image 
          src={ShadyBanner}
          alt={'shady_banner'}
        />
        
      </div> */}

    <div className='w-screen min-h-[990px] top-0'>
      <div className="z-0 mx-auto text-center md:mb-20 lg:mb-[6.25rem]">
      <div className='flex pt-32 justify-center m-auto min-h-[990px] text-white z-10'>
        <div className=' bg-black block w-[600px] h-[740px] rounded-t-full ' >
        <div className='pt-14 flex flex-col align-middle justify-center'>
          <p>
          Shady Palms Bar and Cafe

          </p>
          <div className='flex justify-center'>
          <Image 
                src={ShadyLogoWhite}
                alt= "shady_logo"
                height={160}
                width={160}
                
                />
          </div>


        </div>
          <h1 className="h1 mb-6">
            {/* Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `} */}
            <span className="inline-block">
              {/* Brainwave{" "} */}

            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {/* Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app. */}
          </p> 
          <button>
            Book a Table
          </button>
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
      </>

  )
}

export default Hero