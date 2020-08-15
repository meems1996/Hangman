import React, { useState, useEffect }from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';

import './App.css';

const words = ['taylorswift', 'react', 'alex', 'twilight', 'computers', 'interviews'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playable: true,
//       correctLetters: [],
//       wrongLetters: [],
//       showNotification: false
//     };

//     this.playAgain = this.playAgain.bind(this);
//   }

//   componentDidUpdate(prevState) {

//     if (this.state !== prevState) {
//       const handleKeydown = event => {
//         const { key, keyCode } = event;
//         if (this.state.playable && keyCode >= 65 && keyCode <= 90) {
//           const letter = key.toLowerCase();
//           if (this.state.selectedWord.includes(letter)) {
//             if (!this.state.correctLetters.includes(letter)) {
//               this.setState({
//                 correctLetters: currentLetters => [...currentLetters, letter]
//               });
//             } else {
//               show(this.setState(this.state.showNotification));
//             }
//           } else {
//             if (!this.state.wrongLetters.includes(letter)) {
//               this.setState({
//                 wrongLetters: currentLetters => [...currentLetters, letter]
//               });
//             } else {
//               show(this.setState(this.state.showNotification));
//             }
//           }
//         }
//       }
//       window.addEventListener('keydown', handleKeydown);
//       return () => window.removeEventListener('keydown', handleKeydown);
//     }
//   }

//   playAgain() {
//     this.setState({
//       playable: true,
//       correctLetters: [],
//       wrongLetters: []
//     });

//     const random = Math.floor(Math.random() * words.length);
//     selectedWord = words[random];
//   }

//   render() {
//     return(
//       <>
//         <Header />
//         <div className="game-container">
//           <Figure wrongLetters={this.state.wrongLetters} />
//           <WrongLetters wrongLetters={this.state.wrongLetters} />
//           <Word selectedWord={selectedWord} correctLetters={this.state.correctLetters} />
//         </div>
//         <Popup correctLetters={this.state.correctLetters} wrongLetters={this.state.wrongLetters} selectedWord={this.state.selectedWord} setPlayable={this.setState({playable : this.state.playable})} playAgain={this.playAgain} />
//         <Notification showNotification={this.state.showNotification} />
//       </>
//     );
//   }
// }








function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    console.log('playAgain in app')
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;