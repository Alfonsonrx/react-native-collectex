import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
  userData: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [userData, setUserdata] = useState(undefined)

  const login = (userData) => {
    setUserdata(userData);
  };

  const logout = (userData) => {
    setUserdata(undefined);
  }

  const valueContext = {
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