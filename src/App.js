//App.js
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const cardsImages = [
  { "src": "/pics/2_of_hearts.png", matched: false },
  { "src": "/pics/3_of_clubs.png", matched: false },
  { "src": "/pics/4_of_diamonds.png", matched: false },
  { "src": "/pics/5_of_clubs.png", matched: false },
  { "src": "/pics/6_of_clubs.png", matched: false },
  { "src": "/pics/7_of_spades.png", matched: false },
  { "src": "/pics/8_of_diamonds.png", matched: false },
  { "src": "/pics/9_of_diamonds.png", matched: false },
  { "src": "/pics/10_of_spades.png", matched: false },
  { "src": "/pics/ace_of_diamonds.png", matched: false },
  { "src": "/pics/black_joker.png", matched: false },
  { "src": "/pics/jack_of_diamonds2.png", matched: false },
  { "src": "/pics/king_of_diamonds2.png", matched: false },
  { "src": "/pics/queen_of_diamonds2.png", matched: false }
];

function App() {


  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);


  // shuffle the cards
  const shuffleCards = () => {
    clearChoices();
    const shuffleCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  }

  // handle choise of card
  const handleChoise = (card) => {
    if (choiseOne === null) {
      setChoiseOne(card);
    } else {
      setChoiseTwo(card);
    }

  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        })
        setTurns(turns + 1);
        clearChoices();
      } else {
        setTurns(turns + 1);
        setTimeout(() => {
          clearChoices();
        }, 1500);
      }
    }
  }, [choiseOne, choiseTwo]);


  // reset the turns
  const clearChoices = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setDisabled(false);
  }

  // shuffle the cards on first render
  useEffect(() => {
    shuffleCards();
  }
    , []);
  return (
    <div className="App">
      <h1> Memory Rush </h1>
      <button onClick={shuffleCards}> New Game </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoise={handleChoise}
            flipped={choiseOne === card || choiseTwo === card || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p> Turns: {turns} </p>
    </div>
  );
}

export default App;
