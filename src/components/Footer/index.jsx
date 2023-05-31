import React from 'react';
import "./style.scss";
import { BsYoutube } from "react-icons/bs"
import { FaTelegramPlane  } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineGithub } from "react-icons/ai"

const index = () => {
   let fullYear = new Date()
   let year = fullYear.getFullYear()

   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__wrapper">
               <p className="footer__wrapper-date">2023 - {year}</p>
               <ul className="footer__wrapper-list">
                  <li className="footer__wrapper-item">
                     <a href="https://www.youtube.com/channel/UCuab9tAV3ovVti1j8aTC__A" className="footer__wrapper-item-link" target='_blank'>
                        <BsYoutube className='footer__wrapper-item-link-img' />
                     </a>
                  </li>
                  <li className="footer__wrapper-item">
                     <a href="https://t.me/+7Qc1CMACaIViOTli" className="footer__wrapper-item-link" target='_blank'>
                        <FaTelegramPlane className='footer__wrapper-item-link-img' />
                     </a>
                  </li>
                  <li className="footer__wrapper-item">
                     <a href="https://www.linkedin.com/in/navro-zbek-ahmadaliyev-2b649b243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxGXTwbndTUCUbTFUtPT6fw%3D%3D" className="footer__wrapper-item-link" target='_blank'>
                        <BsLinkedin className='footer__wrapper-item-link-img' />
                     </a>
                  </li>
                  <li className="footer__wrapper-item">
                     <a href="https://github.com/Navruzbek2103" className="footer__wrapper-item-link" target='_blank'>
                        <AiOutlineGithub className='footer__wrapper-item-link-img' />
                     </a>
                  </li>
                  
               </ul>
               <p className="footer__wrapper-author">Created by : <a href="https://t.me/navrozbek01" className="footer__wrapper-link">Navruzbek</a></p>
            </div>
         </div>
      </footer>
   );
};

export default index;