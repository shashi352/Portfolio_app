import { Link } from 'react-router-dom';
import './AboutContent.css'
import React1 from "../assets/React1.jpg"
import React2 from "../assets/cart4.jpg"

const AboutContent = () => {
    return (<div className='about'>
        <div className='left'>
            <h1 style={{color: "aliceblue"}}>Who Am I?</h1>
            <p>I'M a react front-end developer. i create responsive secure website for my clients</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'></div>
            <div className='img=stack top'>
                <img src={React1} className='img' alt="true"/>
            </div>
            {/* <div className='img=stack bottom'>
                <img src={React2} className='img' alt="true"/>
            </div> */}
        </div>
        
    </div>)
}

export default AboutContent;