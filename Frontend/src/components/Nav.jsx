
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png';
import { TbTruckReturn } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

const Nav = () => {
  const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
  const [user_type, setUser_type] = useState(localStorage.getItem('user_type'));
  const [user_name, setuser_name] = useState(localStorage.getItem('user_name'));

  const logout = () => {
    localStorage.clear();
    setUser_id(null);
    setUser_type(null);
  };

  useEffect(() => {

    setUser_id(localStorage.getItem('user_id'));
    setUser_type(localStorage.getItem('user_type'));
  }, [user_id, user_type]);



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
                  <CgProfile className='text-2xl ' />
                  </div>
                </Link>
                
                <Link to="/My_Orders_Buyer">
                  <div className="w-15">
                  <TbTruckReturn className='text-3xl ' />   
                  </div>
                </Link>
            
          
                <Link to={`/cart`}>
                  <div>
                  <BsCart3 className='text-2xl ' />
                  </div>
                </Link>
              

              </div>

          }

       

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M4.214 3.227a.75.75 0 00-1.156-.956 8.97 8.97 0 00-1.856 3.826.75.75 0 001.466.316 7.47 7.47 0 011.546-3.186zM16.942 2.271a.75.75 0 00-1.157.956 7.47 7.47 0 011.547 3.186.75.75 0 001.466-.316 8.971 8.971 0 00-1.856-3.826z" />
              <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.94 32.94 0 003.256.508 3.5 3.5 0 006.972 0 32.933 32.933 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zm0 14.5a2 2 0 01-1.95-1.557 33.54 33.54 0 003.9 0A2 2 0 0110 16.5z" clipRule="evenodd" />
            </svg>

          </div>


          <div>
            <input className=' hover:rounded border bg-white  rounded  focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out' type="text" placeholder='Search' />
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
