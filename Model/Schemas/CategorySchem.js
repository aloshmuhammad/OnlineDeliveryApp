import { Schema,model } from "mongoose";

const categorySchema=new Schema({
    categoryname:{
        type:String,
        required:true
    },
    
})
const Category=model('category',categorySchema)
export default Category