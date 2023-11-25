
import React, { useState, useEffect } from 'react';
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

import { useFormik } from 'formik';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const Addplant = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const formik = useFormik({
    initialValues: {
      buyer_id: localStorage.getItem('user_id') || '',
      name: '',
      price: '',
      stock: '',
      category: '',
      // discription:''
    },
    onSubmit: (values) => {
      // Here, you handle your form submission
      const formData = new FormData();
      images.forEach(image => {
        formData.append('images', image);
      });

      // Append other form data
      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });

      // Append the content (description)
      formData.append('description', content);

      const backendEndpoint = 'http://localhost:5000/plant/post';

      // Use fetch or Axios to send formData
      fetch(backendEndpoint, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          toast.success("Successfully added a plant", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.warning("Please fill all fields", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
  });






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
              Your nursery</li></Link>discription


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
          <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Add Your Plant</h2>
        </div>

        <div className='content-center md:p-3 mt-7' >

        <form onSubmit={formik.handleSubmit}>
          
          <h1 className='pt-3 text-xl md:p-2'>Enter Name</h1>
          <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product name'  name='name' onChange={formik.handleChange} value={formik.values.name}
            />

          <h1 className='pt-3 text-xl md:p-2'>Enter Price</h1>
          <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product price' name='price' onChange={formik.handleChange} value={formik.values.price} />

          <h1 className='pt-3 text-xl md:p-2'>Enter Stock</h1>
          <input className='inline p-2 border-2 rounded-xl w-[100%]' type="number" placeholder='Total inventory of this product'
            name='stock'  onChange={formik.handleChange} value={formik.values.stock} />

          <h1 className='pt-3 text-xl md:p-2'>Choose category</h1>
          <select className='inline p-2 border-2 rounded-xl w-[100%]'
            name='category'  onChange={formik.handleChange} value={formik.values.category}>
            <option value="someOption" default >select</option>
            <option value="seeds">seeds</option>
            <option value="plants">plants</option>
            <option value="flowers">flowers</option>
          </select>

          <h1 className='pt-3 text-xl md:p-2'>Product Description</h1>
          <ReactQuill theme="snow"
          // name='discription'
            // value={productData.description} onChange={handleChange}
            // onChange={formik.handleChange} value={formik.values.discription} 
            onChange={handleEditorChange}
          />
          {/* https://github.com/zenoamaro/react-quill  // how to use see here */}

          <h1 className='pt-3 text-xl md:p-4'>Upload your gallery</h1>
          <input
            type="file"
            multiple
            name="images"
            onChange={handleImageChange}
            className="p-2 mb-2 border border-gray-300 rounded-md"
          />
          <br />

          <button type='submit'  class="bg-green-500 hover:bg-green-700 md:mt-7  text-white font-bold py-2 px-4 rounded">
            Save Plant
          </button>

         </form>


        </div>

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

export default Addplant;
