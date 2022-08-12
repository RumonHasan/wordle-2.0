import {useState, useContext} from "react";
import { GlobalContext } from "../App";
// firebase imports
import {collection, addDoc, Timestamp} from 'firebase/firestore';

const ChoosePlayer = ()=>{
    const [nameInput, setNameInput] = useState('');
    const {setDisplayChoosePlayerBox, setUnlockKeyboard} = useContext(GlobalContext);

    // close player dialog
    const closePlayerDialog = ()=>{
        setDisplayChoosePlayerBox(false);
    }
    //handle player name functions
    const handlePlayerName = ()=>{
        if(!nameInput){
            return;
        }else{
            closePlayerDialog();
            setNameInput('');
            setUnlockKeyboard(true);
            console.log(nameInput);
        }
    }

    // firebase player submit
    const handleSubmit = async ()=>{
        try{
            
        }catch(error){
            console.log(error);
        }
    }

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
    return (
        <div className="choosePopup-box">
            <div style={headerStyles}>
                <h2>Choose Your Player Name!!</h2>
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
            </div>
        </div>
    )
};

export default ChoosePlayer;