import React from 'react'
import { Link } from 'react-router-dom'
import img12 from'./images2/img12.jpg'

function Login() {
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Welcome Back!</h1>
      <p class="leading-relaxed mt-4">We source the healthiest and most beautiful plants to bring nature's finest to your home. We provide expert care advice to ensure your plants thrive.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium text-center title-font mb-5">Sign In</h2>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input id="email" name="email" placeholder='Enter Email' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="text" />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7  text-sm text-gray-600">Password</label>
        <input id="password" name="password" placeholder='Enter Password' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="password"/>
      </div>
      <br />
      <button class="text-white bg-[#00967C] border-0 py-2 px-8 focus:outline-none hover:bg-[#1B4636] rounded text-m">Sign In</button>
      <br />
      <button class="text-xs hover:underline text-gray-500 mb-3">Forgot Password</button>
      <button class="text-xs hover:underline text-gray-500 mt-3">Sign Up</button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
