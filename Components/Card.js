import React from 'react'
import Image from 'next/image'
import cardStyles from "../styles/card.module.css"
export default function Card({ img, title, price }) {
    return (
        <div className={cardStyles.card__container}>
            <Image className={cardStyles.card__img} src={img} height={200} width={200} />
            <div className={cardStyles.card__desc}>
                <h2>{title}</h2>
                <p>€ {price}</p>
            </div>
        </div>
    )
}
