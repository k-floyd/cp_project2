import React from 'react'
import { useState } from 'react';
import './App.css';

const Questions = () => {

    return(
        <>
        <div className="Flashcards"></div>
            <div class="card " id="easy">
                <div class="front">What can you do for plants to improve their ability to photosynthesize?</div>
                <div class="back"> Dust or clean off the leaves</div>
                <button onClick={buyDoubleStuffed}>10 samosas</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        
        </>
    )
}

export default Questions;