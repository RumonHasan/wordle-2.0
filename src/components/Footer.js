import React from 'react';
import { FaCode } from 'react-icons/fa';

const Footer = ()=>{
    return (
        <div className='footer'>
            <div className='footer-content'>
                <span style={{color:'red', fontSize:'25px', textAlign:'center'}}><FaCode/></span>
                <h5 className='footer-text'>by Rumon Hasan</h5>
            </div>
        </div>
    )
};

export default Footer;