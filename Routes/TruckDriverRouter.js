import express from 'express'
import { signUp,signIn } from '../Controllers/DriverControllers.js'
import { signupValidation } from '../Validations/Validation.js'
import { loginValidation } from '../Validations/Validation.js'

var router=express.Router()


router.post('/sign-up',signupValidation,signUp)
router.post('/sign-in',loginValidation,signIn)




export default router