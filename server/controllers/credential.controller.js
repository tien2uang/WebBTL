exports.allAccess = (req, res) => {
  res.status(200).send("this is public page.");
};

exports.factoryBoard = (req, res) => {
  res.status(200).send("this is factory page.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("this is admin page.");
};

exports.storeBoard = (req, res) => {
  res.status(200).send("this is store page.");
};

exports.servicecenterBoard = (req, res) => {
  res.status(200).send("this is service center page.");
};
  