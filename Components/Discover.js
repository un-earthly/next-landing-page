import React from 'react'
import Image from 'next/image'
import discoverStyles from "../styles/discover.module.css"
const DiscoverCard = ({ src, tagline, title }) => {
    return (
        <div className={discoverStyles.discover__card}>
            <Image height={500} width={600} objectFit="contain" src={src} alt="" />
            <div className={discoverStyles.discover__card__details}>
                <h3>{title}</h3>
                <p>{tagline}</p>
            </div>
        </div>
    )
}
export default function Discover() {
    return (
        <div className={discoverStyles.discover__container}>
            <h1>Discover</h1>
            <div className={discoverStyles.discover__items}>
                <DiscoverCard src="https://cdn.shopify.com/s/files/1/0481/1119/0176/files/discover_1_660x540.jpg?v=1640187440" tagline="Performence meets comfort" title="PHUIZON" />
                <DiscoverCard src="https://cdn.shopify.com/s/files/1/0481/1119/0176/files/discover_2_660x540.jpg?v=1640187448" tagline="The hardboot Revolution" title="NEXT" />
            </div>
        </div>
    )
}
