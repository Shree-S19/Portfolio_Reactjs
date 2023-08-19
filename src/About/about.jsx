import React from 'react'
import "./about.css"
import AboutText from './aboutText'
import Animation from './animation'
import TechStack from './techStack'

export default function About() {
  return (
    <div id='about-container'>
        <div id='about-left-side'>
            <div id='first'>
                <AboutText />
            </div>
            <div id='second'>
                <Animation/>
            </div>
        </div>

        <div id='about-right-side'>
            <div id='third'>
                <TechStack/>
            </div>
        </div>
    </div>
  )
}
