const categorymodel = require("./Categoryschema");

const categoryuser = (req, res) => {
  const categoryDetails = new categorymodel({
    Company: req.body.company,
    category: req.body.category,
    model: req.body.model,
    os: req.body.os,
  });

  categoryDetails
    .save()
    .then((data) => {
      console.log("data Saved", data);
      res.json({
        status: 200,
        msg: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "error",
        data: err,
      });
    });
};

const viewAllproduct = (req, res) => {
  categorymodel
    .find({})
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      React.status(500).json({
        status: 500,
        data: err,
      });
    });
};

const Mobiles = (req, res) => {
  categorymodel
    .find({ category: "smartphone" })
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      React.status(500).json({
        status: 500,
        data: err,
      });
    });
};

const Laptop = (req, res) => {
  categorymodel
    .find({ category: "laptop" })
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      React.status(500).json({
        status: 500,
        data: err,
      });
    });
};

const Tablets = (req, res) => {
  categorymodel
    .find({ category: "tablet" })
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      React.status(500).json({
        status: 500,
        data: err,
      });
    });
};

module.exports = { categoryuser, viewAllproduct, Mobiles, Laptop, Tablets };
