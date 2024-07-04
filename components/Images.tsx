import Image from 'next/image'
import React from 'react'
import ShadyLogo from '@/public/ShadyLogoWhite.png'
import Image1 from '@/public/image1.png'
import Image2 from '@/public/image2.png'
import Image3 from '@/public/image3.png'
import Image4 from '@/public/image4.png'
import Image5 from '@/public/image5.png'

const Images = () => {
  return (
    <div className=' w-full '>
        <div className='flex justify-center text-center font-bold text-5xl p-5 pt-20 pb-20 md:p-36'>
        Come on down & Grab a Pint
        </div>

        <div className='flex flex-col p-0 md:flex-row h-screen md:h-[652px] w-screen overflow-hidden'>
            <div className='w-full h-1/2 md:w-1/2 md:h-full m-auto relative hover:scale-105 transition ease-in-out duration-300 z-30'>
            <Image 
                src={Image2}
                alt={""}
                fill
                className='p-1'
                />
            </div>
            <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col '>
                    <div className='flex h-1/2'>
                    <div className='w-1/2 h-full relative p-1 hover:scale-105 transition ease-in-out duration-300 border-solid border-red-950 border-8'>
                        <Image 
                            src={Image1}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className=''

                            
                        />
                    </div>
                   <div className='w-1/2 h-full relative p-1'>
                        <Image 
                            src={Image3}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className='p-1'

                        />
                    </div>
                    </div>
                    <div className='flex h-1/2'>
                        
                    <div className='w-1/2 h-full relative'>
                        <Image 
                            src={Image4}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className='p-1'
                            />
                    </div>
                    <div className='w-1/2 h-full relative p-1'>
                        <Image 
                            src={Image5}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className='p-1'

                        />
                    </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Images