import React from 'react'
import {motion} from "framer-motion"

export default function Description() {
  return (
    <motion.div style={{display:"flex",justifyContent:"center",alignContent:"center",margin:"2vh",flexDirection:"column"}}>
        <motion.div style={{fontSize:"2.2vh"}}
        animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8, delay:0.3}}>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet, minima?
        </motion.div>
        <motion.div style={{fontSize:"2.2vh"}}
        animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8, delay:0.6}}>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet, minima?
        </motion.div>
        <motion.div style={{fontSize:"2.2vh"}}
        animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8, delay:1}}>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet, minima?
        </motion.div>
        <motion.div style={{fontSize:"2.2vh"}}
        animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8, delay:1.3}}>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet, minima?
        </motion.div>
        <motion.div style={{fontSize:"2.2vh"}}
        animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8, delay:1.6}}>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet, minima?
        </motion.div>
    </motion.div>
  )
}
