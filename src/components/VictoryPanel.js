import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../App';

const VictoryPanel = ()=>{
    const {currentTry} = useContext(GlobalContext);


    const victoryText = ()=>{
        if(currentTry.rowPosition === 1){
            return (
                <h3 className='winner-text'>
                    Congrats you have won it on the <span style={{color:'red', fontSize:30}} className='first-winner focus'>1st</span> try
                </h3>
            )
        }
    }

    return (
        <div className='victory-panel'>
            <div style={{width: '100%'}} className='victory-text'>
                <div className='letter'>CONGRATULATIONS!!</div>
            </div>
            <div className='winner-text-container'>
                <div className='winner-text'>
                    {victoryText()}
                </div>
            </div>
           
        </div>
    )
};

export default VictoryPanel;