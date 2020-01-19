const router = require("express").Router();
let Website = require("../models/website.model");

router.route("/").get((req, res) => {
  Website.find()
    .then(websites => res.json(websites))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const nickName = req.body.nickName;
  const url = req.body.url;
  const userName = req.body.userName;
  const pwd = req.body.pwd;
  const createdDate = req.body.createdDate;

  const newWebsite = new Website({ nickName, url, userName, pwd, createdDate });

  newWebsite
    .save()
    .then(() => res.json("Website added !"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Website.findById(req.params.id)
    .then(website => res.json(website))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Website.findByIdAndDelete(req.params.id)
    .then(() => res.json("Website deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Website.findById(req.params.id)
    .then(website => {
      website.nickName = req.body.nickName;
      website.url = req.body.url;
      website.userName = req.body.userName;
      website.pwd = req.body.pwd;

      website
        .save()
        .then(() => res.json("website updated !"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
