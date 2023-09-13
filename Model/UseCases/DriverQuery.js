import Driver from "../Schemas/truckDriverSchema.js"
import bcrypt from 'bcrypt'
const SignupQuery = async (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await Driver.create(data);
        resolve({ message: 'Driver signup successful' });
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

    export {SignupQuery,signInQuery}