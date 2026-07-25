import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>
        The Future of Global Agricultural Trade 🌍
      </h1>

      <p>
        Connect farmers, suppliers, and buyers around the world through one trusted marketplace.
      </p>

      <div className="search-box">
        <input 
          type="text"
          placeholder="Search crops, seeds, fertilizer, machinery..."
        />

        <button>
          Search
        </button>
      </div>

      <div className="hero-buttons">

        <button>
          Start Selling
        </button>

        <button>
          Explore Marketplace
        </button>

      </div>

    </section>
  );
}

export default Hero;