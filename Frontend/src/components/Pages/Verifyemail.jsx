import Nav from "../Nav";
import Footer from "../Footer";
import React, { useState } from 'react';

const Verifyemail = () => {
  const [otp, setOTP] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setOTP(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your verification logic here, for now, let's just log the OTP
    console.log('Verifying OTP:', otp);
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto mt-8 h-[50vh]">
        <div className="m-auto mt-24 w-80 ">
          <h2 className="mb-4 text-2xl">Verify OTP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">

              <input
                type="text"
                className="block w-full p-2 mt-1 border-2 form-input rounded-xl"
                id="otpInput"
                placeholder="Enter otp"
                value={otp}
                onChange={handleChange}
                maxLength={6} // Assuming OTP is 6 characters long
                required
              />
            </div>
            <button type="submit" className="px-4 py-2 font-bold text-white bg-[#00967C] rounded hover:bg-green-700">
              Verify
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Verifyemail;
