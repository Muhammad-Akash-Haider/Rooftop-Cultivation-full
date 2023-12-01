import React from 'react'
import { Link } from 'react-router-dom' 
import LOGO from './images2/LOGO.png'
function My_Order_Buyer() {
  return (
<div>
<header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className=' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={LOGO} alt="" />
          <span d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></span>
          <span class="ml-3 cursor-pointer text-xl">RoofTop Cultivation</span>
        </span>
        
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex flex-wrap items-center text-base gap-8 ">

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" cursor-pointer w-5 h-5">
        <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
        </svg>
        </div>

          <Link to="/My_Orders">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" cursor-pointer w-5 h-5">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </div>
            </Link>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" cursor-pointer w-5 h-5">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" cursor-pointer w-5 h-5">
              <path d="M4.214 3.227a.75.75 0 00-1.156-.956 8.97 8.97 0 00-1.856 3.826.75.75 0 001.466.316 7.47 7.47 0 011.546-3.186zM16.942 2.271a.75.75 0 00-1.157.956 7.47 7.47 0 011.547 3.186.75.75 0 001.466-.316 8.971 8.971 0 00-1.856-3.826z" />
              <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.94 32.94 0 003.256.508 3.5 3.5 0 006.972 0 32.933 32.933 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zm0 14.5a2 2 0 01-1.95-1.557 33.54 33.54 0 003.9 0A2 2 0 0110 16.5z" clipRule="evenodd" />
            </svg>

          </div>
          
          <Link to="/My_Orders">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          </Link>
          </nav>

      </div>
    </header>
<div class="font-sans">

<div class="container mx-auto mt-16 text-center">
  <span class="text-3xl font-semibold mb-6 ">My Returns</span>

  <div class="bg-white text-sm overflow-hidden mt-10 shadow-md rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <div class="bg-[#00967C]">
        <tr>
          <th  class=" px-24 text-left text-xs font-medium text-white uppercase tracking-wider">Order ID</th>
          <th  class="px-16 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
          <th  class="px-16 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quantity</th>
          <th  class="px-16 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Total</th>
          <th  class="px-16 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
        </tr>
      </div>

      <div class=" bg-white divide-y divide-gray-200">
        <tr className=' flex '>
          <input placeholder='6784377' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Aloe Vera' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='2' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Rs. 780' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Delivered' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

        <tr className=' flex '>
          <input placeholder='3384377' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Sunflower Seeds' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='10' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Rs. 699' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Cancelled' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

        <tr className=' flex '>
          <input placeholder='7884377' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Sunflower' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='5' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Rs. 999' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='Delivered' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

        <tr className=' flex '>
          <input placeholder='---' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

        <tr className=' flex '>
          <input placeholder='---' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

        <tr className=' flex '>
          <input placeholder='---' className=' px-16 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-12 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-9 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-8 py-4 text-sm outline-none text-center ' type="text" size="12" />
          <input placeholder='---' className=' px-7 text-sm outline-none text-center ' type="text" size="12" />
        </tr>

      </div>
    </table>
    
  </div>

</div>
    </div>
    <div>
      <footer class="text-gray-600 body-font">

        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className='fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={LOGO} alt="" />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span class="ml-3 text-xl">Rooftop Cultivation</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 — Supervision By Prof Tajamul Shahzad
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-[#1877F2]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-[#1DA1F2]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-[#F56040]">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-[#2867B2]">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
      
     
    </div >
    
    </div>
  )
}

export default My_Order_Buyer
