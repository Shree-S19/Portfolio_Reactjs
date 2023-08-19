import React from 'react'
import {motion} from "framer-motion"
import render from "../../assets/SVG/render.svg"
import "./projects.css"

export default function LiveSite() {
  return (
    <motion.div  id='live-site' >
        <div id='render'>
            <img src={render} alt="render" style={{height:'4vh',width:"4vh"}} />
        </div>
        <div>
            <pre> Live site : </pre>
        </div>
        <div>
            <a href='https://flame-as1b.onrender.com/' target='_blank'>
                {"https://tinyurl.com/2t976be2"}
            </a>
        </div>
    </motion.div>
  )
}
