import Admin from "../Schemas/AdminSchema.js"
import bcrypt from 'bcrypt'
const adminSignUpQuery=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
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

export {adminSignUpQuery,adminSigninQuery}