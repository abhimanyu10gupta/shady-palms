import React from 'react'
import Image from 'next/image'
import ShadyLogo  from '@/public/ShadyLogoWhite.png';
import { Separator } from '@/components/ui/separator';
import Map from './Map';
import logowhite from '@/public/logowhite1.png'
import logowhite2 from '@/public/logowhite2.png'
const Footer = () => {
  return (
    <div id="footer" className='w-full bg-[#0D0C11]'>
      <div className='flex flex-col'>
      <Map />
        <div className='basis-4/5 flex flex-col md:flex-row text-center justify-center'>
          <div className='flex flex-col justify-center m-auto p-5 basis-1/3'>
            <div className='mx-auto flex justify-center w-1/2 p-4'>
              <Image 
                src={logowhite2}
                alt={""}
                height={180}
                width={180}
                className=""
              />
            </div>

              <p className=''>
                What's On
              </p>
              <p>
                Menu
              </p>
              <p>
                Contact
              </p>

              <p>
                Reserve a Table
              </p>

          </div>
          <div className='md:hidden'>
          <Separator className='w-1/2 mx-auto' />
          </div> 
           <div className='hidden md:flex'>
          <Separator className='h-1/2 my-auto' orientation='vertical' />
          </div>  
          <div className='flex flex-col basis-1/3 justify-center p-5 items-center'>
            <h1 className='text-2xl font-bold'>
              Contact
            </h1>
            <p>
              123456789
            </p>
            <p>
              shadypalmscafe@gmail.com
            </p>
          </div>
          <div className='md:hidden'>
          <Separator className='w-1/2 mx-auto' />
          </div> 
           <div className='hidden md:flex'>
          <Separator className='h-1/2 my-auto' orientation='vertical' />
          </div>     
          <div className='flex flex-col basis-1/3 p-5 justify-center items-center '>
            <h1 className='text-2xl font-bold'>
              Opening Hours
            </h1>
            <p className='p-1'>
            Tuesday 1pm-9pm <br />

              Wednesday 11am-9:30pm<br />

              Thursday 11am-9:30pm<br />

              Friday 11am-11pm<br />

              Saturday 11am-11pm<br />

              Sunday 11am-8:30pm<br />
            </p>
            <h1>

            </h1>
          </div>

        </div>
        <Separator className='w-11/12 mx-auto' />
        <div className='flex justify-center basis-1/5 p-3'>
        © 2024 by Shady Palms. 
        </div>

      </div>
    </div>
  )
}

export default Footer