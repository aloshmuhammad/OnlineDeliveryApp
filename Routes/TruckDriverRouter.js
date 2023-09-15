import express from "express";
import {
  signUp,
  signIn,
  fullVendors,
  chooseVendor,
  addtoCart,
  viewCart,
  addOrder,
} from "../Controllers/DriverControllers.js";
import {
  signupValidation,
  loginValidation,
  paramsValidation,
  cartValidation,
} from "../Validations/Validation.js";

var router = express.Router();

router.post("/sign-up", signupValidation, signUp);
router.post("/sign-in", loginValidation, signIn);

router.get("/vendors-list", fullVendors);
router.get("/choose-vendor/:id", paramsValidation, chooseVendor);

router.post("/add-to-cart", cartValidation, addtoCart);
router.get("/view-cart/:id", viewCart);

router.post("/order-product", addOrder);

export default router;
