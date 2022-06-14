import React,{useCallback, useEffect, useContext} from 'react';
import SingleKey from './SingleKey';
import { GlobalContext } from '../App';

const KeyBoard = ()=>{
    const {onSelectLetter, onEnterLetter, onDeleteLetter } = useContext(GlobalContext);
    // key series
    const keySeriesA = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];;
    const keySeriesB = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keySeriesC = ["Z", "X", "C", "V", "B", "N", "M"];

    // get key events for the keyboard 
    const handleKeyEvents = useCallback((event)=>{
        if(event.key === 'Enter'){
            onEnterLetter();
        }else if(event.key === 'Backspace'){
            onDeleteLetter();
        }else{
            onSelectLetter(event.key);
        }
    });
    // receive key events
    useEffect(()=>{
            window.addEventListener('keydown', handleKeyEvents);
        return (()=>{
            window.removeEventListener('keydown', handleKeyEvents);
        })
    },[handleKeyEvents]); // dependency list required to change the key event

    return (
        <div className='keyboard'>
            <div className='keyLine1 line'>
                {keySeriesA.map((singleKey, keyIndex )=>{
                    return (
                        <div key={keyIndex}>
                            <SingleKey keyVal={singleKey} index={keyIndex}/>
                        </div>
                        
                    )
                })}
            </div>
            <div className='keyLine2 line'>
            {keySeriesB.map((singleKey, keyIndex )=>{
                    return (
                        <div key={keyIndex}>
                            <SingleKey keyVal={singleKey} index={keyIndex}/>
                        </div>
                    )
                })}
                <div className='backspace'>
                    <SingleKey keyVal={'Backspace'}/>
                </div>
            </div>
            
            <div className='keyLine3 line'>
            {keySeriesC.map((singleKey, keyIndex )=>{
                    return (
                        <div key={keyIndex}>
                            <SingleKey keyVal={singleKey} index={keyIndex}/>
                        </div>
                    )
                })}
                <div className='enter'>
                    <SingleKey keyVal={'Enter'}/>
                </div>
            </div>
          
        </div>
    )
};

export default KeyBoard;