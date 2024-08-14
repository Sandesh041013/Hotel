import React from 'react'

function Designone() {
  return (
  
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css "></link>
    <div>
    <div className='flex   justify-center items-center h-screen w-screen '>
    <div className='flex gap-5   h-screen '>
      <div className=' h-3/4 w-96  mt-20 '>
        <img className='size-full object-cover' src="https://preview.colorlib.com/theme/feliciano/images/about.jpg" alt="" />
   
      </div>
      <div className=' h-3/4 w-96 bg-cover  mt-32'>
        <img className='size-full object-cover' src="https://preview.colorlib.com/theme/feliciano/images/about-1.jpg" alt="" />
      </div>
    </div>
    <div className=' pl-8 w-2/6 h-5/6'>
<h1 className='text-8xl text-[#c8a97e] font-sans absolute pt-10 '>about</h1>
<h2 className='text-7xl font-semibold  absolute pt-24 text-[#333333]'>Feliciano</h2>
<h2 className='text-7xl font-semibold  pt-40 text-[#333333]'>Restaurant</h2>
<div className=' w-full text-2xl text-gray-500 pt-8 font-sans space-y-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia. it is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
<div className='flex gap-2 pt-6'>
<p className='text-2xl text-gray-500'> Mon-Fri </p>
<p className='text-2xl font-bold text-gray-500'> 8 AM-11 PM</p>
</div>
<div className='text-5xl text-[#c8a97e] font-bold pt-6'>+1-978-123-4567</div>
    </div>
    </div>
    <div className='flex justify-center items-center w-screen '>
      <div className='grid grid-cols-4 justify-evenly w-2/3  '>
<div>
<p className='text-[#c8a97e] text-6xl font-bold'>18</p>
<h1 className='text-lg text-[#333333] '>YEARS OF EXPERIENCE</h1>
</div>
<div>
<p className='text-[#c8a97e] text-6xl font-bold'>100</p>
<h1 className='text-lg text-[#333333]'>MENUS/DISH</h1>
</div>
<div>
<p className='text-[#c8a97e] text-6xl font-bold'>50</p>
<h1 className='text-lg text-[#333333]'>STAFFS</h1>
</div>
<div>
<p className='text-[#c8a97e] text-6xl font-bold'>15,000</p>
<h1 className='text-lg text-[#333333]'>HAPPY COSTUMERS</h1>
</div>

      </div>
      <div className='w-60 text-lg  text-[#333333]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
    </div>
    <div  className='h-screen  flex justify-center items-center flex-col gap-24 bg-[#fff]'>
<div className='flex flex-col justify-center items-center '>
  <h1 className='text-8xl text-[#c8a97e] relative font-serif'>Services</h1>
  <h2 className='text-7xl font-extrabold absolute mt-16 text-[#333333]'>Catering Services</h2>
</div>
<div className='flex w-screen justify-evenly text-center text-xl'>
<div className=' w-96 flex flex-col justify-center items-center gap-8'>
  <div className='text-7xl text-[#c8a97e]'>
  <i class="fa-solid fa-cake-candles"></i>
  </div>
  <h2 className='text-3xl font-semibold'>Birthday Party</h2>
  <p className='text-2xl text-[#333333]'> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic</p>
</div>
<div className='w-96  flex flex-col justify-center items-center gap-8'>
  <div className='text-7xl text-[#c8a97e]'>
  <i class="fa-regular fa-handshake"></i>
  </div>
  <h2 className='text-3xl font-semibold'>Buisness Meetings</h2>
  <p className='text-2xl text-[#333333]'> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic</p>
</div>
<div className='w-96 flex flex-col justify-center items-center gap-8'>
  <div className='text-7xl text-[#c8a97e]'>
  <i class="fa-solid fa-plate-wheat"></i>
  </div>
  <h2 className='text-3xl font-semibold'>Wedding Party</h2>
  <p className='text-2xl text-[#333333]'> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic</p>
</div>
</div>
    </div>
  </div>
  </>
  )
}

export default Designone
