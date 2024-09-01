import './main.scss';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Star from '../decors/star';

const Main = ({ sidebar, setsidebar }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["Hi, I'm Heena!", "Call me Nina.", "Welcome To My Portfolio!"];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentMessage = messages[currentIndex];
      const updatedText = isDeleting
        ? currentMessage.substring(0, displayText.length - 1)
        : currentMessage.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingTimer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, typingSpeed, currentIndex, messages]);

  return (
    <div className="container">
      <span className='star'><Star 
         size={300}
         color="red"
         position={{ top: '5vh', left: '60vw' }}
        /></span>
        <span className='star'><Star 
         size={180}
         color="red"
         position={{ top: '30vh', left: '70vw', rotate: '50deg', }}
         rotate={20}
         opacity={0.8}
        /></span>
      <div className='main_container'>
        <div className='contents'>
          <h1 className='welcome'>{displayText} <span className='typer'>|</span></h1>
        </div>
        <p>
          <span className="sketch-highlight"><Link to='/aboutme'>Come take a look.</Link></span>
        </p>
      </div>
      <span className='star'><Star 
         size={200}
         color="red"
         position={{ bottom: '10vh', left: '10vw' }}
        /></span>
    </div>
  );
};

export default Main;
