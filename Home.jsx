import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
{/* Statistics */}

<section className="stats">

  <div className="stat-card">
    <h2>10,000+</h2>
    <p>Farmers</p>
  </div>

  <div className="stat-card">
    <h2>50+</h2>
    <p>Regions</p>
  </div>

  <div className="stat-card">
    <h2>100,000+</h2>
    <p>Products</p>
  </div>

  <div className="stat-card">
    <h2>99%</h2>
    <p>Customer Satisfaction</p>
  </div>

</section>
      {/* Hero */}
      <section className="hero">

        <h1>🌾 Welcome to Agrobaz</h1>

        <h2>The Future of Global Agricultural Trade</h2>

        <p>
          Connect farmers, suppliers and buyers through one trusted marketplace.
        </p>

        <div className="hero-buttons">

          <Link to="/marketplace">
            <button className="primary-btn">
              Explore Marketplace
            </button>
          </Link>

          <Link to="/register">
            <button className="secondary-btn">
              Become a Supplier
            </button>
          </Link>

        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Explore Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            🌽
            <h3>Fresh Crops</h3>
          </div>

          <div className="category-card">
            🌱
            <h3>Seeds</h3>
          </div>

          <div className="category-card">
            🧪
            <h3>Fertilizers</h3>
          </div>

          <div className="category-card">
            🚜
            <h3>Machinery</h3>
          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="how-it-works">

        <h2>How Agrobaz Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1️⃣ Suppliers Register</h3>
            <p>Create your trusted business profile.</p>
          </div>

          <div className="step">
            <h3>2️⃣ List Products</h3>
            <p>Upload crops, seeds, machinery and farm inputs.</p>
          </div>

          <div className="step">
            <h3>3️⃣ Buyers Purchase</h3>
            <p>Secure checkout with logistics support.</p>
          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose Agrobaz?</h2>

        <div className="why-grid">

          <div>✔ Verified Suppliers</div>

          <div>🔒 Secure Payments</div>

          <div>🚚 Logistics Support</div>

          <div>🌍 Global Agriculture Network</div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="cta">

        <h2>Join the Agricultural Revolution</h2>

        <p>
          Buy and sell agricultural products with confidence.
        </p>

        <Link to="/register">

          <button className="primary-btn">
            Get Started
          </button>

        </Link>

      </section>

    </div>
  );
}

export default Home;