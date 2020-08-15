import React from 'react';
import { checkWin } from '../helpers/helpers';

class Popup extends React.Component {

    componentDidMount() {
        this.props.setPlayable(this.playable)
    }

    render() {

        this.playable = true;
        this.finalMessage = '';
        this.finalMessageRevealWord = '';

        if (checkWin(this.props.correctLetters, this.props.wrongLetters, this.props.selectedWord) === 'win') {
            this.finalMessage = 'Congratulations! You won! 😃';
            this.playable = false;
        } else if (checkWin(this.props.correctLetters, this.props.wrongLetters, this.props.selectedWord) === 'lose') {
            this.finalMessage = 'Unfortunately you lost. 😕';
            this.finalMessageRevealWord = `...the word was: ${this.props.selectedWord}`;
            this.playable = false;
        }

        return (
            <div className="popup-container" style={this.finalMessage !== '' ? { display: 'flex' } : {}}>
                <div className="popup">
                    <h2>{this.finalMessage}</h2>
                    <h3>{this.finalMessageRevealWord}</h3>
                    <button onClick={this.props.playAgain}>Play Again</button>
                </div>
            </div>
        )
    }
}

export default Popup