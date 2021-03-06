import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
    console.log(selectedWord)
  return (
    <div>
        {selectedWord.split('').map((letter, i ) => {
            return (
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
            );
        })}
    </div>
  );
}

export default Word;
