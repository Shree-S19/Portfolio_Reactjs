import React from 'react'
import "./icons.css"
import {motion, spring} from "framer-motion"
import leetcode from '../assets/SVG/leetcode.svg';
import github from '../assets/SVG/github.svg';
import linkedin from '../assets/SVG/linkedin.svg';

export default function Icons() {
  return (
    <div className='Icons'>

      <motion.div className="profile-icons"
      animate={{x:30}} transition={{delay:0.2,type:spring, mass:0.7}} initial={{x:-130}}
      ><a href='https://www.linkedin.com/in/shreebalaji-l-7ab591206/' target='_blank'><img src={linkedin} alt='leetcode'></img></a>
      </motion.div>

      <motion.div className="profile-icons"
      animate={{x:30}} transition={{delay:0.3, type:spring, mass:0.7}} initial={{x:-130}}
      ><a href='https://leetcode.com/user3605H/' target='_blank'><img src={leetcode} alt='leetcode'></img></a>
      </motion.div>

      <motion.div className="profile-icons"
      animate={{x:30}} transition={{delay:0.4,type:spring, mass:0.7}} initial={{x:-130}}
      ><a href='https://github.com/Shree-S19' target='_blank'><img src={github} alt='leetcode'></img></a>
      </motion.div>

    </div>
  )
}
