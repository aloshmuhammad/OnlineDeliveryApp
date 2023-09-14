import express from 'express'
import { adminSignUp,adminLogin,adminaddDriver,adminGetDriver,updateDriver,deleteDriver,addVendor,getVendors,updateVendor,deleteVendor} from '../Controllers/AdminControllers.js'
import { adminLoginvalidatiion,signupValidation,paramsValidation,vendorValidation } from '../Validations/Validation.js'




var router=express.Router()
router.post('/admin-signup',adminLoginvalidatiion,adminSignUp)
router.post('/admin-login',adminLoginvalidatiion,adminLogin)


router.post('/create-driver',signupValidation,adminaddDriver)
router.get('/get-drivers',adminGetDriver)
router.patch('/update-driver/:id',paramsValidation,updateDriver)
router.delete('/delete-driver/:id',paramsValidation,deleteDriver)


router.post('/create-vendor',vendorValidation,addVendor)
router.get('/get-vendors',getVendors)
router.patch('/update-vendor/:id',paramsValidation,updateVendor)
router.delete('/delete-vendor/:id',paramsValidation,deleteVendor)



export default router