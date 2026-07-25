import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "./AddProduct.css";


function AddProduct(){


  const navigate = useNavigate();


  const [product,setProduct] = useState({

    name:"",
    category:"",
    price:"",
    quantity:"",
    location:"",
    image:"",
    description:""

  });





  function handleChange(e){

    setProduct({

      ...product,

      [e.target.name]: e.target.value

    });

  }





  async function handleSubmit(e){

    e.preventDefault();



    const user = auth.currentUser;



    if(!user){

      alert("Login first 🌾");

      navigate("/login");

      return;

    }





    await addDoc(collection(db,"products"),{


      ...product,


      seller:user.email,


      sellerId:user.uid,


      createdAt:new Date()


    });



    alert("Product added 🌾");


    navigate("/marketplace");


  }







  return(


    <div className="add-product">


      <h1>
        Add New Product 🌱
      </h1>



      <form onSubmit={handleSubmit}>


        <input
          name="name"
          placeholder="Product name"
          onChange={handleChange}
        />


        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />


        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />


        <input
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />


        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />


        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />


        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />


        <button>
          Publish Product 🌾
        </button>


      </form>


    </div>


  );


}


export default AddProduct;