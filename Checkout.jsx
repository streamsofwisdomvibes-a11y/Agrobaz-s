import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const [paymentMethod, setPaymentMethod] = useState("");
  const [phone, setPhone] = useState("");

  if (!product) {
    return (
      <div className="checkout-page">
        <h2>Product not found.</h2>
      </div>
    );
  }

  async function handlePayment() {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first 🌾");
      return;
    }

    if (!product.sellerId) {
      alert("Seller information missing 🌾");
      return;
    }

    if (!phone.trim()) {
      alert("Enter your phone number 📱");
      return;
    }

    if (!paymentMethod) {
      alert("Choose a payment method 💳");
      return;
    }

    try {
      // Send payment request to backend
      const response = await fetch("http://localhost:5000/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: product.price,
          currency: "UGX",
          email: user.email,
          phone,
          method: paymentMethod,
        }),
      });

      const paymentResult = await response.json();

      if (!response.ok) {
        throw new Error(paymentResult.error || "Payment request failed");
      }

      // Save order in Firestore
      await addDoc(collection(db, "orders"), {
        productName: product.name,
        category: product.category,
        price: product.price,

        sellerId: product.sellerId,
        sellerEmail: product.seller,

        buyerId: user.uid,
        buyerEmail: user.email,
        buyerPhone: phone,

        paymentMethod,
        paymentStatus: paymentResult.status || "Pending",

        status: "Pending",

        createdAt: new Date(),
      });

      alert("Payment request created successfully 🌾");

      navigate("/order-success");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="checkout-page">

      <h1>🌾 Agrobaz Checkout</h1>

      <div className="checkout-card">

        <h2>Order Summary</h2>

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="checkout-image"
          />
        )}

        <h3>{product.name}</h3>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Seller:</strong> {product.seller}
        </p>

        <p>
          <strong>Price:</strong> UGX {product.price}
        </p>

        <hr />

        <h2>Buyer Details</h2>

        <input
          type="email"
          value={auth.currentUser?.email || ""}
          readOnly
        />

        <input
          type="tel"
          placeholder="07XXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <hr />

        <h2>Payment Method</h2>

        <label>
          <input
            type="radio"
            name="payment"
            value="MTN Mobile Money"
            checked={paymentMethod === "MTN Mobile Money"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          MTN Mobile Money 📱
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Airtel Money"
            checked={paymentMethod === "Airtel Money"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Airtel Money 📱
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Visa"
            checked={paymentMethod === "Visa"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Visa 💳
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Mastercard"
            checked={paymentMethod === "Mastercard"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Mastercard 💳
        </label>

        <button onClick={handlePayment}>
          🔒 Pay Securely
        </button>

      </div>

    </div>
  );
}

export default Checkout;