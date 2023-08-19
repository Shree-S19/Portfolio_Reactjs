import React from 'react'
import Lottie from 'lottie-react';
import fullStack from "../assets/Animations/fullStack.json"
import "./animation.css"

export default function Animation() {

  return (
    <div id='anime'>
        <Lottie animationData={fullStack} loop={false} />
    </div>
  )
}