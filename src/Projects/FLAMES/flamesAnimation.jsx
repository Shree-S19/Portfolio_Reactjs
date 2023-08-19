import React from 'react'
import Lottie from 'lottie-react'
import F from "../../assets/background/letter_F.json";
import L from "../../assets/background/lletter_L.json";
import A from "../../assets/background/letter_A.json"
import M from "../../assets/background/letter_M.json"
import E from "../../assets/background/letter_E.json"
import S from "../../assets/background/letter_S.json"


export default function FlamesAnimation() {
  return (
    <div style={{height:"12vh",width:"50vh",display:"flex",flexDirection:"row"}}>
        <Lottie animationData={F} loop={false}/>
        <Lottie animationData={L} loop={false}/>
        <Lottie animationData={A} loop={false}/>
        <Lottie animationData={M} loop={false}/>
        <Lottie animationData={E} loop={false}/>
        <Lottie animationData={S} loop={false}/>
    </div>
  )
}
