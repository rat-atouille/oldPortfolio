import './footer.scss';
import React, {useState, useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (
    <div className="footer">
     <span className='iconContainer'>
      <span><a href = "https://github.com/rat-atouille"><FaGithub /></a></span>
      <MdEmail /></span> 
      <p> © 2024 Heena P. All rights reserved.</p>
    </div>
  );
}

export default Footer;
