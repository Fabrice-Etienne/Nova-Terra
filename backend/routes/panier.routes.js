const express = require("express");
const router = express.Router();

// panier mock (temporaire)
let panier = [];

/**
 * GET /api/panier
 * récupérer le panier
 */
router.get("/", (req, res) => {
  res.json(panier);
});

/**
 * POST /api/panier
 * ajouter un produit au panier
 */
router.post("/", (req, res) => {
  const { produit_id, nom, prix, quantity } = req.body;

  const item = {
    produit_id,
    nom,
    prix,
    quantity: quantity || 1
  };

  panier.push(item);

  res.status(201).json({
    message: "Produit ajouté au panier",
    panier
  });
});

/**
 * DELETE /api/panier
 * vider le panier
 */
router.delete("/", (req, res) => {
  panier = [];

  res.json({ message: "Panier vidé" });
});

module.exports = router;