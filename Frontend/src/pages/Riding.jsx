import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {}; // Retrieve ride data
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen">
        <Link to='/home' className='fixed left-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl font-medium ri-home-5-line"></i>
        </Link>
      {/* Map Image Section */}
      <div className="h-1/2 w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://thepointsguy.global.ssl.fastly.net/us/originals/2019/01/Uber-routing-Lahore.jpg"
          alt="Uber Routing"
        />
      </div>

      {/* Ride Info & Payment Section */}
      <div className="h-1/2 flex flex-col items-center justify-center space-y-2 p-5">
        {/* Driver Info */}
        <div className="flex items-center justify-between w-full max-w-lg bg-white p-3 rounded-lg shadow-lg">
          <img
            className="h-20 rounded-full"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Abdullah Imran</h2>
            <h4 className="text-3xl font-bold -mt-1">MP 04 AB40</h4>
            <p className="text-base text-gray-600 italic">Hyundai Elantra</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="bg-white p-7 rounded-xl shadow-md w-full max-w-lg space-y-6">

          {/* Dropoff Location */}
          <div className="flex items-center gap-4 border-b pb-4">
            <i className="text-3xl text-black ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-semibold text-black">
                House-64/Block-3, Makkah Road
              </h3>
              <p className="text-gray-500">Karim Park, Lahore</p>
            </div>
          </div>

          {/* Fare & Payment */}
          <div className="flex items-center gap-4">
            <i className="text-3xl text-yellow-500 ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-semibold text-black">Rs. 900</h3>
              <p className="text-gray-500">Payment Method: Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="m-5 text-white bg-gray-900 px-11 py-5 rounded-full font-extrabold text-xl shadow-2xl tracking-wide hover:bg-black transition-all transform hover:scale-110">
  Make The Payment
</button>


      </div>
    </div>
  );
};

export default Riding;
