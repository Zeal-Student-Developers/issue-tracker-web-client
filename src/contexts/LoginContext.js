import React, { useState, createContext } from 'react';

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
};
