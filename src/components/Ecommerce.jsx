import React from 'react'
import img15 from'../images/img15.png'
import img1 from'../images/img1.jpg'
import img2 from'../images/img2.jpg'
import img3 from'../images/img3.jpg'
import img4 from'../images/img4.jpg'
import img5 from'../images/img5.jpg'
import img6 from'../images/img6.jpg'
import img7 from'../images/img7.jpg'
import img12 from'../images/img12.jpg'

export default function Ecommerce() {
  return (
    <div className='ml-5'>

      <div className='pl-12 ml-10 text-xl font-bold'>Categories</div>
      <section class="text-gray-600 body-font cursor-pointer">

      <div className='pl-12 ml-10 text-xl font-bold'>Categories</div>
      <section class="text-gray-600 body-font">

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Fruits</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Vegetables</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Flowers</h2>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Seeds</h2>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
