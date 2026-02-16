import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import myphoto_img from '../../assets/myphoto_img.jpg';
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={myphoto_img} alt="My profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Passionate Java Developer with professional experience in backend development using Spring Boot, microservices, Rule Engine and gRPC. Aiming to contribute to a dynamic team where I can apply my technical skills, solve complex challenges, and continue growing as a backend engineer.</p>
            <p>Experienced in building secure and scalable backend services using Java, Spring Boot, Spring Security, and Microservices architecture.</p>
          </div>
          <div className="about-skills">
            <h3 style={{ color: "#b415ff", marginBottom: "20px", fontSize: "22px" }}>Frontend</h3>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Angular</p><hr style={{ width: "55%" }} /></div>
            <h3 style={{ color: "#b415ff", marginTop: "30px", marginBottom: "20px", fontSize: "22px" }}>Backend</h3>
            <div className="about-skill"><p>Java</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>Spring Boot</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>MySQL</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>gRPC & Microservices</p><hr style={{ width: "65%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>3+</h1>
          <p>TECHNOLOGIES MASTERED</p>
        </div>
      </div>


    </div>
  )
}

export default About