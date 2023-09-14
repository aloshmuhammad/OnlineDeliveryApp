import express from 'express'
import { adminSignUp,adminLogin,adminaddDriver,adminGetDriver,updateDriver,deleteDriver } from '../Controllers/AdminControllers.js'
import { adminLoginvalidatiion,signupValidation,paramsValidation } from '../Validations/Validation.js'




var router=express.Router()


router.post('/admin-signup',adminLoginvalidatiion,adminSignUp)
router.post('/admin-login',adminLoginvalidatiion,adminLogin)
router.post('/create-driver',signupValidation,adminaddDriver)
router.get('/get-drivers',adminGetDriver)
router.patch('/update-driver/:id',paramsValidation,updateDriver)
router.delete('/delete-driver/:id',paramsValidation,deleteDriver)



export default router