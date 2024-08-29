import { useEffect, useState } from "react";
import { Link } from "react-router-dom" 
import React from "react";
import './aboutme.scss';

// self introuction page
const About = () => {
  
  return (
    <div className="aboutme">
      <div className="descript">
        <h1>Hello, I'm Hailey!</h1>
        <p className="notes">
          Currently studying computer science at UWO, I enjoy putting my ideas in my head into softwares to make life more efficient.
          Outside of my field, I like to spend my time knitting and crocheting!
        </p>
        <span className="projects"><span class="sketch-highlight"><Link to="/projects">Go to my projects archives</Link></span></span>
        </div>

      <div className="skills">

      </div>
    </div>
  )
}

export default About;