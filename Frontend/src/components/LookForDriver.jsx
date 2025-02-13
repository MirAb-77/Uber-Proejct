import React from "react";

const LookForDriver = ({ setConfirmRidePanel }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-xl p-8 w-[95%] mx-auto mt-10">
      <h5
        className="p-3 text-center w-full cursor-pointer bg-gray-100 rounded-md"
        onClick={() => setConfirmRidePanel(false)}
      >
        <i className="text-4xl text-gray-500 ri-close-line"></i>
      </h5>
      <h3 className="text-3xl font-bold text-gray-800 text-center my-6">
        Searching for a Driver...
      </h3>

      <div className="flex flex-col items-center gap-6">
        <img
          className="h-40 rounded-lg shadow-md"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Searching for Driver"
        />
        <div className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-5 border-b pb-4">
            <i className="text-3xl text-blue-500 ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-xl font-semibold">Lahore University of Management Sciences</h3>
              <p className="text-lg text-gray-600">DHA, Lahore Cantt, Lahore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b py-4">
            <i className="text-2xl text-green-500 ri-map-pin-fill"></i>
            <div>
              <h3 className="text-xl font-semibold">House-64/Block-3, Makkah Road</h3>
              <p className="text-lg text-gray-600">Karim Park, Lahore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-4">
            <i className="text-2xl text-yellow-500 ri-cash-line"></i>
            <div>
              <h3 className="text-xl font-semibold">Rs. 900</h3>
              <p className="text-lg text-gray-600">Payment Method: Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookForDriver;
