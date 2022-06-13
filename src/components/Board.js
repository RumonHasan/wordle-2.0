import React from 'react';
import SingleLetter from './SingleLetter';

const Board = ()=>{
    // primary board component
    return (
        <div className='board'>
            <div className='row'>
                <SingleLetter rowPosition={0} letterPosition={0}/>
                <SingleLetter rowPosition={0} letterPosition={1}/>
                <SingleLetter rowPosition={0} letterPosition={2}/>
                <SingleLetter rowPosition={0} letterPosition={3}/>
                <SingleLetter rowPosition={0} letterPosition={4}/>
            </div>
            <div className='row'>
                <SingleLetter rowPosition={1} letterPosition={0}/>
                <SingleLetter rowPosition={1} letterPosition={1}/>
                <SingleLetter rowPosition={1} letterPosition={2}/>
                <SingleLetter rowPosition={1} letterPosition={3}/>
                <SingleLetter rowPosition={1} letterPosition={4}/>
            </div>
            <div className='row'>
                <SingleLetter rowPosition={2} letterPosition={0}/>
                <SingleLetter rowPosition={2} letterPosition={1}/>
                <SingleLetter rowPosition={2} letterPosition={2}/>
                <SingleLetter rowPosition={2} letterPosition={3}/>
                <SingleLetter rowPosition={2} letterPosition={4}/>
            </div>
            <div className='row'>
                <SingleLetter rowPosition={3} letterPosition={0}/>
                <SingleLetter rowPosition={3} letterPosition={1}/>
                <SingleLetter rowPosition={3} letterPosition={2}/>
                <SingleLetter rowPosition={3} letterPosition={3}/>
                <SingleLetter rowPosition={3} letterPosition={4}/>
            </div>
            <div className='row'>
                <SingleLetter rowPosition={4} letterPosition={0}/>
                <SingleLetter rowPosition={4} letterPosition={1}/>
                <SingleLetter rowPosition={4} letterPosition={2}/>
                <SingleLetter rowPosition={4} letterPosition={3}/>
                <SingleLetter rowPosition={4} letterPosition={4}/>
            </div>
            <div className='row'>
                <SingleLetter rowPosition={5} letterPosition={0}/>
                <SingleLetter rowPosition={5} letterPosition={1}/>
                <SingleLetter rowPosition={5} letterPosition={2}/>
                <SingleLetter rowPosition={5} letterPosition={3}/>
                <SingleLetter rowPosition={5} letterPosition={4}/>
            </div>
        </div>
    )
}
export default Board;
