import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedIn} from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='container'>
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                            <li><Link to='/'>Our Services</Link></li>
                            <li><Link to='/'>Affiliante Program</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Shop</h4>
                        <ul>
                            <li><Link to='/'>History Book</Link></li>
                            <li><Link to='/'>Science Fiction</Link></li>
                            <li><Link to='/'>Business Idios</Link></li>
                            <li><Link to='/'>Travel Experience</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><Link to='/'>FAQ</Link></li>
                            <li><Link to='/'>Purchsing</Link></li>
                            <li><Link to='/'>Returns</Link></li>
                            <li><Link to='/'>Order Status</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <ul className='social-links'>
                            <i><Link to='/https://www.facebook.com/'><FaFacebook /></Link></i>
                            <i><Link to='/'><FaTwitter /></Link></i>
                            <i><Link to='/'><FaInstagram /></Link></i>
                            {/* <i><Link to='/'><FaLin /></Link></i> */}
                        </ul>
                    </div>
                </div>
           </div>
           <p className='copyright'><small>copyright Protected  &copy</small></p>
        </footer>
    );
};

export default Footer;