import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [seller, setSeller] = useState(null);

  useEffect(() => {

    async function loadProduct() {

      try {

        const productRef = doc(db, "products", id);

        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {

          const productData = {

            id: productSnap.id,

            ...productSnap.data(),

          };

          setProduct(productData);

          if (productData.sellerId) {

            const sellerRef = doc(
              db,
              "users",
              productData.sellerId
            );

            const sellerSnap = await getDoc(sellerRef);

            if (sellerSnap.exists()) {

              setSeller(sellerSnap.data());

            }

          }

        }

      } catch (error) {

        console.log(error);

      }

    }

    loadProduct();

  }, [id]);

  if (!product) {

    return <h2>Loading Product... 🌾</h2>;

  }

  return (

    <div className="product-details">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <h1>{product.name} 🌾</h1>

        <h2>UGX {product.price}</h2>

        <p>

          <strong>Category:</strong>

          {" "}

          {product.category}

        </p>

        <p>

          <strong>Available Quantity:</strong>

          {" "}

          {product.quantity}

        </p>

        <p>

          <strong>Description</strong>

        </p>

        <p>{product.description}</p>

        <hr />

        <h2>

          👨‍🌾 Seller Information

        </h2>

        {

          seller ?

          (

            <div className="seller-card">

              <h3>

                {seller.businessName}

              </h3>

              <p>

                📍 {seller.location}

              </p>

              <p>

                🌱 {seller.category}

              </p>

              <p>

                📞 {seller.phone}

              </p>

              <span className="verified">

                ✔ Verified Agrobaz Seller

              </span>

            </div>

          )

          :

          (

            <p>

              Seller profile not available.

            </p>

          )

        }

        <hr />

        <h2>

          🚚 Delivery Options

        </h2>

        <ul>

          <li>Seller Delivery</li>

          <li>Buyer Pickup</li>

          <li>Local Courier</li>

          <li>National Transport</li>

          <li>International Freight</li>

        </ul>

        <hr />

        <h2>

          🛡 Buyer Protection

        </h2>

        <p>

          ✔ Secure Payments

        </p>

        <p>

          ✔ Verified Sellers

        </p>

        <p>

          ✔ Order Tracking

        </p>

        <hr />

        <div className="product-buttons">

          <button

            onClick={() =>

              navigate("/chat", {

                state: {

                  product,

                  sellerId: product.sellerId,

                  sellerEmail: product.seller,

                },

              })

            }

          >

            💬 Message Seller

          </button>

          <button

            onClick={() =>

              navigate("/checkout", {

                state: {

                  product,

                },

              })

            }

          >

            🛒 Buy Now

          </button>

          <button

            onClick={() =>

              navigate("/marketplace")

            }

          >

            ← Back to Marketplace

          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;