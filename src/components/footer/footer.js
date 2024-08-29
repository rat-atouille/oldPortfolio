import './footer.scss';
import React, {useState, useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (
    <div className="footer">
     <span className='iconContainer'><FaGithub /><MdEmail /></span> 
      <p> © 2024 Hailey P. All rights reserved.</p>
    </div>
  );
}

export default Footer;
