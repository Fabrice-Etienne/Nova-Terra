import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/produits")
      .then((res) => res.json())
      .then((data) => setProducts(data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Épicerie fine artisanale</h1>
        <p className="hero-subtitle">
          Produits locaux, naturels et de qualité premium
        </p>
      </div>

      <div className="values">
        <div className="value-card">
          <h3>🌿 Naturel</h3>
          <p>Produits sans transformation industrielle</p>
        </div>

        <div className="value-card">
          <h3>🤝 Local</h3>
          <p>Directement des producteurs</p>
        </div>

        <div className="value-card">
          <h3>🚚 Rapide</h3>
          <p>Livraison en 48h</p>
        </div>
      </div>

      <div className="home-products">
        <h2>Produits phares</h2>

        <div className="grid">
          {(products || []).slice(0, 3).map((p) => (
            <div key={p.id} className="card">

              <Link to={`/product/${p.id}`} className="card-image">
                <img
                  src={p.image_url}
                  alt={p.nom}
                />
              </Link>

              <div className="card-body">
                <h3>{p.nom}</h3>
                <p className="price">{p.prix}€</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;