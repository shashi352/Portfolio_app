import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutContent from "../component/AboutContent"
import HeroImgProject from "../component/HeroImgProject";
import HeroImgAbout from "../component/HeroImgAbout";

const About = () =>{
    return (<div>
        <Navbar/>
        <HeroImgAbout/>
        <AboutContent/>
        <Footer/>
    </div>)
}

export default About;