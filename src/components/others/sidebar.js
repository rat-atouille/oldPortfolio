import React from 'react';
import './sidebar.scss'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";


// open github in new page
const Sidebar = ({sidebar, setsidebar}) => {
  return (
    <div className='sidebar'>
      <ul className='menus'>
        <li id="home" className='home'><Link to='/'><FaHome size={20} /></Link></li>
        <li id="projects" className='projects'><Link to='/projects'><FaFolder /></Link></li>
        <li id="aboutme" className='aboutme'><Link to='/aboutme'><VscSmiley size={20} /></Link></li>
        <li id="github" className='github'><a href = "https://github.com/rat-atouille"  target='_blank'><FiGithub /></a></li>
      </ul>
    </div>
  )
}

export default Sidebar;