import React from 'react'
import Lottie from 'lottie-react'
import {motion} from "framer-motion"
import "./contactPage.css"
import SocialProfiles from './socialmedia'
import MailBox from './mailBox'
import developer from "../assets/background/developer_lap.json"
import contactAnimation from "../assets/background/contact.json"

export default function Contact() {
  return (
    <div id='contact-container'>
        <div id='top-column'>
            <Lottie animationData={contactAnimation} loop={false} />
        </div>

        <div id='center-columns'>
            <motion.div id="center-1" animate={{scale:1}} initial={{scale:0}} transition={{duration:1}}>
                <Lottie animationData={developer} loop={false}/>
            </motion.div>
            <motion.div id='center-2' animate={{scale:1}} initial={{scale:0}} transition={{duration:1}} >
                <MailBox/>
            </motion.div>
        </div>

        <div id='bottom-column'>
            <SocialProfiles/>
        </div>
    </div>
  )
}