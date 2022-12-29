const config = require("../config/auth.config");
const { credentialModel, requestModel } = require("../models/index");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const credential = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
  };
  credentialModel
    .create(credential)
    .then(() => {
      res.send({ message: "User registered successfully!" });
      requestModel.destroy({
        where: { username: req.body.username },
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.request = (req, res) => {
  requestModel
    .create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: req.body.role,
    })
    .then(() => {
      res.send({ message: "Please wait while admin processing your request!" });
    });
};

exports.signin = (req, res) => {
  credentialModel
    .findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var roles = "ROLE_" + user.role.toUpperCase();
      res.status(200).send({
        username: user.username,
        email: user.email,
        role: roles,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
