import React from 'react'
import Plants from'../images/Plants.png'

const Section=()=>{
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Life is short
      <br />
      <div class="hidden lg:inline-block">Buy the plants</div>
      </div>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam eveniet commodi deserunt qui ad nisi, ratione voluptas architecto molestiae eaque eius ut tenetur mollitia totam porro odio, velit molestias!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#00967C] border-0 py-2 px-7 focus:outline-none
         hover:bg-[#1B4636] rounded text-lg"> Categories </button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">New Arrivals</button>
      </div>
    </div>
    <div className='lg:max-w-s lg:w-s md:w-1/2 w-5/6'>
        <img className='object-cover object-center rounded' src={Plants} alt="" />
    </div>
  </div>
</section>
    </div>
  )
}

export default Section;