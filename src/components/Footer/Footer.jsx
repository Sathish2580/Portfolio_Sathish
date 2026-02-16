import React from 'react'
import './Footer.css'
import sathish_logo from '../../assets/sathish_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={sathish_logo} alt="" />
                    <p>Passionate Java Developer with professional experience in backend development using Spring Boot, microservices, Rule Engine and gRPC. Skilled in designing and developing secure, scalable backend services.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>@ 2024 Sathish. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer