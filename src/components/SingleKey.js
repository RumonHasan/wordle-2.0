import React, {useContext} from 'react';
import { GlobalContext } from '../App';

const SingleKey = ({keyVal, index})=>{
    const {onSelectLetter, onEnterLetter, onDeleteLetter, disabledKeyboardLetters} = useContext(GlobalContext);
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
    return (
        <div className='key' key={index}>
            <button className='key-button' onClick={handleSelectLetter}>
                {keyVal}
            </button>
        </div>
    )
};
export default SingleKey;


