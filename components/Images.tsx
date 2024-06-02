import Image from 'next/image'
import React from 'react'
import ShadyLogo from '@/public/ShadyLogoWhite.png'
const Images = () => {
  return (
    <div className='text-white bg-black w-full '>
        <div className='flex justify-center font-bold text-6xl p-36'>
        Come on down & Grab a Pint
        </div>

        <div className='flex h-2/3 '>
            <div className='basis-1/2 h-full w-full m-auto '>
            <Image 
                src={ShadyLogo}
                alt={""}
            />
            </div>
            <div className='basis-1/2 flex flex-wrap h-full'>
                    <div className='basis-1/2'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                   <div className='basis-1/2'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                    <div className='basis-1/2'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                    <div className='basis-1/2'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Images