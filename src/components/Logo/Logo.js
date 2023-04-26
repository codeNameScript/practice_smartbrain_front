import React from 'react';
import { Tilt } from 'react-tilt'
import brain from './icons8brain64.png';
import './Logo.css';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 55,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit. style={{ height: 250, width: 250 }}
}

const Logo = () => {
    return (
        <div className='ma4 mt0 flex'>
            <Tilt className='Tilt br2 shadow-2' options={defaultOptions}>
                <div className='pa3 flex flex-column'>
                    <img src={brain} alt='logo' style={{ paddingTop: '5px', width: '100px' }} />
                    <a target="_blank" href="https://icons8.com/icon/48369/%E8%84%B3">脳</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </Tilt>
        </div>
    );
}


export default Logo;