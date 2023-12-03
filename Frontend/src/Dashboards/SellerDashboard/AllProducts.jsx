

import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';


import React, { useState ,useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import { MdSpaceDashboard } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

import { FaAccusoft } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDomainVerification } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../../images/LOGO.png';


const AllProducts = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
  useEffect(() => {
   
    setUser_id(localStorage.getItem('user_id'));
  
  }, []); 


  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch(`http://localhost:5000/plant/get/${user_id}`);
       
        const data = await response.json();
       
        setPlantData(data.rows);
   
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render



  const handleDelete = async (plantId) => {
    try {
      const isConfirmed = window.confirm('Are you sure you want to delete this product?');

      if (!isConfirmed) {
        // If the user cancels the deletion, do nothing
        return;
      }
      // Make an API call to delete the plant with the given plantId
    
      const response = await fetch(`http://localhost:5000/plant/deleteby/${plantId}`, {
        method: 'DELETE',
        // You may need to include headers or credentials based on your API setup
      });

      if (response.ok) {
        // If the API call is successful, update the state to remove the deleted plant
        setPlantData((plantData) =>
        plantData.filter((plant) => plant.id !== plantId)
        );
        toast.success("Successfully deleted a plant", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error('Failed to delete plant');
      }
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
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

              <Link to="/" >
          <li className='pt-4 pb-2 pl-12 rounded-md hover:bg-green-500'> <img className='fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={logo} alt="" /> Rooftop</li>
            </Link>
            
        </ol>
      </aside>


      {/*Routing*/}
      <div className={`md:p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] mt-10 lg:mt-0 lg:w-[cal(100vw-243px)] m-auto `}>
        <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
          <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>All Products</h2>
        </div>



        <table class="border-separate border border-slate-400 m-auto  md:mt-8">
          <thead>
            <tr>

              <th class="border border-slate-300 p-3 md:px-12">Product name</th>
              <th class="border border-slate-300 p-3 md:px-12">Product Price</th>
              <th class="border border-slate-300 p-3 md:px-12">Category</th>
              <th class="border border-slate-300 p-3 md:px-12">Stock</th>
              <th class="border border-slate-300 p-3 md:px-12">Action</th>
            </tr>
          </thead>
          <tbody>

        
          {plantData.map((plant, index) => (
          <tr key={index}>
          <td class="border border-slate-300 p-3 md:px-12">{plant.name}</td>
          <td class="border border-slate-300 p-3 md:px-12">{plant.price}</td>
          <td class="border border-slate-300 p-3 md:px-12">{plant.category}</td>
          <td class="border border-slate-300 p-3 md:px-12">{plant.stock}</td>
          <td class="border border-slate-300 p-3 md:px-12">
            < RiDeleteBin6Line    onClick={() => handleDelete(plant.id)}  className="inline text-xl text-red-600" /> &nbsp;
            <Link to={`/update/${plant.id}`} >< FaRegEdit className="inline text-xl text-blue-800" /></Link> 
          </td>
        </tr>
        
        ))}
           

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

export default AllProducts;
