var express = require("express");
const { json } = require("express/lib/response");
var router = express.Router();
const { ObjectId } = require("mongodb");

// Får användare från datorbas
router.get("/", function (req, res, next) {
  req.app.locals.db
    .collection("GameNames")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      let printUsers = "<div><h1>Våra users</h1>";

      for (user in results) {
        printUsers +=
          "<h2>" +
          results[user].username +
          "</h2>" +
          "<p>" +
          results[user].password +
          "</p>";
      }
      printUsers += "</div>";
      res.send(printUsers);
    });
});

// Hittar en och skriver ut det

router.get('/postit', function (req, res, next){
  let ppl = ['anton', 'nils']

  res.status(200).json(ppl)
})

router.post("/user", function (req, res, next) {
  req.app.locals.db
    .collection("GameNames")
    .findOne({ _id: ObjectId(req.body._id) })
    .then((results) => {
      res.json(results);
    });
});

// hämtar users till frontend
router.post("/login", function (req, res, next) {
  console.log(req.body);
  req.app.locals.db
    .collection("GameNames")
    .findOne({ username: req.body.username, password: req.body.password })
    .then((results) => {
      res.json(results);
    });
});

// Pushar en ny användare
router.post("/add", function (req, res) {
  req.app.locals.db
    .collection("GameNames")
    .insertOne(req.body)
    .then((result) => {
      console.log(result);
      res.send("/");
    });
});

// Ändra gammal Posts // PUT
router.put("/:id", function (req, res) {
  console.log(req.params.id);
  console.log(req.body.subscribe);
  try {
    req.app.locals.db
      .collection("GameNames")
      .findOneAndUpdate(
        { username: req.body.username },
        { $set: { subscribe: req.body.subscribe } }
      )
      .then((result) => {
        res.status(200).send(JSON.stringify("200"));
        console.log("uppdaterar användare", result);
      });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
