import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "./Profile.css";


function Profile() {


  const [profile, setProfile] = useState({

    businessName: "",

    location: "",

    category: "",

    phone: ""

  });





  function handleChange(e){


    setProfile({

      ...profile,

      [e.target.name]: e.target.value

    });


  }







  async function handleSubmit(e){


    e.preventDefault();



    const user = auth.currentUser;



    if(!user){


      alert("Please login first 🌾");

      return;


    }





    try {



      await setDoc(

        doc(db, "users", user.uid),

        {

          ...profile,

          email: user.email,

          role: "seller"

        }

      );



      alert("Seller profile saved 🌾");



    } catch(error){


      alert(error.message);


    }


  }







  return (



    <div className="profile">



      <h1>
        Seller Profile 👨‍🌾
      </h1>




      <form onSubmit={handleSubmit}>




        <input

          name="businessName"

          placeholder="Farm or Business Name"

          onChange={handleChange}

        />




        <input

          name="location"

          placeholder="Location"

          onChange={handleChange}

        />




        <input

          name="category"

          placeholder="Product Category"

          onChange={handleChange}

        />




        <input

          name="phone"

          placeholder="Phone Number"

          onChange={handleChange}

        />





        <button>

          Save Profile

        </button>




      </form>




    </div>



  );


}



export default Profile;