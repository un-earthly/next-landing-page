import React from 'react'
import bannerStyles from "../styles/homebanner.module.css"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Btn from '../Utalities/Btn';
export default function Homebanner() {
    return (
        <div className={bannerStyles.banner__container}>
            <div className={bannerStyles.banner__typography}>
                <h1>Get The <span className='highlight'>Best Skate</span> For You.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta dolore quae tempora asperiores maxime magni explicabo, accusantium inventore placeat unde quo illo ea perferendis illum commodi error porro ut!</p>
                <Btn>Grab Yours</Btn>
            </div>
            <div className={bannerStyles.banner__images}>
                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} useKeyboardArrows={true} showArrows={false}>
                    <div>
                        <Image src="https://cdn.shopify.com/s/files/1/0606/7876/6786/products/rollerblade-rb-cruiser-inline-skates-black-yellow-22_720x.jpg?v=1654279615" width={500}
                            height={500} />
                    </div>
                    <div>
                        <Image src="https://cdn.shopify.com/s/files/1/0606/7876/6786/products/609732_609732_1_720x.jpg?v=1650912719" width={500}
                            height={500} />

                    </div>
                    <div>
                        <Image src="https://cdn.shopify.com/s/files/1/0606/7876/6786/products/432474_432474_720x.jpg?v=1654279461" width={500}
                            height={500} />

                    </div>
                </Carousel>
            </div>
        </div>
    )
}
