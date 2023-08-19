import React from 'react'
import "./tech.css"
import {easeIn, easeInOut, easeOut, motion, spring, steps} from "framer-motion"

import c_icon from '../assets/SVG/c_icon.svg';
import cpp_icon from "../assets/SVG/cpp_icon.svg";
import java_icon from "../assets/SVG/java_icon.svg"
import javascript_icon from "../assets/SVG/javascript_icon.svg"
import react_icon from "../assets/SVG/react_icon.svg"
import nodeJS_icon from "../assets/SVG/nodeJS_icon.svg"
import mongodb_icon from "../assets/SVG/mongodb_icon.svg"
import redux_icon from "../assets/SVG/redux_icon.svg"
import framerMotion_icon from "../assets/SVG/framerMotion_icon.svg"
import mysql_icon from "../assets/SVG/mysql_icon.svg"
import lottie from '../assets/SVG/lottie.svg'
import figma from "../assets/SVG/figma.svg"
import express from "../assets/SVG/express.svg"
import qtframework from "../assets/SVG/qtframework.svg"
import ejs from "../assets/SVG/EJS_icon.svg"
import restapi from "../assets/SVG/restapi.svg"
import bootstrap from "../assets/SVG/bootstrap.svg"
import html from "../assets/SVG/html5.svg"
import css from "../assets/SVG/css.svg"
import heroku from "../assets/SVG/heroku.svg"

export default function TechStack() {

  return (
    <motion.div id='skills' >
        <motion.div
        animate={{x:0}} initial={{x:250}}
        transition={{ ease: "easeOut", duration:1.7}}>
            <p className='mystk'>My tech stack!</p>
        </motion.div>
        <br></br>
        <motion.div className='tech'>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.1}}>
                <img src={c_icon} alt='c' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.1}}>
                <img src={cpp_icon} alt='cpp' className='lang' /></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.3}}>
                <img src={qtframework} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={java_icon} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.7}}>
                <img src={javascript_icon} alt='java' className='lang'/></motion.div>
        </motion.div>

        <motion.div className='tech'>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.1}}>
                <img src={html} alt='c' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.3}}>
                <img src={css} alt='cpp' className='lang' /></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={bootstrap} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={figma} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.7}}>
                <img src={restapi} alt='java' className='lang'/></motion.div>
        </motion.div>

        <motion.div className='tech'>
            <motion.div 
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.3}}>
                <img src={react_icon} alt='c' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={nodeJS_icon} alt='cpp' className='lang' /></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.7}}>
                <img src={mongodb_icon} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.7}}>
                <img src={express} alt='java' className='lang'/></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.9}}>
                <img src={ejs} alt='java' className='lang'/></motion.div>
        </motion.div>

        <motion.div className='tech'>
            <motion.div 
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={framerMotion_icon} alt='c' className='lang'/>
            </motion.div>
            <motion.div 
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.5}}>
                <img src={redux_icon} alt='java' className='lang'/></motion.div>
            <motion.div 
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.7}}>
                <img src={mysql_icon} alt='cpp' className='lang' /></motion.div>
            <motion.div
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.9}}>
                <img src={lottie} alt='java' className='lang'/></motion.div>
            <motion.div 
            animate={{scale:1}} initial={{scale:0}} transition={{duration:1,delay:0.9}}>
                <img src={heroku} alt='java' className='lang'/></motion.div>
        </motion.div>
    </motion.div>
  )
}