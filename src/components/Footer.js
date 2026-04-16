import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h4>Pour mieux nous connaître</h4>
          <p>À propos de NovaTerra</p>
          <p>Carrières</p>
          <p>Durabilité</p>
          <p>Innovation agricole</p>
        </div>

        <div className="footer-column">
          <h4>Gagner de l'argent</h4>
          <p>Vendez sur NovaTerra</p>
          <p>Devenez partenaire</p>
          <p>Livraison producteur</p>
          <p>Marketing produits</p>
        </div>

        <div className="footer-column">
          <h4>Moyens de paiement</h4>
          <p>Cartes bancaires</p>
          <p>PayPal</p>
          <p>Apple Pay</p>
          <p>Paiement sécurisé</p>
        </div>

        <div className="footer-column">
          <h4>Besoin d'aide ?</h4>
          <p>Service client</p>
          <p>Suivi commande</p>
          <p>Retours & remboursements</p>
          <p>Contact</p>
        </div>

      </div>

      {/* 🔻 NOUVELLE SECTION : LÉGAL / POLITIQUES */}
      <div className="footer-legal">

        <div className="footer-legal-links">
          <p>Conditions générales d’utilisation</p>
          <p>Politique de confidentialité</p>
          <p>Cookies</p>
          <p>Mentions légales</p>
          <p>Protection des données</p>
          <p>Accessibilité</p>
          <p>Signalement d’un problème</p>
        </div>
        {/* 🔻 SOCIAL MEDIA */}
        <div className="footer-social">

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>

        </div>
        <div className="footer-bottom">
          © 2026 NovaTerra - Tous droits réservés
        </div>

      </div>

    </footer>
  );
}

export default Footer;