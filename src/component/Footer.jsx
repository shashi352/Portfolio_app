import './Footer.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (<div>

        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        <div>
                            <p>Sarvjeet singh colony</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4 style={{color:"aliceblue"}}><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    9876543210 </h4>
                    
                    </div>

                    <div className='email'>
                        <h4 style={{color:"aliceblue"}}><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    xyz@gmail.com </h4>
                    
                    </div>

                </div>
                <div className='right'>
                    <h4 style={{color:"aliceblue"}}>About the Company</h4>
                    <p>Hello i'm shashi. i help people to build their branding website and make money.</p>
                    <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;