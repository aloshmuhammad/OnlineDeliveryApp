import Driver from "../Schemas/truckDriverSchema.js"
import Vendor from "../Schemas/VendorSchema.js";
import bcrypt from 'bcrypt'
const SignupQuery = async (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const existingDriver=await Driver.findOne({email:data.email})
        if(existingDriver){
            reject({
                message:'Driver Already Found'
            })
        }else{
            await Driver.create(data);
            resolve({ message: 'Driver signup successful' });
        }
       
      } catch (error) {
        reject(error);
      }
    });
  };
  
const signInQuery=async(data)=>{
 return new Promise(async(resolve,reject)=>{
    try{
        const validDriver=await Driver.findOne({email:data.email})
        if(validDriver){
            bcrypt.compare(data.password,validDriver.password).then((status)=>{
              if(status){
                resolve({message:'User Loggedin Successfully'})
              }
              else{
                reject({
                    message:'Wrong password'
                })
              }
            })
        }else{
          reject({
            message:'User Not Found'
          })
        }
    }catch(error){
        throw new Error('Error occured during the login')
    }
 })
}
const vendorList=async()=>{
  return new Promise (async(resolve,reject)=>{
      try{
          const Vendors=await Vendor.find()
          if(Vendors.length>0){
              console.log(Vendors,'op')
              resolve(Vendors)
          }else{
              reject({
                  message:'No Vendors Found'
              })
          }
          
       }catch(error){
           throw new Error('Error occured during Fetching the vendors from database')
       }
  })

}
const vendorSelect=async(id)=>{
   return new Promise(async(resolve,reject)=>{
    try{
      const SelectedVendor=await Vendor.findById(id)
      
      if(SelectedVendor){
        resolve(SelectedVendor)
      }else{
        reject({
          message:'Vendor not Found'
        })
      }
    }catch(error){
      throw new Error('Error occured during Fetching the vendors from database')
  }
  
   })
}

    export {SignupQuery,signInQuery,vendorList,vendorSelect}