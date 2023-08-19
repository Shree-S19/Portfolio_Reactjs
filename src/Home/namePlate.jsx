import React from "react";
import Typewriter from 'typewriter-effect'
import './Home_namePlate.css'

const NamePlate = () => {
    return (
        <div>
            <div id="intro">
                Hi I'm
            </div>
            <div id="name">
                Shree Balaji.L
            </div>
            
            <Typewriter id="typewriter"
                options={{
                    strings: [
                      '<span style="color: red">Frontend Developer</span>',
                      '<span style="color: green">Backend Developer</span>',
                    ],
                    autoStart: true,
                    loop: false,
                    cursor: '',
                    delay: 25,
                    
                  }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("<span style='color: blue;'>Web Developer</span>")
                        .start();
                }}
            />
        </div>
    );
}
export default NamePlate;