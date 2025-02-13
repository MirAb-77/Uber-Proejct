import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContent } from '../context/userContext';
import axios from 'axios';


const UserLogin = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[userData, setUserData] = useState({});
    const{user, setUser} = useContext(UserDataContent);
    const navigate = useNavigate();
    

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, { email, password });
    
            if (response.status === 200 && response.data.user) {
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token); // ✅ Correct way
                navigate('/home');
            } 
            else {
                console.error("Unexpected response:", response);
                alert("Login successful, but user data is missing.");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error signing in:", error.response.data);
                alert(error.response.data.message || "Login failed. Please check your credentials.");
            } else {
                console.error("Network or server error:", error.message);
                alert("An unexpected error occurred. Please try again.");
            }
        }
    
        setEmail('');
        setPassword('');
    };
    

    return (
        <div className='p-8 flex flex-col justify-between h-[100vh]  bg-black'>
            <div>
            <img className='w-16 mb-10 font-lg w-adjusted' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXAVBZWhWSpMEZ7hJtQ3jphvB5GaOI9zByQ&s" alt="" />
            
            <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-medium font-medium ml-2 text-white ' >What's Your Email Address?</h3>
            <input required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 p-3 mb-6 w-full mt-3 placeholder'
             type='email' placeholder='email@example.com' />

            <h3 className='text-medium font-medium ml-2 text-white'>What's Your Password?</h3>
            <input required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-200 p-3 w-full mt-3 mb-6 placeholder'
             type='password' placeholder='password' />
            <button className='bg-white mt-5 font-bold text-xl mb-5 text-black py-3 rounded w-full mt-2'>Login</button>
            <p className="text-white text-medium">New Here? <Link to='/signup' className='text-green-700  text-medium font-medium'>  Create New Account</Link></p>
            </form>
            </div>
            <div> 
            <Link 
            to='/captain-login'
            className='bg-[#f3c267] flex items-center justify-center font-medium text-lg text-white py-3 rounded w-full mt-2'>Sign In As Captain</Link>
            </div>
        </div>
    );
};

export default UserLogin;
