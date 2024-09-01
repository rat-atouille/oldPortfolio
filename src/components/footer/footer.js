import './footer.scss';
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer">
     <ul className='iconContainer'>
        <li><a href = "https://www.linkedin.com/in/heenaninap/" target='_blank'><FaLinkedin size={15} /></a></li>
        <li><MdEmail size={18} />Contact: ninapong777@gmail.com</li>
      </ul> 
      <p> © 2024 Heena P. All rights reserved.</p>
    </div>
  );
}

export default Footer;
