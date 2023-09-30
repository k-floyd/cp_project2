import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const cardsData = [
    { id: 1, front: '(T/F) Insertion Sort is an example for Decrease by a Constant.', back: 'True' },
    { id: 2, front: 'What is DAG?', back: 'Directed Acyclic Graph Condition for Topological Sorting.' },
    { id: 3, front: 'Which problem is the topological sorting algorithm most suitable for?', back: 'Course Selection Problem (Must be directed by a cyclic path)' },
    { id: 4, front: '(T/F) Exhaustive Search is NOT a Brute Force Algorithm', back: 'False, it is Brute Force' },
    { id: 5, front: 'Which sorting algorithm compares adjacent elements of the list and exchange them if they are out of order?', back: 'Bubble Sort' },
  ];

  const [cards, setCards] = useState(cardsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const newIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="App">
      <h1>Algorithms Trivia</h1>
      <h4>Learn or quiz yourself on asymptotic analysis, dynamic programming, data structures and more.</h4>
      <h5>Number of cards: {cards.length}</h5>
      <Card className="easy" front={cards[currentIndex].front} back={cards[currentIndex].back} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default App;