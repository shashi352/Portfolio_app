import React from "react";
import IntroImg from "../assets/HeroImg.jpg";
import './HerpImgAbout.css'

const HeroImgAbout = () => {
    return (<div className='hero'> 

    <div className='mask'>
        <img className='into-img' src= {IntroImg} alt='IntroImg' />
    </div>

    <div className='content'>
        
        <h1 style={{color: "aliceblue"}}>About</h1>
        <p>Some of my most recent Works </p>
    </div>

    </div>)
}

export default HeroImgAbout;