import React from "react";
import 'remixicon/fonts/remixicon.css';
import { useRef } from "react";

const LocationSearchPanel = (props) => {
    const locations = [
        "University of Engineering and Technology, Raiwind Road, Lahore",
        "Lahore University of Management Sciences, Askari, Lahore",
        "University of the Punjab, Johar Town, Lahore",
        "Government College University, Katechery Road, Lahore",
        "Forman Christian College, Cantt-Phase-5, Lahore"
    ];

    return (
        <div className="p-4">
            {
                locations.map((location, index) => (

                    <div 
                        key={index} 
                        onClick={() => {
                            props.setVehiclePanel(true);
                            props.setPanelOpen(false);
                        }}
                        className="flex gap-5 items-center justify-start my-4 p-4 border-2 border-black rounded-xl hover:border-white transition-all"
                    >
                        <div className="bg-gray-200 h-11 w-11 aspect-square rounded-full flex items-center justify-center flex-shrink-0"> 
                            <i className="ri-map-pin-2-line text-3xl text-black"></i>
                        </div>

                        <h4 className="text-white font-medium text-xl">{location}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default LocationSearchPanel;
