const express = require("express");
const router = express.Router();

let commandes = require("../data/commandes");

// ======================
// GET ALL COMMANDES
// ======================
router.get("/", (req, res) => {
  res.json(commandes);
});

// ======================
// CREATE COMMANDE (CHECKOUT)
// ======================
router.post("/", (req, res) => {
  const { items, total } = req.body;

  // ⚠️ validation simple (niveau pro)
  if (!items || !total) {
    return res.status(400).json({
      message: "Données invalides : items et total requis"
    });
  }

  const nouvelleCommande = {
    id: commandes.length + 1,
    items,
    total,
    statut: "en cours",
    date: new Date().toISOString()
  };

  commandes.push(nouvelleCommande);

  return res.status(201).json({
    message: "Commande créée avec succès",
    commande: nouvelleCommande
  });
});

module.exports = router;