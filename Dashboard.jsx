import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";


function Dashboard() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

      if(currentUser){

        setUser(currentUser);

      } else {

        navigate("/login");

      }

    });


    return unsubscribe;

  }, [navigate]);



  if(!user){

    return <h2>Loading...</h2>;

  }



  return (

    <div className="dashboard">


      <h1>
        Agrobaz Dashboard 🌾
      </h1>


      <p>
        Welcome, {user.email}
      </p>



      <div className="dashboard-grid">


        <div className="dashboard-card">

          <h2>
            Buyer Account 🛒
          </h2>

          <p>
            Browse products and manage orders.
          </p>


          <Link to="/marketplace">

            <button>
              Marketplace
            </button>

          </Link>


        </div>



        <div className="dashboard-card">

          <h2>
            Seller Account 👨‍🌾
          </h2>


          <p>
            Manage your agricultural business.
          </p>


          <Link to="/seller-dashboard">

            <button>
              Open Seller Dashboard
            </button>

          </Link>


        </div>



        <div className="dashboard-card">

          <h2>
            Seller Profile 🌱
          </h2>


          <p>
            Create your farm/business identity.
          </p>


          <Link to="/profile">

            <button>
              Edit Profile
            </button>

          </Link>


        </div>



        <div className="dashboard-card">

          <h2>
            Add Product 📦
          </h2>


          <p>
            Publish crops and agricultural products.
          </p>


          <Link to="/add-product">

            <button>
              Add Product
            </button>

          </Link>


        </div>



      </div>


    </div>

  );

}


export default Dashboard;