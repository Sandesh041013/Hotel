import React from 'react'

function Designfour() {
  return (
    <div className='  w-screen relative  '>
        <div>
      <img src="https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg" alt="" />
      </div>
      <div className='bg-white absolute w-2/4 h-4/6 top-40 ml-40 flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center pb-20'>
        <div>
            <p className=' text-[#c8a97e] text-7xl font-bold font-serif'>Book a table</p>
        </div>
        <div>
            <p className='text-7xl font-extrabold text-[#333333]'>Make Reservation</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 '>
        <div className='grid'>
            <label className='text-xl font-bold text-[#333333] pb-3' htmlFor="">Name</label>
            <input className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="text" placeholder='Your Name' /></div>
        <div className='grid'>
            <label className='text-xl font-bold text-[#333333] pb-3'  htmlFor="">Email</label>
            <input  className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="email" placeholder='Your Email'/>
        </div>
        <div className='grid'>
            <label className='text-xl font-bold text-[#333333] pb-3'  htmlFor="">Phone</label>
            <input  className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="number" placeholder='Phone' />
        </div>
        <div className='grid'>
            <label className='text-xl font-bold text-[#333333] pb-3'  htmlFor="">Date</label>
            <input  className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="date" placeholder='Date' />
        </div>
        <div className='grid'>
            <label className='text-xl font-bold text-[#333333] pb-3'  htmlFor="">Time</label>
            <input  className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="text" placeholder='Time' />
        </div>
        <div className='grid'>
            <label  className='text-xl font-bold text-[#333333] pb-3' htmlFor="">Person</label>
            <input  className='h-16 w-96 outline-none pl-4 border-gray-400 border-2 text-lg' type="text" placeholder='Person' />
        </div>
      </div>
<div className='pt-10'>
    <button className='bg-[#c8a97e] text-white h-20 w-72 text-xl rounded-md'>Make a Reservation</button>
</div>
      </div>
    </div>
  )
}

export default Designfour
