import React from 'react'
import "./contact.css"
import Lottie from 'lottie-react'
import {motion} from "framer-motion"
import whatsapp from "../assets/Animations/whatsapp.json"
import instgram from "../assets/Animations/instagram.json"
import linkedin from "../assets/Animations/linkedin.json"
import facebook from "../assets/Animations/facebook.json"

export default function SocialProfiles() {
  return (
            <motion.div id='floating-icons'>
                <div className='social-media-accounts'>
                    <a href="https://wa.me/8778325007" target='_blank'>
                        <Lottie animationData={whatsapp} loop={false}/>
                    </a>
                </div>
                <div className='social-media-accounts'>
                    <a href='https://instagram.com/balaji._.s19?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                        <Lottie animationData={instgram} loop={false}/>
                    </a>
                </div>
                <div className='social-media-accounts'>
                    <a href='https://instagram.com/balaji._.s19?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                        <Lottie animationData={facebook} loop={false}/>
                    </a>
                </div>
                <div className='social-media-accounts'>
                    <a href='https://www.linkedin.com/in/shreebalaji-l-7ab591206/' target='_blank'>
                        <Lottie animationData={linkedin} loop={false}/>
                    </a>
                </div>   
            </motion.div>
  )
}
