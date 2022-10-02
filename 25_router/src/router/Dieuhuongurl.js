import React, { Component } from 'react';
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Contact from '../component/Contact';
import Home from '../component/Home';
import Product from '../component/Product';
import Productsdetails from '../component/ProductsDetails';

class Dieuhuongurl extends Component {
    render() {
        return (
                <Routes>
                    <Route index path="/" element={<Home/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route exact path="/product-details/:slug.:id" element={<Productsdetails/>}/>
                </Routes>
        );
    }
}

export default Dieuhuongurl;