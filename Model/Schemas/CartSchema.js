import { Schema,model } from "mongoose";

const cartSchema=new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Products',
    },
    
})
const Category=model('category',categorySchema)
export default Category