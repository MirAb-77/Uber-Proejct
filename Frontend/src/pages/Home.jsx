import React, { useState } from "react";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookForDriver from "../components/LookForDriver";
import WaitingForDriver from "../components/WaitForDriver";

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);
    const [activeField, setActiveField] = useState(null); // 'pickup' or 'destination'
    const [ fare, setFare ] = useState({})
    const [ ride, setRide ] = useState(null)
    const [ vehicleType, setVehicleType ] = useState(null)

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const confirmRidePanelRef = useRef(null);

    const [vehiclePanel, setVehiclePanel] = useState(false);
    const vehiclePanelRef = useRef(null);

    const [confirmRidePanel, setConfirmRidePanel] = useState(false);

    const [vehicleFound, setVehicleFound] = useState(false);
    const vehicleFoundRef = useRef(null);

    const waitingForDriverRef = useRef(null);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const handlePickupChange = async (e) => {
        const input = e.target.value;
        setPickup(input);
    
        if (input.length < 3) {
            setPickupSuggestions([]); // Clear suggestions if input is too short
            return;
        }
    
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setPickupSuggestions(response.data); // Store the full response
        } catch (error) {
            console.error("Error fetching pickup suggestions:", error);
        }
    };
    
    const handleDestinationChange = async (e) => {
        const input = e.target.value;
        setDestination(input);
    
        if (input.length < 3) {
            setDestinationSuggestions([]); // Clear suggestions if input is too short
            return;
        }
    
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setDestinationSuggestions(response.data); // Store the full response
        } catch (error) {
            console.error("Error fetching destination suggestions:", error);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion); // Clear suggestions after selection
        } else if (activeField === 'destination') {
            setDestination(suggestion);// Clear suggestions after selection
        }
        // setPanelOpen(false);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: '25px',
                opacity: 1
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1
            });
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: '0px',
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0
            });
        }
    }, [panelOpen]);

    useGSAP(() => {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [vehiclePanel]);

    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [confirmRidePanel]);

    useGSAP(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [vehicleFound]);

    useGSAP(() => {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [waitingForDriver]);

    

    async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setFare(response.data)
    }



    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


    }


    return (
        <div className="h-screen relative overflow-hidden">
            {/* Uber Logo */}
            <img 
                className="w-20 absolute top-5 left-5" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
                alt="Uber Logo" 
            />
            
            {/* Background Image */}
            <div className="h-screen w-screen">
                <img 
                    className="h-screen w-screen object-cover" 
                    src="https://thepointsguy.global.ssl.fastly.net/us/originals/2019/01/Uber-routing-Lahore.jpg" 
                    alt="Uber Routing" 
                />
            </div>
            
            {/* Form Section with White Background */}
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full"> 
                <div className="h-[35%] p-5 bg-white relative">
                    <h5 
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className="text-2xl opacity-0 top-6 right-6 absolute cursor-pointer">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>

                    <h4 className="text-3xl font-bold">Need A Ride?</h4>
                    <form onSubmit={submitHandler}>
                        {/* Line with Head and Icon */}
                        <div className="absolute top-[24%] left-2 flex flex-col items-center fixed">
                            {/* Stylish Head */}
                            <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg m-4"></div>
                            <div className="w-1 h-10 bg-gradient-to-b from-gray-700 to-black shadow-lg animate-pulse rounded-full -mt-1"></div>
                            <div className="h-4"></div>  
                            <i className="ri-map-pin-5-fill top-[25%] text-lg text-black -mt-2 left-6"></i>
                        </div>

                        <input 
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('pickup');
                            }}
                            type="text" 
                            placeholder="Enter Pickup Location" 
                            className="text-lg border-2 border-gray-200 w-full px-4 py-3 mt-4 placeholder-gray-500"
                            value={pickup}
                            onChange={handlePickupChange}
                        />
                        <input 
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination');
                            }}
                            type="text" 
                            placeholder="Enter Destination" 
                            className="text-xl border-2 border-gray-200 w-full  px-4 py-3 mt-4 placeholder-gray-500"
                            value={destination}
                            onChange={handleDestinationChange}
                        />
                    </form>
                    <button 
                    onClick = {findTrip}
                    className="text-xl  px-3 py-4 rounded-lg font-bold w-full bg-black text-white mt-3">
                     Find The Ride
                    </button>
                </div>

                {/* Green Background Section */}
                <div 
                    ref={panelRef}
                    className="bg-black h-0">
                    <LocationSearchPanel 
                        setPanelOpen={setPanelOpen} 
                        setVehiclePanel={setVehiclePanel} 
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions} 
                        handleSuggestionClick={handleSuggestionClick}
                    />
                </div> 
            </div>
            <div  ref={vehiclePanelRef} className="fixed z-10 bottom-0 px-2 py-14 w-full shadow-lg bg-white translate-y-full text-black border-2 border-gray-300 rounded-xl">
                <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} 
                fare={fare}
                selectVehicle={setVehicleType}
                 />
            </div>

            <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 px-2 py-9 w-full shadow-lg bg-white translate-y-full text-black border-2 border-gray-300 rounded-xl">
                <ConfirmRide
                pickup={pickup}
                destination={destination}
                fare={fare}
                vehicleType={vehicleType}
                createRide={createRide}
                setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />
            </div>

            <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 px-2 py-9 w-full shadow-lg bg-white translate-y-full text-black border-2 border-gray-300 rounded-xl">
                <LookForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div  ref={waitingForDriverRef} className="fixed z-10 bottom-0 px-2 py-9 w-full shadow-lg bg-white  text-black border-2 border-gray-300 rounded-xl">
                <WaitingForDriver waitingForDriver={waitingForDriver}/>
            </div>
        </div>
    );
};

export default Home;