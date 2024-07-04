import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema<BookingProps>({
    name : {
        type: String,
        required: true,

    },
    pax: {
        type: Number,
        required: true,

    },
    time: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        // required: true,

    },
    email: {
        type: String,
        required: true,

    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
})

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);