import React,{useContext, useState, useEffect} from "react";
import { GlobalContext } from "../App";
import InstructionPanel from "./InstructionPanel";
import { noClueAllowed } from "../Utils";

const HintBoard = ()=>{
    const {setDisplayPop, currentTry, fetchDataAssociation} = useContext(GlobalContext);
    const [clueButtonClass, setClueButtonClass] = useState(false);

    useEffect(()=>{
        if(currentTry.rowPosition > 2){
            setClueButtonClass(true);
        }
    },[currentTry.rowPosition]);

    const displayPopFeatures = ()=>{
        fetchDataAssociation();
        if(currentTry.rowPosition > 2){
            setDisplayPop(true);
        }else{
            noClueAllowed();
        }
    }
    return (
        <div className="instruction-board">
            <h2 className="info-header">Instructions</h2>
            <InstructionPanel/>
            <button className={clueButtonClass ? 'hint-button active': 'hint-button'} onClick={displayPopFeatures}>
                Feeling Stuck!
            </button>
        </div>
    )
};

export default HintBoard;