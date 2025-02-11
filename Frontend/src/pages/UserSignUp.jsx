import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContent } from '../context/userContext';
import axios from 'axios';

const UserSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const navigate = useNavigate();
    const { setUser } = React.useContext(UserDataContent);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email,
            password
            
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

            if (response.status === 201 && response.data.user) {
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            } else {
                console.error("Unexpected response structure:", response.data);
                alert("Registration successful, but user data is missing.");
            }
        } catch (error) {
            console.error("Error signing up:", error.response ? error.response.data : error.message);
            alert("Registration failed. Please try again.");
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    };

    return (
        <div className='p-8 flex flex-col justify-between h-[100vh] bg-black'>
            <div>
                <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXAVBZWhWSpMEZ7hJtQ3jphvB5GaOI9zByQ&s" alt="Logo" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-medium font-medium ml-2 text-white'>What's Your Name?</h3>
                    <div className='flex gap-3 mb-6'>
                        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            className='bg-gray-200 p-2.5 w-1/2 mt-2 placeholder' type='text' placeholder='First name' />
                        <input required value={lastName} onChange={(e) => setLastName(e.target.value)}
                            className='w-1/2 bg-gray-200 p-2 mt-2 placeholder' type='text' placeholder='Last name' />
                    </div>

                    <h3 className='text-medium font-medium ml-2 text-white'>What's Your Email Address?</h3>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-200 p-2.5 mb-6 w-full mt-2 placeholder' type='email' placeholder='email@example.com' />

                    <h3 className='text-medium font-medium ml-2 mt-2 text-white'>What's Your Password?</h3>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-200 p-2.5 w-full mt-2 mb-6 placeholder' type='password' placeholder='password' />

                    <button className='bg-[#f3c267] mt-5 font-bold text-xl mb-5 text-black py-3 rounded w-full'>Register</button>

                    <p className="text-white text-medium">
                        Already User? <Link to='/login' className='text-green-700 text-medium font-medium'>Sign Into Your Account</Link>
                    </p>
                </form>
            </div>
            <div>
                <p className='text-white text-[11px]'>
                    This Site is Protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> Apply.
                </p>
            </div>
        </div>
    );
};

export default UserSignUp;
