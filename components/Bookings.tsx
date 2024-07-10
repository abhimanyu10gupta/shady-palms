"use client"

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

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { deleteBooking, getBookings } from '@/app/actions'

type ReservationType = {
  _id: any
  name: string
  pax: string
  time: string
  email: string
}
import Link from 'next/link'
import { ObjectId } from 'mongoose'


const Bookings = (bookings: any) => {
    console.log(bookings)
  return (
    <div className='  min-h-screen py-2 '>
      <div className='bottom-0'>
      <Table className='bg-gray-950'>
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
          {bookings.bookings?.map((booking: any) => (
            <TableRow key={booking._id}>
            <TableCell className="font-medium">{booking._id}</TableCell>
            <TableCell>{booking.name}</TableCell>
            <TableCell>{booking.email}</TableCell>
            <TableCell>{booking.time}</TableCell>
            <TableCell>{booking.pax}</TableCell>

            <TableCell className="text-right"><button onClick={async () => {
              deleteBooking(booking._id)
            }}>Delete</button></TableCell>
          </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Bookings