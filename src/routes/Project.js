import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroImgProject from "../component/HeroImgProject"
import PricingCard from "../component/PriccingCard";
import WorkCard from "../component/WorkCard";
import Work from "../component/Work";

const Project = () =>{
    return (<div>
        <Navbar/>
        
        <HeroImgProject heading="project" text="some of my most recent work"/>
        <Work/> 
        <PricingCard/>
        <Footer/>
    </div>)
}

export default Project;