import React,{useState ,useEffect } from 'react'
import Header from "../Header";
import Nav from "../Nav";
import { useParams } from 'react-router-dom';


function Checkout() {
  const param = useParams();

  const id = param.id;
  console.log(id)  
  

  const [cartData, setcartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch(`http://localhost:5000/cart/CartItems/${id}`);
       
        const data = await response.json();
   
        setcartData(data.rows);
   
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render



    return (
        <>

            <Header />
            <Nav />

            
      <div className="container p-8 mx-auto mt-12">
        <div className="w-full overflow-x-auto">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">Shopping Cart items</h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Image</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
              </tr>
            </thead>
            <tbody>

   
          {/* {plantData.map((plant, index) => (
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
        
        ))}               */}

         {cartData.map((cart, index) => (
              <tr key={index}>
                <td>
                  <div className="flex justify-center">
                    <img src={`http://localhost:5000/uploads/${cart.images.split(',')[0]}`}className="object-cover h-28 w-28 rounded-2xl" alt="image" />
                  </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div className="flex flex-col items-center justify-center">
                    <h3>{cart.name}</h3>
                  </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  {cart.stock}
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">PKR {cart.price}</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <span strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
              
            ))}   
            </tbody>
          </table>
         
          <div className="mt-4">
            <div className="py-4 rounded-md shadow">
              <h3 className="text-xl font-bold text-[#00967C]">Order Summary</h3>
              <div className="flex justify-between px-4">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$35.25</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Discount</span>
                <span className="font-bold text-red-600">- $5.00</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Sales Tax</span>
                <span className="font-bold">$2.25</span>
              </div>
              <div className="flex items-center justify-between px-4 py-2 mt-3 border-t-2 ">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">$37.50</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 text-center text-white bg-[#00967C] rounded-md shadow hover:bg-[#113630]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
        </>
    )
}

export default Checkout