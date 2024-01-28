import './header.css'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [actualTeme, changeTeme] = useState('teme');

    const clickTeme = () => {
        changeTeme(() => {
            if(actualTeme=='teme') {
                document.body.classList.add('dark');
                return 'teme temeActive'
            }
            else {
                document.body.classList.remove('dark');
                return 'teme'
            }
        });

    }

    const activeLink = 'activeBar linksHead';
    const normalLimk = 'linksHead';

    return (
        
    <header className='head'>
        <NavLink to='/Portfolio/' className='LogoHead'>
        <strong>Fronted&nbsp;</strong>Dev Portfolio
        </NavLink>
        <div className='links'>
           
            <NavLink to='/Portfolio/' className={({isActive}) =>isActive?activeLink:normalLimk}>
            <span>Home</span>
            </NavLink>
            
            <NavLink to='/resume' className={({isActive}) =>isActive?activeLink:normalLimk}>
            <span>Resume</span>
            </NavLink>

            <NavLink to='/contacts' className={({isActive}) =>isActive?activeLink:normalLimk}>
            <span>Contacts</span>
            </NavLink>

            <button className={actualTeme} onClick={clickTeme}>
                <img className="temeLog" src={Sun}/>
                <img className="temeLog" src={Moon}/>
            </button>
        </div>
    </header>
)
}