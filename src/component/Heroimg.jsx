import './Heroimg.css'

import React from 'react';
import IntroImg from "../assets/Hero1.jpg";
import {Link } from "react-router-dom"

const Heroimg = () => {
    return (<div className='hero'> 

    <div className='mask'>
        <img className='into-img' src= {IntroImg} alt='IntroImg' />
    </div>

    <div className='content'>
        <p>HI, i'M FREELANCER </p>
        <h1 style={{color: "aliceblue"}}>React Developer</h1>
        <Link to="/project" className='btn'> Project </Link>
        <Link to="/contact" className='btn btn-light'> Contact </Link>
    </div>

    </div>)
}

export default Heroimg;