
import React from 'react'

import { deleteBooking, getBookings } from '@/app/actions'
import Bookings from '@/components/Bookings'


export default async function Dashboard() {


const bookings = await getBookings()
return (
  
    <div className='container md:pt-48'>
      <h1 className='flex justify-center p-12'>All Bookings</h1>
      <Bookings bookings={bookings}/>

    </div>
  )
}

