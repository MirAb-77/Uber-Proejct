import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false);
            props.setRidePopupPanel(false);
            navigate('/captain-riding', { state: { ride: props.ride } });
        }
    };

    // Ensure names are not undefined
    const firstName = props.ride?.user?.fullname?.firstname || "";
    const lastName = props.ride?.user?.fullname?.lastname || "";

    return (
        <div>
            <h5 className="p-0 text-center w-[93%] absolute top-0 cursor-pointer" onClick={() => props.setRidePopupPanel(false)}>
                <i className="text-4xl text-gray-600 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-3xl font-semibold mb-5">Confirm this ride to Start</h3>

            <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-5">
                <div className="flex items-center gap-5">
                    <img className="h-32 w-32 rounded-full object-cover" src="https://png.pngtree.com/png-clipart/20231028/original/pngtree-beautiful-man-transparent-background-png-image_13446304.png" alt="User" />
                    <h2 className="text-2xl font-medium text-black">Khalid Ijaz -  {firstName} {lastName}</h2>
                </div>
                <h5 className="text-3xl font-bold">2.2 KM</h5>
            </div>

            <div className="flex gap-3 justify-between flex-col items-start w-full mt-5">
                <div className="w-full space-y-5">
                    <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow-sm w-full">
                        <i className="ri-map-pin-user-fill text-black text-4xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Pickup Location</h3>
                            <p className="text-lg text-gray-700">{props.ride?.pickup || "Unknown"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow-sm w-full">
                        <i className="ri-map-pin-2-fill text-black text-4xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Destination</h3>
                            <p className="text-lg text-gray-700">{props.ride?.destination || "Unknown"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow-sm w-full">
                        <i className="ri-currency-line text-black text-4xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Fare</h3>
                            <p className="text-2xl text-black font-bold">RS. {props.ride?.fare || "N/A"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 w-full">
                    <form onSubmit={submitHandler}>
                    <button className='w-full  text-xl flex items-center justify-center gap-3 bg-green-700 text-white border-2 border-green-600 font-semibold p-4 rounded-lg shadow-md hover:bg-green-100 transition duration-300'>
                       <i className="ri-check-line text-2xl"></i> Confirm Ride
                    </button>
                    <button onClick={() => {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
        }} 
        className='w-full mt-3 text-xl flex items-center justify-center gap-3 bg-red-600 text-white font-semibold p-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300'>
            <i className="ri-close-line text-2xl"></i> Cancel Ride
        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
