import express from 'express'
import { adminSignUp,adminLogin } from '../Controllers/AdminControllers.js'
import { adminLoginvalidatiion } from '../Validations/Validation.js'




var router=express.Router()


router.post('/admin-signup',adminLoginvalidatiion,adminSignUp)
router.post('/admin-login',adminLoginvalidatiion,adminLogin)




export default router