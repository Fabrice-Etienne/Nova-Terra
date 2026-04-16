import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/produits/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h2>Chargement...</h2>;

  return (
    <div className="product-page">
      <div className="product-container">

        {/* IMAGE */}
        <div className="product-image">
          <img
            src={
              product.image_url?.startsWith("http")
                ? product.image_url
                : `http://localhost:5000${product.image_url}`
            }
            alt={product.nom}
          />
        </div>

        {/* INFOS */}
        <div className="product-info">

          <h1>{product.nom}</h1>
          <p className="price">{product.prix}€</p>

          <p>
            Produit artisanal sélectionné avec soin, fabriqué par des producteurs locaux.
          </p>

          {/* BADGES */}
          <div className="badges">
            <span className="badge">🌿 Naturel</span>
            <span className="badge">🚚 Livraison 48h</span>
            <span className="badge">🤝 Local</span>
          </div>

          {/* STOCK */}
          <p className="stock ok">En stock</p>

          {/* ⭐ REVIEWS */}
          <div className="reviews">

            <div className="rating">
              <span className="stars">★★★★☆</span>
              <span className="rating-number">4.2 / 5</span>
            </div>

            <p className="review-count">Basé sur 18 avis clients</p>

            <div className="review-list">

              <div className="review">
                <p className="review-name">👤 Sophie D.</p>
                <p className="review-text">Produit excellent, goût authentique !</p>
              </div>

              <div className="review">
                <p className="review-name">👤 Marc L.</p>
                <p className="review-text">Très bon rapport qualité prix.</p>
              </div>

              <div className="review">
                <p className="review-name">👤 Nadia K.</p>
                <p className="review-text">Livraison rapide et produit parfait.</p>
              </div>

            </div>
          </div>

          {/* ACTION */}
          <button
            className="btn primary"
            onClick={() => addToCart(product)}
          >
            Ajouter au panier
          </button>

          <Link className="back" to="/catalogue">
            ← Retour catalogue
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ProductPage;