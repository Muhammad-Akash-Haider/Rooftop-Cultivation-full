import React from 'react'
import { Link } from 'react-router-dom';
import img15 from'../images/img15.png';


const Section=()=>{
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-12 items-center text-center">
      <div className='mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl'>Life is short
      <br />
      <div class="hidden lg:inline-block">Buy the plants</div>
      </div>
      <p class="mb-8 leading-relaxed">Discover joy in plants! Our site sells happy greens – colorful flowers, cute succulents, and more. Each plant is cared for with love. Bring nature home! Shop now for your new green friend.</p>
      <div class="flex justify-center">
        
      
        <button onClick={()=> window.scrollTo(0, 900)} class="inline-flex text-white bg-[#00967C] border-0 py-2 px-7 focus:outline-none
         hover:bg-[#1B4636] rounded text-lg"> Categories </button>
        <button onClick={()=> window.scrollTo(0, 1300)} class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">New Arrivals</button>
      </div>
    </div>
    <div className='w-5/6 lg:max-w-s lg:w-s md:w-1/2 mx-20'>
        <img className='' src={img15} alt="" />
    </div>
        <Link to="/chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[60px] h-[60px] scroll-to-top fixed bottom-10 right-6 text-[#00967C] hover:text-[#1B4636] cursor-pointer duration-300 animate-bounce">
        <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
        </svg>
        </Link>





  </div>


  
</section>

    </div>
  )
}

export default Section;