import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import E1 from "./components/Ecommerce";
import E2 from "./components/E2";
import E3 from "./components/E3";
import Footer from "./components/Footer";

import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register"



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Header />
      <Nav />
      <Section />
      <E1/>
      <E2 />
      <E3/>
      <Footer />
    </>
  );
}

export default App;
