import React,{useContext} from 'react';
import { GlobalContext } from '../App';

const LossPanel = () => {
  const {replayGame, answerWord} = useContext(GlobalContext);
  return (
    <div className='loss-panel'>
        <h3 className='loss-header'>TOO BAD! The word was <span>{answerWord}</span></h3>
        <div className='retry-container'>
            <h3 className='retry-text'>Would you like to try again ?</h3>
            <button className='retry-button' onClick={replayGame}>Retry</button>
        </div>
        
    </div>
  )
};

export default LossPanel;
