import React from 'react'
import { Link } from 'react-router-dom'
import img15 from'../images/img15.png'
import img1 from'../images/img1.jpg'
import img2 from'../images/img2.jpg'
import img3 from'../images/img3.jpg'
import img4 from'../images/img4.jpg'
import img5 from'../images/img5.jpg'
import img6 from'../images/img6.jpg'
import img7 from'../images/img7.jpg'
import img12 from'../images/img12.jpg'

export default function E2() {
  return (
          <div className='ml-5'>
      <div className='pl-12 ml-10 text-xl font-bold'>New Arrivals</div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Lily</h2>
          <p class="mt-1">Rs. 670.00</p>
         <Link to="/Product">
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button></Link>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PLANTS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Daffodil</h2>
          <p class="mt-1">Rs. 610.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Bamboo</h2>
          <p className="mt-1">Rs. 400.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Moringa</h2>
          <p className="mt-1">Rs. 6170.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Rose</h2>
          <p className="mt-1">Rs. 1670.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Moringa</h2>
          <p className="mt-1">Rs. 360.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Neptune</h2>
          <p className="mt-1">Rs. 1170.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <span className='relative block h-48 overflow-hidden rounded'>
            <img className='block object-cover object-center w-full h-full' src={img12} alt="" />
        </span>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">PLANTS</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">Bamboo</h2>
          <p className="mt-1">Rs. 770.00</p>
          <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-24 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Buy
    </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
