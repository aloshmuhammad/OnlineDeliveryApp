import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "Driver",
  },
  quantity: {
    type: Number,
    required: true,
  },
  cartValue: {
    type: Number,
  },
});
const Cart = model("cart", cartSchema);
export default Cart;
