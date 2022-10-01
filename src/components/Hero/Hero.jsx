import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion"

import NumberCounter from "number-counter"

function Hero() {

    const mobile = window.innerWidth<=768 ? true : false;
    const transition = { type: "spring", duration: 3 }
    return (
        <div className="hero" id='home'>
            <div className="blur blur-h" ></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "178px": "238px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "twin" }}
                    > </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>
                            shape
                        </span>
                        <span>
                            your
                        </span>
                    </div>

                    <div>
                        <span>Ideal body</span>
                    </div>

                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                {/* {------figures-----} */}
                <div className="figures">
                    <div>
                        <span> <NumberCounter end={140} start={98} delay='6' preFix='+' /> </span>
                        <span>expert coaches</span>
                    </div>
                    <div><span><NumberCounter end={978} start={800} delay='5' preFix='+' /></span><span>members joined</span></div>
                    <div><span><NumberCounter end={50} start={20} delay='4' preFix='+' /></span><span>fitness programs</span></div>
                </div>

                {/* {----hero buttons ----} */}

                <div className="hero-buttons">
                    <button className="btn getStarted">Get Started</button>
                    <a href="#programs" > <button className="btn learnMore" >Learn MOre</button></a>
                </div>

            </div>
            <div className="right-h">
             <span className='joinNow'>   <a href="#join-us" ><button className='btn'>Join Now</button>
                </a></span>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate" >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>110 bpm</span>
                </motion.div>
            </div>

            <img src={hero_image} alt="" className='hero_image' />
            <motion.img
                initial={{ right: "11rem" }}
                whileInView={{ right: "20rem" }}
                transition={transition}
                src={hero_image_back} alt="" className='hero_image_back' />

            {/* {---- calories-----} */}

            <motion.div
                transition={transition}
                whileInView={{ right: "28rem" }}
                initial={{ right: "37rem" }}
                className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span><span>220 kcal</span>

                </div>
            </motion.div>
        </div>
    )
}

export default Hero
