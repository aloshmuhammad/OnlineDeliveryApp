import express from 'express'
import { signUp,signIn,fullVendors,chooseVendor} from '../Controllers/DriverControllers.js'
import { signupValidation,loginValidation,paramsValidation } from '../Validations/Validation.js'


var router=express.Router()


router.post('/sign-up',signupValidation,signUp)
router.post('/sign-in',loginValidation,signIn)

router.get('/vendors-list',fullVendors)
router.get('/choose-vendor/:id',paramsValidation,chooseVendor)




export default router