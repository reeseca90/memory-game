import { useState } from "react";
import Game from "./Game";

const Display = (props) => {

  const [highScore, setHighScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);

  // probably just a DIV with a higher zindex over the cards display? idk
  const displayWinnerMessage = () => {

  }

  const scoreCallback = (childData) => {
    setCurrScore(childData);
  }

  return (
    <div id="display">
      <header>
        <section id="header-left">Craig's Memory Game</section>
        <section id="header-right">Objective: click each card a single time. If you click a card a second time, your score will reset!</section>
      </header>

      <div id="scores"> {/* put the props for scores into these placeholders */}
        <span id="highScore">High score: {highScore}</span>
        <span id="currentScore">Current score: {currScore}</span>
      </div>

      <div>
        <Game scoreCallback={scoreCallback} />
      </div>
    </div>
  );
}

export default Display;