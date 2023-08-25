import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Form from "../component/Form"
import HeroImgContact from "../component/HeroImgContact"

const Contact = () =>{
    return (<div>
        <Navbar/>
        <HeroImgContact/>
        <Form/>
       <Footer/>
    </div>)
}

export default Contact;