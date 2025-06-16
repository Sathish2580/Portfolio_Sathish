import React from 'react'
import'./About.css'
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
          <img src={myphoto_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Dedicated FullStack Developer with 6 months of internship experience at Besant Technologies and hands-on SQL, HTML5, CSS3, Bootstrap, JavaScript, ReactJs, Java and Springboot.</p>
            <p>Eager to contribute to dynamic projects and expand skill set within collaborative teams.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p><hr style={{width:"50%"}}/>
            </div>
              <div className="about-skill">
              <p>REACT JS </p><hr style={{width:"70%"}}/>
            </div>
              <div className="about-skill">
              <p>JAVASCRIPT </p><hr style={{width:"60%"}}/>
            </div>
              <div className="about-skill">
              <p>Java </p><hr style={{width:"50%"}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTH OF INTERNSHIP</p> 
        </div>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>


    </div>
  )
}

export default About