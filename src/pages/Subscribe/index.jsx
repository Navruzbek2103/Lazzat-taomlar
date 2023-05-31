import React from 'react'
import "./style.scss"

const index = () => {
  return (
    <div className='subscribe'>
      <div className="container-big">
        <div className="container subscribe-container">
          <form className="subscribe__form">
            <div className="subscribe__form-top">
              <input type="email" required className="subscribe__form-top-input" placeholder='Email' />
              <button type='submit' className="subscribe__form-top-submit">Obuna bo'lish</button>
            </div>
            <h2 className="subscribe__form-title">Haftalik taomnomalarga obuna bo'lish</h2>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index