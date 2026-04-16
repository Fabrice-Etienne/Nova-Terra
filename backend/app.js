const express = require("express");
const cors = require("cors");
const path = require("path");

const produitsRoutes = require("./routes/produits.routes");
const commandesRoutes = require("./routes/commandes.routes");
const clientsRoutes = require("./routes/clients.routes");
const panierRoutes = require("./routes/panier.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

// Routes API
app.use("/api/produits", produitsRoutes);
app.use("/api/commandes", commandesRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/panier", panierRoutes);

module.exports = app;