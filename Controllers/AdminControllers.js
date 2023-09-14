import { validationResult } from "express-validator"
import { adminSignUpQuery,adminSigninQuery,vendorUpdate,adminCreateDriver,getDrivers,driverUpdate,driverDelete,vendorAdd,vendorList,vendorDelete } from "../Model/UseCases/AdminQuery.js"
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
const adminaddDriver=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422),json({errors:errors.array()})
    }
    try{
        req.body.password = await bcrypt.hash(req.body.password,10)
        adminCreateDriver(req.body).then((response)=>{
            res.status(201).json(response)
        }).catch((err)=>{
            res.status(401).json(err)
        })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
}
const adminGetDriver=async(req,res,next)=>{
    try{
        getDrivers().then((response)=>{
            res.status(200).json(response)

        })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
   
}
const updateDriver=async(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors,'erer')
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
   try{
    const {id}=req.params
    const updatedData=req.body
    driverUpdate(id,updatedData).then((response)=>{
          res.status(200).json(response)
    })
   }catch(error){
    res.status(500).json({message:'An error occured',error:error.message})
  }
   

 
}
const deleteDriver=async(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors,'erer')
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    try{
        const {id}=req.params
        driverDelete(id).then((response)=>{
            res.status(200).json(response)

        })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
   
    
}


const addVendor=async(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors,'erer')
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    try{
        vendorAdd(req.body).then((response)=>{
          res.status(201).json(response)
        })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
   
}
const getVendors=async(req,res,next)=>{
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
const updateVendor=async(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors,'erer')
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
   try{
    const {id}=req.params
    const updatedData=req.body
    vendorUpdate(id,updatedData).then((response)=>{
          res.status(200).json(response)
    })
   }catch(error){
    res.status(500).json({message:'An error occured',error:error.message})
  }
   

 
}
const deleteVendor=async(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors,'erer')
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    try{
        const {id}=req.params
        vendorDelete(id).then((response)=>{
            res.status(200).json(response)

        })
    }catch(error){
        res.status(500).json({message:'An error occured',error:error.message})
      }
   
    
}



export {adminSignUp,adminLogin,adminaddDriver,adminGetDriver,updateDriver,deleteDriver,addVendor,getVendors,updateVendor,deleteVendor}