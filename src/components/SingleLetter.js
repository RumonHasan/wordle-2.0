import React,{useContext, useEffect} from 'react';
import { GlobalContext } from '../App';

const SingleLetter = (props)=>{
    const {rowPosition, letterPosition} = props;
    const {board, answerWord, currentTry, setDisabledKeyboardLetters} = useContext(GlobalContext);
    // getting the letter 
    const letter = board[rowPosition][letterPosition]; // connected with the row position of the default board;
    // assigning classes
    const correctClass = answerWord[letterPosition] === letter; // checking for correct class for correct position
    const almostCorrect = !correctClass && letter !== '' && answerWord.includes(letter);
    
    // assigning the classes
    const classAssign = ()=>{
        if(correctClass){
            return 'correct';
        }else if(almostCorrect){
            return 'included'
        }else{
            return 'incorrect'
        }
    }
    //populating the disabled keyboard letters in order to color the keys
    useEffect(()=>{
        if(letter !== ''){
            setDisabledKeyboardLetters((prevDisabledLetters)=> [...prevDisabledLetters, letter])
        }
    },[currentTry.rowPosition]);// controlled by letter position

    // class activates when the word is present and jumps to the next position
    return (
        <div className={`letter-block ${currentTry.rowPosition > rowPosition && classAssign()}`}>
            {letter}
        </div>
    )
};

export default SingleLetter;