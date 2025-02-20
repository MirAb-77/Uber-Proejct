import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from 'axios';


const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

    const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext);
    const [ ride, setRide ] = useState(null)

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopupPanelRef = useRef(null);

    useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {


                    console.log({
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    });
                    
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

        //return () => clearInterval(locationInterval)
    })

    /*
    socket.on('new-ride', (data) => {

        setRide(data)
        setRidePopupPanel(true)

    })
        */

    socket.on('new-ride', (data) => {
        console.log("New ride received:", data);
        if (!data || !data._id) {
            console.error("Invalid ride data:", data);
            return;
        }
        setRide(data);
        setRidePopupPanel(true);
    });
    

async function confirmRide() {
    if (!ride || !ride._id) {
        console.error("Ride data is missing:", ride);
        alert("Ride data is not available. Please try again.");
        return;
    }

    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
            rideId: ride._id,
            captainId: captain._id,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log("Ride confirmed:", response.data);
        setRidePopupPanel(false);
        setConfirmRidePopupPanel(true);

    } catch (error) {
        console.error("Error confirming ride:", error);
        alert("Failed to confirm ride. Please try again.");
    }
}



    useGSAP(() => {
        if (ridePopupPanelRef.current) {  // ✅ Ensure ref is not null before animating
            gsap.to(ridePopupPanelRef.current, {
                transform: ridePopupPanel ? "translateY(0)" : "translateY(100%)",
            });
        }
    }, [ridePopupPanel]);
    
    useGSAP(() => {
        if (confirmRidePopupPanelRef.current) {  // ✅ Ensure ref is not null before animating
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: confirmRidePopupPanel ? "translateY(0)" : "translateY(100%)",
            });
        }
    }, [confirmRidePopupPanel]);
    

    return (
        <div className="h-screen w-screen">
            <img
                className="w-16 absolute top-5 left-5"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
            />
            <div>
                <Link
                    to="/captain-login"
                    className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
                >
                    <i className="text-2xl ri-logout-box-r-line"></i>
                </Link>
            </div>

            {/* Map Image Section */}
            <div className="h-1/2 w-screen">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Uber Routing"
                />
            </div>

            {/* Ride Info & Payment Section */}
            <div className="h-1/2 flex flex-col items-center justify-center space-y-2 p-5">
                <CaptainDetails />
            </div>
    <div
        ref={ridePopupPanelRef}
        className="fixed translate-y-full z-10 bottom-0 px-2 py-9 w-full bg-white text-black border-2 border-gray-300 rounded-xl"
    >
        <RidePopUp 
            ride={ride}
            setRidePopupPanel={setRidePopupPanel} 
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            confirmRide={confirmRide} 
        />
    </div>
            <div
                ref={confirmRidePopupPanelRef}
                className="fixed translate-y-full z-10 bottom-0 px-2 py-9 w-full bg-white text-black border-2 border-gray-300 rounded-xl"
            >
                <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div>
    );
};

export default CaptainHome;
