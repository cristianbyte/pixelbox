import './header.css'
import { BsInstagram , BsGithub, BsLinkedin } from 'react-icons/bs'
import { Button } from './button.jsx'
import  Popup  from './popup.jsx'
import React, { useState } from 'react';
import './button.css';

export default function Header(){

    const [isPopupOpen, setPopupOpen] = useState(false);

    return(
        <div className='header'>
            <div className="me">
                <h1 className="me__call">    
                    Bringing your idea to life through high-impact software.
                </h1>
                <div>
                    <Button type={'button secondary-button'} text='Contact' action={()=>{setPopupOpen(!isPopupOpen)}}/>
                    <Popup isOpen={isPopupOpen} onClose={()=>{setPopupOpen(!isPopupOpen)}} />
                    <Button type={'button primary-button'} text='Projects' action={()=>alert('Work in progress for this section')}/>
                </div>
            </div>
            <div className="social">
                <a className='social__icon' href="https://www.github.com/cristianbyte" target="_blank" title="Visitame en github" rel="noopener">
                    <BsGithub/>
                </a>
                <a className='social__icon' href="https://www.instagram.com/cristianbyte" target="_blank" title="Sígueme en Instagram" rel="noopener">
                    <BsInstagram />
                </a>
                <a className='social__icon' href="https://www.linkedin.com/in/cristianbyte" target="_blank" title="Sígueme en LinkeIn" rel="noopener">
                    <BsLinkedin/>
                </a>
                <a className='social__icon' href="https://www.twitter.com/cristianbyte" target="_blank" title="Sígueme en X" rel="noopener">
                    <svg viewBox="0 0 300 300" version="1.1" fill='#fff' xmlns="http://www.w3.org/2000/svg">
                        <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                    </svg>
                </a>
            </div>

        </div>
    )
}