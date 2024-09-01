import React, {useEffect} from 'react';
import './sidebar.scss'
import {Link, useLocation} from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { FaFolder, FaFolderOpen, FaRegSmile, FaRegSmileWink} from "react-icons/fa";
import { IoHome, IoHomeOutline } from "react-icons/io5";


// open github in new page
const Sidebar = ({sidebar, setsidebar}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className='sidebar'>
      <ul className='menus'>
        <li id="home" className= {currentPath === '/' ? 'active': ''}><Link to='/'>
        { currentPath === '/' ?  <IoHome size={20} /> : <IoHomeOutline size={20} />}
        </Link></li>
         <li id="aboutme"  className= {currentPath === '/aboutme' ? 'active': ''}><Link to='/aboutme'>
            { currentPath === '/aboutme' ?  <FaRegSmileWink size={20} /> : <FaRegSmile size={20} />}
        </Link></li>
        <li id="projects"  className= {currentPath === '/projects' ? 'active': ''}><Link to='/projects'>
        { currentPath === '/projects' ?  <FaFolderOpen size={20} /> : <FaFolder size={20} />}
          </Link></li>
        <li id="github" className='github'><a href = "https://github.com/rat-atouille"  target='_blank'><FiGithub /></a></li>
      </ul>
    </div>
  )
}

export default Sidebar;