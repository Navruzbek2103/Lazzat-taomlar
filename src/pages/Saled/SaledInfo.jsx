import React, { useState, useRef } from 'react';
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
  let filteredCards = []
  allData.map((item) => {
    if (item.cardType === "Salatlar") {
      filteredCards.push(item)
    }
  })
  let slicedData = filteredCards.slice(setDataArray.start, setDataArray.end)

  const adjusterFunction = (tag) => {
    if (tag.target.textContent === "Barcha retseptlar") {

      if (
        setDataArray.end < filteredCards.length
      ) {
        setSetDataArray({ start: 0, end: (setDataArray.end += 6) });
      }
    } else if (tag.target.textContent === "Ortga qaytish") {
      tag.target.textContent = "Barcha retseptlar";
    }
  };

  return (
    <>
      <div className="saled-page">
        <ul className="saled-page__list">
          {
            slicedData.map(({ cardId, cardImage, cardType, cardTitle, cardDesc }) => {
              if (cardType === "Salatlar") {
                return (
                  <li className="saled-page__item" key={cardId}>
                    <Link to={`${cardId}`} className="saled-page__item-link" onClick={() => {
                      window.scrollTo({
                        top: 0,
                      })
                    }} >
                      <div className="saled-page__item-link-imgBox">
                        <img src={cardImage} alt="card image" className="saled-page__item-link-imgBox-img" />
                      </div>
                      <div className="saled-page__item-link-content">
                        <span className="saled-page__item-link-content-type" style={
                          cardType === "Taomlar" ? foodsStyle : cardType === "Salatlar" ? saledStyle : cardType === "Shirinliklar" ? dessertStyle : drinksStyle
                        } >{cardType}</span>
                        <h2 className="saled-page__item-link-content-title">{cardTitle}</h2>
                        <p className="saled-page__item-link-content-text">{cardDesc}</p>
                      </div>

                    </Link>
                  </li>
                )
              }
            })
          }

        </ul>
        {
          filteredCards.length <= 6 ? null :
            setDataArray.end < filteredCards.length ? (
              <button
                className="desserts-page__showMoreBtn"
                onClick={(tag) => adjusterFunction(tag)}
                ref={controlBtn}
              >
                Barcha retseptlar
              </button>
            ) : (
              <button
                className="desserts-page__showMoreBtn"
                onClick={(tag) => setSetDataArray({ start: 0, end: 6 })}
                ref={controlBtn}
              >
                Ortga qaytish
              </button>
            )
        }
      </div>
      <Subscribe />
    </>
  );
};

export default index;
