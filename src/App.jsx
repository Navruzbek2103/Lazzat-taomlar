import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import FoodsRoute from "./pages/Foods/FoodRoute"
import FoodInfo from "./pages/Foods/FoodInfo"
import SaledRoute from "./pages/Saled/SaledRoute"
import SaledInfo from "./pages/Saled/SaledInfo"
import DessertsRoute from "./pages/Desserts/DessertRoute"
import DessertsInfo from "./pages/Desserts/DessertInfo"
import DrinkRoute from "./pages/Drinks/DrinkRoute"
import DrinkInfo from "./pages/Drinks/DrinkInfo"
import SinglePage from "./pages/SinglePage"






const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Foods' element={<FoodsRoute />} >
          <Route path='' element={<FoodInfo />} />
          <Route path='/Foods:foodId' element={<SinglePage />} />
        </Route>
        <Route path='/Saled' element={<SaledRoute />} >
          <Route path='' element={<SaledInfo />} />
          <Route path='/Saled:foodId' element={<SinglePage />} />
        </Route>
        <Route path='/Desserts' element={<DessertsRoute />} >
          <Route path='' element={<DessertsInfo />} />
          <Route path='/Desserts:foodId' element={<SinglePage />} />
        </Route>
        <Route path='/Drinks' element={<DrinkRoute />} >
          <Route path='' element={<DrinkInfo /> } />
          <Route path='/Drinks:foodId' element={<SinglePage /> } />
        </Route>
        <Route path=':foodId' element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;