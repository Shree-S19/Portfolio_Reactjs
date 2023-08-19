import React from "react";
import './Home_namePlate.css'
import NamePlate from "./namePlate";
import Icons from "./icons";
import Animation from "./animation";
import Resume from "./resume";

export default function HomePage() {
  return (
    <div className="home">
        <div id="below-nav">
            <div id="left-side">
                <div id="namePlate">
                    <NamePlate></NamePlate>
                    <Resume/>
                </div>
                <div id="icons">
                    <Icons></Icons>
                </div>
            </div>

            <div id="right-side">
                <div id="animation">
                  <Animation></Animation>
                </div>
            </div>
        </div>
    </div>
  )
}