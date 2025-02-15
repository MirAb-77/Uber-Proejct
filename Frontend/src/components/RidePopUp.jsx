import React, { useState } from 'react';

const RidePopUp = (props) => {
    const [isClosing, setIsClosing] = useState(false);

    // Function to close the ride popup
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => props.setRidePopupPanel(false), 100); // Wait for animation to complete
    };    

    // Ensure names are not undefined
    const firstName = props.ride?.user?.fullname?.firstname || "";
    const lastName = props.ride?.user?.fullname?.lastname || "";

    return (
        <div className={`fixed bottom-0 left-0 w-full bg-white text-black p-6 rounded-t-2xl shadow-xl border-t-4 border-white 
            transition-transform duration-500 ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}>
            <h5 className='absolute top-5 right-5' onClick={handleClose}>
                <i className="text-4xl text-gray-700 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-3xl font-bold text-black text-center'>New Ride Available!</h3>
            
            <div className='flex items-center justify-between p-5 bg-black rounded-lg mt-5 shadow-md'>
                <div className='flex items-center gap-4'>
                    <img className='h-20 w-20 rounded-full object-cover' 
                         src="https://png.pngtree.com/png-clipart/20231028/original/pngtree-beautiful-man-transparent-background-png-image_13446304.png" alt="User" />
                    <h2 className='text-2xl font-semibold text-white'>
                        Khalid Ijaz - {props.ride?.user?.fullname?.firstname || ""} {props.ride?.user?.fullname?.lastname || ""}
                    </h2>
                </div>
                <h5 className='text-2xl font-bold text-white'>2.2 KM</h5>
            </div>
            
            <div className='mt-5 space-y-4'>
                <div className='flex items-center gap-4 p-3 bg-gray-200 rounded-lg shadow-sm'>
                    <i className="ri-map-pin-user-fill text-black text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium text-black'>Pickup Location</h3>
                        <p className='text-md text-gray-700'>{props.ride?.pickup || "Unknown"}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-3 bg-gray-200 rounded-lg shadow-sm'>
                    <i className="ri-map-pin-2-fill text-black text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium text-black'>Destination</h3>
                        <p className='text-md text-gray-700'>{props.ride?.destination || "Unknown"}</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-4 p-3 bg-gray-200 rounded-lg shadow-sm'>
                    <i className="ri-currency-line text-black text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium text-black'>Fare</h3>
                        <p className='text-xl text-black font-bold'>RS. {props.ride?.fare || "N/A"}</p>
                    </div>
                </div>
            </div>
            
            <div className='mt-6 flex flex-col space-y-3'>
                <button onClick={() => {
                    props.setConfirmRidePopupPanel(true);
                }} className='w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold p-3 rounded-lg shadow-md text-xl'>
                    Accept Ride
                </button>
                <button onClick={handleClose} className='w-full bg-black hover:bg-gray-800 text-white font-semibold p-3 rounded-lg shadow-md text-xl'>
                    Ignore
                </button>
            </div>
        </div>
    );
};

export default RidePopUp;

