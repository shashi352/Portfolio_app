import React from "react";
import './HeroimgProject.css'
import { Link } from "react-router-dom";
import IntroImg from "../assets/HeroImg.jpg";
import Work from './Work';

const HeroImgProject = () => {
    return (<div className='hero'> 

    <div className='mask'>
        <img className='into-img' src= {IntroImg} alt='IntroImg' />
    </div>

    <div className='content'>
        
        <h1 style={{color: "aliceblue"}}>PROJECTS</h1>
        <p>Some of my most recent Works </p>
    </div>

    </div>)
}

export default HeroImgProject;