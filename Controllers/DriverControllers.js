
import { SignupQuery,signInQuery,vendorList,vendorSelect} from "../Model/UseCases/DriverQuery.js"
import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'


const signUp=async(req,res,next)=>{
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try{
      req.body.password = await bcrypt.hash(req.body.password,10)
      SignupQuery(req.body).then((response)=>{
      res.status(201).json({response})
      }).catch((err)=>{
        res.status(401).json(err)
    })
    } catch(error){
          
      res.status(500).json({ message: "An error occurred", error: error.message });
  }

  
}
const signIn=async(req,res,next)=>{
  const errors=validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try{
    signInQuery(req.body).then((response)=>{
      res.status(200).json({response})
    }).catch((err)=>{
      res.status(401).json(err)
    })
  }catch(error){
    res.status(500).json({message:'An error occured',error:error.message})
  }
}

const fullVendors=async(req,res,next)=>{
  try{
    vendorList().then((response)=>{
      res.status(200).json(response)
    }).catch((err)=>{
        res.status(401).json(err)
    })
}catch(error){
    res.status(500).json({message:'An error occured',error:error.message})
  }
  
}
const chooseVendor=async(req,res,next)=>{
  const errors=validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try{
      const {id}=req.params
    
      vendorSelect(id).then((response)=>{
        res.status(200).json(response)
      }).catch((err)=>{
        res.status(401).json(err)
      })
  }catch(error){
    res.status(500).json({message:'An error occured',error:error.message})
  }
  
}




export {signUp,signIn,fullVendors,chooseVendor}