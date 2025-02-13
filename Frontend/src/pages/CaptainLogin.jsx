import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainLogin = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const{ captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
        try
        {
            if (response.status === 200 && response.data.captain) {
                setCaptain(response.data.captain);
                localStorage.setItem('token', response.data.token);
                navigate('/captain-home');
            } 
            else {
                console.error("Unexpected response:", response);
                alert("Login successful, but captain data is missing.");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error signing in:", error.response.data);
                alert(error.response.data.message || "Login failed. Please check your credentials.");
            }
            else {
                console.error("Network or server error:", error.message);
                alert("An unexpected error occurred. Please try again.");
            }
        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-8 flex flex-col justify-between h-[100vh] bg-gray-100'>
            <div>
            <img className='w-16 mb-10 font-medium' src="data:image/png;base64,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" alt="" />
            
            <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-medium font-medium ml-2 ' >What's Your Email Address?</h3>
            <input required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 p-3 mb-3 w-full mt-3 placeholder'
             type='email' placeholder='email@example.com' />

            <h3 className='text-medium font-medium ml-2 mt-4'>What's Your Password?</h3>
            <input required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 p-3 w-full mt-3 mb-3 placeholder'
             type='password' placeholder='password' />
            <button className='bg-black font-medium mt-3 text-lg mb-5 text-white py-3 rounded w-full mt-2'>Login</button>
            <p>Wanna Join Hustle? <Link to='/captain-signup' className='text-green-700 font-medium'>  Register As A Captain</Link></p>
            </form>
            </div>
            <div> 
            <Link 
            to='/login'
            className='bg-red-800 flex items-center justify-center font-medium text-lg text-white py-3 rounded w-full mt-2'>Sign In As User</Link>
            </div>
        </div>
    );
};

export default CaptainLogin;
