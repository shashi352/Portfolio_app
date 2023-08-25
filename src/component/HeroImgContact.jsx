import React from "react";
import './HeroimgProject.css'
import { Link } from "react-router-dom";
import IntroImg from "../assets/HeroImg.jpg";
import Work from './Work';
import "./HeroImgContact.css"

const HeroImgContact = () => {
    return (<div className='hero'> 

    <div className='mask'>
        <img className='into-img' src= {IntroImg} alt='IntroImg' />
    </div>

    <div className='content'>
        
        <h1 style={{color: "aliceblue"}}>CONTACT</h1>
        <p>Let's have a chat.</p>
    </div>

    </div>)
}

export default HeroImgContact;