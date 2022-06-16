import React,{useContext} from 'react';
import { GlobalContext } from '../App';
import { FaTimes } from 'react-icons/fa';

const HowToPlay = () => {
  const {setDisplayInformation} = useContext(GlobalContext);
  return (
    <div className='howtoplay-panel'>
        <h2 className='how-header'>How To Play?</h2>
        <button className='close-how-button' onClick={()=>setDisplayInformation(false)}><FaTimes/></button>
        <div className='howtoplay-content'>
            <div className='howtoplay-lines'>
              <p className='line1'>Each word guessed must be a valid 6 letter words! After you have guessed the 
              word hit the ENTER button to submit and check whether the word is present on the list or not!</p>
            </div>
        </div>
    </div>
  )
};

export default HowToPlay;