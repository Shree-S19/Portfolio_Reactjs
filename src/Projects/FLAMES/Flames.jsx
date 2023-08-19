import React from 'react'
import "./projects.css"
import FlamesAnimation from './flamesAnimation'
import Description from './description'
import FlamesTechStack from './flameTechStack'
import GitHubRepo from './gitHubRepo'
import LiveSite from './LiveSite'
import {motion} from 'framer-motion'
import ProjImage from './projImage'

export default function Flames() {
  return (
    <div id='project-container'>
        {/* <div style={{position:"absolute",margin:"3vh",}}><button style={{borderRadius:"50%",border:"solid 0px purple"}}>{"<-"}</button></div> */}
        <div id='flames-container'>
            <div id='container-left'>
                <div id='flames-animation'>
                    <FlamesAnimation/>
                </div>
                <div id='flames-description'>
                    <Description/>
                </div>
                <div id='flames-techStack'>
                    <FlamesTechStack />
                </div>
            </div>
            <div id='container-right'>
                <div id='img-container'>
                    <ProjImage/>
                </div>
                <motion.div id='links-container' 
                  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3 , duration:1.2}}>
                    <div id='live-site'>
                        <LiveSite/>
                    </div>
                    <motion.div id='git-repo' initial={{scale:0}} animate={{scale:1}} transition={{delay:0.7 , duration:1.2}}>
                        <a><GitHubRepo/></a>
                    </motion.div>
                    
                </motion.div>
            </div>
        </div>
        
    </div>
  )
}
