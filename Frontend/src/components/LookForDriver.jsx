import React from "react";

const LookForDriver = (props) => {
    console.log(props);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
            {/* Close Button */}
            <button
                className="absolute top-10 right-2 p-3 bg-black hover:bg-gray-600 rounded-full"
                onClick={() => props.setVehicleFound(false)}
            >
                <i className="text-2xl text-white ri-close-line"></i>
            </button>

            {/* Heading */}
            <h2 className="text-4xl text-black font-extrabold text-center mb-4 flex items-center gap-3">
                <i className="ri-search-2-line text-gray-700"></i> Searching for Driver...
            </h2>

            {/* Quote */}
            <blockquote className="text-lg italic text-center text-gray-800 mb-6">
                "The journey of a thousand miles begins with one step."
            </blockquote>

            {/* Loader Effect */}
            <div className="flex justify-center my-4">
                <div className="h-12 w-12 border-4 border-gray-800 border-dashed rounded-full animate-spin"></div>
            </div>

            {/* Car Image with Stylish BG */}
            <div className="flex justify-center my-6 relative">
                <div className="absolute inset-0 bg-gray-100 opacity-50 rounded-2xl"></div>
                <img
                    className="h-52 rounded-2xl shadow-xl object-cover border-2 border-gray-300 bg-white transition-transform transform hover:scale-105"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="Searching for Driver"
                />
            </div>

            {/* Ride Details */}
            <div className="bg-black px-5 py-5 rounded-3xl shadow-xl w-full max-w-md border border-gray-600">
                {/* Pickup Location */}
                <div className="flex items-center gap-5 border-b border-gray-600 pb-5">
                    <i className="text-3xl text-white ri-map-pin-2-line"></i>
                    <div>
                        <h3 className="text-xl font-extrabold text-white tracking-wide">Pickup Location</h3>
                        <p className="mt-3 text-lg text-gray-400">{props.pickup || 'Not Provided'}</p>
                    </div>
                </div>

                {/* Dropoff Location */}
                <div className="flex items-center gap-5 border-b border-gray-600 pb-5 mt-5">
                    <i className="text-3xl text-white ri-map-pin-fill"></i>
                    <div>
                        <h3 className="text-xl font-extrabold text-white tracking-wide">Destination</h3>
                        <p className="mt-3 text-lg text-gray-400">{props.destination || 'Not Provided'}</p>
                    </div>
                </div>
            </div>
             {/* Footer */}
             <div className="mt-6 text-center">
                    <p className="text-xl text-gray-600">Your ride details are confirmed!</p>
                </div>
        </div>
    );
};

export default LookForDriver;
