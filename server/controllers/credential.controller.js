const { credentialModel } = require("../models/index");

exports.findAll = async (req, res) => {
  try {
    const credentials = await credentialModel.findAll();
    res.json(credentials);
  } catch (err) {
    console.log(err);
  }
};