import React, { useState } from 'react';

export default function Card({ front, back }) {
  const [text, setText] = useState(front);

  function handleClick() {
    setText((oldState) => {
      if (oldState === front) {
        return back;
      } else {
        return front;
      }
    });
  }

  return (
    <div className="flash-card" onClick={handleClick}>
      {text}
    </div>
  );
}