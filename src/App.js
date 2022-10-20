import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Products from "./assets/Pages/Products";
import Service from "./assets/Pages/Services";
import AboutUs from "./assets/Pages/AboutUs";
import ContactUs from "./assets/Pages/ContactUs";
import LocateUs from "./assets/Pages/LocateUs";


function App() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/products" element={<Products />}></Route>
                <Route exact path="/services" element={<Service />}></Route>
                <Route exact path="/about-us" element={<AboutUs />}></Route>
                <Route exact path="/locacte-us" element={<LocateUs />}></Route>
                <Route exact path="/contact-us" element={<ContactUs />}></Route>
            </Routes>
        </Router>

    )
} export default App;