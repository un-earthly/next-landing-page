import React from 'react'
import { useState, useEffect } from 'react'

import navStyles from "../styles/nav.module.css"
export default function Navbar() {
  const [top, setTop] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);
  return (
    <nav className={navStyles.nav} style={top ? { backdropFilter: "blur(12px)", color: "gray" } : { backdropFilter: "none" }}>
      <div className={navStyles.logo}>
        <h1>POW.</h1>
      </div>
      <i className={`bi ${open ? "bi-x-lg text__white" : "bi-list"} ${navStyles.bi}`} onClick={() => setOpen(!open)}></i>
      <ul className={`${navStyles.menu}`} style={open ? { display: 'flex' } : { display: 'none' }} >
        <li>
          Inline Skates
        </li>
        <li>
          Protection
        </li>
        <li>
          Wheels
        </li>
        <li>
          Frames
        </li>
        <li>
          Explore
        </li>
      </ul>
      <ul className={navStyles.desktop__menu} >
        <li>
          Inline Skates
        </li>
        <li>
          Protection
        </li>
        <li>
          Wheels
        </li>
        <li>
          Frames
        </li>
        <li>
          Explore
        </li>
      </ul>
    </nav>
  )
}
