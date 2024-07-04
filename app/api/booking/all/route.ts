"use server"

import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";


export async function GET(request: Request) {
    
    dbConnect();

    const res = await Booking.find({})

    return Response.json(res)
}