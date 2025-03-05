import React, { useContext } from "react";
import {CartContext} from "./CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Cart</h1>
            {cartItems.length > 0 ? (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.title} - ${item.price} x {item.quantity}</span>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${getTotalPrice().toFixed(2)}</h4>
                    <button className="btn btn-danger me-5 py-2" onClick={clearCart}>
                        Clear Cart
                    </button>
                    <Link to="/" className="btn btn-primary py-2">
                        Continue Shopping
                    </Link>
                    <button className="btn btn-success ms-5 py-2">
                        Proceed to Checkout
                    </button>
                </>
            ) : (
                <p className="text-center">Your cart is empty, Go hurry and fill your CART.</p>
            )}
        </div>
    );
};

export default CartPage;
