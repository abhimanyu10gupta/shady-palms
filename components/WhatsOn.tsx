import Image from 'next/image'
import React, { Fragment } from 'react'
import ShadyLogo from '../public/ShadyLogoWhite.png'
import { Button } from './ui/button';
import Event1 from '../public/event1.png'
import Event2 from '../public/event2.png'
import Event3 from '../public/image5.png'

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
        days: "Wednesday and Sunday ",
        image: Event3,
    },
    {
        title: "Trivia Night",
        description: "Trivia Night with Aemon",
        days: "Wednesday at 5:30pm",
        image: Event2,

    },
    {
        title: "Live Music",
        description: "with Aoife Taurus",
        days: "Sunday 3pm-5pm",
        image: Event1,

    },
]

const WhatsOn = () => {
  return (
    <div id="events" className=' w-full'>
        <div className='flex flex-col'>
            <div className='p-10 pt-20 md:p-20'>
                <h1 className='text-6xl font-bold'>
                    What's On
                </h1>
            </div>

            <div className='container flex w-full flex-col justify-center'>
           {events.map((event, i) => {
            return(
            i%2===0 ? <Fragment key={i}>
<div className='flex flex-col sm:flex-row w-full md:justify-center pt-10 pb-10'>
                <div className='basis-1/2 flex w-full justify-center'>
                    <Image 
                        src={event.image}
                        alt={""}
                        width={500}
                        height={500}
                    />
                </div>
                <div className='basis-1/2 flex justify-end md:justify-center pt-6'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl '>
                            {event.title}
                        </h2>
                        <p className='pt-2'>
                            {event.description}
                        </p>
                        <p className='pt-2'>
                            {event.days}
                        </p>
                        <Button className='pt-4'>
                            Book a table
                        </Button>

                    </div>
                </div>
                </div>
            </Fragment>
            : 
            <Fragment key={i}>
                <div className='flex sm:flex-row flex-col-reverse md:flex w-full justify-center'>
                <div className='basis-1/2 flex md:justify-center'>
                <div className='flex flex-col pt-6 justify-center'>
                        <h2 className='text-2xl '>
                            {event.title}
                        </h2>
                        <p className='pt-2'>
                            {event.description}
                        </p>
                        <p className='pt-2'>
                            {event.days}
                        </p>
                        <Button className='pt-4'>
                            Book a table
                        </Button>

                    </div>
                </div>
                <div className='basis-1/2 flex w-full justify-center'>
                    <Image 
                        src={event.image}
                        width={500}
                        height={500}

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