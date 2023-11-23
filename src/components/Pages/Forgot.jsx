import React from 'react'
import { Link } from 'react-router-dom'

function Forgot() {
  return (
    <div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-11 mx-auto flex flex-wrap items-center">
    <div class="lg:w-1/2 md:w-3/5 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-64 w-full mt-4 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium text-center title-font mb-5">Reset your password</h2>
      <div class="relative pt-6 mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">New Password</label>
        <input id="password" name="password"  class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="password"/>
      </div>

      <div className='flex text-xs text-gray-500  '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p> Must be at least 8 characters long </p>
        </div>

        <div className='flex text-xs text-gray-500  '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p> Must contain an uppercase and lowercase letter (A,z) </p>
        </div>

        <div className='flex text-xs text-gray-500  '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p> Must contain a number </p>
        </div>

        <div className='flex text-xs text-gray-500 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p>Must contain a special character (!, %, @, #, etc.) </p>
        </div>

        <br />

      <div class="relative mb-4">
        <label for="password" class="leading-7  text-sm text-gray-600">Confirm New Password</label>
        <input id="password" name="password"  class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="password"/>
      </div>
      <div className='text-center py-2 px-8 w-full outline-none'></div>
      <button class="text-white bg-[#00967C] border-0 py-2 px-8 focus:outline-none hover:bg-[#1B4636] rounded text-sm ">Reset Password</button>
      
      <div className='flex text-xs justify-center text-center py-2 px-8 w-full outline-none'>
      <p>Know your password?</p>
      <Link to="/Login">
      <button className=' hover:underline text-blue-600' >Log In</button></Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Forgot
