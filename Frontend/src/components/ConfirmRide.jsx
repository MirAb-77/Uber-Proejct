import React, { useState }from 'react';

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[90%] absolute top-0 cursor-pointer"
          onClick={() => props.setConfirmRidePanel(false)}>
          <i className="text-3xl text-gray-400 ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-3xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-5 justify-between flex-col items-center m-5">
        <img className= "h-32" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className="w-full">
          <div className="flex items-center gap-5 p-5 border-b-2">
            <i className="text-3xl ri-map-pin-2-line"></i>
            <div>
                <h3 className="text-2xl font-medium mb-1">Lahore University of Management Sciences</h3>
                <p className="text-base bg-grey-600 ">
                  {props.pickup}
                </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5 border-b-2">
            <i className="text-xl ri-map-pin-fill"></i>
            <div>
                <h3 className="text-2xl font-medium mb-1">House-64/Block-3, Makkah Road</h3>
                <p className="text-base bg-grey-600">
                  {props.destination}
                </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5 border-b-2">
            <i className="text-xl ri-cash-line"></i>
            <div>
                <h3 className="text-2xl font-medium mb-1">{props.fare[props.vehicleType]}</h3>
                <p className="text-base bg-grey-600">
                 Method: Cash
                   
                </p>
            </div>
          </div>
        </div>
      </div>

      <button 
      onClick={() => {
        props.setVehicleFound(true);
        props.setConfirmRidePanel(false);
        props.createRide()
      }}
      
      className="w-full bg-red-800 text-white text-xl font-semibold p-4 rounded-lg pb-3">Confirm</button>
    </div>
  );
}

export default ConfirmRide;
 