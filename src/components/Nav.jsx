import React from 'react'

import logo from '../images/LOGO.png'
 


const Nav=()=>{

    return (
        <header class="text-black body-font">
  <div class="container cursor-pointer mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={logo} alt="" />
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      <span class="ml-3 cursor-pointer text-xl">RoofTop Cultivation</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 cursor-pointer hover:text-black">Home</a>
      <a class="mr-5 cursor-pointer hover:text-black">About</a>
      <a class="mr-5 cursor-pointer hover:text-black">Contact</a>
      <a class="mr-5 cursor-pointer hover:text-black">Profile</a>
    </nav>
<div className='flex justify-between gap-2'>
<button class="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-3 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Sign In  
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
    <button class="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-3 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Sign Up
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
</div>
  </div>
</header>
      )
}

export default Nav;
