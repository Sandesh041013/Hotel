import React from 'react'
// import About from './About'
import Designone from '../components/UI/Designone'
import Designtwo from '../components/UI/Designtwo'
import Designthree from '../components/UI/Designthree'
import Designfour from '../components/UI/Designfour'
import Designfive from '../components/UI/Designfive'
import Toolbar from '../components/Navigation/Toolbar'
import Footer from '../components/Navigation/Footer'


 function Home() {
  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css "></link>
    <div>
    <div className='relative grid justify-center items-end text-center  h-screen w-screen '>
     <div className='absolute'>
      <img className=' h-screen w-screen  ' src="https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg.webp" alt="" />
      </div>
      <div className='absolute  pt-4  bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center flex-col'> 
      <div className=' w-screen h-96 flex justify-center items-center flex-col gap-5' >
        <h1 className='font-serif text-7xl text-[#c8a97e]'>Feliciano</h1>
        <h2 className=' text-white text-7xl font-semibold'>BEST RESTURANT</h2>
      </div>
      <div className=' flex gap-36 text-lg w-screen  text-white pl-14 '>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col'> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg.webp" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className=' text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='  h-52 w-72 gap-4 flex justify-center items-center flex-col'> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg.webp" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col '> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col '> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      </div>
      </div>
    </div>

    </div>
   

  <Designone/>
  <Designtwo/>
  <Designthree/>
  <Designfour/>
  <Designfive/>
  <div className='  w-screen flex flex-col justify-center items-center bg-[#FAFAFA] pb-32'>
<div className='flex flex-col text-center justify-center items-center  pb-28'>
  <h1 className='text-8xl font-serif text-[#c8a97e]  relative'>Blog</h1>
  <h2 className='text-7xl font-extrabold text-[#333333] absolute mt-16'>Recent Posts</h2>
</div>
<div className='flex justify-center w-5/6  gap-8 '>
  <div  className='h-[550px] w-[450px] flex flex-col gap-4 bg-white'>
    <img className='h-[550px] w-[450px]' src="https://preview.colorlib.com/theme/feliciano/images/image_1.jpg" alt="" />
    <p className='text-xl text-[#0000004D]'>Aug. 03 2024 Admin</p>
    <p className='text-3xl font-semibold w-96'>Test the delicious foods in Asia</p>
    <div className='flex justify-between'>
      <p className='text-xl'>Read more</p>
    <div className='text-[#0000004D] pr-4 '>
    <i class="fa-solid fa-message">3</i>
    </div>
    </div>
  </div>
  <div  className='h-[550px] w-[450px] flex flex-col gap-4 bg-white'>
    <img className='h-[550px] w-[450px]' src="https://preview.colorlib.com/theme/feliciano/images/image_2.jpg" alt="" />
    <p className='text-xl text-[#0000004D]'>Aug. 03 2024 Admin</p>
    <p className='text-3xl font-semibold w-96'>Test the delicious foods in Asia</p>
    <div className='flex justify-between'>
      <p className='text-xl'>Read more</p>
    <div className='text-[#0000004D] pr-4'>
    <i class="fa-solid fa-message">3</i>
    </div>
    </div>
  </div>
  <div  className='h-[550px] w-[450px] flex flex-col gap-4 bg-white'>
    <img className='h-[550px] w-[450px]' src="https://preview.colorlib.com/theme/feliciano/images/image_3.jpg" alt="" />
    <p className='text-xl text-[#0000004D]'>Aug. 03 2024 Admin</p>
    <p className='text-3xl font-semibold w-96'>Test the delicious foods in Asia</p>
    <div className='flex justify-between'>
      <p className=' text-xl'>Read more</p>
    <div className='text-[#0000004D] pr-4'>
    <i class="fa-solid fa-message">3</i>
    </div>
    </div>
  </div>
</div>
  </div>
    </>
  )
}

export default Home
