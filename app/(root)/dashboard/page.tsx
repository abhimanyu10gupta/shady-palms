
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios, { AxiosError } from 'axios'


import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type ReservationType = {
  _id: string
  name: string
  pax: string
  time: string
  email: string
}
import {cookies} from 'next/headers';

const getCookie = async (name: string) => {
    return cookies().get(name)?.value ?? '';
}



async function getBookings() {
  const cookie = await getCookie('token');
  const url = "http://localhost:3000/api/booking/all";
  const options = {
    // method: "GET",
    withCredentials: true,
    headers: {
      Cookie: `token=${cookie};`
  }
  };
try {
  const res = await axios.get(url, options)
  if (res.data) {
    const bookings = await res.data
    console.log(res.status)
    return bookings
  }}
  catch(error:any) {
    console.log(error)
  }

}

  // const res = await fetch(url, options) 
  // console.log(res)  



export default async function Dashboard() {
    
const bookings = await getBookings()
console.log(bookings)
return (
    <div className=''>
      <div className=''>
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Booking No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Number of People</TableHead>
              <TableHead className="text-right">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {bookings?.map((booking: any) => (
            <TableRow>
            <TableCell className="font-medium">{booking._id}</TableCell>
            <TableCell>{booking.name}</TableCell>
            <TableCell>{booking.email}</TableCell>
            <TableCell>{booking.time}</TableCell>
            <TableCell className="text-right"><button>Delete</button></TableCell>
          </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

