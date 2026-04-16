const express = require("express");
const router = express.Router();

const clients = [
  { id: 1, nom: "Claire", type: "B2C" },
  { id: 2, nom: "Marc", type: "B2B" }
];

router.get("/", (req, res) => {
  res.json(clients);
});

module.exports = router;