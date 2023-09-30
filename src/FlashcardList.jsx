import React from 'react'
import Flashcard from './Flashcard';

export default function FlashcardList ({ flashcards }) {
    return (
        <>
        <div className="card-container">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard = {flashcard} key={flashcard.id} />
            })}
        </div>
        </>
    )
}