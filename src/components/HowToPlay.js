import React,{useContext} from 'react';
import { GlobalContext } from '../App';
import { FaTimes } from 'react-icons/fa';
import present from '../assets/present.png';
import included from '../assets/included.png';
import incorrect from '../assets/incorrect.png';

const HowToPlay = () => {
  const {setDisplayInformation} = useContext(GlobalContext);
  return (
    <div className='howtoplay-panel'>
        <h2 className='how-header'>How To Play?</h2>
        <button className='close-how-button' onClick={()=>setDisplayInformation(false)}><FaTimes/></button>
        <div className='howtoplay-content'>
            <div className='howtoplay-lines'>
              <p className='line1'>Each word guessed must be a valid 5 letter word! After you have guessed the 
              word hit the ENTER button to submit and check whether the word is present on the list or not!</p>
              <br/>
              <p className='line1'>After each guess, the color of the block will change showing how close you were to the answer!</p>
              <br/>
              <hr></hr>
              <br></br>
              <div className='example-container'>
                <h3>Examples</h3>
                <br/>
                <img src={present} className='img' alt='not present'/>
                <h4>The green block means that the guessed letter of the word is present in the correct position!</h4>
                <br></br>
                <img src={included} className='img' alt='not present'/>
                <h4>The yellow block means that the guessed letter of the word is included in the answer but its NOT in the correct position!</h4>
                <br></br>
                <img src={incorrect} className='img' alt='not present'/>
                <h4>If all the blocks are gray, it means that the guessed word is present in the set of words but NONE of the letters are INCLUDED or PRESENT in the answer!</h4>
              </div>
            </div>
        </div>
    </div>
  )
};

export default HowToPlay;