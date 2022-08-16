import {useState, useContext, useEffect, useCallback} from "react";
import { GlobalContext } from "../App";
import { playerNameNeeded } from "../Utils";

const ChoosePlayer = ()=>{
    const [nameInput, setNameInput] = useState('');
    const {setDisplayChoosePlayerBox, setLoader, setUnlockKeyboard, setPlayerName, unlockKeyboard,
    setDisplayLeaderboard} = useContext(GlobalContext);
    // close player dialog
    const closePlayerDialog = ()=>{
        setDisplayChoosePlayerBox(false);
    }
    //handle player name functions
    const handlePlayerName = ()=>{
        if(!nameInput){
            return;
        }else{
            setPlayerName(nameInput.toUpperCase());
            closePlayerDialog();
            setNameInput('');
            setUnlockKeyboard(true);
            console.log(nameInput);
        }
    }
    // keyboard
    const handleKeyboardEvents = useCallback((event)=>{
        if(event.key === 'Enter' && !unlockKeyboard){
            handlePlayerName();
        }
    })
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyboardEvents);
        return (()=>{
            window.removeEventListener('keydown', handleKeyboardEvents);
        })
    }, [handleKeyboardEvents])

    // header styles
    const headerStyles = {
        color:'white',
        fontWeight: 'bold',
        padding: '1rem',
        display: 'flex',
        justifyContent:'center'
    }
    // submit button styles
    const buttonContainer = {
        display:'flex',
        justifyContent:'center',
        margin: '1rem'
    }
    // handleleader board
    const handleLeaderboard = ()=>{
        setDisplayLeaderboard(true);
        setLoader(true);
    }
    // guest
    const guestHandler = ()=>{
        setDisplayChoosePlayerBox(false);
        playerNameNeeded();
    }

    return (
        <div className="choosePopup-box">
            <div style={headerStyles}>
                <h2>Choose Your Player Name!!</h2>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={handleLeaderboard} style={{border:'1px solid gray',
                        background:'transparent',
                        color:'white',
                        padding: '0.5rem',
                        borderRadius:'5px',
                        cursor:'pointer',
                        width:'60%',
                        marginBottom:'10px'
                        }}>
                    Check Out Your Competition!!
                </button>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <input type='text' placeholder="player"
                    onChange={(e)=>setNameInput(e.target.value)}
                    value={nameInput}
                    style={{border:'2px solid white', outline:'none', background:'transparent',
                    border:'1px solid gray', color:'white',
                    padding: '1rem'}}
                />
            </div>
            <div style={buttonContainer}>
                <button onClick={handlePlayerName}
                style={{border:'1px solid gray',
                    background:'transparent',
                    color:'white',
                    padding: '0.5rem',
                    borderRadius:'5px',
                    cursor:'pointer'
                }}>Submit</button>
                 <button onClick={guestHandler}
                style={{border:'1px solid gray',
                    background:'transparent',
                    color:'white',
                    padding: '0.5rem',
                    borderRadius:'5px',
                    cursor:'pointer',
                    marginLeft: '5px'
                }}>Guest</button>
            </div>
        </div>
    )
};

export default ChoosePlayer;