const express = require("express");
const router = express.Router();

const produits = require("../data/produits");

// GET all products
router.get("/", (req, res) => {
  res.json(produits);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const product = produits.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Produit introuvable" });
  }

  res.json(product);
});

module.exports = router;