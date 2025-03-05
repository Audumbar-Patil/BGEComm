import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";



const Home = () => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    

    const categoryIds = [1, 2, 3];
    const fetchCategories = async () => {
      try {
        const responses = await Promise.all(
          categoryIds.map((id) =>
            fetch(`https://api.escuelajs.co/api/v1/categories/${id}`).then((res) => res.json())
          )
        );

        setCategories(responses);
      } 
      
      catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();

    
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="container-fluid py-3">
      <h1 className="text-center mb-4 py-5">Happy Shopping :)</h1>


      <div className="d-flex justify-content-end mb-3">
        {user ? (
          <div>
            <span className="me-2">Welcome, {user.email}</span>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        ) : (
          
          <div>
            <Link to="/signup" className="btn btn-primary me-2">
              Signup
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        )}
      </div>


      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4 mb-3" key={category.id}>
            <div className="card">


                <img
                src={category.image}
                className="card-card-img-top-50"
                alt={category.name}
                style={{ height: "200px", objectFit: "cover"}}
              />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <Link to={`/category/${category.id}`} className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
