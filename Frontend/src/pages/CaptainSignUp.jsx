import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {

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
        <div className='p-8 flex flex-col justify-between h-[100vh]  bg-white'>
            <div>
            <img className='w-16 mb-10 font-lg w-adjusted' src="data:image/png;base64,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" alt="" />
            
            <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-medium font-medium ml-2 text-black' >What's Your Name?</h3>
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
            

            <h3 className='text-medium font-medium ml-2 text-black' >What's Your Email Address?</h3>
            <input required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 p-2.5 mb-6 w-full mt-2 placeholder'
             type='email' placeholder='email@example.com' />

            <h3 className='text-medium font-medium ml-2 mt-2 text-black'>What's Your Password?</h3>
            <input required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 p-2.5 w-full mt-2 mb-6 placeholder'
             type='password' placeholder='password' />
            <button className='bg-black mt-5 font-bold text-xl mb-5 text-white py-3 rounded w-full mt-2'>Register</button>
            
            <p className="text-black text-medium">Already A Hustler? <Link to='/captain-login' className='text-green-700  text-medium font-medium'>   Sign In Here!</Link></p>
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

export default CaptainSignUp;
