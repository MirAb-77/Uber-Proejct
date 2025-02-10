import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative h-[100vh] w-full flex flex-col justify-between bg-black">
            
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://storage.googleapis.com/a1aa/image/Ipk2IUrAIzhmgKOxUw2gYE6OwXCzrZ5JW1Qtw42FUp4.jpg')" }}>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Uber Logo - Fixed Position */}
            <div className="relative z-10 p-6">
                <img className='w-20' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
            </div>

            {/* Content Box */}
            <div className="relative z-10 bg-white text-center p-6 rounded-t-3xl shadow-lg w-full">
                <h2 className='text-2xl font-bold text-gray-900'>Get Started with Uber</h2>
                <p className="text-gray-600 mt-1 text-base">Move smarter, faster, and better.</p>

                {/* Action Button */}
                <Link 
                    to='/login' 
                    className='block bg-black text-white text-lg font-medium py-3 rounded-full mt-5 transition duration-300 hover:bg-gray-800'>
                    Continue
                </Link>
            </div>
        </div>
    );
};

export default Home;
