"use server"

import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";
import { revalidatePath } from "next/cache";

export const fetchCache = 'force-no-store';

export async function POST(request: Request) {
    dbConnect();
    // revalidatePath('https://shady-palms.vercel.app/api/booking/all')
    // revalidatePath('https://shady-palms.vercel.app/dashboard')
    // revalidatePath('https://shady-palms.vercel.app/booking')
    revalidatePath('/api/booking/all')
    // revalidatePath('/dashboard')
    // revalidatePath('/booking')
    // revalidatePath('https://shady-palms.vercel.app/booking')
    console.log("revalidated")
    const { name, pax, time, phone, date } = await request.json()

    const book = { 
        name: name,
        pax: pax,
        time: time,
        email: date,
        date: phone,
    }

    const reservation = await Booking.create(book)

    return Response.json(reservation)
}

export async function DELETE(request: Request) {
    dbConnect();

    // Booking.deleteOne()
}

export async function UPDATE(request: Request) {
    dbConnect()
    
}