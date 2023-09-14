import { check } from 'express-validator';

export const signupValidation = [
   
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password')
    .custom((value, { req }) => {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (!passwordPattern.test(value)) {
        throw new Error('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
      }
      return true;
    })
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.'),
  check('licenseDetails', 'License is required').not().isEmpty(),
  check('address', 'Address is required').not().isEmpty(),
  check('name', 'Name is required').not().isEmpty(),
  check('mobileNo')
    
    .isLength({ min: 10 })
    .withMessage('Phone Number Must contain 10 digits')
];

export const loginValidation = [
  check('email', 'Please include a valid email').isEmail(),
  check('password','Please include the Password').not().isEmpty(),
];
export const adminLoginvalidatiion=[
  check('email', 'Please include a valid email').isEmail(),
  check('password','Please include the Password').not().isEmpty(),
]
export const paramsValidation=[
  check('id','ID parameter must not be empty').not().isEmpty()
]

export const vendorValidation= [
   
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('location', 'Address is required').not().isEmpty(),
  check('mobileNo')
    
    .isLength({ min: 10 })
    .withMessage('Phone Number Must contain 10 digits')
];
