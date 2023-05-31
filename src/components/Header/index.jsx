import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';


const index = () => {
   return (
      <header className='header'>
         <div className="container">
            <nav className="nav">
               <Link to="" className='nav__link'>
                  <h2 className="nav__link-title">Lazzat</h2>
                  <p className="nav__link-text">Eng zo'r taomlar eng oson usulda</p>
               </Link>

               <ul className="nav__list">
                  <li className="nav__item">
                     <Link to="/" className='nav__item-link'>
                        Bosh sahifa
                     </Link>
                  </li>
                  <li className="nav__item">
                     <Link to="/Foods" className='nav__item-link'>
                        Taomlar
                     </Link>
                  </li>
                  <li className="nav__item">
                     <Link to="/Saled" className='nav__item-link'>
                        Salatlar
                     </Link>
                  </li>
                  <li className="nav__item">
                     <Link to="/Desserts" className='nav__item-link'>
                        Shirinliklar
                     </Link>
                  </li>
                  <li className="nav__item">
                     <Link to="/Drinks" className='nav__item-link'>
                        Ichimliklar
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default index;