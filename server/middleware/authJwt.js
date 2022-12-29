const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const { credentialModel } = require("../models/index");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
        if (user.role === "admin") {
          next();
          return;
        }
      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
};

isFactory = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
        if (user.role === "factory") {
          next();
          return;
        }
      res.status(403).send({
        message: "Require factory Role!",
      });
      return;
    });
};

isStore = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
        if (user.role === "store") {
          next();
          return;
        }
      res.status(403).send({
        message: "Require store Role!",
      });
      return;
    });
};

isServiceCenter = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
        if (user.role === "servicecenter") {
          next();
          return;
        }
      res.status(403).send({
        message: "Require servicecenter Role!",
      });
      return;
    });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isFactory: isFactory,
  isStore: isStore,
  isServiceCenter: isServiceCenter,
};

module.exports = authJwt;
