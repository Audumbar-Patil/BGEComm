import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              VASTRA
            </h5>
            <p>
              Your one-stop shop for all your shopping needs!
            </p>
          </div>
          
     
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Quick Links
            </h5>
            <p>
              <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
                Home
              </Link>


            </p>
            <p>
              <Link to="/products" className="text-white" style={{ textDecoration: "none" }}>
                Products
              </Link>
            </p>
            

          </div>

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Contact
            </h5>


            <p>
              <i className="fas fa-home mr-3"></i> Pune, Maharashtra, India
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> support@myecomm.com
            </p>


            <p>
              <i className="fas fa-phone mr-3"></i> +91 12345 67890
            </p>
          </div>

      
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">


            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow Us
            </h5>
            <p>
              <a
                href="https://facebook.com"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>


            </p>
            <p>
              <a
                href="https://twitter.com"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </p>
          </div>

        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
