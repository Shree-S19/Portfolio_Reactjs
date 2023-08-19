import React from 'react'
import Lottie from 'lottie-react';
import developer from "../assets/Animations/developer.json"
import './animations.css'

export default function Animation() {

  return (
    <div id='animation'>
        <Lottie animationData={developer} loop={false} />
    </div>
  )
}
