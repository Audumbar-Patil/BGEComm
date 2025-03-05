import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manageLogin = async (e) => {


    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");


    } catch (error) {
      setError("Invalid Email or Password, Kindly try AGAIN");
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex  align-items-center vh-100 bg-light justify-content-center py-4">
      <div className="p-5 shadow-lg bg-white rounded-3 shadow-lg justify-content-center align-items-center" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">LOGIN</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={manageLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email ID
            </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

      
      <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Your Unique Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />


          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

        </form>
          <div className="mt-3 text-center">
            <p className="mb-0">
              Don't have an account? No worries, we got your back. Signup here<Link to="/signup">Sign up</Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;