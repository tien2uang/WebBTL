const { verifySignUp } = require("../middleware");
const { AuthController } = require('../controllers/index')
const express = require('express')
const router = express.Router()

router.post(
  "/admin",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  AuthController.signup
);

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  AuthController.request
);

router.post("/signin", AuthController.signin);

module.exports = router