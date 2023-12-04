import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Nav from "./../Nav";
import Footer from '../Footer'

function Product() {
  
  const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
  const [user_type, setUser_type] = useState(localStorage.getItem('user_type'));
  
  const navigate = useNavigate();
  
  const param = useParams();

  const id = param.id;

  const [fetchData, setfetchData] = useState([]);

  const [activeImg, setActiveImage] = useState()

  const [stock ,setstoke] =useState(1)


  const AddProductToCart = (stock, product_id) => {
    
        
    if (user_id == null) {
     
      toast.warning("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/login');
    } else if (user_type === '1') {
    
      toast.warning("You Are Not A Buyer", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (user_type === '0') {
    
        const backendEndpoint = 'http://localhost:5000/cart/AddToCart';
     
        fetch(backendEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ product_id, user_id, stock }), // Corrected the body object
        })
          .then(response => response.json())
          .then(data => {
            toast.success(data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          })
          .catch((error ,message) => {
            console.error('Error:', error);
            toast.warning( message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      
    }
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/plant/getplant/${id}`);
        const data = await response.json();
        setfetchData(data.rows[0])
        setActiveImage(data.rows[0].images.split(',')[0]);

      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();
  }, []);

  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/plant/getcategory/${id}`);

        const data = await response.json();
        console.log(data)
        setPlantData(data.rows);

      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='bg-[#00967C] p-2 gap-7 flex'>
        <div className='flex-auto text-xs text-center text-white position-fixed'>Super Sale For All Plants And Free Express Delivery - OFF 30%!</div>
        <div className='w-6 text-white cursor-pointer'>
        </div>
      </div>

      <Nav />

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-12 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img12}/> */}

            <div className='flex flex-col gap-6 lg:w-2/4'>
              <img src={`http://localhost:5000/uploads/${activeImg}`} alt="" className='object-cover w-full h-full aspect-square rounded-xl' />
              <div className='flex flex-row h-24 '>


                {fetchData.images && fetchData.images.split(',').map((image, index) => (
                  <div key={index} className='ml-2' >

                    <img src={`http://localhost:5000/uploads/${image.trim()}`} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(image.trim())} />

                  </div>
                ))}

              </div>
            </div>

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">NURCERY NAME</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{fetchData.name}</h1>
              <div class="flex mb-4">
                {/* <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#00967C]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#00967C]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#00967C]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#00967C]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#00967C]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4001 Reviews</span>
          </span> */}
                {/* <span class="flex gap-3 ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-[#1877F2]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-[#1DA1F2]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-[#128C7E]">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
              </div>
              <p class="leading-relaxed" dangerouslySetInnerHTML={{ __html: fetchData.description }} ></p>
              <div class="flex gap-24 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <span class="title-font font-medium text-2xl text-gray-900">Rs. {fetchData.price}</span>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Quantity</span>
                  <div class="relative">

                    <input id="text" name="text" placeholder='1' class=" w-12 bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-0 px-1 leading-8 transition-colors text-sm duration-200 ease-in-out" type="number"  value={stock} onChange={(event) => setstoke(event.target.value)} />
                  </div>

                </div>
              </div>
              <div class=" flex gap-2 text-center py-2 px-8 w-full outline-none">
                {/* <button class="ml-auto text text-sm text-white bg-[#128C7E] border-0 w-full py-2 px-6 focus:outline-none hover:bg-[#1B4636] rounded">Buy Now</button> */}
                <button onClick={()=> AddProductToCart(stock , fetchData.id )} class="ml-auto text-sm text-white bg-[#128C7E] border-0 w-full py-2 px-6 focus:outline-none hover:bg-[#1B4636] rounded">Add to Cart</button>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <div className='ml-5'>
      <div className='pl-12 ml-10 text-xl font-bold'>Related Products</div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {plantData.map((plant, index) => (


              <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={index}>
                <span className='relative block h-48 overflow-hidden rounded w-[235px]'>
                
                  <img className='block object-cover object-center w-full h-full' src={`http://localhost:5000/uploads/${plant.images.split(',')[0]}`} alt="" />
                </span>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{plant.category}</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">{plant.name}</h2>
                  <p class="mt-1">Rs. {plant.price}</p>

                
                    <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-20 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Add to Cart
                    </button>
                </div>
              </div>

            ))}



          </div>
        </div>

      </section>
    </div>

      <Footer/>

    </div>
  )
}

export default Product
