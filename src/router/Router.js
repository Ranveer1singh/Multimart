import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import ProductSetails from "../pages/ProductSetails";

const Router = () => {
  return <Routes>
    <Route path="/" element={<Navigate to = "/Home"/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="shop/:id" element={<ProductSetails/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="chechout" element={<CheckOut/>}/>
  </Routes>
};

export default Router;
