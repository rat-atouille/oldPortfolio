import './pages.scss';
import React, {useEffect, useState} from "react";
import brain from "../../assets/bitmap-brain.png";
import film from "../../assets/bitmap-photographic-film.png";
import game from "../../assets/bitmap-game-boy.png"
// projects
const Pages = () => {
  const [descri, setDescri] = useState("My Projects");
  const [hover, setHover] = useState(false);

  const handleHover = (e) => {
    setHover(true);
    switch (e.target.id) {
      case "game":
        setDescri("Java Game");
        break
      case "film":
        setDescri("Full Stack Web");
        break
      case "ML":
        setDescri("Machine Learning");
        break
    }
  }
  return (
    <div className="projContainer">
      <h1> {descri} </h1>
      <ul className='projects'>
        <li id="game" onMouseEnter={handleHover}  onMouseLeave={() => setHover(false)}><img src={game} alt='North American Word Chain'></img></li>
        <li id="film" onMouseEnter={handleHover}  onMouseLeave={() => setHover(false)}><img src={film} alt='Cinephile Full Stack Web'></img></li>
        <li id="ML" onMouseEnter={handleHover} onMouseLeave={() => setHover(false)}><img src={brain} alt='Machine Learning'></img></li>
      </ul>
    </div>
  );
}

export default Pages;
