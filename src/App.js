import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Pro from "./pages/Pro";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);

  // ✅ AJOUT : vider le panier après paiement
  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);

      if (found) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

return (
  <BrowserRouter>
    <Navbar cart={cart} />

    <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/catalogue"
          element={<Catalogue addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} clearCart={clearCart} />}
        />
        <Route
          path="/success"
          element={<Success />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} />}
        />

        <Route path="/success" element={<Success />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    <Footer />
  </BrowserRouter>
);
}

export default App;