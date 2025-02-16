import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride



    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


    return (
        <div className="h-screen w-screen">
            <img 
                className="w-16 absolute top-5 left-5" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
                alt="Uber Logo" 
            />
        <div>
        <Link to='/captain-home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-2xl ri-logout-box-r-line"></i>
        </Link>
        </div>
      {/* Map Image Section */}
      <div className="h-4/5 w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Uber Routing"
        />
      </div>

      {/* Ride Info & Payment Section */}
      <div className="h-1/5 p-5 flex items-center justify-between bg-yellow-400 relative" onClick={() => {
                    setFinishRidePanel(true)
                }}>
        <h5 className='absolute left-1/2 transform -translate-x-1/2 top-0'>
            <i className="text-4xl text-black ri-arrow-up-wide-line"></i>
        </h5>
         <h4 className="text-2xl font-semibold">
              4 KM Away
         </h4>
         <button className='bg-black text-white font-semibold p-3 px-12 rounded-lg  text-2xl'>
                    Finish Ride
         </button>
      </div>
      <div ref={finishRidePanelRef} className="fixed translate-y-full z-10 bottom-0 px-2 py-9 w-full bg-white text-black border-2 border-gray-300 rounded-xl">
            <FinishRide setFinishRidePanel={setFinishRidePanel}/>   
      </div>
    </div>
        
    )
}

export default CaptainRiding