import React from 'react'
  import './Hero.css';
import myprofile_img from '../../assets/myprofile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {


  return (
    <div id='home'     className='hero'>
        <img src={myprofile_img} alt="peofile" />
        <h1><span>I'm Sathish,</span>Full Stack Developer.</h1>
        <p>As a highly motivated and results-driven Full Stack Developer, I aim to leverage my strong expertise in front-end and back-end technologies to create dynamic, user-friendly, and scalable web applications. With hands-on experience in Java, HTML, CSS, JavaScript, Reactjs, SpringBoot and databases like MySQL..</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>
             Connect with me  </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero