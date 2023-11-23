
import { Link, Route, Routes } from "react-router-dom";



import Sellerdashboard from "./Dashboards/SellerDashboard/Sellerdashboard";
import { PrimeReactProvider } from 'primereact/api';

import Home from "./components/Pages/Home"
import Profileverify from './Dashboards/SellerDashboard/Profileverify';
import Addplant from './Dashboards/SellerDashboard/Addplant';
import Orders from './Dashboards/SellerDashboard/Orders';
import PaymentHistory from './Dashboards/SellerDashboard/PaymentHistory';
import Yournurcery from './Dashboards/SellerDashboard/YourNurcery';
import Returns from './Dashboards/SellerDashboard/Returns';
import AllProducts from './Dashboards/SellerDashboard/AllProducts';
import Checkout from "./components/Pages/Checkout";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register"
import Product from "./components/Pages/Product";
import Forgot from "./components/Pages/Forgot";
import Header from "./components/Header";



function App() {
  return (
    <>
      <PrimeReactProvider>

        <Routes>
         
          <Route path="/Profileverify" element={<Profileverify />}></Route>
          <Route path="/addplant" element={<Addplant />}></Route>
          <Route path="/myorders" element={<Orders />}></Route>
          <Route path="/paymenthistory" element={<PaymentHistory />}></Route>
          <Route path="/yournurcery" element={<Yournurcery />}></Route>
          <Route path="/returns" element={<Returns />}></Route>
          <Route path="/Products" element={<AllProducts />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SellerDashboard" element={<Sellerdashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/product" element={<Product />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>


          <Route path="/checkout" element={<Checkout />}></Route>

        </Routes>

      </PrimeReactProvider>
    </>

  );
}

export default App;
