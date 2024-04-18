
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png';
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

const Nav = () => {
  const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
  const [user_type, setUser_type] = useState(localStorage.getItem('user_type'));
  const [user_name, setuser_name] = useState(localStorage.getItem('user_name'));
  const [buyerStats, setBuyerStats] = useState({
    total_cart: '',
    total_order_count: ''
  });

  const logout = () => {
    localStorage.clear();
    setUser_id(null);
    setUser_type(null);
  };

  useEffect(() => {

    setUser_id(localStorage.getItem('user_id'));
    setUser_type(localStorage.getItem('user_type'));
  }, [user_id, user_type]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/order/buyerstatics/${user_id}`);
        const data = await response.json();

        // Update the state variable with the fetched data
        setBuyerStats(data);
      } catch (error) {
        console.error('Error fetching buyer statistics:', error);
      }
    };

    fetchData();
  }, [user_id]);

  return (
    <header class="text-gray-700 body-font">
      <div class="container cursor-pointer mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={logo} alt="" />
            <span d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></span>
            <span class="ml-3 cursor-pointer text-xl">RoofTop Cultivation</span>
          </span>
        </Link>


        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black	flex flex-wrap items-center text-base gap-8 ">
          {
            user_type == 1 ?
              <div></div>
              :
              <div className='flex justify-between gap-6 ml-20'>
                <Link to="/My_Orders">
                  <div>
                    {!user_id ?
                      <></>
                      :
                      <div className="relative inline-block">
                        <div className="absolute flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full -top-1 -right-1">
                          <span>{buyerStats.total_order_count}</span>
                        </div>
                      </div>}
                    {/* <CgProfile className='text-2xl' /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>

                  </div>

                </Link>
                <Link to={`/cart`}>
                  <div>
                    {!user_id ?
                      <></>
                      :
                      <div className="relative inline-block">
                        <div className="absolute flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full -top-1 -right-1">
                          <span>{buyerStats.total_cart}</span>
                        </div>
                      </div>
                    }

                    {/* <BsCart3 className='text-2xl ' /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                    </svg>

                  </div>
                </Link>
              </div>

          }
  
          <div>
            {/* <input className=' hover:rounded border bg-white  rounded  focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out' type="text" placeholder='Search' /> */}
            <form action="" class="relative w-max mx-auto">

            <input type="search" name="search" id="search"
            class="relative peer z-10 bg-transparent w-10 h-10 rounded-full border outline-none cursor-pointer pl-12 pr-4 focus:w-full focus:border-gray-900 stroke-gray-900 focus:cursor-text focus:pl-16 focus:pr-4 "
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-gray-900 border-r border-transparent peer-focus:border-gray-900 peer-focus:stroke-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>

            </form>
          </div>
          {user_id ?
            (
              user_type == 1 ?
                (
                  <div className='flex justify-between gap-2 ml-64'>

                    <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-4 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0" onClick={logout} >Logout
                    </button>
                    <Link to="SellerDashboard">
                      <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-4 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0"  >Seller dashboard
                      </button>
                    </Link>

                  </div>
                ) :
                (
                  <div className='flex justify-between gap-2 ml-20'>

                    <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-4 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0" onClick={logout} >Logout
                    </button>

                    <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-4 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0"  >{user_name}
                    </button>


                  </div>
                )


            )
            :
            (<div className='flex justify-between gap-2 ml-20'>
              <Link to="/Login">
                <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-4 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Sign In
                </button></Link>
              <Link to="/Register">
                <button className="inline-flex items-center text-white bg-[#00967C] border-0 py-1 px-3 focus:outline-none hover:bg-[#1B4636] rounded text-base mt-4 md:mt-0">Sign Up
                </button></Link>
            </div>)
          }



        </nav>
      </div>
    </header>
  )
}

export default Nav;
