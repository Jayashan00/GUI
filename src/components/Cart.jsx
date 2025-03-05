import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, onRemoveFromCart }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [receipt, setReceipt] = useState(null);

    // Auto-calculate discount (e.g., 10% of the subtotal)
    const calculateDiscount = (subtotal) => {
        return subtotal * 0.1; // 10% discount
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((total, item) => total + item.price, 0);
        const discount = calculateDiscount(subtotal);
        return subtotal - discount;
    };

    const handlePayment = () => {
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }

        // Generate receipt
        const subtotal = cart.reduce((total, item) => total + item.price, 0);
        const discount = calculateDiscount(subtotal);
        const total = calculateTotal();

        const receiptData = {
            items: cart,
            subtotal,
            discount,
            total,
            paymentMethod,
        };
        setReceipt(receiptData);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul className="cart-items">
                {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <button onClick={() => onRemoveFromCart(item.id)} className="remove-btn">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="cart-summary">
                <p>Subtotal: ${cart.reduce((total, item) => total + item.price, 0)}</p>
                <p>Discount: ${calculateDiscount(cart.reduce((total, item) => total + item.price, 0))}</p>
                <p>Total: ${calculateTotal()}</p>
                <div className="payment-section">
                    <label>Payment Method:</label>
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Select Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button onClick={handlePayment} className="payment-button">
                    Proceed to Payment
                </button>
            </div>
            {receipt && (
                <div className="receipt">
                    <h3>Receipt</h3>
                    <ul>
                        {receipt.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Subtotal: ${receipt.subtotal}</p>
                    <p>Discount: ${receipt.discount}</p>
                    <p>Total: ${receipt.total}</p>
                    <p>Payment Method: {receipt.paymentMethod}</p>
                    <p>Thank you for your payment!</p>
                </div>
            )}
        </div>
    );
};

export default Cart;