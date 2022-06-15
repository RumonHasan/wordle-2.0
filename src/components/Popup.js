import React,{useContext, useState} from 'react';
import { GlobalContext } from '../App';
import {FaTimes} from 'react-icons/fa';

const Popup = () => {
   const {setDisplayPop, associationWords} = useContext(GlobalContext);
   const [displayHint, setDisplayHint] = useState(false);
  return (
    <div className='popup-box'>
        <div className='popup-header'>
            <div></div>
            <button className='close-button' onClick={()=>setDisplayPop(false)}>
                <FaTimes/>
            </button>
        </div>
        <div className='hint-one'>
            <button className='hint-generate-button' onClick={()=>setDisplayHint(true)}>Generate Meaning Or Clue!</button>
        </div>
        <div className='hint-content'>
            {displayHint && 
                <div className='hints'>
                    <h4>
                        This word is also synonymous or similar to the following words:
                    </h4>
                    <div className='single-hint-container'>
                        {associationWords.map((singleWord, index)=>{
                            return (
                                <h3 key={index} className='single-hint'>
                                    {singleWord.toUpperCase()}
                                </h3>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    </div>
  )
};



export default Popup;
