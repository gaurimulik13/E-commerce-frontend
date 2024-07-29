


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Shirt from './Components/Shirt';
import ProductDetail from './Components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

