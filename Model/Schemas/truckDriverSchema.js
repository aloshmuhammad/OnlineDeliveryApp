import { Schema,model } from "mongoose";


const truckDriverSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    licenseDetails:{
        type:String,
        required:true
    }

})
const Driver=model('driver',truckDriverSchema)
export default Driver