import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from './images2/LOGO.png';
import Nav from "./../Nav";

function My_Orders() {
  return (
<div>

<Nav/>

<div class="font-sans">

<div class="container mx-auto mt-16 text-center">
  <span class="text-3xl font-semibold mb-6 ">My Orders</span>

  <div class="bg-white text-sm overflow-hidden mt-10 shadow-md rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <div class="bg-[#00967C]">
        <tr>
          <th  class=" px-20 text-left text-xs font-medium text-white uppercase tracking-wider">Order ID</th>
          <th  class="px-12 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
          <th  class="px-12 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quantity</th>
          <th  class="px-12 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Total</th>
          <th  class="px-12 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
          <th  class="px-12 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
          
        </tr>
      </div>
      <div class=" bg-white divide-y divide-gray-200">
        <tr className='flex '>
          <input placeholder='0000000' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='ABC' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='0' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='Rs. 00' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='Delivered' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
        </tr>

        <tr className='flex '>
          <input placeholder='---' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='---' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
        </tr>

        <tr className='flex '>
          <input placeholder='---' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='---' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
        </tr>

        <tr className='flex '>
          <input placeholder='---' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='---' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
        </tr>

        <tr className='flex '>
          <input placeholder='---' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='---' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
        </tr>

        <tr className='flex '>
          <input placeholder='---' className='px-12 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='text-sm text-center outline-none px-9' type="text" size="12" />
          <input placeholder='---' className='px-3 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-6 py-4 text-sm text-center outline-none ' type="text" size="12" />
          <input placeholder='---' className='px-2 text-sm text-center outline-none ' type="text" size="12" />
          <select id="countries" class=" ml-8 cursor-pointer text-sm block w-24 p-2.5 bg-white outline-none text-gray-700 py-1 px-2 leading-8 transition-colors  duration-200 ease-in-out">
          <option className='text-center ' selected>---</option>
          <option className='text-center ' value="">Delivered Succesfully</option>
          <option className='text-center ' value="">Pending</option>
          <option className='text-center ' value="">Cancelled</option>
          </select>
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
  );
}

export default My_Orders
