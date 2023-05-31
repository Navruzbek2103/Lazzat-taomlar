import React, { useState, useRef, useEffect } from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import Subscribe from "./../Subscribe"
import allData from '../Data';


const index = () => {

   const controlBtn = useRef()
   const foodsStyle = {
      backgroundColor: "#F0932B",
   }

   const saledStyle = {
      backgroundColor: "#BADC58",
   }
   const dessertStyle = {
      backgroundColor: "#FF7979",
   }
   const drinksStyle = {
      backgroundColor: "#7ED6DF",
   }

   const [setDataArray, setSetDataArray] = useState({ start: 0, end: 6 });
   const adjusterFunction = (tag) => {
      if (tag.target.textContent === "Barcha retseptlar") {

         if (
            setDataArray.end < allData.length
         ) {
            setSetDataArray({ start: 0, end: (setDataArray.end += 6) });
         }
      } else if (tag.target.textContent === "Ortga qaytish") {
         tag.target.textContent = "Barcha retseptlar";
      }
   };
   let slicedData = allData.slice(setDataArray.start, setDataArray.end)

   return (
      <>
         <div className="container">
            <div className="home-page">
               <ul className="home-page__list">
                  {

                     slicedData.map(({ cardId, cardImage, cardType, cardTitle, cardDesc }) => {
                        return (
                           <li className="home-page__item" key={cardId}>
                              <Link className="home-page__item-link">
                                 <div className="home-page__item-link-imgBox">
                                    <img src={cardImage} alt="card image" className="home-page__item-link-imgBox-img" />
                                 </div>
                                 <div className="home-page__item-link-content">
                                    <span className="home-page__item-link-content-type" style={
                                       cardType === "Taomlar" ? foodsStyle : cardType === "Salatlar" ? saledStyle : cardType === "Shirinliklar" ? dessertStyle : drinksStyle
                                    } >{cardType}</span>
                                    <h2 className="home-page__item-link-content-title">{cardTitle}</h2>
                                    <p className="home-page__item-link-content-text">{cardDesc}</p>
                                 </div>

                              </Link>
                           </li>
                        )
                     })
                  }

               </ul>
               {
                  allData.length <= 6 ? null :
                     setDataArray.end < allData.length ? (
                        <button
                           className="home-page__showMoreBtn"
                           onClick={(tag) => adjusterFunction(tag)}
                           ref={controlBtn}
                        >
                           Barcha retseptlar
                        </button>
                     ) : (
                        <button
                           className="home-page__showMoreBtn"
                           onClick={(tag) => setSetDataArray({ start: 0, end: 6 })}
                           ref={controlBtn}
                        >
                           Ortga qaytish
                        </button>
                     )
               }

            </div>
         </div>
         <Subscribe />
      </>
   );
};

export default index;
