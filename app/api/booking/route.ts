"use server"

import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";


export async function POST(request: Request) {
    dbConnect();
    

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