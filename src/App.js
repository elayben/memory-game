import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';

const cardsImages = [
  { "src": "/pics/2_of_hearts.png" },
  { "src": "/pics/3_of_clubs.png" },
  { "src": "/pics/4_of_diamonds.png" },
  { "src": "/pics/5_of_clubs.png" },
  { "src": "/pics/6_of_clubs.png" },
  { "src": "/pics/7_of_spades.png" },
  { "src": "/pics/8_of_diamonds.png" },
  { "src": "/pics/9_of_diamonds.png" },
  { "src": "/pics/10_of_spades.png" },
  { "src": "/pics/ace_of_diamonds.png" },
  { "src": "/pics/black_joker.png" },
  { "src": "/pics/jack_of_diamonds2.png" },
  { "src": "/pics/king_of_diamonds2.png" },
  { "src": "/pics/queen_of_diamonds2.png" }
];

function App() {


  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);


  // shuffle the cards
  const shuffleCards = () => {
    const shuffleCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h1> Memory Rush </h1>
      <button onClick={shuffleCards}> Start Game </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
