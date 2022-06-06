import React from 'react'
import footerStyles from "../styles/footer.module.css"
export default function Footer() {
  return (
    <div className={footerStyles.footer__container}>
      <div className={footerStyles.footer__menu}>
        <ul>
          <li>PRODUCTS</li>
          <li>INLINE SKATES</li>
          <li>PROTECTIONS</li>
          <li>WHEELS</li>
          <li>FRAMES</li>
          <li>ACCESSORIES</li>
          <li>NEW ARRIVALS</li>
        </ul>
        <ul>
          <li>SEGMENTS</li>
          <li>FITNESS</li>
          <li>AGGRESSIVE</li>
          <li>URBAN</li>
          <li>SUV</li>
        </ul>
        <ul>
          <li>SUPPORT</li>
          <li>CONTACT US</li>
          <li>SERVICE</li>
          <li>SKATE SCHOOLS</li>
          <li>DOWNLOADS</li>
        </ul>
        <ul>
          <li>EXPLORE</li>
          <li>TECHNOLOGIES</li>
          <li>ROLLEROBICS WORKOUT</li>
          <li>POWERSKATING</li>
          <li>WORKOUT</li>
        </ul>
      </div>
      <div className={footerStyles.footer__copyright}>
        &copy; All right reserved POW.
      </div>
    </div>
  )
}
