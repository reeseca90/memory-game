import { useEffect, useState } from "react";
import Cards from "./Cards";

const Game = (props) => {

  const [highScore, setHighScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);

  const handleCardCallback = () => {
    setCurrScore(currScore + 1); 
  }

  const handleResetCallback = () => {
    if (currScore > highScore) {
      setHighScore(currScore);
    }
    setCurrScore(0);

    props.scoreCallback(currScore);
  }

  useEffect(() => {
    props.scoreCallback(currScore);
  });


  return (
    <div>
      <Cards cardCallback={handleCardCallback} resetCallback={handleResetCallback} />
    </div>
  );
}

export default Game;