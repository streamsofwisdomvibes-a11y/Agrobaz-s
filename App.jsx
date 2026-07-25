import { BrowserRouter, Routes, Route } from "react-router-dom";

import Commission from "./pages/Commission";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

// Pages
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Suppliers from "./pages/Suppliers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Revenue from "./pages/Revenue";
import Profile from "./pages/Profile";
import SellerMessages from "./pages/SellerMessages";
import OrderTracking from "./pages/OrderTracking";

function App() {


  return (


    <BrowserRouter>


      <Navbar />


      <Routes>
<Route
 path="/checkout"
 element={<Checkout />}
/><Route
 path="/order-success"
 element={<OrderSuccess />}
/><Route
path="/seller-messages"
element={<SellerMessages />}
/><Route
path="/tracking"
element={<OrderTracking />}
/><Route path="/commission" element={<Commission />} />
<Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={<Home />}
        />



        <Route
          path="/marketplace"
          element={<Marketplace />}
        />



        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />



        <Route
          path="/suppliers"
          element={<Suppliers />}
        />



        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />



        <Route
          path="/dashboard"
          element={<Dashboard />}
        />



        <Route
          path="/seller-dashboard"
          element={<SellerDashboard />}
        />



        <Route
          path="/add-product"
          element={<AddProduct />}
        />



        <Route
          path="/orders"
          element={<Orders />}
        />



        <Route
          path="/revenue"
          element={<Revenue />}
        />



        <Route
          path="/profile"
          element={<Profile />}
        />



      </Routes>



      <Footer />


    </BrowserRouter>


  );


}



export default App;