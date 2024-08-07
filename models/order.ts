import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//   },
  tableNumber : {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MenuItem",
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    //   image: {
    //     type: String,
    //     required: true,
    //   },
      price: {
        type: String,
        required: true,
      },
    },
  ],
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    taxPaid: {
      type: Number,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
  },
  orderStatus: {
    type: String,
    default: "Processing",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);