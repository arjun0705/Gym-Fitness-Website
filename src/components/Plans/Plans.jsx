import React from 'react'
import "./Plans.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
    return (
        <din className="plans-container">
            <div className="blur blur-p-1"></div>
            <div className="blur blur-p-2"></div>
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>Ready To start</span>
                <span>Your Journy</span>
                <span className='stroke-text'>With Us</span>
            </div>

            <div className="plans">

                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> $ {plan.price}</span>

                        <div className="features">
                            {
                                plan.features.map((feature, i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}> {feature}</span>
                                    </div>

                                ))
                            }
                        </div>
                        <div>
                            <span>See more benifits -></span>
                        </div>

                        <button className="btn">join Now</button>
                    </div>


                ))}

            </div>
        </din>
    )
}

export default Plans
