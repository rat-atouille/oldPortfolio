import './project.scss';
import React from "react";
import brain from "../../assets/bitmap-brain.png";
import film from "../../assets/bitmap-photographic-film.png";
import game from "../../assets/bitmap-game-boy.png"
import sparkle from "../../assets/sparkle.png"
import Star from '../decors/star';
import Squiggly from '../decors/squiggly'

// projects
const Projects = () => {

  return (
    <div className="projContainer">
      <h1>My Projects</h1>
        <Star 
              size={200}
              position={{ top: '0vh', left: '10vw', rotate: '180deg' }}
          />
      <ul className='projectList'>
          <Star 
              size={100}
              position={{ top: '20vh', right: '12vw', rotate: '50deg' }}
          />
        <li className="game" id="game" >
          <img src={game} alt='North American Word Chain'></img>
          <div className='descript'>
            <h2><span className='highlight'>North America Word Chain</span></h2>
            <p>An educational game developed by a team of five, designed to help users familiarize themselves with the geographical locations of Canada and the U.S.A. The game features a leader dashboard, progress bar, high scores, and more to enhance the learning experience.</p>
            <ul>
              <li>Java</li>
              <li>Java Swing</li>
            </ul>
            <button><a href='https://github.com/rat-atouille/North-America-Word-Chain' target='_blank'>Visit</a></button>
          </div>
        </li>
        <Squiggly 
            size={80}
            position={{ top: '65vh', right: '13vw', rotate: '0deg' }}
            /> 
        <li className="film" id="film">
          <div className='descript'>
            <h2><span className='highlight'>Cinephile</span></h2>
            <p>A movie tracking website tailored for movie enthusiasts. It allows users to keep track of the movies they've watched or want to watch, while also providing the ability to manage and review each movie.</p>            <ul>
              <li>React</li>
              <li>SASS</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
            <button><a href='https://github.com/rat-atouille/fullStackProj'  target='_blank'>Visit</a></button>
          </div>
          <img src={film} alt='Full Stack Web'></img>
        </li>
        <div className='sparkle2'><img src={sparkle}></img></div>
        <Squiggly 
            size={80}
            color="red"
            position={{ bottom: '-30vh', left: '13vw', rotate: '60deg' }}
            /> 
         <Squiggly 
            size={50}
            color="red"
            position={{ bottom: '-38vh', left: '13vw', rotate: '10deg' }}
            /> 
        <li className="android" id="android">
          <img src={brain} alt='Android app'></img>
          <div className='descript'>
            <h2><span className='highlight'>Android App</span></h2>
            <p>This organizer app is designed to make your school life easier. It helps you keep track of and organize all your school-related activities, ensuring you stay on top of your academic work.</p>
            <ul>
              <li>Figma</li>
              <li>Flutter</li>
              <li>SQLite</li>
              <li>Backend in development..</li>
            </ul>
            <button disabled>Coming soon..</button>
          </div>
        </li>
      </ul>
      <div className='source'><a href="https://icons8.com/" target='_blank'>Illustration by Icons 8 from Ouch!</a></div>
      <div className='sparkle3'><img src={sparkle}></img></div>
      <div className='sparkle1'><img src={sparkle}></img></div>
    </div>
  );
}

export default Projects;
