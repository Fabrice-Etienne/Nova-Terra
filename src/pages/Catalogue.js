import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Catalogue({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 appel API backend
  useEffect(() => {
    fetch("http://localhost:5000/api/produits")
      .then((res) => res.json())
      .then((data) => {

      const formatted = data.map((p) => ({
        id: p.id,
        nom: p.nom,
        prix: p.prix,
        image_url: `http://localhost:5000/images/${p.image_url.split("/").pop()}`
      }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des produits...</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Catalogue;