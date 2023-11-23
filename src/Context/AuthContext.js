import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
  auth: undefined,
  userData: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [userData, setUserdata] = useState(undefined)
  const [auth, setAuth] = useState(undefined)

  const login = (userData) => {
    setUserdata(userData);
    setAuth(true);
  };
  
  const logout = (userData) => {
    setUserdata(undefined);
    setAuth(false);
  }

  const valueContext = {
    auth,
    userData,
    login, 
    logout
  };

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}