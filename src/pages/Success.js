import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1>🎉 Commande confirmée</h1>
      <p>Merci pour votre achat chez NovaTerra</p>

      <Link to="/catalogue">
        <button className="btn-primary" style={{ marginTop: "20px" }}>
          Continuer mes achats
        </button>
      </Link>
    </div>
  );
}

export default Success;