import React, {useLayoutEffect} from "react";
import './aboutme.scss';
import { Link } from "react-router-dom" 
import { FaReact,FaNode,FaJava,FaSass,FaPython,FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFigma } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { DiSwift } from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";

import Star from '../decors/star';
import Squiggly from '../decors/squiggly'

// self introuction page
const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className="aboutme">
        <Star 
          size={300}
          color="red"
          position={{ top: '10vh', right: '0' }}
        />
        <div className="pageOne">
        <div className="descript">
          <h1>Hello, I'm <span className="mark">Nina!</span></h1>
          <p className="notes">
            Currently studying computer science at the University of Western Ontario, I have a passion for transforming the ideas in my head into software that makes life more efficient. 
            My main interest lies in <span className="highlight">full stack development</span> as well as <span className="highlight">cloud and iOS development</span>.<br />
            Outside of programming, I spend my time knitting and crocheting!
          </p>
          <Star 
              size={200}
              color="red"
              position={{ top: '58vh', left: '1%', rotate: '180deg' }}
        />
          </div>
            <Squiggly 
            size={100}
            color="red"
            position={{ top: '65vh', right: '4vw', rotate: '0deg' }}
            />    
      </div>

      <div className="pageTwo">
        <div className="container1">
         <Star 
              size={150}
              color="red"
              position={{ top: '10vh', left: '20%', rotate: '180deg' }}
        />          
        <h1>My Skills</h1>
        <Star 
              size={80}
              color="red"
              position={{ top: '10vh', left: '20%', rotate: '200deg' }}
        />    
        <Star 
              size={150}
              color="red"
              position={{ top: '7vh', right: '25%', rotate: '150deg' }}
        />            
          <ul className="lang">
              <li><IoLogoJavascript size={40} /></li>
              <li><FaPython size={40} /></li>
              <li><FaJava size={40} /></li>
              <li><PiFileCSharp  size={40} /></li>
              <li><BsFiletypeSql size={40} /></li>
              <li><FaReact size={40} /></li>
              <li><FaNode size={40} /></li>
              <li><DiMysql size={40} /></li>
              <li><IoLogoFigma size={40} /></li>
              <li><VscAzure  size={40} /></li>
              <li><DiSwift    size={40} /></li>

          </ul>
          <div className="proj">
            <Link to='/projects'>Go to my projects<span><FaArrowRight /></span></Link>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default About;