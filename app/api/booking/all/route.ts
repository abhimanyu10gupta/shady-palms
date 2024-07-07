"use server"

import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(request: NextRequest) {

    try {
    const res = await Booking.find({})
    return NextResponse.json(res)

    } catch (error: any) {
        console.log(error.message)
    }
    return NextResponse.json({status: "500"})
}

