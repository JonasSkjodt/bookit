import { useState, useEffect } from 'react';

export default function useLoggedIn() {
  const [authUser, setAuthUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); 

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      setLoggedIn(true);
      setAuthUser(authUser);
    } else {
      setLoggedIn(false);
    }
  }, [authUser, setAuthUser]);

  return {loggedIn, setLoggedIn};
} 
