import { useState, useEffect } from "react";

const Cards = (props) => {
  const [cards, setCards] = useState([
    {name: 'one', clicked: false, id: 0},
    {name: 'two', clicked: false, id: 1},
    {name: 'three', clicked: false, id: 2},
    {name: 'four', clicked: false, id: 3},
    {name: 'five', clicked: false, id: 4},
    {name: 'six', clicked: false, id: 5},
    {name: 'seven', clicked: false, id: 6},
    {name: 'eight', clicked: false, id: 7},
    {name: 'nine', clicked: false, id: 8},
    {name: 'ten', clicked: false, id: 9}
  ]);

  const tableData = (e) => {
    e.preventDefault();
    console.table(cards)
  }

  const handleCardClick = (e) => {
    console.log(cards[e.target.id]);

    if (cards[e.target.id].clicked === false) {
      props.cardCallback();
      cards[e.target.id].clicked = true;
    } else {
      setCards([
        {name: 'one', clicked: false, id: 0},
        {name: 'two', clicked: false, id: 1},
        {name: 'three', clicked: false, id: 2},
        {name: 'four', clicked: false, id: 3},
        {name: 'five', clicked: false, id: 4},
        {name: 'six', clicked: false, id: 5},
        {name: 'seven', clicked: false, id: 6},
        {name: 'eight', clicked: false, id: 7},
        {name: 'nine', clicked: false, id: 8},
        {name: 'ten', clicked: false, id: 9}
      ])
      handleReset();
    }
  }

  const handleReset = () => {
    props.resetCallback();
  }

  return (
    <div id="cardsArea">
      
      {cards.map((card) => {
        return (
          <div class="card" id={card.id} onClick={handleCardClick}>
            <span id={card.id}>image placeholder</span>
            <span id={card.id}>{card.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;