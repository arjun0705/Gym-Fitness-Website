import React from 'react'
import "./Programs.css"
import { programsData } from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

function Programs() {
    return (
        <div className='programs' id='programs'>

            <div className="programs-header">
                <span className='stroke-text'>Explore our</span><span>Programs</span><span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <sapn>{program.heading}</sapn>
                        <sapn>{program.details}</sapn>

                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Programs
