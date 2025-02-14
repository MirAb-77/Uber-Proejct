import React from "react";

const LookForDriver = ({ props }) => {
  return (
    <div>
      {/* Close Button */}
      <h5
        className="absolute top-4 right-4 p-4 bg-gray-300 hover:bg-black rounded-full cursor-pointer transition"
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="text-3xl text-black ri-close-line"></i>
      </h5>

      {/* Heading */}
      <h3 className="text-3xl font-bold text-black text-center mt-6">
      <i className="ri-search-2-line font-bold"></i> Searching for a Driver...
      </h3>

      {/* Loader Effect */}
      <div className="flex justify-center my-6">
        <div className="h-8 w-9 border-4 border-black border-dashed rounded-full animate-spin"></div>
      </div>

      {/* Car Image */}
      <div className="flex justify-center my-6">
        <img
          className="h-40 rounded-xl shadow-lg object-cover bg-white"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Searching for Driver"
        />
      </div>

      {/* Ride Details */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        {/* Pickup Location */}
        <div className="flex items-center gap-5 border-b pb-5">
          <i className="text-4xl text-blue-500 ri-map-pin-2-line"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">Lahore University of Management Sciences</h3>
            <p className="text-base text-gray-500">DHA, Lahore Cantt, Lahore</p>
          </div>
        </div>

        {/* Dropoff Location */}
        <div className="flex items-center gap-5 border-b pb-5">
          <i className="text-4xl text-green-600 ri-map-pin-fill"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">House-64/Block-3, Makkah Road</h3>
            <p className="text-base text-gray-500">Karim Park, Lahore</p>
          </div>
        </div>

        {/* Fare & Payment */}
        <div className="flex items-center gap-5">
          <i className="text-4xl text-yellow-500 ri-cash-line"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">Rs. 900</h3>
            <p className="text-base text-gray-500">Payment Method: Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookForDriver;
