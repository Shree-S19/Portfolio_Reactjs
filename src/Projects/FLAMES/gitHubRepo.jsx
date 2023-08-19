import React from 'react'
import Lottie from "lottie-react"
import Git from "../../assets/background/gitLogo.json"
import {motion} from "framer-motion"

export default function GitHubRepo() {
  return (
    <motion.div id='git-animation'
       whileHover={{scale:1.4}} whileTap={{scale:0.7}}>
        <Lottie animationData={Git}/>
    </motion.div>
  )
}
