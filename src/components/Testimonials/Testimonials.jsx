import React from 'react'
import "./Testimonials.css"
import { testimonialsData } from "../../data/testimonialsData"
import { useState } from 'react'
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { useEffect } from 'react'
import {motion} from "framer-motion"

function Testimonials() {

    const transition = {type:"spring",duration:3}

    const [selected, setSelected] = useState(0)
    const tlength = testimonialsData.length;


    useEffect(() => {
        console.log(tlength, selected)
    }, [selected])
    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <motion.span
                 key={selected}
                 initial={{opacity:0,x:100}}
                 animate={{opacity:1,x:0}}
                 exit={{opacity:0,x:-100}}
                 transition={transition}
                >
                    {testimonialsData[selected].review}''
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>{testimonialsData[selected].name}</span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>


            <div className="right-t">
                <motion.div 
                initial={{opacity:0,x:-100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}
                ></motion.div>
                <motion.div
                 initial={{opacity:0,x:100}}
                 transition={{...transition,duration:2}}
                 whileInView={{opacity:1,x:0}}
                ></motion.div>

                <motion.img 
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />
            

                <div className="arrows">

                    <img
                        onClick={() => {
                            if (selected < 1) {
                                setSelected(tlength - 1)
                            } else {
                                setSelected(selected - 1)
                            }
                        }}
                        src={leftArrow} alt="" />

                    <img
                        onClick={() => {

                            if (selected === tlength - 1) {
                                setSelected(0)
                            } else {
                                setSelected(selected + 1)
                            }

                        }}
                        src={rightArrow} alt="" />

                </div>

            </div>

        </div>
    )
}

export default Testimonials
