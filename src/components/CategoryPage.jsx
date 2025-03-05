import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

import './CategoryPage.css'
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryPage = () => {
    const { id, name } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const { addToCart } = useContext(CartContext);
    const [addedToCartMessage, setAddedToCartMessage] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
                );
                const data = await response.json();
                setProducts(data);
                setFilteredProduct(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [id]);



    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProduct(filtered);
    }, [searchTerm, products]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCartMessage(`${product.title} has been added to the cart!`);
        setTimeout(() => setAddedToCartMessage(""), 3000);
    };

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">{name} Products</h1>

            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {addedToCartMessage && (
                <div className="alert alert-success text-center" role="alert">
                    {addedToCartMessage}
                </div>
            )}

            <div className="row">
                {filteredProduct.length > 0 ? (
                    filteredProduct.map((product) => (
                        <div className="col-md-4 mb-3" key={product.id}>
                            <div className="card productCard position-relative overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    className="img-top"
                                    alt={product.title}
                                    style={{ height: "200px", objectFit: "contain", width: "100%" }} 
                                />


                                    <div className="card-body position-relative">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-price">${product.price}</p>
                                        <div className="button-container">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    
                                <div className="description-overlay">
                                    <p className="description-text">
                                        {product.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">SORRY PRODUCTS ARE ON THEIR WAY</p>
                )}
            </div>

            <div className="text-center mt-4">
                <Link to="/" className="btn btn-secondary">
                    GO HOME
                </Link>
            </div>

          
        </div>
    );
};

export default CategoryPage;
