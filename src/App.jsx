import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import About from "./Pages/about/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/home/Home";
import Login from "./Pages/login /Login";
import Signup from "./Pages/login /Signup";
import BuyAccount from "./Pages/shop/BuyAccount";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/buyaccount" element={<BuyAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
