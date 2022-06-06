import React from 'react'
import aboutStyles from "../styles/about.module.css"
export default function About() {
    return (
        <div className={aboutStyles.about__container}>
            <div className={aboutStyles.about__body}>
                <div className={aboutStyles.about__typography}>
                    <h1 className={aboutStyles.about__heading}>WE LOVE TO <span className='highlight'>SKATE.</span></h1>
                    <p className={aboutStyles.about__tagline}>Pow inline skates and rolling products</p>
                    <p>Pow was founded in 1994 with only one goal in mind: To make high quality products and components for all types of skaters and skate levels. No matter if you are an absolute beginner choosing your first pair, a seasoned vet adding a new skate to your collection or a world class pro hunting for your next gold, we produce the perfect products you need. From Fitness to Racing, Urban to Aggressive as well as SUV/Off-road or Hockey, Powerslide are industry specialists across the board, offering you the finest and widest range of skates and components on the market.</p>
                    <p>Skate equipment from skaters for skaters.The company is 100% skater owned and the majority of our employees are also skaters themselves who know and use our products allowing them to deliver professional first-hand experience in their customer service.World class skaters trust and believe in Powerslide equipment to give them the edge they need in their fight to reach the top.Powerslide supports the sport and culture by sponsoring more than 100 skaters and ambassadors worldwide.This huge network allows us to extensively test our products and to gain impeccable feedback to improve them.</p>
                </div>
                <div className={aboutStyles.about__form}>
                    <h1 className={aboutStyles.about__heading}>Request A <span className="highlight">Quote.</span></h1>
                    <input placeholder='Please Enter Your Full Name' type="text" />
                    <input placeholder='Please Enter Your Email' type="email" />
                    <input placeholder='Please Enter Your Message' type="text" />
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
    )
}
