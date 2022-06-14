import React from "react";

const InstructionPanel = ()=>{
    return (
        <div>
            <div className="instruction" style={{display:'flex'}}>
                <div style={{background: 'rgb(249, 249, 142)', width:30, height:20}}></div>
                <h4 style={{color:'white', marginLeft:5}}>Letters that are included in the word</h4>
            </div>
            <div className="instruction" style={{display:'flex'}}>
                <div style={{background: 'rgb(61, 61, 61)', width:30, height:20}}></div>
                <h4 style={{color:'white', marginLeft:5}}>Incorrect letters</h4>
            </div>
            <div className="instruction" style={{display:'flex'}}>
                <div style={{background: 'rgb(121, 226, 121)', width:30, height:20}}></div>
                <h4 style={{color:'white', marginLeft:5}}>Correct letter in the correct positions.</h4>
            </div>
        </div>
    )
};

export default InstructionPanel;