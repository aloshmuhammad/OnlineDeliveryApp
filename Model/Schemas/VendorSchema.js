import { Schema, model } from "mongoose";

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const Vendor = model("vendor", vendorSchema);
export default Vendor;
