import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img
          src={require("../assets/images/logoSitermbg.png")}
          alt="Logo NovaTerra"
        />
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Rechercher un produit..." />
      </div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link className="link" to="/pro">Espace Pro</Link>
        <Link className="link" to="/catalogue">Catalogue</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/cart">Panier ({total})</Link>
      </div>

    </nav>
  );
}

export default Navbar;