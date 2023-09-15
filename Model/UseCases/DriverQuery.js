import Driver from "../Schemas/truckDriverSchema.js"
import Vendor from "../Schemas/VendorSchema.js";
import bcrypt from 'bcrypt'
import Cart from "../Schemas/CartSchema.js";
import Products from "../Schemas/ProductSchema.js";
import Order from "../Schemas/OrderSchema.js";
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

const cartAdd = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if the 'product' field is valid
      const product = await Products.findById(data.product);

      if (!product) {
        return reject({
          message: 'Product not found',
        });
      }

      // Check if the 'user' field (Driver) is valid
      const driver = await Driver.findById(data.user);

      if (!driver) {
        return reject({
          message: 'Driver not found',
        });
      }

      // Calculate the cartValue
      data.cartValue = product.price * data.quantity;

      // Create a new cart item
      await Cart.create(data);

      resolve({
        message: 'Item Added To Cart',
      });
    } catch (error) {
      console.error('Error in cartAdd:', error);
      reject({
        message: 'Error occurred during Add to Cart',
      });
    }
  });
};

const getCart=async(userId)=>{
  return new Promise(async(resolve,reject)=>{
    try{
     const cart=await Cart.find({user:userId}).populate('product')
     if(cart){
      resolve(cart)
     }else{
      reject({message:'Cart not Found'})
     }
    }catch(error){
      throw new Error('Error occured during Add to Cart')
    }
  })
}
const orderAdd=async(vendorId,userId)=>{
  return new Promise(async(resolve,reject)=>{
    try{
      const cart=await Cart.findOne({user:userId})
      if(!cart){
        reject({message:'Cart not Found'})
      }
      const orders={}
      orders.product=cart.product
      orders.TotalPrice=cart.cartValue
      orders.user=cart.user,
      orders.vendor=vendorId,
      orders.quantity=cart.quantity
    
      const ord=await Order.create(orders)
  
      const orderlist=await Order.find({user:userId}).populate('product').populate('user').populate('vendor')
      resolve(orderlist)
      
    
    }catch(error){
      throw new Error('Error occured during Order Products')
    }
  })
}

    export {SignupQuery,signInQuery,vendorList,vendorSelect,cartAdd,getCart,orderAdd}