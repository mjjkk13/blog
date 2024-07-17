import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {
    const {theme,setTheme}=useContext(ThemeContext)

    return (
        <div className='my-5 flex-col items-center gap-5'>
            <h2 className='text-4xl font-bold items-center text-center'>A blog about my thoughts and things that come in my mind</h2>
            <h2 className='text-center my-3'>
                <strong className='text-secondary'>Here are some of them </strong>
                <br></br>lol
            </h2>
            <div className='flex justify-center items-center'>
                <select
                onChange={(event)=>setTheme(event.target.value)}
                className="select select-bordered border-primary w-full max-w-xs">
                    <option disabled selected>Select Theme</option>
                    <option>light</option>
                    <option>dark</option>
                    <option>synthwave</option>
                    <option>retro</option>
                </select>
            </div> 
        </div>
    )
}

export default Hero