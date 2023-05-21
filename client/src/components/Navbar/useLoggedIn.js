import { useState, useEffect } from 'react';

export default function useLoggedIn() {
  const [authUser, setAuthUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      setLoggedIn(true);
      setAuthUser(authUser);
      // this makes it reload it constantly, but
      //window.location.href = '/profile';
    } else {
      setLoggedIn(false);
    }
  }, [authUser, setAuthUser]);

  return loggedIn;
} 