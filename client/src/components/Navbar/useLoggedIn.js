import { useState, useEffect } from "react";

export default function useLoggedIn() {
  const [authUser, setAuthUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      setLoggedIn(true);
      setAuthUser(authUser);
    } else {
      setLoggedIn(true);
    }
  }, [authUser, setAuthUser]);

  return { loggedIn, setLoggedIn };
}
