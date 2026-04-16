import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const navigate = useNavigate();

  // ✅ FIX TOTAL SAFE (prix + fallback price)
  const total = (cart || []).reduce((sum, item) => {
    const price = Number(item.prix ?? item.price ?? 0);
    const qty = Number(item.quantity ?? 0);
    return sum + price * qty;
  }, 0);

  return (
    <div className="cart-page">

      <h1 className="cart-title">Votre panier</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <h3>Votre panier est vide</h3>
          <p>Ajoutez des produits pour commencer vos achats</p>
        </div>
      ) : (
        <div className="cart-layout">

          {/* LEFT - ITEMS */}
          <div className="cart-items">

            {cart.map((item) => (
              <div key={item.id} className="cart-card">

                <div className="cart-info">
                  <h3>{item.nom || item.name}</h3>

                  <p className="cart-price">
                    {(Number(item.prix ?? item.price) * item.quantity) || 0}€
                  </p>
                </div>

                <div className="cart-actions">

                  <div className="qty">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT - SUMMARY */}
          <div className="cart-summary">

            <h2>Résumé commande</h2>

            <div className="summary-line">
              <span>Sous-total</span>
              <span>{total}€</span>
            </div>

            <div className="summary-line">
              <span>Livraison</span>
              <span>Gratuit</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <span>{total}€</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Passer commande
            </button>

            <p className="cart-note">
              Paiement sécurisé • Livraison rapide NovaTerra
            </p>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;