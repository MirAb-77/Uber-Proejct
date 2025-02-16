import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const FinishRide = (props) => {

    const navigate = useNavigate()
    // Ensure names are not undefined
    const firstName = props.ride?.user?.fullname?.firstname || "";
    const lastName = props.ride?.user?.fullname?.lastname || "";

    const submitHandler = (event) => {
        event.preventDefault();
        // Add logic for handling the submission, e.g., sending data to an API
      };

    return (
        <div className="relative bg-yellow-400 text-gray-900 p-4 rounded-xl  max-w-lg mx-auto">
  <h5
    className="p-0 text-center w-[93%] absolute top-3 right-3 cursor-pointer"
    onClick={() => props.setFinishRidePanel(false)}
  >
    <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
  </h5>

  <h3 className="text-3xl font-bold text-center mb-6 text-black">Finish The Ride</h3>

  {/* User Info Section */}
  <div className="flex items-center justify-center bg-black text-white p-5 rounded-xl shadow-md">
    <img
      className="h-28 w-30 rounded-full object-cover border-4 border-white"
      src="https://png.pngtree.com/png-clipart/20231028/original/pngtree-beautiful-man-transparent-background-png-image_13446304.png"
      alt="User"
    />
    <div className="ml-3">
      <h2 className="text-xl font-semibold">{firstName} {lastName}</h2>
      <p className="text-lg font-medium">Driver</p>
    </div>
    <h5 className="text-2xl font-bold text-yellow-500 ml-auto">2.2 KM</h5>
  </div>

  {/* Ride Details Section */}
  <div className="mt-6 space-y-4">
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-200 transition duration-300">
      <i className="ri-map-pin-user-fill text-black text-3xl"></i>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">Pickup Location</h3>
        <p className="text-md text-gray-700">{props.ride?.pickup || "Unknown"}</p>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-200 transition duration-300">
      <i className="ri-map-pin-2-fill text-black text-3xl"></i>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">Destination</h3>
        <p className="text-md text-gray-700">{props.ride?.destination || "Unknown"}</p>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-200 transition duration-300">
      <i className="ri-currency-line text-black text-3xl"></i>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">Fare</h3>
        <p className="text-2xl font-bold text-black">RS. {props.ride?.fare || "N/A"}</p>
      </div>
    </div>
  </div>

  {/* Paragraph and Arrow Icon */}
  <div className="text-center mt-5 text-black">
    <p className="text-md font-medium">Once you're ready to complete the ride, click the button below.</p>
    <div className="flex justify-center mt-3">
      <i className="ri-arrow-down-circle-fill text-3xl text-white"></i>
    </div>
  </div>

  {/* Confirm Ride Button */}
  <div className="mt-6 w-full">
    <Link
      to="/captain-home"
      className="w-full p-3 text-lg flex items-center justify-center gap-3 bg-black text-yellow-400 font-semibold rounded-lg shadow-xl hover:bg-yellow-500 hover:text-white transition duration-300"
     >
     <i className="ri-check-line text-3xl text-white"></i> Complete Ride
    </Link>
  </div>
</div>

    )
}

export default FinishRide