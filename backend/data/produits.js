const produits = [
  {
    id: 1,
    nom: "Miel artisanal",
    prix: 10,
    image_url: "http://localhost:5000/images/miel.jpg",
    categorie: "Miel",
    producteur_id: 1,
    stock: 25
  },
  {
    id: 2,
    nom: "Confiture fraise",
    prix: 7,
    image_url: "http://localhost:5000/images/confiture.webp",
    categorie: "Confiture",
    producteur_id: 2,
    stock: 40
  },
  {
    id: 3,
    nom: "Huile d'olive",
    prix: 15,
    image_url: "http://localhost:5000/images/huile.webp",
    categorie: "Huile",
    producteur_id: 3,
    stock: 18
  }
];

module.exports = produits;