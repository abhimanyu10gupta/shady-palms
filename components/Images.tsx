import Image from 'next/image'
import React from 'react'
import ShadyLogo from '@/public/ShadyLogoWhite.png'
import Image1 from '@/public/image1.png'
import Image2 from '@/public/image2.png'
import Image3 from '@/public/image3.png'
import Image4 from '@/public/image4.png'

const Images = () => {
  return (
    <div className='text-white w-full '>
        <div className='flex justify-center font-bold text-6xl p-36'>
        Come on down & Grab a Pint
        </div>

        <div className='flex h-[652px]'>
            <div className='w-1/2 h-full m-auto relative'>
            <Image 
                src={Image2}
                alt={""}
                layout="fill" objectFit="cover"
                style={{padding: 4}}

                />
            </div>
            <div className='w-1/2 flex flex-col h-full'>
                    <div className='flex h-1/2'>
                    <div className='w-1/2 h-full relative p-1'>
                        <Image 
                            src={Image1}
                            alt={""}
                            layout="fill" objectFit="cover"
                            style={{padding: 4}}

                            
                        />
                    </div>
                   <div className='w-1/2 h-full relative p-1'>
                        <Image 
                            src={Image3}
                            alt={""}
                            layout="fill" objectFit="cover"
                            style={{padding: 4}}

                        />
                    </div>
                    </div>
                    <div className='flex h-1/2'>
                        
                    <div className='w-1/2 h-full relative'>
                        <Image 
                            src={Image4}
                            alt={""}
                            layout="fill" objectFit="cover"
                            style={{padding: 4}}
                        />
                    </div>
                    <div className='w-1/2 h-full relative p-1'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                            layout="fill" objectFit="cover"
                            style={{padding: 4}}

                        />
                    </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Images