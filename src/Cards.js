import { useState } from "react";
// I DON'T KNOW WHY I HAVE TO IMPORT WITH FILE EXTENSION BUT IT CRASHES IF I DON'T
import aquarius from './images/aquarius.jpg';
import aries from './images/aries.jpg';
import cancer from './images/cancer.jpg';
import gemini from './images/gemini.jpg';
import leo from './images/leo.jpg';
import libra from './images/libra.jpg';
import sagittarius from './images/sagittarius.jpg';
import scorpio from './images/scorpio.jpg';
import taurus from './images/taurus.jpg';
import virgo from './images/virgo.jpg';

const Cards = (props) => {
  const [cards, setCards] = useState([
    {name: 'Aquarius', src: aquarius, clicked: false, id: 0},
    {name: 'Aries', src: aries, clicked: false, id: 1},
    {name: 'Cancer', src: cancer, clicked: false, id: 2},
    {name: 'Gemini', src: gemini, clicked: false, id: 3},
    {name: 'Leo', src: leo, clicked: false, id: 4},
    {name: 'Libra', src: libra, clicked: false, id: 5},
    {name: 'Sagittarius', src: sagittarius, clicked: false, id: 6},
    {name: 'Scoprio', src: scorpio, clicked: false, id: 7},
    {name: 'Taurus', src: taurus, clicked: false, id: 8},
    {name: 'Virgo', src: virgo, clicked: false, id: 9}
  ]);

  const tableData = (e) => {
    e.preventDefault();
    console.table(cards);
  }

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  const handleCardClick = (e) => {
    console.log(e.target.id);
    console.log(cards[e.target.id].id);

    let selection = e.target.id;

    // I DON'T KNOW WHY === CRASHES THE APP BUT == WORKS PERFECTLY
    const filteredCard = cards.findIndex(card => card.id == selection );
    console.log(filteredCard);

    if (cards[filteredCard].clicked === false) {
      props.cardCallback();
      cards[filteredCard].clicked = true;
    } else {
      setCards([
        {name: 'Aquarius', src: aquarius, clicked: false, id: 0},
        {name: 'Aries', src: aries, clicked: false, id: 1},
        {name: 'Cancer', src: cancer, clicked: false, id: 2},
        {name: 'Gemini', src: gemini, clicked: false, id: 3},
        {name: 'Leo', src: leo, clicked: false, id: 4},
        {name: 'Libra', src: libra, clicked: false, id: 5},
        {name: 'Sagittarius', src: sagittarius, clicked: false, id: 6},
        {name: 'Scoprio', src: scorpio, clicked: false, id: 7},
        {name: 'Taurus', src: taurus, clicked: false, id: 8},
        {name: 'Virgo', src: virgo, clicked: false, id: 9}
      ])
      handleReset();
    }

    shuffleCards();
  }

  const handleReset = () => {
    props.resetCallback();
  }

  return (
    <div id="cardsArea">
      {cards.map((card) => {
        return (
          <div className="card" id={card.id} onClick={handleCardClick}>
            <img src={card.src} id={card.id} alt={card.name} />
            <span id={card.id}>{card.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;