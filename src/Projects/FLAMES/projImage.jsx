import React from 'react'
import {motion} from "framer-motion";
import flamesImage from "../../assets/background/flamesImage.jpg"

export default function ProjImage() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1.4,delay:0.4}}>
        <img src={flamesImage} style={{height:"45vh",width:"40vh"}}></img>
    </motion.div>
  )
}
