import React,{useContext} from 'react';
import { GlobalContext } from '../App';
import { FaTimes } from 'react-icons/fa';

const HowToPlay = () => {
  const {setDisplayInformation} = useContext(GlobalContext);
  return (
    <div className='howtoplay-panel'>
        <h2 className='how-header'>How To Play?</h2>
        <button className='close-how-button' onClick={()=>setDisplayInformation(false)}><FaTimes/></button>
    </div>
  )
};

export default HowToPlay;