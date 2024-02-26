import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

import { FaAccusoft } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDomainVerification } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png';


function Sidebar() {
    return (
        <>
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
        </>
    )
}

export default Sidebar