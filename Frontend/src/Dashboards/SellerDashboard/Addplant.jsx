
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
import  {Link}  from 'react-router-dom';


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });




const Addplant = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

   ////picture upload start
   const [previewOpen, setPreviewOpen] = useState(false);
   const [previewImage, setPreviewImage] = useState('');
   const [previewTitle, setPreviewTitle] = useState('');
   const [fileList, setFileList] = useState([]);
   const handleCancel = () => setPreviewOpen(false);
   const handlePreview = async (file) => {
     if (!file.url && !file.preview) {
       file.preview = await getBase64(file.originFileObj);
     }
     setPreviewImage(file.url || file.preview);
     setPreviewOpen(true);
     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
   };
   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
   const uploadButton = (
     <div>
       <PlusOutlined />
       <div
         style={{
           marginTop: 8,
         }}
       >
         Upload
       </div>
     </div>
   );
 

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
        <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Add Your Plant</h2>
      </div>

      <div className='content-center md:p-3 mt-7' >


        <h1 className='pt-3 text-xl md:p-2'>Enter Name</h1>
        <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product name' />

        <h1 className='pt-3 text-xl md:p-2'>Enter Price</h1>
        <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product price' />
      
        <h1 className='pt-3 text-xl md:p-2'>Enter Stock</h1>
        <input className='inline p-2 border-2 rounded-xl w-[100%]' type="number" placeholder='Total inventory of this product' />

        <h1 className='pt-3 text-xl md:p-2'>Choose category</h1>
        <select className='inline p-2 border-2 rounded-xl w-[100%]'>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
        </select>

        <h1 className='pt-3 text-xl md:p-2'>Product Description</h1>
        <ReactQuill theme="snow" />
        {/* https://github.com/zenoamaro/react-quill  // how to use see here */}

        <h1 className='pt-3 text-xl md:p-4'>Upload your gallery</h1>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>

        <button class="bg-green-500 hover:bg-green-700 md:mt-7  text-white font-bold py-2 px-4 rounded">
          Save Plant
        </button>



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
