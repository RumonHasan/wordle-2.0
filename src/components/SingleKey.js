import React, {useContext} from 'react';
import { GlobalContext } from '../App';
import { letterClassObject } from '../Utils';

const SingleKey = ({keyVal, index})=>{
    const {onSelectLetter, onEnterLetter, onDeleteLetter, correctClass, disabledKeyboardLetters, almostDisabled} = useContext(GlobalContext);
    // controlling letter function
    const handleSelectLetter = ()=>{
        if(keyVal === 'Enter'){
            onEnterLetter();
        }else if(keyVal === 'Backspace'){
            onDeleteLetter();
        }else{
            onSelectLetter(keyVal)
        }
    }
    // keyboard class
    const assignKeyboardClasses = ()=>{
        if(correctClass.includes(keyVal)){
            return letterClassObject.CORRECT;
        }
        else if(almostDisabled.includes(keyVal)){
            return letterClassObject.ALMOST;
        }else{
            if(disabledKeyboardLetters.includes(keyVal)){
                return letterClassObject.INCORRECT;
            }
        }
    }
    return (
        <div className='key' key={index}>
            <button className={`key-button ${assignKeyboardClasses()}`} onClick={handleSelectLetter}>
                {keyVal}
            </button>
        </div>
    )
};
export default SingleKey;


