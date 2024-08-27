import React from 'react'
import logo from './../../../assets/logo.jpg'
function Header() {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg p-3 border rounded-lg'>
        <button className='btn btn-primary btn-sm md:btn-md'>+ New Idea</button>
        <h2 className='font-bold text-sm md:text-2xl'>Mariana's Blog</h2>
        <div className='flex gap-2 items-center'>
            <img src={logo}
            
            className='w-12 h-12'/>
            <h2 className='font-bold text-sm hidden md:block'>By<br></br> Mariana</h2>
        </div>
    </div>
  )
}

export default Header