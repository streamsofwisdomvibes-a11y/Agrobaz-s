import { Link } from "react-router-dom";
import "./SellerDashboard.css";


function SellerDashboard() {


  return (


    <div className="seller-dashboard">



      <h1>
        Seller Dashboard 🌾
      </h1>




      <p>
        Manage your agricultural business on Agrobaz.
      </p>





      <div className="seller-grid">





        <div className="seller-card">


          <h2>
            Products 📦
          </h2>



          <p>
            Manage your crop and farm listings.
          </p>



          <Link to="/add-product">

            <button>
              Add Product
            </button>

          </Link>



        </div>

<div className="seller-card">

<h2>
💬 Messages
</h2>

<p>
Chat with buyers interested in your products.
</p>


<Link to="/seller-messages">

<button>
Open Messages
</button>

</Link>


</div>





        <div className="seller-card">


          <h2>
            Orders 🚜
          </h2>



          <p>
            View and manage customer orders.
          </p>



          <Link to="/orders">

            <button>
              View Orders
            </button>

          </Link>



        </div>







        <div className="seller-card">


          <h2>
            Earnings 💰
          </h2>



          <p>
            Track your Agrobaz commissions and sales.
          </p>



          <Link to="/revenue">

            <button>
              View Revenue
            </button>

          </Link>



        </div>







        <div className="seller-card">


          <h2>
            Seller Profile 👨‍🌾
          </h2>



          <p>
            Manage your farm or business information.
          </p>



          <Link to="/profile">

            <button>
              Edit Profile
            </button>

          </Link>



        </div>






      </div>




    </div>


  );


}



export default SellerDashboard;