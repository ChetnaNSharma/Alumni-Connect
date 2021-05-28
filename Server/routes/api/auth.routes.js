const express = require("express");
const authController = require("../controllers/auth.controller");
const {
    validateSignupRequest,
    validateSigninRequest,
    validateUpdateRequest,
    isRequestValidated
} = require("../validators/auth.validator");
const { requireSignin } = require("../common-middleware/common-middleware");
const router = express.Router();


router.post(
    "/signup",
    validateSignupRequest,
    isRequestValidated,
    authController.signup,
    
);
router.post(
    "/signin",
    validateSigninRequest,
    isRequestValidated,
    authController.signin
);
router.post("/signout", requireSignin, authController.signout);
router.patch(
    "/update",
    validateUpdateRequest,
    isRequestValidated,
    requireSignin,
    authController.update
);

router.delete('/deleteProfile', requireSignin, authController.deleteProfile)

module.exports = router;