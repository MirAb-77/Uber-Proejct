import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignUp = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password,
            userName:
            {firstName: firstName,
            lastName: lastName
            }
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <div className='p-8 flex flex-col justify-between h-[100vh]  bg-black'>
            <div>
            <img className='w-16 mb-10 font-lg w-adjusted' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXAVBZWhWSpMEZ7hJtQ3jphvB5GaOI9zByQ&s" alt="" />
            
            <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-medium font-medium ml-2 text-white ' >What's Your Name?</h3>
            <dev className='flex gap-3 mb-6'>
            <input required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='bg-gray-200 p-2.5  w-1/2 mt-2 placeholder'
            type='text' placeholder='First name' />


            <input required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='w-1/2 bg-gray-200 p-2 mt-2 placeholder'
            type='text' placeholder='Last name' />
            </dev>
            

            <h3 className='text-medium font-medium ml-2 text-white ' >What's Your Email Address?</h3>
            <input required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 p-2.5 mb-6 w-full mt-2 placeholder'
             type='email' placeholder='email@example.com' />

            <h3 className='text-medium font-medium ml-2 mt-2 text-white'>What's Your Password?</h3>
            <input required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 p-2.5 w-full mt-2 mb-6 placeholder'
             type='password' placeholder='password' />
            <button className='bg-[#f3c267] mt-5 font-bold text-xl mb-5 text-black py-3 rounded w-full mt-2'>Register</button>
            
            <p className="text-white text-medium">Already User? <Link to='/login' className='text-green-700  text-medium font-medium'>   Sign Into Your Account</Link></p>
            </form>
            </div>
            <div> 
            <p className='text-white text-[11px]'>
                This Site is Protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span>  Apply.
            </p>
            </div>
        </div>
    );
};

export default UserSignUp;
