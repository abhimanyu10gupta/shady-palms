import React from 'react'
import Image from 'next/image'
import ShadyLogo  from '@/public/ShadyLogoWhite.png';
import { Separator } from '@/components/ui/separator';
import Map from './Map';

const Footer = () => {
  return (
    <div className='w-full bg-[#0D0C11] text-white'>
      <div className='flex flex-col'>
      <Map />
        <div className='basis-4/5 flex justify-center'>
          <div className='flex flex-col justify-center m-auto basis-1/3'>
            <div className='flex flex-col justify-center items-center'>
              <Image 
                src={ShadyLogo}
                alt={""}
              />
              <p>
                What's On
              </p>
              <p>
                Reserve a Table
              </p>
              <p>
                Contact
              </p>
            </div>
          </div>
          <div className='flex flex-col basis-1/3 justify-center items-center'>
            <h1>
              Contact
            </h1>
            <p>
              123456789
            </p>
            <p>
              shadypalmscafe@gmail.com
            </p>
          </div>
          <div className='flex flex-col basis-1/3 justify-center items-center '>
            <h1>
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
        <Separator />
        <div className='flex justify-center basis-1/5'>
        © 2024 by Shady Palms. Powered by Vercel.
        </div>

      </div>
    </div>
  )
}

export default Footer