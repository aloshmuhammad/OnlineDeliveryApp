import { validationResult } from "express-validator"
import { adminSignUpQuery,adminSigninQuery } from "../Model/UseCases/AdminQuery.js"
import bcrypt from 'bcrypt'
const adminSignUp=async(req,res,next)=>{

const errors=validationResult(req)
if(!errors.isEmpty()){
    return res.status(422).json({errors:errors.array()})
}
try{
    req.body.password=await bcrypt.hash(req.body.password,10)
    adminSignUpQuery(req.body).then((response)=>{
       res.status(201).json(response)
    })
}catch(error){
          
      res.status(500).json({ message: "An error occurred", error: error.message });
  }
}
const adminLogin=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    try{
    adminSigninQuery(req.body).then((response)=>{
        res.status(200).json(response)
    }).catch((err)=>{
        res.status(401).json(err)
    })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
}

export {adminSignUp,adminLogin}