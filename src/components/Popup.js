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
        this.state = {
            playable: true,
            finalMessage: '',
            finalMessageRevealWord: ''
        }

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
            // this.setState((prevState) => {
            //     return {
            //        ...prevState.playable = false,
            //        ...prevState.finalMessage= 'Congratulations! You won! 😃',
            //        ...prevState.finalMessageRevealWord
            //     }
            //    }
            //    );
        } else if (checkWin(this.props.correctLetters, this.props.wrongLetters, this.props.selectedWord) === 'lose') {
            console.log("losing")
            // this.setState(() => {
            //  return {
            //     playable: false,
            //     finalMessage: 'Unfortunately you lost. 😕',
            //     finalMessageRevealWord:  `...the word was: ${this.props.selectedWord}`
            //  }
            // }
            // );
            console.log(this.props);

        }
    }

    playAgain = () => {
        this.setPlayable = this.props.playable;
        
        this.setState(() => {
            return {
                playable: true,
                finalMessage: 'Unfortunately you lost. 😕',
                finalMessageRevealWord: `...the word was: ${this.props.selectedWord}`
            }
        }
        );
    }



    render() {
        return (
            <div className="popup-container" style={this.state.finalMessage !== '' ? { display: 'flex' } : {}}>
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