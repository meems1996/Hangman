import React from 'react';
import { checkWin } from '../helpers/helpers';
// ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) 
class Popup extends React.Component {
    /**
     * If there is a constructor function in your component, 
     * this function will be called when the component gets initiated. 
     */
    constructor(props) {
        super(props);
        this.playable = true;
        this.finalMessage = '';
        this.finalMessageRevealWord = '';
        /**
         * For methods in react, the this keyword should represent the component that
         * owns the method. 
         * That is why you should use arrow functions
         */
        // this.playAgain = this.playAgain.bind(this)
    }

    componentDidUpdate() {
        if (checkWin(this.props.correctLetters, this.props.wrongLetters, this.props.selectedWord) === 'win') {
            console.log("winning")
            this.playable = false;
            this.finalMessage = 'Congratulations! You won! 😃';
            this.finalMessageRevealWord = '';
        } else if (checkWin(this.props.correctLetters, this.props.wrongLetters, this.props.selectedWord) === 'lose') {
            console.log("losing")
            this.playable = false;
            this.finalMessage = 'Unfortunately you lost. 😕';
            this.finalMessageRevealWord = `...the word was: ${this.props.selectedWord}`;
            console.log(this.props);
        }
    }

    playAgain = () => {
        console.log("clicking")
        // this.setPlayable = this.playable;
        this.playable = true;
        this.finalMessage = '';
        this.finalMessageRevealWord = '';
    }



    render() {
        return (
            <div className="popup-container" style={this.finalMessage !== '' ? { display: 'flex' } : {}}>
                <div className="popup">
                    <h2>{this.finalMessage}</h2>
                    <h3>{this.finalMessageRevealWord}</h3>
                    <button onClick={(e) => this.playAgain(e)}>Play Again</button>
                </div>
            </div>
        )
    }
}

export default Popup