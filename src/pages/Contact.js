import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [form, setForm] = useState({
    type: "particulier",
    societe: "",
    nom: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", form);

    alert("Votre demande a bien été envoyée !");
  };

  return (
    <div className="contact-container">

      <h1>Contact</h1>

      <p className="contact-subtitle">
        Une question ? Une demande professionnelle ? Contactez-nous.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        {/* TYPE CLIENT */}
        <div className="form-group">
          <label>Vous êtes :</label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="particulier">Particulier</option>
            <option value="professionnel">Professionnel</option>
          </select>
        </div>

        {/* SOCIÉTÉ (AFFICHÉ SI PRO) */}
        {form.type === "professionnel" && (
          <div className="form-group">
            <label>Société</label>
            <input
              type="text"
              name="societe"
              placeholder="Nom de votre entreprise"
              value={form.societe}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="btn primary" type="submit">
          Envoyer
        </button>

      </form>
    </div>
  );
}

export default Contact;