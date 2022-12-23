const { authJwt } = require("../middleware");
const { CredentialController, factoryController, storeController } = require('../controllers/index')
const express = require('express')
const router = express.Router()

router.get("/all", CredentialController.allAccess);

router.get(
  "/factory",
  [authJwt.verifyToken, authJwt.isFactory],
  CredentialController.factoryBoard
);

router.get(
  "/store",
  [authJwt.verifyToken, authJwt.isStore],
  CredentialController.storeBoard
);

router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  CredentialController.adminBoard
);

router.get(
  "/servicecenter",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  CredentialController.servicecenterBoard
);

module.exports = router