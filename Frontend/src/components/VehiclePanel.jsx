import React from "react";
import ConfirmRide from "../components/ConfirmRide"

const VehiclePanel = (props) => {
    return (
        <div>
            {/* Close Button */}
            <h5 
                className="p-1 text-2xl opacity-1 top-12 right-7 absolute cursor-pointer" 
                onClick={() => props.setVehiclePanel(false)}
            >
                <i className="ri-arrow-down-wide-line text-3xl"></i>
            </h5>

            {/* Title */}
            <h3 className="text-4xl font-bold mb-6"> 
                Choose Your Ride
            </h3>

            {/* Uber-Go Ride */}
            <div 
                onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }}
                className="flex border-2 hover:border-black bg-white rounded-xl p-6 items-center justify-between w-full">
                
                {/* Left Side: Car Image & Details */}
                <div className="flex items-center gap-3">
                    <img  
                        className="h-24 w-auto -ml-6"  
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_285,w_507/v1597151080/assets/f7/281120-cc1a-4fd4-84d1-f5df2b3f518f/original/Black.jpg" 
                        alt="Uber Car"
                    />
                    
                    {/* Ride Details */}
                    <div className="flex flex-col justify-between">
                        <h4 className="text-2xl font-bold flex items-center text-black">
                            Uber-Go <i className="ri-user-3-fill text-gray-500 text-medium ml-2"></i> 4
                        </h4>
                        <h5 className="text-gray-500 text-lg">2 min away</h5>
                        <p className="text-black text-md italic">
                            Affordable, Compact Rides
                        </p>
                    </div>
                </div>

                {/* Right Side: Fare */}
                <h2 className="text-3xl font-extrabold text-black drop-shadow-lg">
                    ${props.fare.car}
                </h2>
            </div>

            {/* Motor-Bike Ride */}
            <div 
                onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('moto')
                }}
                className="flex border-2 hover:border-black bg-white rounded-xl p-6 items-center justify-between w-full mt-4">
                
                {/* Left Side: Bike Image & Details */}
                <div className="flex items-center gap-3">
                    <img  
                        className="h-24 w-auto -ml-4"  
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" 
                        alt="Moto"
                    />
                    
                    {/* Ride Details */}
                    <div className="flex flex-col justify-between">
                        <h4 className="text-2xl font-bold flex items-center text-black">
                            Motor-Bike <i className="ri-user-3-fill text-gray-500 text-medium ml-2"></i> 1
                        </h4>
                        <h5 className="text-gray-500 text-lg">10 min away</h5>
                        <p className="text-black text-md italic">
                            Affordable, Windy Ride
                        </p>
                    </div>
                </div>

                {/* Right Side: Fare */}
                <h2 className="text-3xl font-extrabold text-black drop-shadow-lg">
                    ${props.fare.moto}
                </h2>
            </div>

            {/* Auto Rickshaw Ride */}
            <div 
                onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.selectVehicle('auto')
                }}
                className="flex border-2 hover:border-black bg-white rounded-xl p-6 items-center justify-between w-full mt-4">
                
                {/* Left Side: Auto Image & Details */}
                <div className="flex items-center gap-3">
                    <img  
                        className="h-24 w-auto -ml-4"  
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" 
                        alt="Rickshaw"
                    />
                    
                    {/* Ride Details */}
                    <div className="flex flex-col justify-between">
                        <h4 className="text-2xl font-bold flex items-center text-black">
                            Auto <i className="ri-user-3-fill text-gray-500 text-medium ml-2"></i> 3
                        </h4>
                        <h5 className="text-gray-500 text-lg">5 min away</h5>
                        <p className="text-black text-md italic">
                            Affordable, Bumpy Rides
                        </p>
                    </div>
                </div>

                {/* Right Side: Fare */}
                <h2 className="text-3xl font-extrabold text-black drop-shadow-lg">
                    ${props.fare.auto}
                </h2>
            </div>
        </div>
    );
};

export default VehiclePanel;
