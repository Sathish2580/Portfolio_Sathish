import React from 'react'
import './Hero.css';
import myprofile_img from '../../assets/myprofile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {


  return (
    <div id='home' className='hero'>
      <img src={myprofile_img} alt="peofile" />
      <h1><span>I'm Sathish,</span>Associate Java Developer.</h1>
      <p>Passionate Java Developer with professional experience in backend development using Spring Boot, microservices, Rule Engine and gRPC. Skilled in designing and developing secure, scalable backend services with Java, Spring Boot, Spring Security, and Microservices architecture.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me  </AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero