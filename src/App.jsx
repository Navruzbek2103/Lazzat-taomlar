import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Foods from "./pages/Foods"
import Saled from "./pages/Saled"
import Desserts from "./pages/Desserts"
import Drinks from "./pages/Drinks"



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Foods' element={<Foods />} />
        <Route path='/Saled' element={<Saled />} />
        <Route path='/Desserts' element={<Desserts />} />
        <Route path='/Drinks' element={<Drinks />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;