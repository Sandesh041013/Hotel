import React from 'react'
import {Link}from 'react-router-dom'
import Footer from './Footer'
const Toolbar = () => {
  return (
    <>
     <div className=' flex justify-start w-screen fixed h-24 items-center bg-black bg-opacity-5 z-10 text-white  shadow-md shadow-gray'>
      <div className='text-3xl font-"Poppins", Arial, sans-serif font-bold pl-28 '>Feliciano</div>
        <ul className=' flex font-semibold w-full gap-10 justify-end pr-40 items-center text-xl'>
            <li className='text-[#c8a97e] '><Link to="/">Home</Link></li>
            <li className='hover:text-black'><Link to="/about">About</Link></li>
            <li className='hover:text-black'><Link to="/stories">Stories</Link></li>
            <li className='hover:text-black'><Link to="/contact">Contact</Link></li>
            <li className='hover:text-black'><Link to="/menu">Menu</Link></li>
            <li className='bg-[#c8a97e] rounded-md w-32 h-12 flex items-center justify-center'><a href="#"> Book a table</a></li>
        </ul>
     </div>  
  </>
  )
}

export default Toolbar
