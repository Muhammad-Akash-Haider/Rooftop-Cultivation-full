import React,{useState ,useEffect } from 'react'
import Header from "../Header";
import Nav from "../Nav";
import { useParams } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBin6Line } from 'react-icons/ri';

function Checkout() {
  const param = useParams();

  const id = param.id;
  const [cartData, setCartData] = useState([]);

  const handleDelete = async (cartId) => {
    try {
      const isConfirmed = window.confirm('Are you sure you want to delete this product?');

      if (!isConfirmed) {
        // If the user cancels the deletion, do nothing
        return;
      }
      // Make an API call to delete the plant with the given plantId
    
      const response = await fetch(`http://localhost:5000/cart/deletecartitem/${cartId}`, {
        method: 'DELETE',
        // You may need to include headers or credentials based on your API setup
      });

      if (response.ok) {
        // If the API call is successful, update the state to remove the deleted plant

        toast.success("Successfully deleted a cart item", {
          position: toast.POSITION.TOP_RIGHT,
        });
        fetchData();
      } else {
        console.error('Failed to delete cart item');
      }
    } catch (error) {
      console.error('Error deleting cartitem:', error);
    }
  };
  

  // Define the updateStock function
  const updateStock = async (productId) => {
    try {
      const response = await fetch('http://localhost:5000/cart/updateStock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();
      console.log(result); // You can handle the result as needed

      // After updating stock, trigger re-fetch of cart data
      fetchData();
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };
  const downgradeStock = async (productId) => {
    try {
      const response = await fetch('http://localhost:5000/cart/Downgrade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();
      console.log(result); // You can handle the result as needed

      // After updating stock, trigger re-fetch of cart data
      fetchData();
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cart/CartItems/${id}`);
      const data = await response.json();
      setCartData(data.rows);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
  
  // Fetch cart data useEffect
  useEffect(() => {
 
    fetchData(); // Call fetchData immediately after defining it
  }, [id]); // Include id in the dependency array


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
                <div className="flex flex-row items-center justify-center">
                  <GrSubtractCircle onClick={()=>downgradeStock(cart.id)}  className='mr-2 text-xl text-red-800'/>
                  {cart.stock}
                    <IoAddCircleOutline  onClick={()=>updateStock(cart.id)} className='ml-2 text-2xl text-green-800 '/>
                 </div>
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">PKR {cart.price}</td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                < RiDeleteBin6Line    onClick={() => handleDelete(cart.id)}  className="inline text-xl text-red-600" /> 
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