import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer-logo' src={window.logo}></img>
            <div className='stack-runnethover-links'>
                <h4>STACK RUNNETHOVER</h4>
                <Link onClick={()=> window.scrollTo(0, 0)} className='splash-footer-link' to='/'>Questions</Link>
                <Link onClick={() => window.scrollTo(0, 0)} className='splash-footer-link' to='/signup'>Create an account</Link>
                <Link onClick={() => window.scrollTo(0, 0)} className='splash-footer-link' to='/login'>Log in</Link>
            </div>
            <div className='bio-links'>
                <h4>DEVELOPER DETAILS</h4>
                <a className='splash-footer-link' href="https://github.com/siascone">GitHub</a>
                <a className='splash-footer-link' href="https://www.linkedin.com/in/spencer-iascone-56b28b62/">LinkedIn</a>
                <a className='splash-footer-link' href="http://spenceriascone.com/">Portfolio</a>
                <a className='splash-footer-link' href="http://spenceriascone.com/assets/spencer_iascone_resume.pdf">Resume</a>
            </div>
            <div className='footer-connect'>
                <h4>CONNECT</h4>
                <a className='splash-footer-link email' href="mailto:spencer.iascone@gmail.com?subject=Let's schedule an interview">spencer.iascone@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer;