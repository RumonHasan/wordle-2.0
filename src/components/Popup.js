import React,{useContext} from 'react';
import { GlobalContext } from '../App';
import {FaTimes} from 'react-icons/fa';

const Popup = () => {
   const {setDisplayPop} = useContext(GlobalContext);
  return (
    <div className='popup-box'>
        <div className='popup-header'>
            <div>

            </div>
            <button className='close-button' onClick={()=>setDisplayPop(false)}>
                <FaTimes/>
            </button>
        </div>
    </div>
  )
};

export default Popup;
