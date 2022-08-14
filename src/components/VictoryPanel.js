import React,{useContext, useState, useEffect, useRef} from 'react';
import { GlobalContext } from '../App';
import Confetti from 'react-confetti';
import LeaderboardButton from './subcomponents/LeaderboardButton';

const VictoryPanel = ()=>{
    const {currentTry, replayGame, playerName} = useContext(GlobalContext);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [displayConfetti, setDisplayConfetti] = useState(false);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
      }, []);
    
    const handleDisplayConfetti = ()=>{
        setDisplayConfetti(true);
    }


    // score button
    const scoreButton = (rowPosition)=>{
        switch(rowPosition){
            case 1:
                return <div>
                    Your Score is 60, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={60}
                        player={playerName}
                    />
                </div>
            case 2:
     
                return <div>
                    Your Score is 50, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={50}
                        player={playerName}
                    />
                </div>
                case 3:
         
                return <div>
                    Your Score is 40, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={40}
                        player={playerName}
                    />
                </div>
            case 4:

                return <div>
                    Your Score is 30, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={30}
                        player={playerName}
                    />
            </div>
                case 5:
                return <div>
                    Your Score is 20, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={20}
                        player={playerName}
                    />
                </div>
            case 6:
                return <div>
                    Your Score is 10, <LeaderboardButton
                        text={'Add to Leaderboard'}
                        score={10}
                        player={playerName}
                    />
                </div>
            default:
                return <div>
                    Your Score is 0,
                </div>
        }
    }

    // victory text selections for winning categories
    const victoryText = ()=>{
        if(currentTry.rowPosition === 1){
            return (
                <h3 className='winner-text'>
                    Congrats {playerName}, you have won it on the <span style={{color:'red', fontSize:30}} className='focus'>1st</span> try
                    {scoreButton(currentTry.rowPosition)}
                </h3>
            )
        }else if(currentTry.rowPosition === 2){
            return (
                <h3 className='winner-text'>
                    Congrats {playerName}, you have won it on the <span style={{color:'red', fontSize:30}} className='focus'>2nd</span> try
                    {scoreButton(currentTry.rowPosition)}
                </h3>
            )
        }else if(currentTry.rowPosition === 3){
            return (
                <h3 className='winner-text'>
                    Not bad! {playerName}, You have made it on the third try!!<span style={{color:'red', fontSize:30}} className='focus'>3rd</span> try
                    {scoreButton(currentTry.rowPosition)}
                </h3>
            )
        }else if(currentTry.rowPosition === 4){
            return (
                <h3 className='winner-text'>
                    Carefull {playerName}, you only got one more chance to go!<span style={{color:'red', fontSize:30}} className='focus'>4th</span> try
                    {scoreButton(currentTry.rowPosition)}
                </h3>
            )
            
        }else if(currentTry.rowPosition === 5){
            return (
                <h3 className='winner-text'>
                    {playerName}, You have barely made it!! <span style={{color:'gray', fontSize:30}} className='focus'>5th</span> try
                    {scoreButton(currentTry.rowPosition)}
                </h3>
            )
        }else{
            return (
                <h3 className='winner-text'>
                   {playerName}, Jeezus you made it! Whew <span style={{color:'gray', fontSize:30}} className='focus'>Last</span> try
                   {scoreButton(currentTry.rowPosition)}
                </h3>
            )
        }
    }

    return (
        <div className='victory-panel' ref={confettiRef} onMouseEnter={()=> handleDisplayConfetti(true)}
        onMouseLeave={()=>handleDisplayConfetti(false)}>
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
                <Confetti
                    recycle={displayConfetti}
                    numberOfPieces={100}
                    width={width}
                    heigh={height}
                />
        </div>
    )
};

export default VictoryPanel;