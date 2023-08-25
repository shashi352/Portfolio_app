import react, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    }
    
    window.addEventListener("scroll", changeColor);

    return( <div className={color ? 'header header-bg' : 'header'}> 
    <Link to="/">
      <h1 style={{color:"aliceblue",textDecoration: 'underline', textDecorationColor: 'black'}}>Portfolio</h1>
    </Link>

    <ul className={ click ? 'nav-menu active' : 'nav-menu'}  >
      <li>
        <Link to="/" style={{color:"aliceblue"}}>Home</Link>
      </li>
      <li>
        <Link to="/Project" style={{color:"aliceblue"}}>Project</Link>
      </li>
      <li>
        <Link to="/About" style={{color:"aliceblue"}}>About</Link>
      </li>
      <li>
        <Link to="/Contact" style={{color:"aliceblue"}}> Contact</Link>
      </li>
    </ul>

    <div className='hamburger' onClick={handleClick}>
      
      {click ? (
        <FaTimes size={20} style={{color:"#fff"}}/>
      ) : (<FaBars size={20} style={{color:"#fff"}}/>)}
    </div>
    </div>);
} 

export default Navbar;