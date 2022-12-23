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
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

isStore = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "store") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Store Role!",
      });
    });
  });
};

isFactory = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "factory") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Factory Role!",
      });
    });
  });
};

isServiceCenter = (req, res, next) => {
  credentialModel.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "servicecenter") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Service Center Role!",
      });
    });
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
