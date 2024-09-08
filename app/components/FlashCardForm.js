import { useState } from 'react';

export default function FlashcardForm() {
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const generateFlashcards = () => {
    // Simple mock AI generation logic
    const words = text.split(' ');
    const cards = words.map((word, index) => ({ id: index, term: word, definition: `${word} definition` }));
    setFlashcards(cards);
  };

  return (
    <div>
      <h2>Create Flashcards</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate flashcards..."
      />
      <button onClick={generateFlashcards}>Generate Flashcards</button>
      <div>
        {flashcards.map((card) => (
          <div key={card.id}>
            <strong>{card.term}</strong>: {card.definition}
          </div>
        ))}
      </div>
    </div>
  );
}
