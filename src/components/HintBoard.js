import React,{useContext} from "react";
import { GlobalContext } from "../App";
import InstructionPanel from "./InstructionPanel";

const HintBoard = ()=>{
    const {setDisplayPop} = useContext(GlobalContext);
    return (
        <div className="instruction-board">
            <h2 className="info-header">Instructions</h2>
            <InstructionPanel/>
            <button className="hint-button" onClick={()=>setDisplayPop(true)}>
                Feeling Stuck!
            </button>
        </div>
    )
};

export default HintBoard;