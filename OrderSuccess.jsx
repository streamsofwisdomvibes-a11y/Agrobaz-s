import { Link } from "react-router-dom";
import "./OrderSuccess.css";


function OrderSuccess(){


return(

<div className="success-page">


<h1>
Order Confirmed 🎉🌾
</h1>


<p>
Your order has been sent to the seller.
</p>


<p>
The seller will process your agricultural product soon.
</p>



<Link to="/marketplace">

<button>
Continue Shopping 🌱
</button>

</Link>


</div>


);


}


export default OrderSuccess;