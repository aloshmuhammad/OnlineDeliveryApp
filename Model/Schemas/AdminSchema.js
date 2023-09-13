import { Schema,model } from "mongoose";

const AdminSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const Admin=model('admin',AdminSchema)
export default Admin