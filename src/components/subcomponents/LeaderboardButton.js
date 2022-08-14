import { addDoc, collection, Timestamp } from "firebase/firestore";
import {database} from '../../firebase';
import React, {useContext} from "react";
import { GlobalContext } from "../../App";
import { addedToLeaderboard } from "../../Utils";

const LeaderboardButton = (props)=>{
    const {text, score, player} = props;
    const {answerWord} = useContext(GlobalContext);
    const buttonStyles = {
        border:'1px solid gray',
        background:'transparent',
        color:'white',
        padding: '0.5rem',
        borderRadius:'5px',
        cursor:'pointer'
    }

    // using firebase to add to leaderboard
    const handleLeaderBoard = async(e)=>{
        e.preventDefault();
        try{    
            // leaderboard information object 
            await addDoc(collection(database, 'leaderboard'),{
                player:player,
                score: score,
                answer: answerWord,
                Timestamp: Timestamp.now(),
            });
            addedToLeaderboard();
            setTimeout(()=>{
                window.location.reload('/');
            }, 2000);
        }catch(error){
            alert(error);
        }
    }

    return (
        <button style={buttonStyles}
        onClick={handleLeaderBoard}>
            {text}
        </button>
    )
}

export default LeaderboardButton;