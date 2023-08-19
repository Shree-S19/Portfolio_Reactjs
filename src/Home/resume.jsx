import React from 'react'
import './icons.css'
import { RiDownloadCloudLine } from 'react-icons/ri';
import {motion} from 'framer-motion'
export default function Resume() {
  return (
    <motion.div id='resume-container'
    animate={{
      scale: [1,1,1, 1, 1, 1, 1],
      borderRadius: ["50%","50%","50%", "40%", "30%", "20%", "10%"],
    }}>
        <RiDownloadCloudLine id='download-icon' />;
      <a href="https://drive.google.com/file/d/1M1kvCrTp9TrQdxdZKsl13G8kcdFIFKMm/view?usp=drive_link" id="resume" download="" target="_blank" >
       Resume 
      </a>
    </motion.div>
  )
}
