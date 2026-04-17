import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Pro() {
  return (
    <div className="pro-container">

      <h1>Espace Professionnel</h1>

      <p className="pro-subtitle">
        Des offres adaptées aux professionnels de la restauration et du commerce.
      </p>

      <div className="pro-grid">

        <div className="pro-card">
          <h3>💰 Prix dégressifs</h3>
          <p>
            Bénéficiez de tarifs avantageux en fonction des quantités commandées.
          </p>
        </div>

        <div className="pro-card">
          <h3>📦 Commandes en gros</h3>
          <p>
            Commandez en volume pour répondre à vos besoins professionnels.
          </p>
        </div>

        <div className="pro-card">
          <h3>🚚 Livraison dédiée</h3>
          <p>
            Livraison rapide et adaptée aux professionnels.
          </p>
        </div>

      </div>

      <div className="pro-cta">
        <Link to="/contact" className="btn primary">
          Devenir partenaire
        </Link>
      </div>

    </div>
  );
}

export default Pro;