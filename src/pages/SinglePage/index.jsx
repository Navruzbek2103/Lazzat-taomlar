import React from 'react';
import "./style.scss";
import allData from '../Data';
import { useParams } from 'react-router-dom';

const index = () => {

  const { foodId } = useParams()

  // console.log(allData)

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


  return (
    <div className='single-page'>
      <div className="container">
        {
          allData.map(({ cardId, cardImage, cardType, cardTitle, cardDesc }) => {
            if ( foodId == cardId) {
              return (
                <div className="single-page__wrapper" key={cardId}>
                  <div className="single-page__wrapper-imgBox">
                    <img src={cardImage} alt="card image. This image is food" className="single-page__wrapper-imgBox-img" />
                  </div>
                  <div className="single-page__wrapper-content">
                    <p className="single-page__wrapper-content-type" style={
                      cardType === "Taomlar" ? foodsStyle : cardType === "Salatlar" ? saledStyle : cardType === "Shirinliklar" ? dessertStyle : drinksStyle
                    }>{cardType}</p>
                    <h2 className="single-page__wrapper-content-title">{cardTitle}</h2>
                    <p className="single-page__wrapper-content-desc">{cardDesc}</p>
                  </div>

                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default index