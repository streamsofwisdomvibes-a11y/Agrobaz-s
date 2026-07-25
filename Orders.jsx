import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "./Orders.css";


function Orders() {


  const [orders, setOrders] = useState([]);




  useEffect(() => {


    async function loadOrders(){


      const user = auth.currentUser;


      if(!user){

        return;

      }



      const ordersQuery = query(

        collection(db, "orders"),

        where("sellerId", "==", user.uid)

      );



      const snapshot = await getDocs(ordersQuery);



      const orderList = snapshot.docs.map((doc)=>({


        id: doc.id,

        ...doc.data()


      }));



      setOrders(orderList);


    }



    loadOrders();


  }, []);







  async function updateStatus(id, status, order){



    const orderRef = doc(db, "orders", id);





    if(status === "Completed"){



      const commissionRate = 0.035;



      const price = Number(order.price);



      const commission = price * commissionRate;





      await updateDoc(orderRef, {



        status: "Completed",

        commission: commission,

        platformEarning: commission



      });




    } else {



      await updateDoc(orderRef, {



        status: status



      });



    }




    window.location.reload();



  }








  return (



    <div className="orders">


      <h1>
        Seller Orders 🚜
      </h1>





      {

        orders.length === 0 ? (


          <p>
            No orders yet 🌾
          </p>



        ) : (



          orders.map((order)=>(



            <div
              className="order-card"
              key={order.id}
            >



              <h2>
                {order.productName}
              </h2>




              <p>
                Buyer: {order.buyerEmail}
              </p>




              <p>
                Quantity: {order.quantity}
              </p>




              <p>
                Price: {order.price}
              </p>




              <p>
                Status: {order.status}
              </p>






              {
                order.status === "Pending" && (


                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "Accepted",
                        order
                      )
                    }
                  >

                    Accept Order

                  </button>


                )
              }







              {
                order.status === "Accepted" && (


                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        "Completed",
                        order
                      )
                    }
                  >

                    Complete Order

                  </button>


                )
              }






              {
                order.status === "Completed" && (


                  <p>

                    💰 Agrobaz Commission:
                    ${order.commission}

                  </p>


                )
              }






            </div>



          ))


        )

      }



    </div>


  );


}


export default Orders;