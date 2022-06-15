import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../App';

const VictoryPanel = ()=>{
    const {currentTry, replayGame} = useContext(GlobalContext);

    // victory text selections for winning categories
    const victoryText = ()=>{
        if(currentTry.rowPosition === 1){
            return (
                <h3 className='winner-text'>
                    Congrats you have won it on the <span style={{color:'red', fontSize:30}} className='focus'>1st</span> try
                </h3>
            )
        }else if(currentTry.rowPosition === 2){
            return (
                <h3 className='winner-text'>
                    Congrats you have won it on the <span style={{color:'red', fontSize:30}} className='focus'>2nd</span> try
                </h3>
            )

        }else if(currentTry.rowPosition === 3){
            return (
                <h3 className='winner-text'>
                    Not bad! You have made it on the third try!!<span style={{color:'red', fontSize:30}} className='focus'>3rd</span> try
                </h3>
            )
            
        }else if(currentTry.rowPosition === 4){
            return (
                <h3 className='winner-text'>
                    Carefull, you only got one more chance to go!<span style={{color:'red', fontSize:30}} className='focus'>4th</span> try
                </h3>
            )
            
        }else if(currentTry.rowPosition === 5){
            return (
                <h3 className='winner-text'>
                    You have barely made it!! <span style={{color:'gray', fontSize:30}} className='focus'>5th</span> try
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
                <div className='replay-container'>
                    <div className='replay-content'>
                        <h4 style={{color:'white'}}>Would you like to restart the game?</h4>
                        <button className='replay-button' onClick={replayGame}>Replay</button>
                    </div>
                </div>
        </div>
    )
};

export default VictoryPanel;