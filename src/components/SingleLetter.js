import React,{useContext, useEffect} from 'react';
import { GlobalContext } from '../App';
import { letterClassObject } from '../Utils';

const SingleLetter = (props)=>{
    const {rowPosition, letterPosition} = props;
    const {board, answerWord, currentTry, setDisabledKeyboardLetters, setAlmostDisabled, setCorrectClass} = useContext(GlobalContext);
    // getting the letter 
    const letter = board[rowPosition][letterPosition]; // connected with the row position of the default board;
    // assigning classes
    const correctClass = answerWord[letterPosition] === letter; // checking for correct class for correct position
    const almostCorrect = !correctClass && letter !== '' && answerWord.includes(letter);
    
    // assigning the classes
    const classAssign = ()=>{
        if(correctClass){
            return letterClassObject.CORRECT;
        }else if(almostCorrect){
            return letterClassObject.ALMOST
        }else{
            return letterClassObject.INCORRECT
        }
    }
    //populating the key sets as per the class list
    useEffect(()=>{
        if(letter !== ''){
            if(correctClass){
                setCorrectClass((prevCorrectClass)=>[...prevCorrectClass, letter])
            }else if(almostCorrect){
                setAlmostDisabled((prevAlmostDisabled)=>[...prevAlmostDisabled, letter])
            }else{
                setDisabledKeyboardLetters((prevDisabledLetters)=> [...prevDisabledLetters, letter])
            }   
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