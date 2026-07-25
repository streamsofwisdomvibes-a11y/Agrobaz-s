import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Marketplace.css";


function Marketplace(){


const [products,setProducts] = useState([]);

const navigate = useNavigate();



useEffect(()=>{


async function fetchProducts(){


const snapshot = await getDocs(
collection(db,"products")
);



const data = snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));



setProducts(data);


}


fetchProducts();



},[]);





return(

<div className="marketplace">


{/* Hero */}

<section className="hero">


<h1>

🌾 Welcome to Agrobaz

</h1>


<h2>

The future of agricultural trade

</h2>


<p>

Connect with farmers, suppliers and buyers worldwide.

</p>



<div className="search-box">

<input

placeholder="Search crops, seeds, suppliers..."

/>


<button>

Search 🔍

</button>


</div>


</section>





{/* Categories */}

<section className="categories">


<h2>

Explore Categories

</h2>



<div className="category-grid">


<div>
🌽
Fresh Crops
</div>


<div>
🌱
Seeds
</div>


<div>
🧪
Fertilizers
</div>


<div>
🚜
Machinery
</div>


</div>


</section>





{/* Products */}

<section className="products">


<h2>

Featured Products

</h2>



<div className="product-grid">



{

products.map(product=>(


<div
className="product-card"
key={product.id}
>



<img

src={product.image}

alt={product.name}

/>



<h3>

{product.name}

</h3>



<p>

UGX {product.price}

</p>



<p>

📍 {product.location}

</p>




<button

onClick={()=>navigate(
`/product/${product.id}`
)}

>

View Product

</button>



</div>


))


}



</div>



</section>






{/* Trust */}

<section className="trust">


<h2>

Why Choose Agrobaz?

</h2>



<div className="trust-grid">


<div>
✔ Verified Sellers
</div>


<div>
🔒 Secure Payments
</div>


<div>
🚚 Logistics Support
</div>


<div>
🌍 Global Agriculture Network
</div>


</div>


</section>



</div>


);


}


export default Marketplace;