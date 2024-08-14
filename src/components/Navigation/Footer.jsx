import React from 'react'

function Footer() {
  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css "></link>
    <div className='flex flex-col bg-red-400 w-full justify-end'>
    <div className='grid h-96  bg-black text-white'>
<div className='flex justify-evenly'>
<h1>Feliciano</h1>
<h1> Open Hours</h1>
<h1>Instagram</h1>
<h1>Newsletter</h1>
</div>
<div className='flex justify-evenly'>
    <div className='w-40'>
    <p className=''>Far far away,behind the word mountains,far from the countries vokalia and consonantia,there live the blind texts</p>
    <div>
    <i class="fa-brands fa-twitter fa-beat-fade"></i>
    <i class="fa-brands fa-instagram"></i>
    <a href="https://www.facebook.com/"> <i class="fa-brands fa-facebook-f"></i></a>
    </div>
    </div>
<div>
<p> Monday 9:00-24:00</p>
<p> Tuesday 9:00-24:00</p>
<p> Wednesday 9:00-24:00</p>
<p> Thursday 9:00-24:00</p>
<p> Friday 9:00-2:00</p>
<p> Saturday 9:00-2:00</p>
<p> Sunday 9:00-2:00</p>
</div>
<div className='h-72 w-96 grid grid-cols-3 bg-blue-300'>
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-1.jpg" alt="" />
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-2.jpg" alt="" />
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-3.jpg" alt="" />
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-4.jpg" alt="" />
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-5.jpg" alt="" />
    <img className='h-44 w-32 object-cover' src="https://preview.colorlib.com/theme/feliciano/images/insta-6.jpg" alt="" />
</div>
<div className='flex flex-col w-44'>
    <p>Far Far away,behind the word mountains,far from the countries</p>
    <button className='bg-[#333333]'> Enter email address</button>
    <button className='bg-[#c8a97e]'> Subscribe</button>
</div>
</div>
<div>
    <p>Copyright ©2024 All rights reserved | This template is made with</p>
</div>
<div>

</div>
</div>
    </div>
     </>
  )
}

export default Footer
