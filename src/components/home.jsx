/* eslint-disable react/no-unescaped-entities */
import './home.css'
import html5Log from '../assets/html5.png'
import css3Log from '../assets/css3.png'
import axiosLog from '../assets/axios.png'
import nodeLog from '../assets/nodejs.png'
import reactLog from '../assets/react.png'
import viteLog from '../assets/vite.png'

import { useEffect,useState } from 'react'



export default function Home() {
    let [status, scrolledStatus]=useState('skills');
    useEffect(() => {window.addEventListener('scroll', () => {scrollY >= 500? scrolledStatus('skills op'):scrolledStatus('skills')} )})
    

    return (
        <>
        <main>
            <div className='container'>
                <h1>Hi, my name is <span id='colored'>Mirkhaydar</span> <p>a fronted developer</p></h1>
                <div className='information'>This is my business card website to show off my skills)</div>
            </div>
            
            <div className={status} >
                <p>I'm just a beginner programmer, but I've worked with different tools</p>

                <ul>
                    <li className='skill'> <img className="image" src={html5Log}/> html5</li>
                    <li className='skill'> <img className="image" src={css3Log}/> css3</li>
                    <li className='skill'> <img className="image" src={viteLog}/> vite</li>
                    <li className='skill'> <img className="image" src={reactLog}/> react js</li>
                    <li className='skill'> <img className="image" src={nodeLog}/> node js</li>
                    <li className='skill'> <img className="image" src={axiosLog}/> axios</li>
                </ul>
            
            </div>
      </main>   
      </>


)
}