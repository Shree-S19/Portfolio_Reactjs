import React from 'react'
import "./about.css"
import {motion} from "framer-motion"

export default function AboutText() {
  return (
    <div id='about-text'>
        <motion.div 
        animate={{opacity:1}} initial={{opacity:0}}
        transition={{duration:2.6,delay:0.3}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam delectus iste sit debitis ab facilis minus aspernatur doloremque culpa molestias fugit eos, laudantium fuga excepturi
      </motion.div>
      <motion.div 
        animate={{opacity:1}} initial={{opacity:0}}
        transition={{duration:2.6,delay:0.6}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam delectus iste sit debitis ab facilis minus aspernatur doloremque culpa molestias fugit eos, laudantium fuga excepturi
      </motion.div>
      <motion.div 
        animate={{opacity:1}} initial={{opacity:0}}
        transition={{duration:2.6,delay:0.9}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus iste sit debitis ab facilis minus aspernatur doloremque culpa molestias fugit eos, laudantium fuga excepturi
      </motion.div>
      <motion.div 
        animate={{opacity:1}} initial={{opacity:0}}
        transition={{duration:2.6,delay:1.2}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus iste sit debitis ab facilis minus aspernatur doloremque culpa molestias fugit eos, laudantium fuga excepturi
      </motion.div>
    </div>
  )
}
