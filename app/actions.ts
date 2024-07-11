"use server"

import {cookies} from 'next/headers';
import axios, { AxiosError } from 'axios'
import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";
import { revalidatePath } from 'next/cache';
import { ObjectId } from 'mongoose';

const getCookie:any = async (name: string) => {
    return cookies().get(name)?.value ?? '';
  }
  

export async function deleteBooking(id:any) {

    console.log("delete started", id)
    // const url = "https://shady-palms.vercel.app/api/booking/";

    await dbConnect();
    revalidatePath('/api/booking/all')
    revalidatePath('/dashboard')
    revalidatePath('/booking')
    try {

      const res = await Booking.findByIdAndDelete(id);
      console.log(res)
    } catch (e) {
      console.log(e)

    }finally {
      console.log('revalidating again')
            revalidatePath('https://shady-palms.vercel.app/api/booking/all')

    }
}

export async function getBookings() {
    revalidatePath('https://shady-palms.vercel.app/api/booking/all')
    console.log('revalidating?')
    const cookie = await getCookie('token');
    const url = "https://shady-palms.vercel.app/api/booking/all";
    const options = {
      credentials: 'include',
      headers: {
        Cookie: `token=${cookie};`,
        'Cache-Control': 'no-cache'
    },
    cache: "no-store",
    next: { revalidate: 0 }
    };
  try {

    const res = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Cookie: `token=${cookie};`,
        'Cache-Control': 'no-cache'
    },
    cache: "no-store",
    // next: { revalidate: 0 }
    })

    // const res = await axios.get(url, options)
    if (res.body) {
      const bookings = await res.json()
      console.log(res.status)
      return bookings
    }}
    catch(error:any) {
      console.log(error)
    }
    finally {
      revalidatePath('https://shady-palms.vercel.app/api/booking/all')

    }

    return null
  
  }