import React from "react";


const CaptainDetails = () => {
    return (
        <div >
              <div className="flex items-center justify-between gap-12 mb-12 mr-12">
            <div className="flex items-center justify-start">
                <img className="h-24 w-18 rounded-full object-cover" src="https://png.pngtree.com/png-clipart/20231028/original/pngtree-beautiful-man-transparent-background-png-image_13446304.png" alt="" />
                <h4 className="text-2xl font-medium">
                    Khalid Ijaz
                </h4>
            </div>
            <div>
                <h4 className="text-3xl font-semibold">
                    Rs. 1500
                </h4>
                <p className="text-base text-gray-600">
                    Earned Till Now Today
                </p>
            </div>

        </div>
        <div className="flex justify-between items-start gap-6 rounded-full p-5 bg-yellow-400">
            <div className="text-center">
                <i className="text-4xl font-thin ri-time-line"></i>
                <h5 className="text-2xl font-medium">
                    15.6
                </h5>
                <p className="text-base text-gray-700">
                    Hours Since Online
                </p>
            </div>
            <div className="text-center">
                <i className="text-4xl font-thin ri-pin-distance-line"></i>
                <h5 className="text-2xl font-medium">
                    15.6
                </h5>
                <p className="text-base text-gray-700">
                    Hours Since Online
                </p>
            </div>
            <div className="text-center"> 
                <i className="text-4xl font-thin ri-sticky-note-line"></i>
                <h5 className="text-2xl font-medium">
                    15.6
                </h5>
                <p className="text-base text-gray-00">
                    Hours Since Online
                </p>
            </div>
         </div>
        </div>
    );
};

export default CaptainDetails;