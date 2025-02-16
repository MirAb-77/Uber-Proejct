import React from "react";
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
    return (
        <div className="p-4">
            {
                props.suggestions.map((suggestion, index) => {
                    // Extract the description field from the suggestion object
                    const displayText = suggestion.description;

                    return (
                        <div 
                            key={index} 
                            onClick={() => {
                                props.handleSuggestionClick(displayText);
                                // props.setVehiclePanel(true);
                               //  props.setPanelOpen(false);
                            }}
                            className="flex gap-4 items-center justify-start my-3 p-3 border-2 border-black rounded-xl hover:border-white transition-all"
                        >
                            <div className="bg-gray-200 h-11 w-11 aspect-square rounded-full flex items-center justify-center flex-shrink-0"> 
                                <i className="ri-map-pin-2-line text-3xl text-black"></i>
                            </div>

                            <h4 className="text-white font-medium text-lg">{displayText}</h4>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default LocationSearchPanel;