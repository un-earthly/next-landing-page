
import React from 'react'
import skatesStyles from "../styles/skate.module.css"
import Btn from '../Utalities/Btn'
import Card from './Card'
export default function Skates() {
  class Skate {
    constructor(title, img, price) {
      this.title = title
      this.price = price
      this.img = img
    }
  }
  const skates = [
    new Skate("Next Edge 150", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR4052BI15060_908381_36001_Next_Edge_150_SZ4_large.jpg?v=1652956809", 449.99),
    new Skate("Pheme Ocean 100", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR4150BI18346_510206_36592_Pheme_Ocean_100_SZ4_300x300.jpg?v=1636561325", 249.99),
    new Skate("R4 110", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR91BI1710_904563_34315_R4_110_SZ4_large.jpg?v=1636558690", 499.99),
    new Skate("PS ONE 125", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR129BI1452_904525_32647_PS_ONE_125_SZ4_large.jpg?v=1636558937", 449.99),
    new Skate("Zoom Pro Black 80", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR39BI1850_908333_35262_Next_Pro_Black_110_SZ4_large.jpg?v=1636558400", 189.99),
    new Skate("Next Black Red 80", "https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR4226BI15974_908370_36923_Next_Black_Red_80_SZ4_large.jpg?v=1641808071", 249.99),
    new Skate("Razors Derek Henderson 2 SL", "https://cdn.shopify.com/s/files/1/0211/7828/products/image_3103c6dc-c69a-447c-92d7-7727c3df7a4c_460x.jpg?v=1629846643", 299.90),
    new Skate("Thunder XC", "https://cdn.shopify.com/s/files/1/0414/7563/7403/products/xc1_1024x1024@2x.jpg?v=1620252240", 89, 95),
  ]
  return (
    <div className={skatesStyles.skates__container}>
      <div className={skatesStyles.skate__container}>

        {
          skates.map(skate => <Card img={skate.img} price={skate.price} title={skate.title} key={skate.img} />)
        }
      </div>
      <Btn>Explore More</Btn>
    </div>
  )
}
