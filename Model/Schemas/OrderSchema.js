import { Schema,model } from "mongoose";


const orderSchema=new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'driver'
    },
    quantity:{
        type:Number,
        required:true
    },
    TotalPrice:{
        type:Number
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'vendor'
    },

    
})
const Order=model('order',orderSchema)
export default Order