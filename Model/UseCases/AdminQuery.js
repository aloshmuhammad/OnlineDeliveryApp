import Admin from "../Schemas/AdminSchema.js"
import bcrypt from 'bcrypt'
import Driver from "../Schemas/truckDriverSchema.js"
const adminSignUpQuery=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const existingAdmin=await Admin.findOne({email:data.email})
            if(existingAdmin){
                reject({
                    message:'Admin Already Found'
                })
            }
            await Admin.create(data)
            resolve({
                message:'Admin Signup Successfully'
            })
        }catch(error){
            reject(error)
        }
    })
}
const adminSigninQuery=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const validAdmin=await Admin.findOne({email:data.email})
            if(validAdmin){
                bcrypt.compare(data.password,validAdmin.password).then((status)=>{
                    if(status){
                        resolve({message:'Admin Log in Successfully'})
                    }else{
                        reject({
                            message:'Wrong Password'
                        })
                    }
                })

            }else{
                reject({
                    message:'Admin Not Found'
                })
            }
        }catch(error){
            throw new Error('Error occured during the login')
        }
    })
}
const adminCreateDriver=async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
          const existingDriver=await Driver.findOne({email:data.email})
          if(existingDriver){
            reject({
                message:'Driver Already Found'
            })
          }else{
            await Driver.create(data);
            resolve({ message: 'Driver added successfully' });
          }
          
        } catch (error) {
          reject(error);
        }
      });
    };
    const getDrivers=async()=>{
        return new Promise(async(resolve,reject)=>{
            try{
                const Drivers=await Driver.find({})
                if(Drivers){
                    resolve(Drivers)
                }else{
                    reject({
                        message:'No Drivers Found'
                    })
                }
               
            }catch(error){
                throw new Error('Error occured during Fetching the Drivers From database')
            }
        })
    }
    const driverUpdate=async(id,updatedData)=>{
        return new Promise(async(resolve,reject)=>{
           try{

           const Data=await Driver.findByIdAndUpdate(id,updatedData,{new:true})
           if(Data){
            resolve(Data)
           }else{
            reject({
                message:'Document Not Found'
            })
           }
        
    }catch(error){
        throw new Error('Error occured during Updating the Driver in database')
    }
})
    }
    const driverDelete=async(id)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                await Driver.findByIdAndDelete(id)
                resolve({
                 message:'Document Deleted Successfully'
                 
                })
            }catch(error){
                throw new Error('Error occured during Deleting the Driver in database')
            }

        })
     
    }


export {adminSignUpQuery,adminSigninQuery,adminCreateDriver,getDrivers,driverUpdate,driverDelete}