"use server"

import dbConnect from "@/lib/dbConnect"
import Booking from "@/models/booking";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export const fetchCache = 'force-no-store';

export async function GET(request: Request) {

    try {
    const res = await Booking.find({})


    return Response.json(res)

    } catch (error: any) {
        console.log(error.message)
    }
    return Response.json({status: "500"})
}

