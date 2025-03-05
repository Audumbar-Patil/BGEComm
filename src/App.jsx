import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import LoginPage from "./components/LoginPage";


import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";




const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const App = () => {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:id"
            element={
              <PrivateRoute>
                <CategoryPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer/>
      </Router>
      </CartProvider>
    
  );
};

export default App;