import React, { useState, useRef, useEffect } from 'react';
import "./style.scss";
import { Link, Outlet } from 'react-router-dom';
import Subscribe from "../Subscribe"
import allData from '../Data';


const index = () => {

   return (
      <>
         <div className="container">
            <Outlet />
         </div>
      </>
   );
};

export default index;
