import React, { use, useState } from "react";
import { useGSAP } from "@gsap/react"; 
import gsap from "gsap";
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookForDriver from "../components/LookForDriver";
import WaitingForDriver from "../components/WaitForDriver";

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);

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
    

    const submitHandler = (e) => {
        e.preventDefault();
        alert('Form submitted');
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
                // opacity: 0
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
    }
    , [confirmRidePanel]);

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
                <div className="h-[30%] p-6 bg-white relative">

                    <h5 
                    ref={panelCloseRef}
                    onClick={() => setPanelOpen(false)}
                    className="text-2xl opacity-0 top-6 right-6 absolute cursor-pointer">
                    <i className="ri-arrow-down-wide-line"></i>
                    </h5>

                    <h4 className="text-3xl font-bold">Need A Ride?</h4>
                    <form onSubmit={submitHandler}>
                        
                        {/* Line with Head and Icon */}
                        <div className="absolute top-[29%] left-0 flex flex-col items-center fixed">
                        {/* Stylish Head */}
                          <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg m-2"></div>
                          <div className="w-1 h-16 bg-gradient-to-b from-gray-700 to-black shadow-lg animate-pulse rounded-full -mt-1"></div>
                          <div className="h-2"></div>  
                          <i className="ri-map-pin-5-fill top-[25%] text-lg text-black -mt-2"></i>
                        </div>


                        <input 
                            onClick={() => setPanelOpen(true)}
                            type="text" 
                            placeholder="Enter Pickup Location" 
                             className="text-xl border-2 border-gray-200 w-full px-6 py-4 mt-4 placeholder-gray-500"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                        />
                        <input 
                            onClick={() => setPanelOpen(true)}
                            type="text" 
                            placeholder="Enter Destination" 
                            className="text-xl border-2 border-gray-200 w-full px-6 py-4 mt-4 placeholder-gray-500"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </form>
                </div>

                {/* Green Background Section */}
                <div 
                ref={panelRef}
                className="bg-black h-0">
                <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
                </div> 
            </div>
            <div  ref={vehiclePanelRef} className="fixed z-10 bottom-0 px-2 py-14 w-full shadow-lg bg-white translate-y-full text-black border-2 border-gray-300 rounded-xl">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>

            <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 px-2 py-9 w-full shadow-lg bg-white translate-y-full text-black border-2 border-gray-300 rounded-xl">
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
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
