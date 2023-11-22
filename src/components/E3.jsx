import React from 'react'
import img2 from'../images/img2.jpg'
import img12 from'../images/img12.jpg'
import img15 from'../images/img15.png'
import img16 from'../images/img16.png'

export default function E3() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img className="w-50  h-full pr-50 object-center block opacity-25 absolute inset-0" src={img15} alt="image" />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Vegetables</h2>
          <p className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, delectus!</p>
          <a className="mt-3 text-[#00967C] inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 ">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img className="w-full  h-50 pt-12 object-center block opacity-25 absolute inset-0" src={img16} alt="image" />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Seeds</h2>
              <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <a className="mt-3 text-[#00967C] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="image" className="w-full object-cover h-50 object-center block opacity-25 absolute inset-0" src={img12}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Fruits</h2>
              <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <a className="mt-3 text-[#00967C] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
