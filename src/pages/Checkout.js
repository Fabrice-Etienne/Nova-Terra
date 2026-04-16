import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Checkout({ cart, clearCart }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // ✅ FIX TOTAL (gestion prix/prix + sécurité NaN)
  const total = (cart || []).reduce((sum, item) => {
    const price = Number(item.prix ?? item.price ?? 0);
    const qty = Number(item.quantity ?? 0);
    return sum + price * qty;
  }, 0);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handlePayment = () => {
    setStep(3);

    setTimeout(() => {
      clearCart();          // reset panier
      navigate("/success"); // page confirmation
    }, 1500);
  };

  return (
    <div className="checkout-container">

      <div className="checkout-main">
        <h1>Finaliser votre commande</h1>

        {step === 1 && (
          <div className="card-step">
            <h2>Adresse de livraison</h2>
            <input placeholder="Nom complet" />
            <input placeholder="Adresse" />
            <input placeholder="Code postal" />
            <input placeholder="Ville" />

            <button onClick={next} className="btn-primary">
              Continuer
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
        <div className="card-step">
            <h2>Paiement sécurisé</h2>

            {/* PAYMENT OPTIONS */}
            <div className="payment-methods">

            <div className="payment-card">
                <img
                src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                alt="Apple Pay"
                />
                <span>Apple Pay</span>
            </div>

            <div className="payment-card">
                <img
                src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                alt="PayPal"
                />
                <span>PayPal</span>
            </div>

            <div className="payment-card active">
                <img
                src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                alt="Carte bancaire"
                />
                <span>Carte bancaire</span>
            </div>

            </div>

            <input placeholder="Numéro de carte" />
            <input placeholder="MM/AA" />
            <input placeholder="CVV" />

            <div className="buttons">
            <button onClick={back}>Retour</button>
            <button onClick={handlePayment} className="btn-primary">
                Payer {total}€
            </button>
            </div>
        </div>
        )}

        {step === 3 && (
          <div className="success">
            <h2>Commande validée</h2>
            <p>Redirection en cours...</p>
          </div>
        )}
      </div>

      <div className="checkout-summary">
        <h2>Résumé commande</h2>

        {(cart || []).map((item) => (
          <div key={item.id} className="summary-item">
            <p>{item.nom || item.name}</p>

            <p>x{item.quantity}</p>

            <p>
              {(Number(item.prix ?? item.price) * item.quantity) || 0}€
            </p>
          </div>
        ))}

        <hr />
        <h3>Total : {total}€</h3>
      </div>
    </div>
  );
}

export default Checkout;