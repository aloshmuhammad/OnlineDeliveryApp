import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category', 
      }

})
const Products=model('product',productSchema)
export default Products