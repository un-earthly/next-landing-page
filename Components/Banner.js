import React from 'react'
import bannerStyles from "../styles/banner.module.css"
import Btn from '../Utalities/Btn'

export default function Banner() {
    return (
        <div
            className={bannerStyles.banner__container}>

            <i className="bi bi-envelope-open"></i>
            <h1>STAY UP TO DATE</h1>
            <button>Subscribe to our newsletter</button>

        </div>
    )
}
