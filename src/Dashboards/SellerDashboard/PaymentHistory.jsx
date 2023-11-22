

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { MdSpaceDashboard } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

import { FaAccusoft } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDomainVerification } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import {Link}  from 'react-router-dom';



const PaymentHistory = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`pt-[30px] w-[243px] rounded lg:pt-0 bg-green-600 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${isSidebarOpen ? 'w-[300px]' : '-translate-x-full '
          } lg:translate-x-0`}
      >
        <h1 className='pt-8 text-2xl font-bold text-center '>Seller Dashboard</h1>

        <ol className='pt-5 text-lg cursor-pointer'>
          <Link to="/SellerDashboard">
            <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< MdSpaceDashboard className="inline text-white" />
              &nbsp; Dashboard
            </li>
          </Link>
          <Link to="/addplant">
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< GiPlantRoots className="inline text-white" />
            &nbsp; Add plant</li>
            </Link>
          <Link to="/Products" >
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< BsShopWindow className="inline text-white" />
            &nbsp; All Products</li></Link>
           
            <Link to="/myorders">
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< FaAccusoft className="inline text-white" /> &nbsp;
            Orders</li></Link>
            <Link to="/paymenthistory">
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'> < MdOutlinePayments className="inline text-white" /> &nbsp;
            Payments history</li>
            </Link>
            <Link to="/yournurcery">
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< CgProfile className="inline text-white" /> &nbsp;
            Your nursery</li></Link>
        

          <Link to="/Profileverify" ><li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< MdOutlineDomainVerification className="inline text-white" /> &nbsp;
            Verify Profile</li> </Link>
            <Link to="/returns" >
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< TbTruckReturn className="inline text-white" /> &nbsp;
            Returns</li></Link>

        </ol>
      </aside>


      {/*Routing*/}
      <div className={`md:p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] mt-10 lg:mt-0 lg:w-[cal(100vw-243px)] m-auto `}>

      <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
        <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Your Payment History</h2>
      </div>



      <table class="border-separate border border-slate-400 m-auto  md:mt-8">
        <thead>
          <tr>
            <th class="border border-slate-300 p-2 md:px-9">Payment id</th>
            <th class="border border-slate-300 p-2 md:px-9">Sender name</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment date</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment method</th>
            <th class="border border-slate-300 p-2 md:px-9">Order Number</th>
            <th class="border border-slate-300 p-2 md:px-9">Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>

          <tr>
            <td class="border border-slate-300 p-2 md:px-9">111</td>
            <td class="border border-slate-300 p-2 md:px-9">Ashba</td>
            <td class="border border-slate-300 p-2 md:px-9">13 january 2023</td>
            <td class="border border-slate-300 p-2 md:px-9">easipaisa</td>
            <td class="border border-slate-300 p-2 md:px-9">43</td>
            <td class="border border-slate-300 p-2 md:px-9">2200</td>
          </tr>


        </tbody>
      </table>


       

      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-green-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
        <FaBars className="text-white" />

      </button>
    </div>
  );
};

export default PaymentHistory;
