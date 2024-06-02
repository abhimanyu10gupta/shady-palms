import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ShadyLogo from '../public/ShadyLogoWhite.png'
const WhatsOn = () => {
  return (
    <div className='text-white bg-black w-full'>
        <div className='flex flex-col'>
            <div className='p-48'>
                <h1 className='text-6xl font-bold'>
                    What's On
                </h1>
            </div>
            <div className='container flex w-full justify-center'>
                    <div className='basis-1/2 flex justify-center'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                    <div className='basis-1/2  flex justify-center'>
                        <div className='flex flex-col justify-center'>
                            <h2>
                                Happy Hour
                            </h2>
                            <p>
                                20% on house spirits
                            </p>
                            <p>
                                Wednesday and Sunday
                                3pm-6pm
                            </p>
                            <Button>
                                Book a table
                            </Button>

                        </div>
                    </div>

                </div>
                <div className='container flex w-full justify-center'>
                    <div className='basis-1/2 flex justify-center'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                    <div className='basis-1/2  flex justify-center'>
                        <div className='flex flex-col justify-center'>
                            <h2>
                                Happy Hour
                            </h2>
                            <p>
                                20% on house spirits
                            </p>
                            <p>
                                Wednesday and Sunday
                                3pm-6pm
                            </p>
                            <Button>
                                Book a table
                            </Button>

                        </div>
                    </div>

                    </div>
                    <div className='container flex w-full justify-center'>
                    <div className='basis-1/2 flex justify-around'>
                        <Image 
                            src={ShadyLogo}
                            alt={""}
                        />
                    </div>
                    <div className='basis-1/2  flex justify-center'>
                        <div className='flex flex-col justify-center'>
                            <h2>
                                Happy Hour
                            </h2>
                            <p>
                                20% on house spirits
                            </p>
                            <p>
                                Wednesday and Sunday
                                3pm-6pm
                            </p>
                            <Button>
                                Book a table
                            </Button>

                        </div>
                    </div>

                    </div>

        </div>
    </div>
  )
}

export default WhatsOn