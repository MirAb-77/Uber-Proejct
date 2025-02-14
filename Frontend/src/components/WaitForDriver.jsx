import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      {/* Close Button */}
      <h5
        className="absolute top-4 right-4 p-4 bg-gray-300 hover:bg-black rounded-full cursor-pointer transition"
        onClick={() => props.waitingForDriver(false)}
      >
        <i className="text-3xl text-black ri-close-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img className= "h-20" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className="text-right">
            <h2 className= "text-lg font-medium">
                Abdullah Imran
            </h2>
            <h4 className="text-3xl font-bold -mt-1">
                MP 04 AB40
            </h4>
            <p classN ame="text-base text-grey-600 font-italic">
                Hyundai Clantra
            </p>
        </div>
      </div>


      {/* Ride Details */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        {/* Pickup Location */}
        <div className="flex items-center gap-5 border-b pb-5">
          <i className="text-4xl text-black ri-map-pin-2-line"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">Lahore University of Management Sciences</h3>
            <p className="text-lg text-gray-500">DHA, Lahore Cantt, Lahore</p>
          </div>
        </div>

        {/* Dropoff Location */}
        <div className="flex items-center gap-5 border-b pb-5">
          <i className="text-4xl text-black ri-map-pin-fill"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">House-64/Block-3, Makkah Road</h3>
            <p className="text-lg text-gray-500">Karim Park, Lahore</p>
          </div>
        </div>

        {/* Fare & Payment */}
        <div className="flex items-center gap-5">
          <i className="text-4xl text-yellow-500 ri-cash-line"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">Rs. 900</h3>
            <p className="text-lg text-gray-500">Payment Method: Cash</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver