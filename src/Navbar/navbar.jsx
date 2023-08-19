import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
import Headroom from 'react-headroom'
import{motion} from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [hamBtn,setHamBtn] = useState(false);

  return (
    <Headroom id='Container'>
            <div className='left-side'>
                <div id="portfolio-holder">
                    Portfolio
                </div>
            </div>

            <div className='right-side'>
                <div className='holder'>
                    <Link   to='/' className='link'>Profile</Link>
                </div>
                <div className='holder'>
                    <Link to='/About'  className='link'>About</Link>
                </div>
                <div className='holder'>
                    <Link to='/Projects' className='link'>Projects</Link>
                </div>
                <div className='holder'>
                    <Link to='/Contact' className='link'>Contact</Link>
                </div>
                <div id='ham-btn'>
                    <button id="bttn" onClick={()=>{
                        setHamBtn(!hamBtn)}}>
                            &#8801;
                    </button>
                </div>
            </div>
            {hamBtn && (<motion.div id='extend-btn'
                        animate={{y:0,x:0}} >
                            <div className='link-holder'><Link to='/Contact' className='exd-link'>Contact</Link></div>
                            <div className='link-holder'><Link to='/Projects' className='exd-link'>Projects</Link></div>
                            <div className='link-holder'><Link to='/About' className='exd-link'>About</Link></div>
                            <div className='link-holder'><Link   to='/' className='exd-link'>Profile</Link></div>
                            <motion.div id="btn">
                                    <button  onClick={()=>{
                                setHamBtn(!hamBtn)}}>
                                    &times;
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
    </Headroom>
  )
}
