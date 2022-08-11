import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../App';
import {FaTimes} from 'react-icons/fa';
import { hintLimitExceeded, hintTimeLimit } from '../Utils';

const Popup = () => {
   const {setDisplayPop, definition, associationWords, displayHint, setDisplayHint, setHintCounter, hintCounter, setDisplayDefinition, displayDefinition, fetchDefinition} = useContext(GlobalContext);
   const [displayClue, setDisplayClue] = useState(false);
   const [orDisplay, setOrDisplay] = useState(false);
   // remove hint after few secs
   useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDisplayHint(false);
        },4000);
        return (()=>{
            clearTimeout(timeOut);
        })
   },[displayHint]);

   // hint limit
   const controlHintLimit = ()=>{
    if(hintCounter >= 2){
        hintLimitExceeded();
        setDisplayPop(false);
    }
    setHintCounter((prevCounter)=> prevCounter + 1);
   }
   // definition control button
   const definitionControl = ()=>{
        fetchDefinition();
        setDisplayDefinition(true);
        controlORText();
   };
   // or text
   const controlORText = ()=>{
        setOrDisplay(true);
   }

  return (
    <div className='popup-box'>
        <div className='popup-header'>
            <div></div>
            <button className='close-button' onClick={()=>{
                setDisplayPop(false)
                setDisplayHint(false);
            }}>
                <FaTimes/>
            </button>
        </div>
            
        {!displayDefinition && <div className='hint-one'>
            <button className='hint-generate-button' onClick={()=>{ 
            controlHintLimit();
            if(hintCounter < 2){
                hintTimeLimit();
            };
            setDisplayHint(true)
            setDisplayClue(true);
            controlORText();
            }}>Generate Close Words!</button>
        </div>}
        {!orDisplay && 
            <React.Fragment>
                <br/>
                <h2 style={{fontWeight:'bold', textAlign:'center', color:'white'}}>OR</h2>
                <br/>
            </React.Fragment>
        }
        {!displayClue && <div className='hint-one definition'>
            <button className='hint-generate-button' onClick={definitionControl}>
                Generate Definition
            </button>
        </div>}
        <div className='hint-content'>
            {displayDefinition
            &&
            <div className='single-hint' style={{textAlign:'center'}}>
                {definition}
            </div>
            }
            {displayHint && hintCounter < 3 &&
                <div className='hints'>
                    <h4>
                        This word is also synonymous or similar to the following words:
                    </h4>
                    <div className='single-hint-container'>
                        {associationWords.length === 0 ? <h3 className='single-hint'>
                            Unfortunately No Hints!
                        </h3>  :associationWords.map((singleWord, index)=>{
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
