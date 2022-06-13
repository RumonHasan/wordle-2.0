import React,{useContext} from "react";
import { GlobalContext } from "../App";

const HintBoard = ()=>{
    const {} = useContext(GlobalContext);
    return (
        <div className="instruction-board">
            <h2 className="info-header">Instructions</h2>
        </div>
    )
};

export default HintBoard;