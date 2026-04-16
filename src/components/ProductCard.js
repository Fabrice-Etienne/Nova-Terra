import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-image">
        <img
          src={product.image_url || product.image}
          alt={product.nom}
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />
      </Link>

      <div className="card-body">
        <h3>{product.nom}</h3>
        <p className="price">{product.prix}€</p>

        <div className="card-actions">
          <Link className="btn secondary" to={`/product/${product.id}`}>
            Voir
          </Link>

          <button className="btn primary" onClick={() => addToCart(product)}>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;