import Admin from "../Schemas/AdminSchema.js"
import bcrypt from 'bcrypt'
import Driver from "../Schemas/truckDriverSchema.js"
import Vendor from "../Schemas/VendorSchema.js"
import Category from "../Schemas/CategorySchem.js"
import Products from "../Schemas/ProductSchema.js"

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

    const vendorAdd=async(data)=>{
     return new Promise(async(resolve,reject)=>{
        try{
            await Vendor.create(data)
            resolve({
                message:'Vendor Added Successfully'
            })
        
        }catch(error){
            throw new Error('Error occured during Adding the Vendor')
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
                 throw new Error('Error occured during fetching the vendors')
             }
        })
      
    }
    const vendorUpdate=async(id,updatedData)=>{
        return new Promise(async(resolve,reject)=>{
           try{

           const Data=await Vendor.findByIdAndUpdate(id,updatedData,{new:true})
           if(Data){
            resolve(Data)
           }else{
            reject({
                message:'Document Not Found'
            })
           }
        
    }catch(error){
        throw new Error('Error occured during Updating the Vendor in database')
    }
})
    }

    const vendorDelete=async(id)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                await Driver.findByIdAndDelete(id)
                resolve({
                 message:'Document Deleted Successfully'
                 
                })
            }catch(error){
                throw new Error('Error occured during Deleting the Vendor in database')
            }

        })
     
    }

    const categoryAdd=async(data)=>{
       return new Promise(async(resolve,reject)=>{
        try{
          await Category.create(data)
          resolve({
            message:'Category added Successfully'
          })
        }catch(error){
                throw new Error('Error occured during Adding the Category')
            }
       })
    }
    const productAdd=async(data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                await Products.create(data)
                resolve({
                    message:'Product added Successfully'
                })

            }catch(error){
                throw new Error('Error occured during Adding the Products')
            }
        })
    }
    const productList=async()=>{
        return new Promise (async(resolve,reject)=>{
            try{
                const productList=await Products.find()
                if(productList.length>0){
                    
                    resolve(productList)
                }else{
                    reject({
                        message:'No Products Found'
                    })
                }
                
             }catch(error){
                 throw new Error('Error occured during geting the products from the database')
             }
        })
    }
    const productUpdate=async(id,updatedData)=>{
        return new Promise(async(resolve,reject)=>{
            try{
              
            const Data=await Products.findByIdAndUpdate(id,updatedData,{new:true})
            
            if(Data){
             resolve(Data)
            }else{
             reject({
                 message:'Document Not Found'
             })
            }
         
     }catch(error){
         throw new Error('Error occured during Updating the Products in database')
     }
 })
    }
    const productDelete=async(id)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                await Products.findByIdAndDelete(id)
                resolve({
                 message:'Document Deleted Successfully'
                 
                })
            }catch(error){
                throw new Error('Error occured during Deleting the Product in database')
            }

        })
    }




export {adminSignUpQuery,productDelete,productUpdate,productList,productAdd,categoryAdd,adminSigninQuery,adminCreateDriver,getDrivers,driverUpdate,driverDelete,vendorAdd,vendorList,vendorUpdate,vendorDelete}