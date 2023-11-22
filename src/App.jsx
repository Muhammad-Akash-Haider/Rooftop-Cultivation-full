
import { Link, Route, Routes } from "react-router-dom";



import Sellerdashboard from "./Dashboards/SellerDashboard/Sellerdashboard";
import { PrimeReactProvider } from 'primereact/api';

import Home from "./components/Home"
import Profileverify from './Dashboards/SellerDashboard/Profileverify';
import Addplant from './Dashboards/SellerDashboard/Addplant';
import Orders from './Dashboards/SellerDashboard/Orders';
import PaymentHistory from './Dashboards/SellerDashboard/PaymentHistory';
import Yournurcery from './Dashboards/SellerDashboard/YourNurcery';
import Returns from './Dashboards/SellerDashboard/Returns';
import AllProducts from './Dashboards/SellerDashboard/AllProducts';

import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register"



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
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>

      </PrimeReactProvider>
    </>

  );
}

export default App;
