import React, { createContext, useState } from 'react';

// Create Context
export const UserDataContent = createContext();

const UserContext = ({ children }) => {
    // useState should be inside the function
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContent.Provider value={{ user, setUser }}>
            {children}
        </UserDataContent.Provider>
    );
};

export default UserContext;
