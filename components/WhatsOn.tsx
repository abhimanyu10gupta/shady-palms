import Image from 'next/image'
import React, { Fragment } from 'react'
import ShadyLogo from '../public/ShadyLogoWhite.png'
import { Button } from './ui/button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const events = [
    {
    title: "Happy Hour",
    description: "20% on House Spirits",
    days: "Wednesday and Sunday 3pm-6pm"
    },
    {
        title: "Trivia Night",
        description: "Trivia Night with Aemon",
        days: "Wednesday at 5:30pm"
    },
    {
        title: "Live Music",
        description: "with Aoife Taurus",
        days: "Sunday 3pm-5pm"
    },
]

const WhatsOn = () => {
  return (
    <div className='text-white w-full'>
        <div className='flex flex-col'>
            <div className='p-48'>
                <h1 className='text-6xl font-bold'>
                    What's On
                </h1>
            </div>

            <div className='container flex w-full flex-col justify-center'>
           {events.map((event, i) => {
            return(
            i%2===0 ? <Fragment>
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
                            {event.title}
                        </h2>
                        <p>
                            {event.description}
                        </p>
                        <p>
                            {event.days}
                        </p>
                        <Button>
                            Book a table
                        </Button>

                    </div>
                </div>

                </div>
            </Fragment>
            : 
            <Fragment>
<div className='container flex w-full justify-center'>
<div className='basis-1/2  flex justify-center'>
                    <div className='flex flex-col justify-center'>
                        <h2>
                            {event.title}
                        </h2>
                        <p>
                            {event.description}
                        </p>
                        <p>
                            {event.days}
                        </p>
                        <Button>
                            Book a table
                        </Button>

                    </div>
                </div>
                <div className='basis-1/2 flex justify-center'>
                    <Image 
                        src={ShadyLogo}
                        alt={""}
                    />
                </div>


                </div>
            </Fragment>
            )})}
            </div>
        </div>
    </div>
  )
}

export default WhatsOn