import React from 'react'
import {motion} from "framer-motion"
import re from "../../assets/SVG/react.svg"
import lo from "../../assets/SVG/lottie.svg"
import fM from "../../assets/SVG/framerMotion_icon.svg"
import CSS from "../../assets/SVG/css.svg"


export default function FlamesTechStack() {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <motion.div style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                    animate={{scaleX:1}} initial={{scaleX:0}} transition={{duration:0.6}}>
            <p style={{fontSize:"6vh", paddingRight:"2vh"}}>TechStack</p>
        </motion.div>
        <div id='flame-tech' style={{display:"flex",flexDirection:"row"}}>
            <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:0.4}}>
                <img src={re} alt="" style={{height:'6vh',width:"6vh",paddingRight:"1vh"}}/>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:0.8}}>
                <img src={lo} alt="" style={{height:'6vh',width:"6vh",paddingRight:"1vh"}}/>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:1.2}}>
                <img src={fM} alt="" style={{height:'6vh',width:"6vh",paddingRight:"1vh"}}/>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:1.5}}>
                <img src={CSS} alt="" style={{height:'6vh',width:"6vh",paddingRight:"1vh"}}/>
            </motion.div>
        </div>
    </div>
  )
}