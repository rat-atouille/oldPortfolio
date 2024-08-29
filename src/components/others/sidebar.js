import React from 'react';
import './sidebar.scss'
import {Link} from 'react-router-dom'

// open github in new page
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='menus'>
        <li id="projects"><Link to='/projects'>Projects</Link></li>
        <li id="projects"><a href = "https://github.com/rat-atouille">Github</a></li>
        <li id="projects"><Link to='/aboutme'>About me</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;