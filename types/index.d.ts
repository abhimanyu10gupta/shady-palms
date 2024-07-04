declare interface MenuItemProps {
    name: string;
    description: string;
    price: string;
  }

  declare interface UserProps {
    name: string;
    email: string;
    password: string;
    avatar: {
      public_id: string;
      url: string;
    };
    role: string;
    createdAt: Date;
  }

declare interface BookingProps {
  name: string;
  email: string;
  date: Date;
  time: string;
  pax: int;
  createdAt: Date;
}

declare interface OrderProps {
  tableNumber: string;
  
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
}

