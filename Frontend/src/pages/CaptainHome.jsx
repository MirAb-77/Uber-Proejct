import React, { useState} from "react";
import { Link } from 'react-router-dom'
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react"; 
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

    const [ ridePopupPanel, setRidePopupPanel ] = useState(true)
    const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)

    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)

    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopupPanel ])


    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopupPanel ])



    return (
        <div className="h-screen w-screen">
            <img 
                className="w-16 absolute top-5 left-5" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
                alt="Uber Logo" 
            />
        <div>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
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
        {/* Driver Info */}
        <CaptainDetails/>
      </div>
      <div ref={ridePopupPanelRef} className="fixed translate-y-full z-10 bottom-0 px-2 py-9 w-full bg-white text-black border-2 border-gray-300 rounded-xl">
            <RidePopUp  setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>   
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed translate-y-full z-10 bottom-0 px-2 py-9 w-full bg-white text-black border-2 border-gray-300 rounded-xl'>
            <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
        </div>
    </div>
    )
    };

export default CaptainHome;