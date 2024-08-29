import './main.scss';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from '../others/sidebar';

const Main = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [options, setOptions] = useState(false);
  const [hover, setHover] = useState(false);

  const messages = ["Hi, I'm Hailey!", "Or call me Nina.", "Welcome To My Portfolio!"];

  useEffect(() => {
    if (options === false) {
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
          setLoopNum((prev) => prev + 1);
        }

        setTypingSpeed(isDeleting ? 50 : 150);
      };

      const typingTimer = setTimeout(() => {
        handleTyping();
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    }
  }, [displayText, isDeleting, typingSpeed, currentIndex, messages, options]);

  return (
    <div className="container">
      <div className='main_container'>
        <div className='contents'>
          <h1 className='welcome'>{displayText} <span className='typer'>|</span></h1>
        </div>
        
        <p onClick={() => setOptions(!options)}>
          <span className="sketch-highlight">Come take a look.</span>
        </p>
      </div>
      {options && <Sidebar />}
    </div>
  );
};

export default Main;
